param(
  [string]$Message
)

$ErrorActionPreference = "Stop"

if (-not $Message -or $Message.Trim().Length -eq 0) {
  $Message = "chore: site update $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}

$currentBranch = (git branch --show-current).Trim()
if ($currentBranch -ne "main") {
  Write-Host "Switching branch from '$currentBranch' to 'main'..."
  git checkout main
}

$status = git status --porcelain
if (-not $status) {
  Write-Host "No changes found. Nothing to commit or push."
  exit 0
}

Write-Host "Staging all changes..."
git add -A

Write-Host "Creating commit: $Message"
git commit -m $Message

$upstream = git rev-parse --abbrev-ref --symbolic-full-name "@{u}" 2>$null
if ($LASTEXITCODE -ne 0 -or -not $upstream) {
  Write-Host "Upstream not set. Pushing with -u origin main..."
  git push -u origin main
} else {
  Write-Host "Pushing to origin/main..."
  git push origin main
}

Write-Host "Done: GitHub Actions will now deploy latest changes to GitHub Pages."
