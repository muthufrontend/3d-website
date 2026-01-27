$source = "C:\Users\muthu\projects\mango\public\images\pomegranate"

# Get files
$files = Get-ChildItem "$source\ezgif-frame-*.jpg" | Sort-Object Name

$count = 1
foreach ($file in $files) {
    if ($count -gt 120) { break }
    
    $newName = "$count.jpg"
    
    # Rename in place
    Rename-Item -Path $file.FullName -NewName $newName
    
    $count++
}

Write-Host "Renamed $count Pomegranate images."
