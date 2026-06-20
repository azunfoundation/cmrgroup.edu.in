$files = Get-ChildItem -Path "C:\Users\DELL\Desktop\Cmr gorup.edu.in" -Filter *.html -Recurse
$utf8NoBom = New-Object System.Text.UTF8Encoding $False

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $newContent = $content -replace '2025-2026', '2026-2027'
    $newContent = $newContent -replace '2025-26', '2026-27'
    $newContent = $newContent -replace '2025–26', '2026–27'
    $newContent = $newContent -replace '2025&ndash;26', '2026&ndash;27'
    $newContent = [regex]::Replace($newContent, '(?<!\d)2025(?!\d)', '2026')
    
    if ($content -cne $newContent) {
        [System.IO.File]::WriteAllText($file.FullName, $newContent, $utf8NoBom)
        Write-Output "Updated $($file.Name)"
    }
}
