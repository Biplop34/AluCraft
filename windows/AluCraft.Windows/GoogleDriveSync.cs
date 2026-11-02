using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Web;

namespace AluCraft.Windows;

internal sealed record DriveOperationResult(
    bool Success,
    bool Verified,
    string Message,
    string? FileId = null,
    string? BackupJson = null,
    string? AccountEmail = null)
{
    public static DriveOperationResult Failed(string message) => new(false, false, message);
}

internal sealed class GoogleDriveSync
{
    private const string BackupFileName = "thai_fabricator_appdata_backup.json";
    private const string DriveScope = "https://www.googleapis.com/auth/drive.appdata";
    private const string EmailScope = "https://www.googleapis.com/auth/userinfo.email";
    private const string TokenEndpoint = "https://oauth2.googleapis.com/token";
    private const string UserInfoEndpoint = "https://www.googleapis.com/oauth2/v2/userinfo";
    private const string DriveApi = "https://www.googleapis.com/drive/v3/files";
    private const string DriveUploadApi = "https://www.googleapis.com/upload/drive/v3/files";
    private static readonly HttpClient Http = new() { Timeout = TimeSpan.FromSeconds(60) };
    private static readonly JsonSerializerOptions JsonOptions = new() { PropertyNameCaseInsensitive = true };

    private readonly string _dataRoot;
    private readonly string _tokenPath;
    private readonly SemaphoreSlim _operationLock = new(1, 1);

    public GoogleDriveSync(string dataRoot)
    {
        _dataRoot = dataRoot;
        _tokenPath = Path.Combine(dataRoot, "google-drive-token.bin");
    }

    public async Task<DriveOperationResult> BackupAsync(string backupJson, string accountEmail)
    {
        if (!IsSupportedBackup(backupJson)) return DriveOperationResult.Failed("The backup data is invalid or empty.");
        await _operationLock.WaitAsync();
        try
        {
            var account = accountEmail.Trim();
            var token = await GetAccessTokenAsync(account);
            var files = await ListAppDataFilesAsync(token);
            var existing = files.FirstOrDefault(file => file.Name == BackupFileName);
            var fileId = existing is null
                ? await CreateBackupFileAsync(token, backupJson)
                : await UpdateBackupFileAsync(token, existing.Id, backupJson);
            var verified = await DownloadFileAsync(token, fileId);
            if (!string.Equals(verified, backupJson, StringComparison.Ordinal))
                return DriveOperationResult.Failed("The uploaded Drive backup did not match the data sent.");
            return new DriveOperationResult(true, true, "Backup uploaded and verified in Google Drive.", fileId);
        }
        catch (Exception ex)
        {
            return DriveOperationResult.Failed(ShortError(ex));
        }
        finally { _operationLock.Release(); }
    }

    public async Task<DriveOperationResult> ConnectAccountAsync()
    {
        await _operationLock.WaitAsync();
        try
        {
            var client = ReadOAuthClient();
            var saved = LoadToken();
            if (saved is not null)
            {
                if (saved.ExpiresAt > DateTimeOffset.UtcNow.AddMinutes(1))
                    return new DriveOperationResult(true, true, "Google account is connected.", AccountEmail: saved.AccountEmail);
                if (!string.IsNullOrWhiteSpace(saved.RefreshToken))
                {
                    try
                    {
                        await RefreshTokenAsync(client, saved);
                        var refreshed = LoadToken() ?? saved;
                        return new DriveOperationResult(true, true, "Google account is connected.", AccountEmail: refreshed.AccountEmail);
                    }
                    catch { /* Re-authorize through the browser if the saved grant expired or was revoked. */ }
                }
            }

            var authorized = await AuthorizeInBrowserAsync(client, expectedEmail: null);
            SaveToken(authorized);
            return new DriveOperationResult(true, true, "Google account connected.", AccountEmail: authorized.AccountEmail);
        }
        catch (Exception ex)
        {
            return DriveOperationResult.Failed(ShortError(ex));
        }
        finally { _operationLock.Release(); }
    }

