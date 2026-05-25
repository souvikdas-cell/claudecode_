# Color System

## Evidence status

V2 uses direct SVG source extraction. The values below are grounded in the SVG export and should be treated as stronger evidence than the earlier PNG-only audit.

## Confirmed core tokens

| Token | Hex | Usage |
|---|---:|---|
| Brand Navy | `#1B1464` | Brand identity, high-emphasis brand moments, dark-blue anchor |
| Primary Blue | `#2777F3` | Primary CTA, selected tab, active icon, link, focused outline, information action |
| Positive / Success | `#45B644` | Gains, profit, positive price movement, success |
| Negative / Error | `#DE493B` | Loss, sell/destructive action, error, negative price movement |
| Warning | `#F9EB21` | Warning, attention, pending/closed state |
| Information | `#5D99F6` | Informational state, secondary blue emphasis |
| Main Text / Dark Neutral | `#0F0E16` | Primary text and strong dark UI surfaces |
| App Surface | `#FCFCFE` | Light app surface |
| Soft Background | `#F4F8FE` | Soft app panels and subtle screen background |

## Observed high-frequency colors from SVG

These are the most repeated values in the SVG source and should be prioritized when implementing the app.

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

## Neutral system

| Role | Token | Hex | Usage |
|---|---|---:|---|
| Strong text | `neutral.900` | `#0F0E16` | Primary labels, important numbers |
| Dark surface | `neutral.800` | `#27262D` | Dark-mode cards, deep surfaces |
| Secondary text | `neutral.700` | `#4B4A50` | Secondary important labels |
| Muted text | `neutral.600` | `#6F6E73` | Subtext, metadata |
| Placeholder text | `neutral.500` | `#87868A` | Disabled/meta/placeholder |
| Light divider | `neutral.300` | `#CFCFD0` | Borders, separators |
| Soft divider | `neutral.200` | `#E7E7E8` | Light borders |
| App soft background | `neutral.100` | `#E8E8F0` | Screen background / board background |
| White surface | `neutral.50` | `#FCFCFE` | Cards and app surfaces |

## Semantic surface colors

| Role | Hex | Usage |
|---|---:|---|
| Blue subtle | `#E9F1FE` | Selected/active subtle states, soft blue panels |
| Green subtle | `#ECF8EC` | Positive/success background |
| Red subtle | `#F6CDCA` | Negative/error background |
| Soft blue border | `#C9DDFC` | Blue outline/border support |
| Dark app base | `#070519` | Deep dark mode surface |

## Trading color rules

- Use green only for gains, success, buy-positive context, and upward movement.
- Use red only for losses, sell/destructive context, failed/error context, and downward movement.
- Do not use green/red as decoration.
- A positive/negative number must not rely only on color. Pair with sign, arrow, or label when the surface is critical.
- Buy and Sell CTAs should remain visually distinct even when viewed quickly.
- Use blue for primary app actions and navigation, not for market direction.

## Lovable implementation notes

- Use `design-tokens.json` as the hard source.
- Use `css-variables.css` in generated HTML/React.
- Do not invent alternate blues, greens, or reds.
- Check output against `reference-svg/design-system/` and relevant product-screen SVGs before finalizing.
