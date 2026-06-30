# Lists all SKILL.md files in the skills directory
Get-ChildItem -Path "$PSScriptRoot\..\skills" -Recurse -Filter "SKILL.md" -File | Select-Object -ExpandProperty FullName