    public async Task<DriveOperationResult> RestoreAsync(string accountEmail)
    {
        await _operationLock.WaitAsync();
        try
        {
            var token = await GetAccessTokenAsync(accountEmail.Trim());
            var files = await ListAppDataFilesAsync(token);
            var target = files.FirstOrDefault(file => file.Name == BackupFileName)
                ?? files.FirstOrDefault(file => file.Name.StartsWith("Thai_Fabrication_FullBackup_", StringComparison.Ordinal)
                    || file.Name.StartsWith("Thai_Fabrication_Backup_", StringComparison.Ordinal));
            if (target is null) return DriveOperationResult.Failed("No app backup was found in this Google account's Drive app data.");
            var json = await DownloadFileAsync(token, target.Id);
            if (!IsSupportedBackup(json)) return DriveOperationResult.Failed("The Google Drive backup is not a supported app backup.");
            return new DriveOperationResult(true, true, "Google Drive backup downloaded and validated.", target.Id, json);
        }
        catch (Exception ex)
        {
            return DriveOperationResult.Failed(ShortError(ex));
        }
        finally { _operationLock.Release(); }
    }

    public async Task ForgetAccountAsync()
    {
        try
        {
            var token = LoadToken();
            if (token is not null)
            {
                var revoke = await Http.PostAsync(
                    "https://oauth2.googleapis.com/revoke?token=" + Uri.EscapeDataString(token.RefreshToken),
                    new StringContent(string.Empty));
                revoke.Dispose();
            }
        }
        catch { }
        try { if (File.Exists(_tokenPath)) File.Delete(_tokenPath); } catch { }
    }

    private async Task<string> GetAccessTokenAsync(string accountEmail)
    {
        var client = ReadOAuthClient();
        if (string.IsNullOrWhiteSpace(accountEmail) || !accountEmail.Contains('@'))
            throw new InvalidOperationException("Enter the Google account email you want to use.");

        var saved = LoadToken();
        if (saved is not null && string.Equals(saved.AccountEmail, accountEmail, StringComparison.OrdinalIgnoreCase))
        {
            if (saved.ExpiresAt > DateTimeOffset.UtcNow.AddMinutes(1)) return saved.AccessToken;
            if (!string.IsNullOrWhiteSpace(saved.RefreshToken))
            {
                try { return await RefreshTokenAsync(client, saved); }
                catch { /* Re-authorize through Google's browser flow below. */ }
            }
        }

        var authorized = await AuthorizeInBrowserAsync(client, accountEmail);
        SaveToken(authorized);
        return authorized.AccessToken;
    }

