$ErrorActionPreference = "Stop"

$windowsRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $windowsRoot
$appProject = Join-Path $windowsRoot "AluCraft.Windows\AluCraft.Windows.csproj"
$setupProject = Join-Path $windowsRoot "AluCraft.Setup\AluCraft.Setup.csproj"
$buildId = [Guid]::NewGuid().ToString("N")
$publishDir = Join-Path $windowsRoot ("build\publish-" + $buildId)
$setupOutput = Join-Path $windowsRoot "release"
$payload = Join-Path $windowsRoot "AluCraft.Setup\Payload.zip"

if (Test-Path $publishDir) { Remove-Item -LiteralPath $publishDir -Recurse -Force }
if (Test-Path $payload) { Remove-Item -LiteralPath $payload -Force }
New-Item -ItemType Directory -Force -Path $publishDir, $setupOutput | Out-Null

dotnet publish $appProject -c Release -r win-x64 --self-contained true `
  -p:PublishSingleFile=true -p:EnableCompressionInSingleFile=true `
  -p:DebugType=None -p:DebugSymbols=false -o $publishDir
if ($LASTEXITCODE -ne 0) { throw "Windows app publish failed." }
Compress-Archive -Path (Join-Path $publishDir "*") -DestinationPath $payload -CompressionLevel Optimal

dotnet publish $setupProject -c Release -p:DebugType=None -p:DebugSymbols=false -o $setupOutput
if ($LASTEXITCODE -ne 0) { throw "Windows installer publish failed." }

Remove-Item -LiteralPath $publishDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Installer created at: $(Join-Path $setupOutput 'AluCraftSetup.exe')"
