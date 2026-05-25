# Portfolio Blueprint

## Evidence files

- `reference-svg/screen-portfolio/070_Portfolio.svg`
- `reference-svg/screen-portfolio/077_Mobile_Portfolio_page_1.svg`

## Screen purpose

Show holdings, invested value, current value, P&L, and portfolio-level summary.

## Layout structure

Portfolio summary card, value/P&L breakdown, segment filters, holdings list, bottom navigation.

## Core components

Summary cards, listing rows, P&L indicators, filter tabs, empty portfolio state.

## Data and numeric rules

Current value and P&L must dominate. Gains green, losses red. Use absolute and percentage P&L together when possible.

## States

Holdings available, empty portfolio, loading, partial data, market closed, hidden balance.

## Lovable build notes

Do not over-design the portfolio card. Financial clarity is the priority.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
