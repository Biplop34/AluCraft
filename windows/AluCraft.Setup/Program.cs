using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.Win32;

namespace AluCraft.Setup;

internal static class Program
{
    private const string ProductName = "AluCraft";
    private const string UninstallKey = @"Software\Microsoft\Windows\CurrentVersion\Uninstall\AluCraft";

    [STAThread]
    private static void Main(string[] args)
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        if (args.Any(arg => string.Equals(arg, "/uninstall", StringComparison.OrdinalIgnoreCase)))
        {
            Uninstall();
            return;
        }
        Application.Run(new InstallerForm());
    }

    private static void Uninstall()
    {
        var installRoot = Path.GetDirectoryName(Process.GetCurrentProcess().MainModule.FileName) ?? string.Empty;
        var startMenuLink = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Programs), ProductName + ".lnk");
        var desktopLink = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory), ProductName + ".lnk");
        if (MessageBox.Show("Uninstall AluCraft from this PC? Your local app data and Google Drive backup will be kept.",
                "Uninstall AluCraft", MessageBoxButtons.YesNo, MessageBoxIcon.Question) != DialogResult.Yes) return;

        var safeRoot = installRoot.Replace("'", "''");
        var safeStart = startMenuLink.Replace("'", "''");
        var safeDesktop = desktopLink.Replace("'", "''");
        var script = $"Start-Sleep -Seconds 2; Remove-Item -LiteralPath '{safeStart}' -Force -ErrorAction SilentlyContinue; Remove-Item -LiteralPath '{safeDesktop}' -Force -ErrorAction SilentlyContinue; Remove-Item -Path 'HKCU:\\{UninstallKey.Replace("'", "''")}' -Recurse -Force -ErrorAction SilentlyContinue; Remove-Item -LiteralPath '{safeRoot}' -Recurse -Force -ErrorAction SilentlyContinue";
        var encoded = Convert.ToBase64String(Encoding.Unicode.GetBytes(script));
        Process.Start(new ProcessStartInfo("powershell.exe", $"-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -EncodedCommand {encoded}")
        {
            UseShellExecute = false,
            CreateNoWindow = true
        });
    }

    internal static async Task InstallAsync(string installRoot, bool createDesktopShortcut, IProgress<string> progress)
    {
        await Task.Run(() => CloseRunningApp(progress));
        if (string.IsNullOrWhiteSpace(installRoot)) throw new InvalidOperationException("Choose an installation folder.");

        var staging = Path.Combine(Path.GetTempPath(), "AluCraft-Setup-" + Guid.NewGuid().ToString("N"));
        try
        {
            Directory.CreateDirectory(staging);
            progress.Report("Extracting AluCraft files…");
            using (var payload = Assembly.GetExecutingAssembly().GetManifestResourceStream("AluCraft.Setup.Payload.zip")
                ?? throw new InvalidOperationException("The app payload is missing from this installer."))
            using (var file = File.Create(Path.Combine(staging, "payload.zip")))
                payload.CopyTo(file);

            var unpacked = Path.Combine(staging, "app");
            ZipFile.ExtractToDirectory(Path.Combine(staging, "payload.zip"), unpacked);
            progress.Report("Installing AluCraft…");
            if (Directory.Exists(installRoot)) Directory.Delete(installRoot, recursive: true);
            Directory.CreateDirectory(installRoot);
            CopyDirectory(unpacked, installRoot);

            var setupSource = Process.GetCurrentProcess().MainModule.FileName;
            if (string.IsNullOrWhiteSpace(setupSource) || !File.Exists(setupSource))
                throw new InvalidOperationException("Could not locate the installer executable.");
            File.Copy(setupSource, Path.Combine(installRoot, "AluCraftSetup.exe"), overwrite: true);

            var appExe = Path.Combine(installRoot, "AluCraft.Windows.exe");
            var startMenu = Environment.GetFolderPath(Environment.SpecialFolder.Programs);
            Directory.CreateDirectory(startMenu);
            CreateShortcut(Path.Combine(startMenu, ProductName + ".lnk"), appExe, installRoot);
            if (createDesktopShortcut)
                CreateShortcut(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory), ProductName + ".lnk"), appExe, installRoot);

            using var key = Registry.CurrentUser.CreateSubKey(UninstallKey);
            key.SetValue("DisplayName", ProductName);
            key.SetValue("DisplayVersion", "1.0.0");
            key.SetValue("Publisher", "AluCraft");
            key.SetValue("InstallLocation", installRoot);
            key.SetValue("DisplayIcon", appExe);
            key.SetValue("UninstallString", '"' + Path.Combine(installRoot, "AluCraftSetup.exe") + '"' + " /uninstall");
            key.SetValue("NoModify", 1, RegistryValueKind.DWord);
            key.SetValue("NoRepair", 1, RegistryValueKind.DWord);

            var userData = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), ProductName);
            Directory.CreateDirectory(userData);
            var oauthTemplate = Path.Combine(installRoot, "google-oauth.json.example");
            var oauthExample = Path.Combine(userData, "google-oauth.json.example");
            if (File.Exists(oauthTemplate) && !File.Exists(oauthExample)) File.Copy(oauthTemplate, oauthExample);
            var oauthConfig = Path.Combine(installRoot, "google-oauth.json");
            var userOAuthConfig = Path.Combine(userData, "google-oauth.json");
            if (File.Exists(oauthConfig) && !File.Exists(userOAuthConfig)) File.Copy(oauthConfig, userOAuthConfig);
            progress.Report("AluCraft is installed.");
        }
        finally
        {
            try { Directory.Delete(staging, recursive: true); } catch { }
        }
    }

    private static void CloseRunningApp(IProgress<string> progress)
    {
        var runningApps = Process.GetProcessesByName("AluCraft.Windows");
        if (runningApps.Length == 0) return;

        progress.Report("Closing AluCraft before updating…");
        foreach (var app in runningApps)
        {
            using (app)
            {
                try
                {
                    if (app.HasExited) continue;
                    app.CloseMainWindow();
                    if (!app.WaitForExit(8000))
                    {
                        app.Kill();
                        if (!app.WaitForExit(5000))
                            throw new InvalidOperationException("Windows could not close the running AluCraft process.");
                    }
                }
                catch (InvalidOperationException) when (app.HasExited) { }
            }
        }

        if (Process.GetProcessesByName("AluCraft.Windows").Length > 0)
            throw new InvalidOperationException("Windows could not close AluCraft. Try again in a moment.");
    }

    private static void CopyDirectory(string source, string destination)
    {
        Directory.CreateDirectory(destination);
        foreach (var file in Directory.EnumerateFiles(source))
            File.Copy(file, Path.Combine(destination, Path.GetFileName(file)), overwrite: true);
        foreach (var directory in Directory.EnumerateDirectories(source))
            CopyDirectory(directory, Path.Combine(destination, Path.GetFileName(directory)));
    }

    private static void CreateShortcut(string shortcutPath, string target, string workingDirectory)
    {
        var shellType = Type.GetTypeFromProgID("WScript.Shell")
            ?? throw new InvalidOperationException("Windows could not create the AluCraft shortcut.");
        dynamic shell = Activator.CreateInstance(shellType)!;
        dynamic shortcut = shell.CreateShortcut(shortcutPath);
        shortcut.TargetPath = target;
        shortcut.WorkingDirectory = workingDirectory;
        shortcut.Description = "AluCraft aluminium fabrication calculator";
        shortcut.IconLocation = Path.Combine(workingDirectory, "AluCraft.ico") + ",0";
        shortcut.Save();
        Marshal.FinalReleaseComObject(shortcut);
        Marshal.FinalReleaseComObject(shell);
        NotifyShellShortcutChanged(shortcutPath);
    }

    private static void NotifyShellShortcutChanged(string shortcutPath)
    {
        SHChangeNotify(0x00002000, 0x0005, shortcutPath, IntPtr.Zero);
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode)]
    private static extern void SHChangeNotify(int eventId, uint flags, string path, IntPtr item);
}

