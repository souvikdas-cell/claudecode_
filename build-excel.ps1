# ============================================================
# FinX NPS - native Excel dashboard generator (COM automation)
# Builds: Data table + PivotTables + Slicers + PivotCharts + KPIs + Verbatims
# Output: FinX-NPS-Dashboard.xlsx
# ============================================================
$ErrorActionPreference = "Stop"
$src  = "D:\Claude\Projects\nps-dashboard\nps-real.json"
$out  = "C:\Users\souvik.d\Downloads\NPS Analysis.xlsx"
$monthId = "2026-02"; $monthLabel = "February 2026"
$dataSheetName = "Data_$monthId"
$tableName = "NPS_" + ($monthId -replace '-','_')

# ---- 1. Flatten fact table ----
$D = Get-Content $src -Raw | ConvertFrom-Json
$cohName = @{}; foreach($c in $D.cohorts){ $cohName[$c.key] = $c.name }
$PRIMARY = 'Reason for Low Rating'

$rows = New-Object System.Collections.ArrayList
foreach($u in $D.users){
  $primary=""; $sub=""; $subQ=""
  foreach($r in $u.r){
    if($r.q -eq $PRIMARY){ if(-not $primary){ $primary=$r.a } }
    else { if(-not $sub){ $sub=$r.a; $subQ=$r.q } }
  }
  $verb = ""
  if($u.t -and $u.t.Count -gt 0){ $verb = ($u.t -join " | ") }
  $sent = (Get-Culture).TextInfo.ToTitleCase($u.b)
  [void]$rows.Add(@($u.u, $cohName[$u.c], [int]$u.s, $sent, $primary, $sub, $subQ, $verb))
}
$headers = @("User","Cohort","Score","Sentiment","Primary Reason","Sub Issue","Sub Issue Question","Verbatim")
$nRows = $rows.Count; $nCols = $headers.Count
Write-Host "Flattened $nRows users."

# Build 2D array (header + data) for fast write
$arr = New-Object 'object[,]' ($nRows+1), $nCols
for($c=0;$c -lt $nCols;$c++){ $arr[0,$c] = $headers[$c] }
for($i=0;$i -lt $nRows;$i++){ $r=$rows[$i]; $ri=$i+1; for($c=0;$c -lt $nCols;$c++){ $arr[$ri,$c] = $r[$c] } }

