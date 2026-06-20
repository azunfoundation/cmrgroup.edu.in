$files = Get-ChildItem -Path "C:\Users\DELL\Desktop\Cmr gorup.edu.in" -Filter *.html -Recurse
$utf8NoBom = New-Object System.Text.UTF8Encoding $False

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # We look for the exact string to replace
    $target = "All rights reserved. | MGR Educational Society</p>"
    $replacement = "All rights reserved. | MGR Educational Society<br>Designed by www.Besure.Today</p>"
    
    $newContent = $content.Replace($target, $replacement)
    
    if ($content -cne $newContent) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
        Write-Output "Updated $($file.Name)"
    }
}