internal sealed class InstallerForm : Form
{
    private readonly TextBox _installPath = new();
    private readonly CheckBox _desktopShortcut = new();
    private readonly Label _status = new();
    private readonly Button _install = new();
    private readonly Button _cancel = new();

    public InstallerForm()
    {
        Text = "AluCraft Setup";
        StartPosition = FormStartPosition.CenterScreen;
        FormBorderStyle = FormBorderStyle.FixedDialog;
        MaximizeBox = false;
        MinimizeBox = false;
        ClientSize = new Size(570, 300);
        Font = new Font("Segoe UI", 10F);
        BackColor = Color.White;

        var title = new Label { Text = "Install AluCraft", Font = new Font("Segoe UI", 20F, FontStyle.Bold), AutoSize = true, Location = new Point(28, 22) };
        var description = new Label { Text = "The app will be installed for your Windows account and added to Start Menu and Windows Search.", AutoSize = false, Size = new Size(510, 44), Location = new Point(30, 67), ForeColor = Color.FromArgb(71, 85, 105) };
        var pathLabel = new Label { Text = "Install location", AutoSize = true, Location = new Point(30, 129), Font = new Font("Segoe UI", 9F, FontStyle.Bold) };
        _installPath.Text = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "Programs", "AluCraft");
        _installPath.Location = new Point(30, 153);
        _installPath.Size = new Size(420, 28);
        var browse = new Button { Text = "Browse…", Location = new Point(458, 151), Size = new Size(82, 31) };
        browse.Click += (_, _) => Browse();
        _desktopShortcut.Text = "Create a desktop shortcut";
        _desktopShortcut.Checked = true;
        _desktopShortcut.AutoSize = true;
        _desktopShortcut.Location = new Point(30, 196);
        _status.Text = "Setup will not change or remove the Android app.";
        _status.Location = new Point(30, 230);
        _status.Size = new Size(335, 44);
        _status.ForeColor = Color.FromArgb(71, 85, 105);
        _install.Text = "Install";
        _install.Location = new Point(385, 238);
        _install.Size = new Size(76, 36);
        _install.BackColor = Color.FromArgb(20, 125, 114);
        _install.ForeColor = Color.White;
        _install.FlatStyle = FlatStyle.Flat;
        _install.FlatAppearance.BorderSize = 0;
        _install.Click += async (_, _) => await Install();
        _cancel.Text = "Cancel";
        _cancel.Location = new Point(467, 238);
        _cancel.Size = new Size(76, 36);
        _cancel.Click += (_, _) => Close();

