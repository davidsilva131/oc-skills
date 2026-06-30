# Creates symlinks from each skill in this repo to ~/.config/opencode/skills/
# Run this for local development — changes in the repo are instantly picked up.
# Re-run after adding, removing, or renaming a skill.

$RepoSkills = Join-Path $PSScriptRoot ".." "skills" -Resolve
$TargetDir = Join-Path $env:USERPROFILE ".config" "opencode" "skills"

if (-not (Test-Path $TargetDir)) {
  New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
}

$buckets = Get-ChildItem -LiteralPath $RepoSkills -Directory

foreach ($bucket in $buckets) {
  $skills = Get-ChildItem -LiteralPath $bucket.FullName -Directory
  foreach ($skill in $skills) {
    $linkPath = Join-Path $TargetDir $skill.Name
    if (Test-Path $linkPath) {
      Remove-Item -LiteralPath $linkPath -Recurse -Force
    }
    New-Item -ItemType SymbolicLink -Path $linkPath -Target $skill.FullName | Out-Null
    Write-Output "Linked $($skill.Name) -> $($skill.FullName)"
  }
}