# ---- COM message filter: auto-retry calls Excel rejects while busy ----
if(-not ("ExcelMsgFilter" -as [type])){
Add-Type @"
using System;
using System.Runtime.InteropServices;
[ComImport, Guid("00000016-0000-0000-C000-000000000046"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
interface IOleMessageFilter {
  [PreserveSig] int HandleInComingCall(int dwCallType, IntPtr hTaskCaller, int dwTickCount, IntPtr lpInterfaceInfo);
  [PreserveSig] int RetryRejectedCall(IntPtr hTaskCallee, int dwTickCount, int dwRejectType);
  [PreserveSig] int MessagePending(IntPtr hTaskCallee, int dwTickCount, int dwPendingType);
}
public class ExcelMsgFilter : IOleMessageFilter {
  [DllImport("Ole32.dll")] private static extern int CoRegisterMessageFilter(IOleMessageFilter newFilter, out IOleMessageFilter oldFilter);
  public static void Register(){ IOleMessageFilter o; CoRegisterMessageFilter(new ExcelMsgFilter(), out o); }
  public static void Revoke(){ IOleMessageFilter o; CoRegisterMessageFilter(null, out o); }
  int IOleMessageFilter.HandleInComingCall(int t, IntPtr h, int dt, IntPtr i){ return 0; }
  int IOleMessageFilter.RetryRejectedCall(IntPtr h, int dt, int rejectType){ if(rejectType==2 || rejectType==0){ return 200; } return -1; }
  int IOleMessageFilter.MessagePending(IntPtr h, int dt, int pt){ return 2; }
}
"@
}
[ExcelMsgFilter]::Register()

# ---- 2. Excel COM ----
$xl = New-Object -ComObject Excel.Application
$xl.Visible = $false; $xl.DisplayAlerts = $false
# enums
$xlSrcRange=1; $xlYes=1; $xlDatabase=1
$xlRowField=1; $xlColumnField=2; $xlDataField=4
$xlCount=-4112; $xlOpenXMLWorkbook=51
$xlColumnClustered=51; $xlColumnStacked=52; $xlBarClustered=57

try {
  # Open the user-provided workbook (retry if Excel briefly rejects).
  $wb = $null
  for($try=1; $try -le 10 -and -not $wb; $try++){
    try { $wb = $xl.Workbooks.Open($out) }
    catch { Start-Sleep -Milliseconds 800 }
  }
  if(-not $wb){ throw "Could not open $out (is it open in Excel? close it first)" }
  if($wb.Worksheets.Count -eq 0){ $wsData = $wb.Worksheets.Add() } else { $wsData = $wb.Worksheets.Item(1) }
  while($wb.Worksheets.Count -gt 1){ $wb.Worksheets.Item($wb.Worksheets.Count).Delete() }

  # ---- Data sheet ----
  $wsData.Name = $dataSheetName
  $startCell = $wsData.Cells.Item(1,1)
  $endCell   = $wsData.Cells.Item($nRows+1,$nCols)
  $rng = $wsData.Range($startCell,$endCell)
  $rng.Value2 = $arr
  $tbl = $wsData.ListObjects.Add($xlSrcRange,$rng,$null,$xlYes)
  $tbl.Name = $tableName
  $tbl.TableStyle = "TableStyleMedium2"
  $wsData.Columns.Item(8).ColumnWidth = 60
  $wsData.Columns.Item("A:G").AutoFit() | Out-Null

  # ---- Pivots sheet ----
  $wsP = $wb.Worksheets.Add(); $wsP.Name = "Pivots"
  $pc = $wb.PivotCaches().Create($xlDatabase, $tableName)

  function New-Pivot($cache,$ws,$cell,$name){
    return $cache.CreatePivotTable($ws.Range($cell),$name)
  }
  # Buckets (drives KPIs + chart)
  $ptB = New-Pivot $pc $wsP "A3" "PivotBuckets"
  $ptB.PivotFields("Sentiment").Orientation = $xlRowField
  $f=$ptB.AddDataField($ptB.PivotFields("User"),"Count",$xlCount)
  # Cohort x Sentiment
  $ptC = New-Pivot $pc $wsP "A12" "PivotCohort"
  $ptC.PivotFields("Cohort").Orientation = $xlRowField
  $ptC.PivotFields("Sentiment").Orientation = $xlColumnField
  $ptC.AddDataField($ptC.PivotFields("User"),"Count",$xlCount) | Out-Null
  # Score distribution
  $ptS = New-Pivot $pc $wsP "A24" "PivotScore"
  $ptS.PivotFields("Score").Orientation = $xlRowField
  $ptS.AddDataField($ptS.PivotFields("User"),"Count",$xlCount) | Out-Null
  # Reasons
  $ptR = New-Pivot $pc $wsP "F3" "PivotReasons"
  $ptR.PivotFields("Primary Reason").Orientation = $xlRowField
  $ptR.AddDataField($ptR.PivotFields("User"),"Count",$xlCount) | Out-Null
  $ptR.PivotFields("Primary Reason").AutoSort(2,"Count")  # 2 = descending

  # ---- Dashboard sheet ----
  $wsD = $wb.Worksheets.Add(); $wsD.Name = "Dashboard"
  $wsD.Activate() | Out-Null
  $wsD.Cells.Item(1,1).Value2 = "FinX Net Promoter Score"
  $wsD.Cells.Item(1,1).Font.Size = 20; $wsD.Cells.Item(1,1).Font.Bold = $true
  $wsD.Cells.Item(2,1).Value2 = "$monthLabel  -  deduped, standard NPS  -  use slicers to filter"
  $wsD.Cells.Item(2,1).Font.ColorIndex = 16

  # KPI labels + GETPIVOTDATA formulas (react to slicers via PivotBuckets)
  $pa = "Pivots!R3C1"  # anchor of PivotBuckets (A3) in R1C1 not needed; use A1-style below
  $anchor = "Pivots!`$A`$3"
  function GPD($bucket){ "IFERROR(GETPIVOTDATA(""Count"",$anchor,""Sentiment"",""$bucket""),0)" }
  $prom = GPD "Promoter"; $pass = GPD "Passive"; $det = GPD "Detractor"
  $total = "($prom+$pass+$det)"
  $kpis = @(
    @("NPS Score", "=IF($total=0,0,ROUND(($prom-$det)/$total*100,1))","0.0"),
    @("Responses", "=$total","#,##0"),
    @("Promoters", "=IF($total=0,0,$prom/$total)","0.0%"),
    @("Passives",  "=IF($total=0,0,$pass/$total)","0.0%"),
    @("Detractors","=IF($total=0,0,$det/$total)","0.0%")
  )
  $col=1
  foreach($k in $kpis){
    $lab=$wsD.Cells.Item(4,$col); $val=$wsD.Cells.Item(5,$col)
    $lab.Value2=$k[0]; $lab.Font.Bold=$true; $lab.Font.Size=10; $lab.Font.ColorIndex=16
    $val.Formula=$k[1]; $val.NumberFormat=$k[2]; $val.Font.Size=22; $val.Font.Bold=$true
    $col+=2
  }

  # ---- Slicers (connected to all pivots via shared cache) ----
  function Add-Slicer($field,$top,$left,$w,$h){
    $sc = $wb.SlicerCaches.Add2($ptB,$field)
    foreach($pt in @($ptC,$ptS,$ptR)){ try{ $sc.PivotTables.AddPivotTable($pt) }catch{} }
    $sl=$sc.Slicers.Item(1); $sl.Top=$top; $sl.Left=$left; $sl.Width=$w; $sl.Height=$h
    return $sc
  }
  Add-Slicer "Cohort"    130 10  150 150 | Out-Null
  Add-Slicer "Sentiment" 130 170 150 150 | Out-Null
  Add-Slicer "Score"     130 330 150 150 | Out-Null

  # ---- PivotCharts (linked to pivots, follow slicers) ----
  function Add-Chart($pt,$type,$left,$top,$w,$h,$title){
    $co=$wsD.ChartObjects().Add($left,$top,$w,$h)
    $co.Chart.SetSourceData($pt.TableRange1)
    $co.Chart.ChartType=$type
    $co.Chart.HasTitle=$true; $co.Chart.ChartTitle.Text=$title
    try{ $co.Chart.HasLegend=$true }catch{}
    return $co
  }
  Add-Chart $ptC $xlColumnStacked   10  300 320 220 "Sentiment by Cohort" | Out-Null
  Add-Chart $ptS $xlColumnClustered 340 300 320 220 "Score Distribution (0-10)" | Out-Null
  Add-Chart $ptR $xlBarClustered    670 300 360 220 "Top Detractor Reasons" | Out-Null

  $wsD.Columns.Item("A:J").ColumnWidth = 11

  # ---- Verbatims sheet ----
  $wsV = $wb.Worksheets.Add(); $wsV.Name="Verbatims"
  $wsV.Cells.Item(1,1).Value2="Cohort"; $wsV.Cells.Item(1,2).Value2="Score"; $wsV.Cells.Item(1,3).Value2="Verbatim"
  $wsV.Range("A1:C1").Font.Bold=$true
  $vr=2
  foreach($u in $D.users){ if($u.t -and $u.t.Count -gt 0){ foreach($t in $u.t){
    $wsV.Cells.Item($vr,1).Value2=$cohName[$u.c]; $wsV.Cells.Item($vr,2).Value2=[int]$u.s; $wsV.Cells.Item($vr,3).Value2=$t; $vr++
  }}}
  if($vr -gt 2){ $wsV.Range("A1:C$($vr-1)").AutoFilter() | Out-Null }
  $wsV.Columns.Item(3).ColumnWidth=80; $wsV.Columns.Item("A:B").AutoFit() | Out-Null

  # order: Dashboard, Data, Pivots, Verbatims
  $wsD.Move($wb.Worksheets.Item(1)) | Out-Null
  $wsD.Activate() | Out-Null
  $wsD.Cells.Item(1,1).Select() | Out-Null
  $wb.SaveAs($out,$xlOpenXMLWorkbook)
  Write-Host "SAVED: $out"
}
catch {
  Write-Host "BUILD ERROR: $($_.Exception.Message)"
  Write-Host "  at line $($_.InvocationInfo.ScriptLineNumber): $($_.InvocationInfo.Line.Trim())"
}
finally {
  try { if($wb){ $wb.Close($false) } } catch {}
  try { $xl.Quit() } catch {}
  try { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($xl) | Out-Null } catch {}
  try { [ExcelMsgFilter]::Revoke() } catch {}
  [GC]::Collect(); [GC]::WaitForPendingFinalizers()
}