        Controls.AddRange([title, description, pathLabel, _installPath, browse, _desktopShortcut, _status, _install, _cancel]);
    }

    private void Browse()
    {
        using var dialog = new FolderBrowserDialog
        {
            Description = "Choose the folder where AluCraft will be installed",
            SelectedPath = Path.GetDirectoryName(_installPath.Text) ?? Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData)
        };
        if (dialog.ShowDialog(this) == DialogResult.OK)
            _installPath.Text = Path.Combine(dialog.SelectedPath, "AluCraft");
    }

    private async Task Install()
    {
        _install.Enabled = false;
        _cancel.Enabled = false;
        _status.ForeColor = Color.FromArgb(15, 118, 110);
        var progress = new Progress<string>(message => _status.Text = message);
        try
        {
            await Program.InstallAsync(_installPath.Text.Trim(), _desktopShortcut.Checked, progress);
            var appExe = Path.Combine(_installPath.Text.Trim(), "AluCraft.Windows.exe");
            var launch = MessageBox.Show(this, "AluCraft has been installed. Launch it now?", "AluCraft Setup",
                MessageBoxButtons.YesNo, MessageBoxIcon.Information);
            if (launch == DialogResult.Yes) Process.Start(new ProcessStartInfo(appExe) { UseShellExecute = true });
            Close();
        }
        catch (Exception ex)
        {
            _status.ForeColor = Color.FromArgb(185, 28, 28);
            _status.Text = ex.Message;
            _install.Enabled = true;
            _cancel.Enabled = true;
            MessageBox.Show(this, ex.Message, "AluCraft Setup", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
    }
}
