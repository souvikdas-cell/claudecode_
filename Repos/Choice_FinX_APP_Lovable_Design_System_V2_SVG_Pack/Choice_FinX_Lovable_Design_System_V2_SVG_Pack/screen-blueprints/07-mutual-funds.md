# Mutual Funds Blueprint

## Evidence files

- No direct SVG files in this category.

## Screen purpose

Show MF discovery, scheme detail, returns, CAGR, expense ratio, SIP/lumpsum flows, and order placement.

## Layout structure

Discovery/listing, scheme detail header, returns module, facts, SIP/lumpsum entry, order CTA.

## Core components

Fund cards, return chips, graph blocks, facts table, tabs, input fields, CTA bar.

## Data and numeric rules

Use correct return period labels. CAGR/1D/3Y labels must not be mixed. Expense ratio and risk should be visible where relevant.

## States

SIP, lumpsum, insufficient amount, unavailable scheme, loading returns, no data.

## Lovable build notes

Avoid trading-style urgency. MF surfaces should feel informative and calm.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
