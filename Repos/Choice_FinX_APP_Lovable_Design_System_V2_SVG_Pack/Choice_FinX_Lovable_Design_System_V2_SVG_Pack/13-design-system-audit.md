# Design System Audit

## ZIP Audit Summary

Audited uploaded SVG exports:

| ZIP / Source bucket | SVG files | Main content |
|---|---:|---|
| Choice FinX Design (4).zip | 44 | Design-system boards: colors, typography, buttons, tabs, tags, inputs, dropdowns, menu, header, cards, tables, graphs, bottom sheets, tooltips, checkboxes/radio, company detail variants |
| Choice FinX Design (5).zip | 9 | Android/iOS platform screenshot strips and product screenshots |
| Choice FinX Design (6).zip | 122 | Product screens, order flow, company detail, portfolio, funds, IPO, mutual funds, reports, recommendations, profile, more pages, onboarding/login, misc screens |
| Total | 175 | SVG evidence for design-system and app UI |

## Category coverage

| design-system | 44 |
| platform-screens | 9 |
| screen-company-detail | 7 |
| screen-funds-bank | 13 |
| screen-ipo | 4 |
| screen-market | 2 |
| screen-more-profile | 8 |
| screen-onboarding-login | 1 |
| screen-order-flow | 7 |
| screen-portfolio | 2 |
| screen-recommendations | 1 |
| screen-reports | 8 |
| screen-watchlist | 1 |
| screens-misc | 68 |

## Common canvas sizes observed

| 393 | 852 | `0 0 393 852` | 17 |
| 720 | 1600 | `0 0 720 1600` | 14 |
| 393 | 863 | `0 0 393 863` | 11 |
| 280 | 621 | `0 0 280 621` | 7 |
| 740 | 1600 | `0 0 740 1600` | 6 |
| 1220 | 2712 | `0 0 1220 2712` | 5 |
| 1440 | 900 | `0 0 1440 900` | 3 |
| 388 | 863 | `0 0 388 863` | 3 |
| 1170 | 2532 | `0 0 1170 2532` | 3 |
| 1440 | 1545 | `0 0 1440 1545` | 2 |
| 1440 | 2938 | `0 0 1440 2938` | 2 |
| 1440 | 814 | `0 0 1440 814` | 2 |
| 1440 | 1343 | `0 0 1440 1343` | 2 |
| 1440 | 652 | `0 0 1440 652` | 2 |
| 1440 | 2876 | `0 0 1440 2876` | 2 |

## Top observed color values from SVG source

| `#0F0E16` | 2437 |
| `#6F6E73` | 2253 |
| `#87868A` | 1987 |
| `#2777F3` | 1701 |
| `#45B644` | 1284 |
| `#E7E7E8` | 1032 |
| `#4B4A50` | 1030 |
| `#1B1464` | 694 |
| `#E9F1FE` | 676 |
| `#DE493B` | 444 |
| `#C6C4D8` | 396 |
| `#5D99F6` | 354 |
| `#E8E8F0` | 267 |
| `#9747FF` | 218 |
| `#696A6A` | 192 |
| `#B7B7B9` | 190 |
| `#3F8CF4` | 183 |
| `#F4F8FE` | 176 |
| `#CFCFD0` | 164 |
| `#F9685F` | 149 |
| `#27262D` | 146 |
| `#FCFCFE` | 110 |
| `#ECF8EC` | 107 |
| `#B8DAFF` | 92 |
| `#C9DDFC` | 86 |
| `#070519` | 84 |
| `#F9EB21` | 64 |
| `#FEFDFE` | 57 |
| `#93BBF9` | 54 |
| `#F6CDCA` | 43 |
| `#D0EDD0` | 41 |
| `#F7D64F` | 39 |
| `#72E770` | 39 |
| `#348833` | 35 |
| `#A62821` | 34 |
| `#FCEBEA` | 34 |
| `#FFFAB3` | 33 |
| `#E8E8EE` | 33 |
| `#F5F5F5` | 33 |
| `#1D59B6` | 31 |

## What the SVG export improves

The SVG export improves the pack in these areas:

- More accurate color extraction.
- Better component proportions.
- Better icon and visual asset evidence.
- Better screen-level layout density.
- Better light and dark variant inspection.
- Better visual parity for Lovable and other code-generating LLMs.

## What still needs confirmation

- Exact semantic names for every shade in each color ramp.
- Whether all SVG colors are official tokens or one-off values.
- Which icons are reusable product icons versus screen-specific vector assets.
- Exact animation timings.
- All empty/loading/error states across the full product.
- Responsive behavior outside the exported mobile sizes.
- Whether some screenshot-named files are historical, exploratory, or production-current.

## Evidence level labels

- Confirmed: directly visible in uploaded design-system board SVGs or product screen SVGs.
- Observed: extracted from SVG source.
- Inferred: practical rule derived from repeated usage across screens.
- Needs confirmation: gap where product/design/engineering validation is required.
