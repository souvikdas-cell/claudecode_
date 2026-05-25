# Watchlist Blueprint

## Evidence files

- `reference-svg/screen-watchlist/069_Watchlist.svg`

## Screen purpose

Show tracked instruments in a compact, high-signal list with price, movement, and quick navigation into company detail or order actions.

## Layout structure

Top header/search area, watchlist selector/tabs, instrument listing rows, bottom navigation. Rows should use strong symbol labels, muted exchange/meta labels, and right-aligned price/change.

## Core components

Header, search entry, tabs/segmented controls, listing rows, market movement values, bottom navigation, empty watchlist state.

## Data and numeric rules

Symbol/name on left. LTP and change on right. Positive change green, negative red. Keep decimals consistent by instrument type.

## States

Default, selected watchlist, empty list, loading rows, stale price warning, market closed state.

## Lovable build notes

Do not make rows tall or card-heavy. FinX watchlist should remain dense and scannable.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
