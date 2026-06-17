# ============================================================
# NPS COMPILE ENGINE - Feb 2026 real data
# Reads the 4 saved Plotline response dumps, dedups (last
# response per user per question), buckets scores, and emits:
#   nps-real.json  = per-user fact table + cohort meta
# The dashboard does all aggregation/cross-filtering client-side.
# ============================================================

$dir = "C:\Users\souvik.d\.claude\projects\D--Claude\abf4329f-57f4-4576-9fa9-1b36b0a9a0e3\tool-results"

$surveys = @(
  [PSCustomObject]@{ key="cash_delivery";  name="Cash Delivery";    file="mcp-aab1ae12-1037-4f7d-b68f-61513181ac28-get_study_responses-1781083064113.txt"; targeted=154870 }
  [PSCustomObject]@{ key="fno";            name="F&O";              file="mcp-aab1ae12-1037-4f7d-b68f-61513181ac28-get_study_responses-1781083021038.txt"; targeted=34030 }
  [PSCustomObject]@{ key="cash_intraday";  name="Cash Intraday";    file="mcp-aab1ae12-1037-4f7d-b68f-61513181ac28-get_study_responses-1781083056921.txt"; targeted=8370 }
  [PSCustomObject]@{ key="new_not_traded"; name="New / Not Traded"; file="mcp-aab1ae12-1037-4f7d-b68f-61513181ac28-get_study_responses-1781083060256.txt"; targeted=16676 }
)

$allUsers = New-Object System.Collections.ArrayList
$cohortMeta = @()

foreach ($s in $surveys) {
  $path = Join-Path $dir $s.file
  $j = Get-Content $path -Raw | ConvertFrom-Json
  if ($j.data.pagination.hasMore) { Write-Warning "$($s.key): hasMore=TRUE, data incomplete" }
  $records = $j.data.data

  # Flatten every answer instance with its user + timestamp
  $flat = New-Object System.Collections.ArrayList
  foreach ($rec in $records) {
    $uid = $rec.userId
    if (-not $uid) { continue }
    foreach ($a in $rec.answers) {
      [void]$flat.Add([PSCustomObject]@{
        uid=$uid; qid=$a.questionId; qtext=("" + $a.questionText).Trim()
        qtype=$a.questionType; vals=$a.responseValues; time=("" + $a.responseTime)
      })
    }
  }

  # Dedup: keep the LATEST answer per (user, question) by responseTime
  $latest = $flat | Group-Object uid,qid | ForEach-Object {
    $_.Group | Sort-Object time | Select-Object -Last 1
  }

  # Build one fact row per user who gave a score
  $byUser = $latest | Group-Object uid
  $rawRecords = $records.Count
  $kept = 0
  foreach ($g in $byUser) {
    $uid = $g.Name
    $scoreAns = $g.Group | Where-Object { $_.qtype -eq 'SCALE_NPS' } | Select-Object -First 1
    if (-not $scoreAns -or -not $scoreAns.vals) { continue }
    $score = [int]($scoreAns.vals[0])
    if ($score -lt 0 -or $score -gt 10) { continue }
    $bucket = if ($score -ge 9) { 'promoter' } elseif ($score -ge 7) { 'passive' } else { 'detractor' }

    $reasons = @()
    $verbatims = @()
    foreach ($a in ($g.Group | Where-Object { $_.qtype -ne 'SCALE_NPS' })) {
      if (-not $a.vals) { continue }
      foreach ($v in $a.vals) {
        $vt = ("" + $v).Trim()
        if (-not $vt) { continue }
        if ($a.qtype -eq 'TEXT') { $verbatims += $vt }
        else { $reasons += [PSCustomObject]@{ q=$a.qtext; a=$vt } }
      }
    }

    [void]$allUsers.Add([PSCustomObject]@{
      u=$uid; c=$s.key; s=$score; b=$bucket; r=$reasons; t=$verbatims
    })
    $kept++
  }

  # Cohort sanity aggregates (printed, and used to validate vs report)
  $cu = $allUsers | Where-Object { $_.c -eq $s.key }
  $tot = $cu.Count
  $pro = ($cu | Where-Object { $_.b -eq 'promoter' }).Count
  $pas = ($cu | Where-Object { $_.b -eq 'passive' }).Count
  $det = ($cu | Where-Object { $_.b -eq 'detractor' }).Count
  $nps = if ($tot) { [math]::Round((($pro - $det) / $tot) * 100, 1) } else { 0 }
  $cohortMeta += [PSCustomObject]@{
    key=$s.key; name=$s.name; targeted=$s.targeted
    responses=$tot; promoterCount=$pro; passiveCount=$pas; detractorCount=$det
    nps=$nps
    promoters=[math]::Round($pro/$tot*100,1); passives=[math]::Round($pas/$tot*100,1); detractors=[math]::Round($det/$tot*100,1)
    responseRate=[math]::Round($tot/$s.targeted*100,2)
  }
  Write-Host ("{0,-16} raw={1,5} scored={2,5}  NPS={3,6}  P/Pa/D = {4}/{5}/{6}" -f $s.key,$rawRecords,$tot,$nps,$pro,$pas,$det)
}

# Overall
$tot = $allUsers.Count
$pro = ($allUsers | Where-Object { $_.b -eq 'promoter' }).Count
$pas = ($allUsers | Where-Object { $_.b -eq 'passive' }).Count
$det = ($allUsers | Where-Object { $_.b -eq 'detractor' }).Count
$overallNps = [math]::Round((($pro - $det) / $tot) * 100, 1)
Write-Host ("{0,-16} scored={1,5}  NPS={2,6}  P/Pa/D = {3}/{4}/{5}" -f "OVERALL",$tot,$overallNps,$pro,$pas,$det)

$out = [PSCustomObject]@{
  meta = [PSCustomObject]@{
    product="Choice FinX"; month="February 2026"; monthId="2026-02"
    cadence="Monthly"; generatedFrom="Plotline survey responses, deduped (last answer per user per question)"
    npsFormula="(Promoters - Detractors) / Total * 100, passives in denominator (standard NPS)"
  }
  overall = [PSCustomObject]@{
    responses=$tot; promoterCount=$pro; passiveCount=$pas; detractorCount=$det; nps=$overallNps
  }
  cohorts = $cohortMeta
  users = $allUsers
}

$json = $out | ConvertTo-Json -Depth 12 -Compress
$dest = "D:\Claude\Projects\nps-dashboard\nps-real.json"
$json | Out-File $dest -Encoding utf8
# Also emit a JS-wrapped copy so the dashboard loads on file:// and when hosted.
$destJs = "D:\Claude\Projects\nps-dashboard\nps-real.js"
("window.NPS_REAL = " + $json + ";") | Out-File $destJs -Encoding utf8
$bytes = (Get-Item $dest).Length
Write-Host "`nWrote $dest and $destJs"
Write-Host "$bytes bytes, $tot users"