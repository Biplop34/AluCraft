# AluCraft for Windows

This is a separate per-user Windows desktop app. Its WPF shell opens the same AluCraft interface and feature bundle used by Android, keeping the calculations, customer records, billing, invoices, and workflow aligned without changing the Android implementation. The desktop interface runs locally in Microsoft Edge WebView2; it is not a browser tab. The app and installer use the AluCraft logo for their Windows icons.

## Build the installer

Requirements:

- Windows 10 or Windows 11, x64
- .NET 10 SDK (for building only)
- .NET Framework 4.8 (included with supported Windows 10/11 versions; needed to run the small installer)
- Microsoft Edge WebView2 Evergreen Runtime
- Internet access during the first build so NuGet can restore the WebView2 SDK

From PowerShell at the repository root:

.\windows\build-windows.ps1
.\windows\build-windows.ps1
```

The installer is created at `windows\release\AluCraftSetup.exe`. It installs under the current Windows user's profile, adds an AluCraft Start Menu shortcut that appears in Windows Search, and registers an uninstall entry in Windows Settings. It does not require administrator access. The installer is smaller because it uses Windows' built-in .NET Framework for setup, while the installed app remains self-contained. Android sources and Android install data remain separate.

The published desktop program is self-contained. Windows still needs the Microsoft Edge WebView2 Runtime. If it is missing, AluCraft displays a prompt explaining how to install it.

## Google Drive sync setup

The Windows app reads the Google OAuth **Desktop app** client from:

```text
%LOCALAPPDATA%\AluCraft\google-oauth.json
```

This build includes the Desktop OAuth client JSON supplied for AluCraft and the installer copies it into that location on first install. For builds made from another clone, copy `windows\google-oauth.json.example` there and fill it in with a Desktop OAuth client from the same Google Cloud project used by the Android app. Enable the Google Drive API for that project. The app requests the private `drive.appdata` scope and verifies the selected account before backing up. Do not commit an OAuth configuration file.

Android and Windows use the existing `thai_fabricator_appdata_backup.json` file in Google Drive's private app-data folder, so supported data can be restored on either platform. The refresh token is protected for the signed-in Windows user. Local backups and invoice/report exports use Windows Downloads and the app's local WebView2 storage profile.

## Installer behavior

`AluCraftSetup.exe` installs or updates AluCraft for the signed-in Windows user. The same executable, copied into the installation folder, is registered as the uninstaller. Removing the Windows app keeps `%LOCALAPPDATA%\AluCraft` data and the Drive backup so an uninstall does not erase user records or cloud data.