    private async Task<StoredToken> AuthorizeInBrowserAsync(OAuthClient client, string? expectedEmail)
    {
        using var portProbe = new TcpListener(IPAddress.Loopback, 0);
        portProbe.Start();
        var port = ((IPEndPoint)portProbe.LocalEndpoint).Port;
        portProbe.Stop();
        var redirectUri = $"http://localhost:{port}/";
        using var listener = new HttpListener();
        listener.Prefixes.Add(redirectUri);
        listener.Start();

        var verifier = ToBase64Url(RandomNumberGenerator.GetBytes(48));
        var challenge = ToBase64Url(SHA256.HashData(Encoding.ASCII.GetBytes(verifier)));
        var state = ToBase64Url(RandomNumberGenerator.GetBytes(24));
        var query = HttpUtility.ParseQueryString(string.Empty);
        query["client_id"] = client.ClientId;
        query["redirect_uri"] = redirectUri;
        query["response_type"] = "code";
        query["scope"] = DriveScope + " " + EmailScope;
        query["access_type"] = "offline";
        query["include_granted_scopes"] = "true";
        query["prompt"] = "consent select_account";
        query["state"] = state;
        query["code_challenge"] = challenge;
        query["code_challenge_method"] = "S256";
        var authUrl = "https://accounts.google.com/o/oauth2/v2/auth?" + query;
        Process.Start(new ProcessStartInfo(authUrl) { UseShellExecute = true });

        using var timeout = new CancellationTokenSource(TimeSpan.FromMinutes(4));
        var context = await listener.GetContextAsync().WaitAsync(timeout.Token);
        var responseQuery = HttpUtility.ParseQueryString(context.Request.Url?.Query ?? string.Empty);
        var returnedState = responseQuery["state"];
        var code = responseQuery["code"];
        var providerError = responseQuery["error"];
        var responseHtml = Encoding.UTF8.GetBytes("<!doctype html><meta charset='utf-8'><title>AluCraft</title><p>You can close this tab and return to AluCraft.</p>");
        context.Response.ContentType = "text/html; charset=utf-8";
        context.Response.ContentLength64 = responseHtml.Length;
        await context.Response.OutputStream.WriteAsync(responseHtml);
        context.Response.Close();

        if (!string.Equals(returnedState, state, StringComparison.Ordinal))
            throw new InvalidOperationException("Google sign-in returned an invalid state value.");
        if (!string.IsNullOrWhiteSpace(providerError))
            throw new InvalidOperationException("Google sign-in was cancelled: " + providerError);
        if (string.IsNullOrWhiteSpace(code))
            throw new InvalidOperationException("Google did not return an authorization code.");

        var tokenValues = new Dictionary<string, string>
        {
            ["client_id"] = client.ClientId,
            ["code"] = code,
            ["code_verifier"] = verifier,
            ["redirect_uri"] = redirectUri,
            ["grant_type"] = "authorization_code"
        };
        AddOptionalSecret(tokenValues, client);
        using var tokenResponse = await Http.PostAsync(TokenEndpoint, new FormUrlEncodedContent(tokenValues));
        var tokenText = await tokenResponse.Content.ReadAsStringAsync();
        EnsureSuccess(tokenResponse, tokenText, "Google sign-in");
        var response = JsonSerializer.Deserialize<TokenResponse>(tokenText, JsonOptions)
            ?? throw new InvalidOperationException("Google returned an invalid token response.");
        if (string.IsNullOrWhiteSpace(response.AccessToken))
            throw new InvalidOperationException("Google did not return Drive access.");

        var email = await GetAuthorizedEmailAsync(response.AccessToken);
        if (!string.IsNullOrWhiteSpace(expectedEmail)
            && !string.Equals(email, expectedEmail, StringComparison.OrdinalIgnoreCase))
            throw new InvalidOperationException($"Google signed in as {email}, but the selected account was {expectedEmail}.");
        var previous = LoadToken();
        return new StoredToken(email, response.AccessToken,
            response.RefreshToken ?? (previous?.AccountEmail.Equals(email, StringComparison.OrdinalIgnoreCase) == true ? previous.RefreshToken : ""),
            DateTimeOffset.UtcNow.AddSeconds(Math.Max(60, response.ExpiresIn)));
    }

    private async Task<string> RefreshTokenAsync(OAuthClient client, StoredToken stored)
    {
        var values = new Dictionary<string, string>
        {
            ["client_id"] = client.ClientId,
            ["refresh_token"] = stored.RefreshToken,
            ["grant_type"] = "refresh_token"
        };
        AddOptionalSecret(values, client);
        using var response = await Http.PostAsync(TokenEndpoint, new FormUrlEncodedContent(values));
        var text = await response.Content.ReadAsStringAsync();
        EnsureSuccess(response, text, "Google token refresh");
        var tokens = JsonSerializer.Deserialize<TokenResponse>(text, JsonOptions)
            ?? throw new InvalidOperationException("Google returned an invalid token response.");
        if (string.IsNullOrWhiteSpace(tokens.AccessToken))
            throw new InvalidOperationException("Google did not return Drive access.");
        var updated = stored with
        {
            AccessToken = tokens.AccessToken,
            RefreshToken = tokens.RefreshToken ?? stored.RefreshToken,
            ExpiresAt = DateTimeOffset.UtcNow.AddSeconds(Math.Max(60, tokens.ExpiresIn))
        };
        SaveToken(updated);
        return updated.AccessToken;
    }

