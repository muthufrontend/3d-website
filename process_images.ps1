$source = "C:\Users\muthu\projects\mango\Mango juice"
$destMango = "C:\Users\muthu\projects\mango\public\images\mango"
$destChoco = "C:\Users\muthu\projects\mango\public\images\chocolate"
$destPom = "C:\Users\muthu\projects\mango\public\images\pomegranate"

# Create directories
New-Item -ItemType Directory -Force -Path $destMango
New-Item -ItemType Directory -Force -Path $destChoco
New-Item -ItemType Directory -Force -Path $destPom

# Get files
$files = Get-ChildItem "$source\ezgif-frame-*.jpg" | Sort-Object Name

$count = 1
foreach ($file in $files) {
    if ($count -gt 120) { break }
    
    $newName = "$count.jpg"
    
    # Copy to Mango (Source)
    Copy-Item $file.FullName -Destination "$destMango\$newName"
    
    # Copy to others as placeholder
    Copy-Item $file.FullName -Destination "$destChoco\$newName"
    Copy-Item $file.FullName -Destination "$destPom\$newName"
    
    $count++
}

Write-Host "Processed $count images."
