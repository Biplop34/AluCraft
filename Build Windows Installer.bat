@echo off
setlocal

cd /d "%~dp0"
echo Building the AluCraft Windows installer...
echo.

powershell.exe -NoLogo -NoProfile -ExecutionPolicy Bypass -File "%~dp0windows\build-windows.ps1"
set "BUILD_EXIT=%ERRORLEVEL%"

if not "%BUILD_EXIT%"=="0" goto failed

echo.
echo Build completed successfully.
echo Installer: "%~dp0windows\release\AluCraftSetup.exe"
if exist "%~dp0windows\release" start "" explorer.exe "%~dp0windows\release"
pause
exit /b 0

:failed
echo.
echo Build failed with exit code %BUILD_EXIT%.
pause
exit /b %BUILD_EXIT%