    private async Task<string> GetAuthorizedEmailAsync(string accessToken)
    {
        using var request = new HttpRequestMessage(HttpMethod.Get, UserInfoEndpoint);
        request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);
        using var response = await Http.SendAsync(request);
        var text = await response.Content.ReadAsStringAsync();
        EnsureSuccess(response, text, "Google account verification");
        using var json = JsonDocument.Parse(text);
        return json.RootElement.TryGetProperty("email", out var email)
            ? email.GetString() ?? string.Empty
            : throw new InvalidOperationException("Google did not return the account email.");
    }

    private async Task<List<DriveFile>> ListAppDataFilesAsync(string accessToken)
    {
        var files = new List<DriveFile>();
        string? pageToken = null;
        do
        {
            var query = "spaces=appDataFolder&q=" + Uri.EscapeDataString("'appDataFolder' in parents and trashed=false")
                + "&fields=" + Uri.EscapeDataString("nextPageToken,files(id,name,modifiedTime)")
                + "&orderBy=modifiedTime%20desc&pageSize=100";
            if (!string.IsNullOrWhiteSpace(pageToken)) query += "&pageToken=" + Uri.EscapeDataString(pageToken);
            using var request = new HttpRequestMessage(HttpMethod.Get, DriveApi + "?" + query);
            request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);
            using var response = await Http.SendAsync(request);
            var text = await response.Content.ReadAsStringAsync();
            EnsureSuccess(response, text, "Google Drive file list");
            using var json = JsonDocument.Parse(text);
            if (json.RootElement.TryGetProperty("files", out var list) && list.ValueKind == JsonValueKind.Array)
            {
                foreach (var item in list.EnumerateArray())
                {
                    var id = item.TryGetProperty("id", out var idValue) ? idValue.GetString() : null;
                    var name = item.TryGetProperty("name", out var nameValue) ? nameValue.GetString() : null;
                    if (!string.IsNullOrWhiteSpace(id) && name is not null) files.Add(new DriveFile(id, name));
                }
            }
            pageToken = json.RootElement.TryGetProperty("nextPageToken", out var next) ? next.GetString() : null;
        } while (!string.IsNullOrWhiteSpace(pageToken));
        return files;
    }

    private static async Task<string> CreateBackupFileAsync(string accessToken, string backupJson)
    {
        var boundary = "AluCraft_" + Guid.NewGuid().ToString("N");
        using var content = new MultipartContent("related", boundary);
        var metadata = JsonSerializer.Serialize(new
        {
            name = BackupFileName,
            mimeType = "application/json",
            parents = new[] { "appDataFolder" }
        });
        content.Add(new StringContent(metadata, Encoding.UTF8, "application/json"));
        content.Add(new StringContent(backupJson, Encoding.UTF8, "application/json"));
        using var request = new HttpRequestMessage(HttpMethod.Post, DriveUploadApi + "?uploadType=multipart&fields=id,name")
        {
            Content = content
        };
        request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);
        using var response = await Http.SendAsync(request);
        var text = await response.Content.ReadAsStringAsync();
        EnsureSuccess(response, text, "Google Drive backup upload");
        using var json = JsonDocument.Parse(text);
        var id = json.RootElement.TryGetProperty("id", out var fileId) ? fileId.GetString() : null;
        var name = json.RootElement.TryGetProperty("name", out var fileName) ? fileName.GetString() : null;
        if (string.IsNullOrWhiteSpace(id) || name != BackupFileName)
            throw new InvalidOperationException("Google Drive returned invalid backup file metadata.");
        return id;
    }

    private static async Task<string> UpdateBackupFileAsync(string accessToken, string fileId, string backupJson)
    {
        var url = $"https://www.googleapis.com/upload/drive/v3/files/{Uri.EscapeDataString(fileId)}?uploadType=media&fields=id,name";
        using var request = new HttpRequestMessage(HttpMethod.Patch, url)
        {
            Content = new StringContent(backupJson, Encoding.UTF8, "application/json")
        };
        request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);
        using var response = await Http.SendAsync(request);
        var text = await response.Content.ReadAsStringAsync();
        EnsureSuccess(response, text, "Google Drive backup update");
        using var json = JsonDocument.Parse(text);
        return json.RootElement.TryGetProperty("id", out var fileIdValue)
            ? fileIdValue.GetString() ?? fileId
            : fileId;
    }

    private static async Task<string> DownloadFileAsync(string accessToken, string fileId)
    {
        using var request = new HttpRequestMessage(HttpMethod.Get,
            $"{DriveApi}/{Uri.EscapeDataString(fileId)}?alt=media");
        request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", accessToken);
        request.Headers.Accept.ParseAdd("application/json");
        using var response = await Http.SendAsync(request);
        var text = await response.Content.ReadAsStringAsync();
        EnsureSuccess(response, text, "Google Drive backup download");
        return text;
    }

    private static bool IsSupportedBackup(string json)
    {
        if (string.IsNullOrWhiteSpace(json) || json.Length > 20_000_000) return false;
        try
        {
            using var document = JsonDocument.Parse(json);
            if (document.RootElement.ValueKind == JsonValueKind.Array)
                return document.RootElement.GetArrayLength() > 0;
            if (document.RootElement.ValueKind != JsonValueKind.Object) return false;
            var root = document.RootElement;
            return new[] { "customers", "clients", "customerList", "history", "jobs", "records", "workHistory", "calculator", "base8Tape", "tape", "storageDump" }
                .Any(key => root.TryGetProperty(key, out _));
        }
        catch { return false; }
    }

    private OAuthClient ReadOAuthClient()
    {
        var environmentClientId = Environment.GetEnvironmentVariable("ALUCRAFT_GOOGLE_CLIENT_ID");
        var environmentSecret = Environment.GetEnvironmentVariable("ALUCRAFT_GOOGLE_CLIENT_SECRET");
        var configPaths = new[]
        {
            Path.Combine(_dataRoot, "google-oauth.json"),
            Path.Combine(AppContext.BaseDirectory, "google-oauth.json")
        };
        OAuthConfig? config = null;
        foreach (var path in configPaths)
        {
            try
            {
                if (File.Exists(path))
                {
                    config = JsonSerializer.Deserialize<OAuthConfig>(File.ReadAllText(path), JsonOptions);
                    break;
                }
            }
            catch { }
        }
        var credentials = config?.Installed ?? config?.Web;
        var clientId = environmentClientId ?? config?.GoogleOAuthClientId ?? credentials?.ClientId ?? string.Empty;
        if (string.IsNullOrWhiteSpace(clientId))
            throw new InvalidOperationException("Windows Google Drive sync needs a Desktop OAuth client ID. See windows/README.md for setup.");
        return new OAuthClient(clientId.Trim(), environmentSecret ?? config?.GoogleOAuthClientSecret ?? credentials?.ClientSecret ?? string.Empty);
    }

    private static void AddOptionalSecret(IDictionary<string, string> values, OAuthClient client)
    {
        if (!string.IsNullOrWhiteSpace(client.ClientSecret)) values["client_secret"] = client.ClientSecret;
    }

    private StoredToken? LoadToken()
    {
        try
        {
            if (!File.Exists(_tokenPath)) return null;
            var encrypted = File.ReadAllBytes(_tokenPath);
            var plain = Dpapi.Unprotect(encrypted);
            return JsonSerializer.Deserialize<StoredToken>(plain, JsonOptions);
        }
        catch { return null; }
    }

    private void SaveToken(StoredToken token)
    {
        Directory.CreateDirectory(_dataRoot);
        var plain = JsonSerializer.SerializeToUtf8Bytes(token);
        var encrypted = Dpapi.Protect(plain);
        File.WriteAllBytes(_tokenPath, encrypted);
    }

    private static void EnsureSuccess(HttpResponseMessage response, string body, string action)
    {
        if (response.IsSuccessStatusCode) return;
        string detail = string.Empty;
        try
        {
            using var json = JsonDocument.Parse(body);
            if (json.RootElement.TryGetProperty("error", out var error))
                detail = error.ValueKind == JsonValueKind.Object && error.TryGetProperty("message", out var message)
                    ? message.GetString() ?? error.ToString()
                    : error.ToString();
        }
        catch { }
        if (string.IsNullOrWhiteSpace(detail)) detail = response.ReasonPhrase ?? "Request failed";
        throw new HttpRequestException($"{action} failed (HTTP {(int)response.StatusCode}): {detail}");
    }

    private static string ShortError(Exception ex)
    {
        var message = ex.Message.Trim();
        return message.Length <= 240 ? message : message[..240];
    }

    private static string ToBase64Url(byte[] value) =>
        Convert.ToBase64String(value).TrimEnd('=').Replace('+', '-').Replace('/', '_');

    private sealed record DriveFile(string Id, string Name);
    private sealed record OAuthClient(string ClientId, string ClientSecret);
    private sealed record StoredToken(string AccountEmail, string AccessToken, string RefreshToken, DateTimeOffset ExpiresAt);
    private sealed class OAuthConfig
    {
        [JsonPropertyName("googleOAuthClientId")] public string? GoogleOAuthClientId { get; set; }
        [JsonPropertyName("googleOAuthClientSecret")] public string? GoogleOAuthClientSecret { get; set; }
        [JsonPropertyName("installed")] public OAuthCredentials? Installed { get; set; }
        [JsonPropertyName("web")] public OAuthCredentials? Web { get; set; }
    }
    private sealed class OAuthCredentials
    {
        [JsonPropertyName("client_id")] public string? ClientId { get; set; }
        [JsonPropertyName("client_secret")] public string? ClientSecret { get; set; }
    }
    private sealed class TokenResponse
    {
        [JsonPropertyName("access_token")] public string? AccessToken { get; set; }
        [JsonPropertyName("refresh_token")] public string? RefreshToken { get; set; }
        [JsonPropertyName("expires_in")] public int ExpiresIn { get; set; }
    }

    private static class Dpapi
    {
        private const uint UiForbidden = 0x1;

        [StructLayout(LayoutKind.Sequential)]
        private struct DataBlob
        {
            public int Size;
            public IntPtr Data;
        }

        [DllImport("crypt32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        private static extern bool CryptProtectData(ref DataBlob input, string? description, IntPtr entropy,
            IntPtr reserved, IntPtr prompt, uint flags, out DataBlob output);

        [DllImport("crypt32.dll", SetLastError = true, CharSet = CharSet.Unicode)]
        private static extern bool CryptUnprotectData(ref DataBlob input, IntPtr description, IntPtr entropy,
            IntPtr reserved, IntPtr prompt, uint flags, out DataBlob output);

        [DllImport("kernel32.dll")]
        private static extern IntPtr LocalFree(IntPtr memory);

        public static byte[] Protect(byte[] input) => Transform(input, protect: true);
        public static byte[] Unprotect(byte[] input) => Transform(input, protect: false);

        private static byte[] Transform(byte[] input, bool protect)
        {
            var inputPointer = Marshal.AllocHGlobal(input.Length);
            var source = new DataBlob { Size = input.Length, Data = inputPointer };
            Marshal.Copy(input, 0, inputPointer, input.Length);
            DataBlob destination = default;
            try
            {
                var succeeded = protect
                    ? CryptProtectData(ref source, "AluCraft Google Drive token", IntPtr.Zero, IntPtr.Zero, IntPtr.Zero, UiForbidden, out destination)
                    : CryptUnprotectData(ref source, IntPtr.Zero, IntPtr.Zero, IntPtr.Zero, IntPtr.Zero, UiForbidden, out destination);
                if (!succeeded) throw new System.ComponentModel.Win32Exception(Marshal.GetLastWin32Error());
                var output = new byte[destination.Size];
                Marshal.Copy(destination.Data, output, 0, output.Length);
                return output;
            }
            finally
            {
                Marshal.FreeHGlobal(inputPointer);
                if (destination.Data != IntPtr.Zero) LocalFree(destination.Data);
            }
        }
    }
}
