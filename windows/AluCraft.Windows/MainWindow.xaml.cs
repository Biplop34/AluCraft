using System.Diagnostics;
using System.IO;
using System.Globalization;
using System.Text;
using System.Text.Json;
using System.Windows;
using System.Windows.Media.Imaging;
using System.Windows.Threading;
using Microsoft.Win32;
using Microsoft.Web.WebView2.Core;

namespace AluCraft.Windows;

public partial class MainWindow : Window
{
    private const string AppHost = "appassets.alucraft";
    private readonly string _dataRoot = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "AluCraft");
    private readonly GoogleDriveSync _driveSync;

    public MainWindow()
    {
        InitializeComponent();
        LoadWindowIcon();
        _driveSync = new GoogleDriveSync(_dataRoot);
    }

    private void LoadWindowIcon()
    {
        var iconPath = Path.Combine(AppContext.BaseDirectory, "AluCraft.ico");
        if (!File.Exists(iconPath)) return;

        try
        {
            using var stream = File.OpenRead(iconPath);
            var decoder = BitmapDecoder.Create(stream, BitmapCreateOptions.PreservePixelFormat, BitmapCacheOption.OnLoad);
            var frame = decoder.Frames.OrderByDescending(image => image.PixelWidth * image.PixelHeight).FirstOrDefault();
            if (frame is null) return;
            frame.Freeze();
            Icon = frame;
        }
        catch
        {
            // Window icon loading is optional; a missing/invalid icon must not stop the app.
        }
    }

    private async void Window_Loaded(object sender, RoutedEventArgs e)
    {
        var assets = Path.Combine(AppContext.BaseDirectory, "wwwroot");
        var startPage = Path.Combine(assets, "index.html");
        var invoicePage = Path.Combine(assets, "invoice-generator.html");
        if (!File.Exists(startPage) || !File.Exists(invoicePage))
        {
            MessageBox.Show(this, "AluCraft's Windows app files are incomplete. Reinstall the app.",
                "AluCraft", MessageBoxButton.OK, MessageBoxImage.Error);
            Close();
            return;
        }

        try
        {
            Directory.CreateDirectory(_dataRoot);
            var environment = await CoreWebView2Environment.CreateAsync(
                userDataFolder: Path.Combine(_dataRoot, "WebView2"));
            await AppView.EnsureCoreWebView2Async(environment);
            AppView.CoreWebView2.SetVirtualHostNameToFolderMapping(
                AppHost, assets, CoreWebView2HostResourceAccessKind.Allow);
            AppView.CoreWebView2.AddWebResourceRequestedFilter(
                $"https://{AppHost}/invoice-generator.html*", CoreWebView2WebResourceContext.Document);
            AppView.CoreWebView2.Settings.IsZoomControlEnabled = false;
            AppView.CoreWebView2.Settings.AreDefaultScriptDialogsEnabled = false;
            AppView.CoreWebView2.Settings.AreDefaultContextMenusEnabled = true;
            AppView.CoreWebView2.Settings.IsStatusBarEnabled = false;
            AppView.CoreWebView2.ScriptDialogOpening += ScriptDialogOpening;
            AppView.CoreWebView2.WebResourceRequested += InvoiceGeneratorRequested;
            AppView.CoreWebView2.DownloadStarting += DownloadStarting;
            AppView.CoreWebView2.WebMessageReceived += WebMessageReceived;
            AppView.CoreWebView2.NewWindowRequested += NewWindowRequested;
            AppView.CoreWebView2.NavigationStarting += NavigationStarting;
            AppView.CoreWebView2.NavigationCompleted += (_, _) =>
                Dispatcher.BeginInvoke(DispatcherPriority.Input, new Action(() => AppView.Focus()));
            await AppView.CoreWebView2.AddScriptToExecuteOnDocumentCreatedAsync(WindowsBridgeScript);
            AppView.CoreWebView2.Navigate($"https://{AppHost}/index.html");
        }
        catch (Exception ex)
        {
            MessageBox.Show(this,
                "AluCraft could not start its Windows web runtime. Install the Microsoft Edge WebView2 Runtime, then reopen AluCraft.\n\n" + ex.Message,
                "WebView2 Runtime Required", MessageBoxButton.OK, MessageBoxImage.Error);
            Close();
        }
    }

    private void InvoiceGeneratorRequested(object? sender, CoreWebView2WebResourceRequestedEventArgs e)
    {
        if (!Uri.TryCreate(e.Request.Uri, UriKind.Absolute, out var uri)
            || !uri.AbsolutePath.Equals("/invoice-generator.html", StringComparison.OrdinalIgnoreCase)) return;

        var invoicePath = Path.Combine(AppContext.BaseDirectory, "wwwroot", "invoice-generator.html");
        if (!File.Exists(invoicePath)) return;
        var content = new MemoryStream(File.ReadAllBytes(invoicePath), writable: false);
        e.Response = AppView.CoreWebView2.Environment.CreateWebResourceResponse(
            content,
            200,
            "OK",
            "Content-Type: text/html; charset=utf-8\r\nCache-Control: no-store");
    }

    private void ScriptDialogOpening(object? sender, CoreWebView2ScriptDialogOpeningEventArgs e)
    {
        var isPrompt = e.Kind == CoreWebView2ScriptDialogKind.Prompt;
        var isConfirmation = e.Kind is CoreWebView2ScriptDialogKind.Confirm or CoreWebView2ScriptDialogKind.Beforeunload;
        var message = e.Kind == CoreWebView2ScriptDialogKind.Beforeunload
            ? "Are you sure you want to leave this page?"
            : e.Message;
        var isDrivePrompt = isPrompt && message.Contains("Google", StringComparison.OrdinalIgnoreCase);
        var heading = isDrivePrompt ? "Connect Google Drive" : "AluCraft";
        var dialog = new ScriptDialogWindow(
            heading,
            message,
            isPrompt,
            e.DefaultText,
            isConfirmation || isPrompt)
        {
            Owner = this
        };

        var accepted = dialog.ShowDialog() == true;
        if (!accepted) return;
        if (isPrompt) e.ResultText = dialog.ResponseText;
        e.Accept();
    }

    private static readonly string WindowsBridgeScript = """
        (() => {
          if (window.AndroidBridge) return;
          const postToNative = message => { try { window.chrome.webview.postMessage(message); } catch (_) {} };
          const send = message => {
            try {
              if (window === window.top) postToNative(message);
              else window.parent.postMessage({ __aluCraftNativeMessage: message }, window.location.origin);
            } catch (_) {}
          };
          if (window === window.top) {
            window.addEventListener("message", event => {
              if (event.origin !== window.location.origin) return;
              const message = event.data && event.data.__aluCraftNativeMessage;
              if (message && typeof message === "object") postToNative(message);
            });
          }
          window.showAluCraftToast = message => {
            try {
              let toast = document.getElementById("__alucraft_shared_toast");
              if (!toast) {
                toast = document.createElement("div");
                toast.id = "__alucraft_shared_toast";
                toast.setAttribute("role", "status");
                toast.style.cssText = "position:fixed;z-index:2147483647;left:50%;bottom:24px;transform:translateX(-50%);background:#0f172a;color:#fff;border-radius:999px;padding:11px 18px;font-family:Inter,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:12px;font-weight:850;box-shadow:0 10px 25px rgba(0,0,0,.2);max-width:calc(100vw - 32px);text-align:center;pointer-events:none;white-space:normal;";
                document.body.appendChild(toast);
              }
              toast.textContent = String(message || "");
              toast.style.display = "block";
              clearTimeout(toast.__hideTimer);
              toast.__hideTimer = setTimeout(() => { toast.style.display = "none"; }, 2600);
            } catch (_) {}
          };
          const read = key => { try { return localStorage.getItem(key) || ""; } catch (_) { return ""; } };
          const write = (key, value) => { try { localStorage.setItem(key, String(value)); return true; } catch (_) { return false; } };
          window.AndroidBridge = {
            getAppData: key => read(key),
            getStoredAppData: key => read(key),
            saveAppData: (key, value) => write(key, value),
            saveAppDataBatch: json => {
              try {
                const values = typeof json === "string" ? JSON.parse(json) : json;
                for (const [key, value] of Object.entries(values || {})) {
                  if (key.startsWith("thai_backup_") || key === "thai_cloud_backup_snapshot" || value == null) continue;
                  localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
                }
                return true;
              } catch (_) { return false; }
            },
            replaceAppDataBatch: json => {
              try {
                const values = typeof json === "string" ? JSON.parse(json) : json;
                for (const key of Object.keys(values || {})) {
                  if (key.startsWith("thai_backup_") || key === "thai_cloud_backup_snapshot") return false;
                }
                for (let index = localStorage.length - 1; index >= 0; index--) {
                  const key = localStorage.key(index);
                  if (key && !key.startsWith("thai_backup_") && key !== "thai_cloud_backup_snapshot") localStorage.removeItem(key);
                }
                for (const [key, value] of Object.entries(values || {})) {
                  if (value != null) localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
                }
                return true;
              } catch (_) { return false; }
            },
            getCloudAppDataBackup: () => read("thai_cloud_backup_snapshot"),
            saveCloudAppDataBackup: json => write("thai_cloud_backup_snapshot", json),
            saveInvoiceImages: (pagesJson, fileName, shopName) => {
              send({ type: "saveInvoiceImages", pagesJson, fileName, shopName }); return "pending";
            },
            saveInvoicePdf: (pagesJson, fileName, shopName) => {
              send({ type: "saveInvoicePdf", pagesJson, fileName, shopName }); return "pending";
            },
            saveBillingPdf: (imageDataUrl, fileName) => {
              send({ type: "saveBillingPdf", imageDataUrl, fileName }); return "pending";
            },
            cacheRestoredDriveBackup: (json, account) => {
              try {
                localStorage.setItem("thai_cloud_backup_snapshot", json);
                localStorage.setItem("thai_backup_account", account || "");
                return true;
              } catch (_) { return false; }
            },
            requestDriveBackup: (backupJson, accountEmail, operationId) => {
              send({ type: "driveBackup", backupJson, accountEmail, operationId }); return true;
            },
            requestDriveRestore: (accountEmail, operationId) => {
              send({ type: "driveRestore", accountEmail, operationId }); return true;
            },
            chooseGoogleAccount: () => { send({ type: "chooseGoogleAccount" }); return true; },
            pickBackupFile: () => send({ type: "pickBackupFile" }),
            openUrl: url => send({ type: "openUrl", url }),
            showToast: message => send({ type: "toast", message }),
            restartApp: () => { try { location.reload(); } catch (_) {} },
            revokeDriveAccess: () => send({ type: "revokeDriveAccess" })
          };
        })();
        """;

    private async void WebMessageReceived(object? sender, CoreWebView2WebMessageReceivedEventArgs e)
    {
        try
        {
            using var message = JsonDocument.Parse(e.WebMessageAsJson);
            var root = message.RootElement;
            var type = GetString(root, "type");
            switch (type)
            {
                case "pickBackupFile":
                    await PickBackupFileAsync();
                    break;
                case "saveInvoicePdf":
                    await SaveInvoicePdfAsync(
                        GetString(root, "pagesJson"), GetString(root, "fileName"), GetString(root, "shopName"));
                    break;
                case "saveInvoiceImages":
                    await SaveInvoiceImagesAsync(
                        GetString(root, "pagesJson"), GetString(root, "fileName"), GetString(root, "shopName"));
                    break;
                case "saveBillingPdf":
                    await SaveBillingPdfAsync(GetString(root, "imageDataUrl"), GetString(root, "fileName"));
                    break;
                case "openUrl":
                    OpenExternalUrl(GetString(root, "url"));
                    break;
                case "toast":
                    ShowToast(GetString(root, "message"));
                    break;
                case "driveBackup":
                    _ = RunDriveBackupAsync(
                        GetString(root, "backupJson"), GetString(root, "accountEmail"), GetString(root, "operationId"));
                    break;
                case "driveRestore":
                    _ = RunDriveRestoreAsync(GetString(root, "accountEmail"), GetString(root, "operationId"));
                    break;
                case "chooseGoogleAccount":
                    ShowToast("Opening Google sign-in in your browser…");
                    _ = RunGoogleAccountConnectAsync();
                    break;
                case "revokeDriveAccess":
                    await _driveSync.ForgetAccountAsync();
                    break;
            }
        }
        catch (Exception ex)
        {
            ShowToast("Windows action failed: " + ex.Message);
        }
    }

    private async Task RunGoogleAccountConnectAsync()
    {
        DriveOperationResult result;
        try { result = await _driveSync.ConnectAccountAsync(); }
        catch (Exception ex) { result = DriveOperationResult.Failed(ex.Message); }
        if (result.Success && !string.IsNullOrWhiteSpace(result.AccountEmail))
        {
            var email = JsonSerializer.Serialize(result.AccountEmail);
            await AppView.CoreWebView2.ExecuteScriptAsync(
                $"if (typeof window.onGoogleAccountSelected === 'function') window.onGoogleAccountSelected({email});");
            WindowState = WindowState.Normal;
            Activate();
            Focus();
            ShowToast("Google account connected.");
            return;
        }

        await AppView.CoreWebView2.ExecuteScriptAsync(
            "if (typeof window.onGoogleAccountSelected === 'function') window.onGoogleAccountSelected(null);");
        ShowToast(string.IsNullOrWhiteSpace(result.Message) ? "Google account connection failed." : result.Message);
    }

    private async Task PickBackupFileAsync()
    {
        var picker = new OpenFileDialog
        {
            Title = "Restore AluCraft Backup",
            Filter = "AluCraft backup (*.json)|*.json|All files (*.*)|*.*",
            CheckFileExists = true,
            Multiselect = false
        };
        if (picker.ShowDialog(this) != true) return;
        var json = await File.ReadAllTextAsync(picker.FileName);
        var content = JsonSerializer.Serialize(json);
        var name = JsonSerializer.Serialize(Path.GetFileName(picker.FileName));
        await AppView.CoreWebView2.ExecuteScriptAsync(
            $"if (typeof window.onBackupFileSelected === 'function') window.onBackupFileSelected({content}, {name});");
    }

    private async Task SaveInvoicePdfAsync(string pagesJson, string requestedFileName, string shopName)
    {
        var success = false;
        var message = string.Empty;
        try
        {
            using var pagesDocument = JsonDocument.Parse(pagesJson);
            if (pagesDocument.RootElement.ValueKind != JsonValueKind.Array
                || pagesDocument.RootElement.GetArrayLength() == 0)
            {
                throw new InvalidDataException("Invoice has no pages to save.");
            }

            var jpegPages = pagesDocument.RootElement.EnumerateArray()
                .Select(page => DecodeInvoiceJpeg(page.GetString() ?? string.Empty))
                .Select(jpeg => new PdfPageImage(jpeg, 1588, 2246))
                .ToArray();
            WritePdfToDownloads(CreateImagePdf(jpegPages), requestedFileName, "Invoice.pdf", shopName);
            success = true;
        }
        catch (Exception ex)
        {
            message = ex.Message;
        }

        await NotifyPdfSavedAsync("onWindowsInvoicePdfSaved", success, message);
    }

    private async Task SaveInvoiceImagesAsync(string pagesJson, string requestedFileName, string shopName)
    {
        var success = false;
        var message = string.Empty;
        try
        {
            using var pagesDocument = JsonDocument.Parse(pagesJson);
            if (pagesDocument.RootElement.ValueKind != JsonValueKind.Array
                || pagesDocument.RootElement.GetArrayLength() == 0)
            {
                throw new InvalidDataException("Invoice has no pages to save.");
            }

            var outputDirectory = GetInvoiceDownloadsDirectory(shopName);
            Directory.CreateDirectory(outputDirectory);
            var safeName = Path.GetFileName(requestedFileName.Trim());
            if (string.IsNullOrWhiteSpace(safeName)) safeName = "Invoice.jpg";
            if (!safeName.EndsWith(".jpg", StringComparison.OrdinalIgnoreCase))
                safeName = Path.ChangeExtension(safeName, ".jpg");
            safeName = SanitizeFileName(safeName);

            foreach (var page in pagesDocument.RootElement.EnumerateArray())
                File.WriteAllBytes(GetUniquePath(Path.Combine(outputDirectory, safeName)), DecodeInvoiceJpeg(page.GetString() ?? string.Empty));
            success = true;
        }
        catch (Exception ex)
        {
            message = ex.Message;
        }

        await NotifyPdfSavedAsync("onWindowsInvoiceImagesSaved", success, message);
    }

    private async Task SaveBillingPdfAsync(string imageDataUrl, string requestedFileName)
    {
        var success = false;
        var message = string.Empty;
        try
        {
            var image = DecodeImageForPdf(imageDataUrl);
            WritePdfToDownloads(CreateImagePdf([image]), requestedFileName, "Billing.pdf");
            success = true;
        }
        catch (Exception ex)
        {
            message = ex.Message;
        }

        await NotifyPdfSavedAsync("onWindowsBillingPdfSaved", success, message);
    }

    private async Task NotifyPdfSavedAsync(string callbackName, bool success, string message)
    {
        if (AppView.CoreWebView2 is null) return;
        var callbackJson = JsonSerializer.Serialize(new { success, message });
        var callbackNameJson = JsonSerializer.Serialize(callbackName);
        await AppView.CoreWebView2.ExecuteScriptAsync(
            $"(() => {{ const callback = {callbackNameJson}; const result = {callbackJson}; " +
            "const frame = document.querySelector('iframe[title=\\\"Invoice Generator\\\"]'); " +
            "const target = typeof window[callback] === 'function' ? window : frame && frame.contentWindow; " +
            "if (target && typeof target[callback] === 'function') target[callback](result); })();");
    }

    private static void WritePdfToDownloads(byte[] pdfBytes, string requestedFileName, string fallbackName, string? invoiceShopName = null)
    {
        var fileName = Path.GetFileName(requestedFileName.Trim());
        if (string.IsNullOrWhiteSpace(fileName)) fileName = fallbackName;
        if (!fileName.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase))
            fileName = Path.ChangeExtension(fileName, ".pdf");
        fileName = SanitizeFileName(fileName);

        var downloads = invoiceShopName is null
            ? Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), "Downloads", "AluCraft")
            : GetInvoiceDownloadsDirectory(invoiceShopName);
        Directory.CreateDirectory(downloads);
        File.WriteAllBytes(GetUniquePath(Path.Combine(downloads, fileName)), pdfBytes);
    }

    private static string GetInvoiceDownloadsDirectory(string shopName) =>
        Path.Combine(
            Environment.GetFolderPath(Environment.SpecialFolder.UserProfile),
            "Downloads",
            "AluCraft",
            GetShopInvoiceFolderName(shopName));

    private static string GetShopInvoiceFolderName(string shopName)
    {
        var invalidChars = Path.GetInvalidFileNameChars();
        var normalized = string.Concat((shopName ?? string.Empty).Select(character => invalidChars.Contains(character) ? ' ' : character));
        normalized = string.Join(" ", normalized.Split(' ', StringSplitOptions.RemoveEmptyEntries)).Trim().TrimEnd('.');
        return $"{(string.IsNullOrWhiteSpace(normalized) ? "Shop" : normalized)} Invoice";
    }

    private static string SanitizeFileName(string fileName)
    {
        var invalidChars = Path.GetInvalidFileNameChars();
        return string.Concat(fileName.Select(character => invalidChars.Contains(character) ? '_' : character));
    }

    private static byte[] DecodeInvoiceJpeg(string dataUrl)
    {
        var separator = dataUrl.IndexOf(',');
        if (separator < 0 || !dataUrl.StartsWith("data:image/jpeg;base64,", StringComparison.OrdinalIgnoreCase))
            throw new InvalidDataException("Invoice page image is invalid.");
        return Convert.FromBase64String(dataUrl[(separator + 1)..]);
    }

    private static PdfPageImage DecodeImageForPdf(string dataUrl)
    {
        var separator = dataUrl.IndexOf(',');
        if (separator < 0 || !dataUrl.StartsWith("data:image/", StringComparison.OrdinalIgnoreCase))
            throw new InvalidDataException("Billing image is invalid.");

        var inputBytes = Convert.FromBase64String(dataUrl[(separator + 1)..]);
        using var input = new MemoryStream(inputBytes, writable: false);
        var decoder = BitmapDecoder.Create(input, BitmapCreateOptions.PreservePixelFormat, BitmapCacheOption.OnLoad);
        var frame = decoder.Frames.FirstOrDefault() ?? throw new InvalidDataException("Billing image is invalid.");
        var jpegEncoder = new JpegBitmapEncoder { QualityLevel = 92 };
        jpegEncoder.Frames.Add(frame);
        using var jpegOutput = new MemoryStream();
        jpegEncoder.Save(jpegOutput);
        return new PdfPageImage(jpegOutput.ToArray(), frame.PixelWidth, frame.PixelHeight);
    }

    private static byte[] CreateImagePdf(IReadOnlyList<PdfPageImage> pages)
    {
        if (pages.Count == 0) throw new InvalidDataException("PDF has no pages to save.");

        using var output = new MemoryStream();
        var objectCount = 2 + (pages.Count * 3);
        var offsets = new long[objectCount + 1];
        void WriteAscii(string value)
        {
            var bytes = Encoding.ASCII.GetBytes(value);
            output.Write(bytes, 0, bytes.Length);
        }
        void WriteObject(int id, Action writeBody)
        {
            offsets[id] = output.Position;
            WriteAscii($"{id} 0 obj\n");
            writeBody();
            WriteAscii("\nendobj\n");
        }

        WriteAscii("%PDF-1.4\n%AluCraft\n");
        WriteObject(1, () => WriteAscii("<< /Type /Catalog /Pages 2 0 R >>"));
        WriteObject(2, () =>
        {
            var kids = string.Join(" ", Enumerable.Range(0, pages.Count).Select(index => $"{3 + index * 3} 0 R"));
            WriteAscii($"<< /Type /Pages /Kids [{kids}] /Count {pages.Count} >>");
        });

        for (var index = 0; index < pages.Count; index++)
        {
            var pageId = 3 + index * 3;
            var imageId = pageId + 1;
            var contentId = pageId + 2;
            var image = pages[index];
            var jpeg = image.JpegBytes;
            const double pageWidth = 595;
            const double pageHeight = 842;
            var scale = Math.Min(pageWidth / image.Width, pageHeight / image.Height);
            var drawWidth = (image.Width * scale).ToString("0.###", CultureInfo.InvariantCulture);
            var drawHeight = (image.Height * scale).ToString("0.###", CultureInfo.InvariantCulture);
            var drawX = ((pageWidth - (image.Width * scale)) / 2).ToString("0.###", CultureInfo.InvariantCulture);
            var drawY = ((pageHeight - (image.Height * scale)) / 2).ToString("0.###", CultureInfo.InvariantCulture);

            WriteObject(pageId, () => WriteAscii(
                $"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {pageWidth} {pageHeight}] " +
                $"/Resources << /XObject << /Im0 {imageId} 0 R >> >> /Contents {contentId} 0 R >>"));

            WriteObject(imageId, () =>
            {
                WriteAscii($"<< /Type /XObject /Subtype /Image /Width {image.Width} /Height {image.Height} " +
                           $"/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length {jpeg.Length} >>\nstream\n");
                output.Write(jpeg, 0, jpeg.Length);
                WriteAscii("\nendstream");
            });

            var content = Encoding.ASCII.GetBytes(
                $"q\n{drawWidth} 0 0 {drawHeight} {drawX} {drawY} cm\n/Im0 Do\nQ\n");
            WriteObject(contentId, () =>
            {
                WriteAscii($"<< /Length {content.Length} >>\nstream\n");
                output.Write(content, 0, content.Length);
                WriteAscii("endstream");
            });
        }

        var xrefOffset = output.Position;
        WriteAscii($"xref\n0 {objectCount + 1}\n0000000000 65535 f \n");
        for (var id = 1; id <= objectCount; id++)
            WriteAscii($"{offsets[id]:D10} 00000 n \n");
        WriteAscii($"trailer\n<< /Size {objectCount + 1} /Root 1 0 R >>\nstartxref\n{xrefOffset}\n%%EOF");
        return output.ToArray();
    }

    private sealed record PdfPageImage(byte[] JpegBytes, int Width, int Height);

    private async Task RunDriveBackupAsync(string backupJson, string accountEmail, string operationId)
    {
        DriveOperationResult result;
        try { result = await _driveSync.BackupAsync(backupJson, accountEmail); }
        catch (Exception ex) { result = DriveOperationResult.Failed(ex.Message); }
        var payload = JsonSerializer.Serialize(new
        {
            operationId,
            success = result.Success,
            verified = result.Verified,
            message = result.Message,
            fileId = result.FileId
        });
        await SendDriveCallbackAsync("onDriveBackupResult", payload);
    }

    private async Task RunDriveRestoreAsync(string accountEmail, string operationId)
    {
        DriveOperationResult result;
        try { result = await _driveSync.RestoreAsync(accountEmail); }
        catch (Exception ex) { result = DriveOperationResult.Failed(ex.Message); }
        var payload = JsonSerializer.Serialize(new
        {
            operationId,
            success = result.Success,
            verified = result.Verified,
            message = result.Message,
            data = result.BackupJson,
            fileId = result.FileId
        });
        await SendDriveCallbackAsync("onDriveRestoreResult", payload);
    }

    private async Task SendDriveCallbackAsync(string callback, string payload)
    {
        if (AppView.CoreWebView2 is null) return;
        var payloadLiteral = JsonSerializer.Serialize(payload);
        await AppView.CoreWebView2.ExecuteScriptAsync(
            $"if (typeof window.{callback} === 'function') window.{callback}({payloadLiteral});");
    }

    private void DownloadStarting(object? sender, CoreWebView2DownloadStartingEventArgs e)
    {
        var name = Path.GetFileName(e.ResultFilePath);
        if (string.IsNullOrWhiteSpace(name)) name = "AluCraft-Download";
        var downloads = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.UserProfile), "Downloads");
        var directory = Path.Combine(downloads, "AluCraft");
        Directory.CreateDirectory(directory);
        e.ResultFilePath = GetUniquePath(Path.Combine(directory, name));
        e.Handled = true;
    }

    private static string GetUniquePath(string path)
    {
        if (!File.Exists(path)) return path;
        var folder = Path.GetDirectoryName(path)!;
        var name = Path.GetFileNameWithoutExtension(path);
        var extension = Path.GetExtension(path);
        for (var index = 1; index < 10000; index++)
        {
            var candidate = Path.Combine(folder, $"{name} ({index}){extension}");
            if (!File.Exists(candidate)) return candidate;
        }
        return Path.Combine(folder, $"{name}-{DateTime.Now:yyyyMMddHHmmss}{extension}");
    }

    private void NewWindowRequested(object? sender, CoreWebView2NewWindowRequestedEventArgs e)
    {
        e.Handled = true;
        OpenExternalUrl(e.Uri);
    }

    private void NavigationStarting(object? sender, CoreWebView2NavigationStartingEventArgs e)
    {
        if (!Uri.TryCreate(e.Uri, UriKind.Absolute, out var uri)) return;
        if (uri.Host.Equals(AppHost, StringComparison.OrdinalIgnoreCase)) return;
        if (uri.Scheme is "http" or "https")
        {
            e.Cancel = true;
            OpenExternalUrl(uri.ToString());
        }
    }

    private static void OpenExternalUrl(string url)
    {
        if (!Uri.TryCreate(url, UriKind.Absolute, out var uri) || uri.Scheme is not ("http" or "https" or "mailto" or "tel")) return;
        Process.Start(new ProcessStartInfo(uri.ToString()) { UseShellExecute = true });
    }

    private async void ShowToast(string message)
    {
        if (string.IsNullOrWhiteSpace(message) || AppView.CoreWebView2 is null) return;
        var script = "(() => { const message = " + JsonSerializer.Serialize(message) + "; " +
            "const frame = document.querySelector('iframe[title=\\\"Invoice Generator\\\"]'); " +
            "const child = frame && frame.contentWindow; " +
            "const target = child && typeof child.showAluCraftToast === 'function' ? child : window; " +
            "if (typeof target.showAluCraftToast === 'function') target.showAluCraftToast(message); })();";
        try { await AppView.CoreWebView2.ExecuteScriptAsync(script); }
        catch { }
    }

    private static string GetString(JsonElement root, string property) =>
        root.TryGetProperty(property, out var value) ? value.ToString() : string.Empty;
}
