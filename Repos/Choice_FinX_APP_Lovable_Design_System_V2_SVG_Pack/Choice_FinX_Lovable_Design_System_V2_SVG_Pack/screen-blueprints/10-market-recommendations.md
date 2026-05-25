# Market and Recommendations Blueprint

## Evidence files

- `reference-svg/screen-market/091_Market.svg`
- `reference-svg/screen-market/150_Market-1.svg`

## Screen purpose

Show market discovery, recommendations, calls, technical/fundamental cards, and status-wise ideas.

## Layout structure

Market header, category tabs, recommendation cards, status tags, instrument details, CTA to view or act.

## Core components

Market cards, recommendation cards, tags, status chips, graph snippets, CTA rows.

## Data and numeric rules

Recommendation status must be explicit: open, closed, stop loss hit, target achieved, book profit, exit call. Use clear price levels and timestamps.

## States

Open call, closed call, target achieved, SL hit, expired, no recommendations, loading.

## Lovable build notes

Recommendations must not look like casual content. Show risk and status clearly.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
