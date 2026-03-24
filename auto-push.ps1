# auto-push.ps1
# This script stages, commits, and pushes changes to GitHub.

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMessage = "Auto-update: $timestamp"

Write-Host "--- Starting Auto Push ---" -ForegroundColor Cyan

# Stage all changes
Write-Host "Staging changes..."
git add .

# Check if there are any changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Yellow
    exit 0
}

# Commit
Write-Host "Committing changes: $commitMessage"
git commit -m $commitMessage

# Push
Write-Host "Pushing to origin main..."
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "Failed to push to GitHub. Check your internet connection and git configuration." -ForegroundColor Red
}
