# watch-push.ps1
# This script monitors the current folder for changes and automatically pushes to GitHub.

$folder = Get-Location
$filter = "*.*" # Monitor all files
$scriptPath = Join-Path $folder "auto-push.ps1"

Write-Host "--- Starting File Watcher ---" -ForegroundColor Cyan
Write-Host "Watching folder: $folder"
Write-Host "New changes will be pushed automatically via $scriptPath"
Write-Host "Press Ctrl+C to stop this watcher."

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $folder
$watcher.Filter = $filter
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Define the action to take when a file changes
$action = {
    $path = $Event.SourceEventArgs.FullPath
    $name = $Event.SourceEventArgs.Name
    $changeType = $Event.SourceEventArgs.ChangeType
    
    # Ignore the .git folder and the script itself to avoid infinite loops
    if ($path -like "*\.git\*" -or $name -eq "auto-push.ps1" -or $name -eq "watch-push.ps1") {
        return
    }

    Write-Host "$(Get-Date -Format 'HH:mm:ss'): Change detected in $name ($changeType). Waiting 5 seconds before pushing..." -ForegroundColor Yellow
    
    # Simple debouncing: wait a bit to avoid multiple pushes for a single logical change
    Start-Sleep -Seconds 5
    
    # Run the push script
    powershell -ExecutionPolicy Bypass -File "$scriptPath"
}

# Register the watcher events
$handlers = @()
$handlers += Register-ObjectEvent $watcher "Changed" -Action $action
$handlers += Register-ObjectEvent $watcher "Created" -Action $action
$handlers += Register-ObjectEvent $watcher "Deleted" -Action $action
$handlers += Register-ObjectEvent $watcher "Renamed" -Action $action

try {
    while ($true) {
        Wait-Event -Timeout 1
    }
} finally {
    # Cleanup handlers and watcher on exit
    Write-Host "Stopping watcher and cleaning up..."
    foreach ($handler in $handlers) {
        Unregister-Event -SourceIdentifier $handler.Name
    }
    $watcher.Dispose()
}
