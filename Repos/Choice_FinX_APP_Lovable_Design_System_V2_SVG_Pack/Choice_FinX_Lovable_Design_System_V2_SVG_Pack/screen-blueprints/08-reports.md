# Reports Blueprint

## Evidence files

- `reference-svg/screen-reports/090_Profit_and_Loss_Report.svg`
- `reference-svg/screen-reports/098_Reports_statements.svg`
- `reference-svg/screen-reports/099_Reports_statements-1.svg`
- `reference-svg/screen-reports/104_Reports_statements-2.svg`
- `reference-svg/screen-reports/109_Transaction_history.svg`
- `reference-svg/screen-reports/138_Ledger_Report.svg`
- `reference-svg/screen-reports/139_Profit_and_Loss_Report-1.svg`
- `reference-svg/screen-reports/152_Profit_and_Loss_Report-2.svg`

## Screen purpose

Show ledger, P&L report, transaction history, downloadable reports, and filters.

## Layout structure

Report selector, filters, table/list rows, summary values, download/share action.

## Core components

Dropdowns, filters, tables, date selectors, report rows, empty state, download CTA.

## Data and numeric rules

Use tabular alignment. Loss values must remain readable in red. Date ranges and segment filters must be explicit.

## States

No report, filter applied, downloading, failed download, loading table, loss/profit mix.

## Lovable build notes

Reports are utility screens. Prioritize legibility and export actions.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
