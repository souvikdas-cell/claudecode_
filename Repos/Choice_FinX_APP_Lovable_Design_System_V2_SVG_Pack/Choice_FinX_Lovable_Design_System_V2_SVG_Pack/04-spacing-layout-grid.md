# Spacing, Layout, and Grid

## Confirmed spacing tokens
The spacing board explicitly shows these horizontal spacing values:

| Token | Value |
|---|---:|
| `space.2` | 2px |
| `space.4` | 4px |
| `space.6` | 6px |
| `space.8` | 8px |
| `space.12` | 12px |
| `space.16` | 16px |
| `space.24` | 24px |
| `space.32` | 32px |
| `space.40` | 40px |

## Inferred mobile layout grid
The app screens are built around a 393px mobile frame in many exports, with additional Android and iOS screenshots at narrower captured widths.

Recommended structure:
- Screen width: fluid, mobile first.
- Side padding: 16px default.
- Dense row side padding: 16px.
- Card padding: 12px or 16px depending on density.
- Small internal gaps: 4px, 6px, 8px.
- Section vertical gap: 16px to 24px.
- Large section separation: 24px to 32px.
- Bottom safe area: preserve native home indicator space.

## Page structure
Typical FinX mobile page:
1. Status bar safe area.
2. Header with logo/back/title/search/notification/help actions.
3. Optional index or summary strip.
4. Tabs or chips.
5. Scrollable content area.
6. Sticky CTA or bottom navigation.
7. Bottom safe area.

## Component density rules
### Dense list rows
- Height is content-driven, usually compact.
- Use 12 to 16px horizontal padding.
- Use 8 to 12px vertical padding.
- Preserve a thin divider between rows.
- Keep primary label left and value right.

### Cards
- Use 10 to 12px radius for most app cards.
- Use 12 to 16px padding.
- Use subtle border or pale surface.
- Avoid heavy shadows in normal mobile app content.

### Bottom sheets
- Full-width modal surface anchored to bottom.
- Use top title row, close icon, content, footer CTA when needed.
- Use bottom safe area space.
- Use dimmed backdrop.

### Tables and market depth
- Use column headers.
- Use consistent column widths.
- Use faint dividers.
- Align numbers by column.
- Use green for bid and red for ask.

## Layout rules by screen type
| Screen type | Layout rule |
|---|---|
| Watchlist | Index cards at top, tab/chip filters, rows below, bottom nav |
| Order | Tabs for Position, Order, GTT, MF Orders; rows and bottom sheets for details |
| Company detail | Sticky header after scroll, chart, stats, fundamentals, technicals, related instruments |
| Portfolio | Summary card, holdings list, P&L states, insight links |
| Funds | Balance card, ledger details, expandable rows, add/withdraw CTAs |
| IPO | Open/upcoming/closed tabs, cards with price band and status, apply CTA |
| Mutual fund | Scheme cards, CAGR blocks, details, order CTA |
| More/Profile | Icon listing, profile identity card, navigation rows |

## Do
- Use repeated spacing tokens. Do not invent arbitrary spacing.
- Keep dense data aligned to a grid.
- Keep CTA position predictable.
- Use progressive disclosure for long explanations.

## Do not
- Do not use large promotional whitespace inside functional app screens.
- Do not place bottom navigation and sticky CTA in conflict.
- Do not let chart controls touch the screen edge.
- Do not let bottom sheets cover critical confirmation data without a clear path to close.

## QA checklist
- Check 320px, 360px, 393px, and 430px widths.
- Check safe-area overlap on iOS and Android.
- Check long scrip names and long fund names.
- Check rupee amounts with large values.
- Check keyboard overlap for input screens.
