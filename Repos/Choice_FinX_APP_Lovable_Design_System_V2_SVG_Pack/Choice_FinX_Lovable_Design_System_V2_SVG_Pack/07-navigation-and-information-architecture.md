# Navigation and Information Architecture

## Confirmed primary navigation
The design-system menu board shows a five-item bottom navigation:
1. Home
2. Watchlist
3. Order
4. Portfolio
5. More

Active item uses primary blue. Inactive items use grey. Each item has an icon and label.

## Confirmed top-level areas from uploaded screens
| Area | Evidence from export | Primary user goal |
|---|---|---|
| Home | Bottom nav and app shell | Start point and discovery |
| Watchlist / Marketwatch | Watchlist screens and rows | Track instruments and open market detail |
| Order | Order screen composite | Monitor positions, orders, GTT, MF orders |
| Portfolio | Portfolio screens and cards | Track investments and P&L |
| More / Profile | More, profile, reports, bank, support screens | Account, funds, statements, support, preferences |

## Secondary product areas
The export includes additional flows and screens:
- Company detail page
- Company/order flow
- Order page delivery
- Funds, deposit, withdraw, UPI, transaction history
- Bank details
- Reports and statements
- Ledger report
- Profit and loss report
- Recommendations
- Market and top gainers
- IPO listing and detail
- Mutual fund listing, detail, and place order
- Basket detail and holdings
- Insurance
- Support and feedback
- Secured products and treasury bills
- Brokerage calculator
- Margin calculator

## Typical navigation patterns
### Root to detail
`Bottom nav section -> list/card row -> detail page -> bottom sheet/action`

Examples:
- Watchlist row -> Company detail -> Buy/Sell order page.
- Portfolio holding -> Holding detail -> Action or report.
- IPO card -> IPO detail/status -> Apply.

### Detail to order
`Company detail -> order CTA -> order ticket -> charge/margin bottom sheet -> submit -> status detail`

### More to account utility
`More -> Funds/Bank/Reports/Insurance/Support/Others -> detail/list -> bottom sheet or form`

### Reports flow
`Reports & statements -> report category -> filter bottom sheet -> PDF/Excel and Download/Mail -> submit`

### Funds flow
`Funds -> available balance -> ledger rows -> add fund/withdraw -> UPI/bank confirmation -> transaction history`

## Header patterns
- Root screens may use Choice FinX logo plus search/notification icons.
- Deep screens use back arrow plus page title.
- Company detail/order screens use symbol, exchange, LTP, search, bookmark, share, and compact scrolled state.
- Reports and profile screens use title with help/sort action when required.

## Information hierarchy rules
1. Identify the object first: instrument, fund, IPO, basket, report, bank, or order.
2. Show the most decision-critical metric next: LTP, P&L, CAGR, margin, amount, price band, order status.
3. Show secondary metadata: exchange, segment, quantity, date, product type, investor type.
4. Show action only after the user has enough context.

## Empty, loading, and error states
The export includes status and toast components, but not a complete empty/loading/error library. Use these inferred rules:
- Empty state should explain what is missing and offer one action.
- Loading state should preserve row or card skeleton shape.
- Error state should use red semantic token and a recovery action.
- Warning state should explain delay, risk, or pending status in plain language.

## QA checklist
- Bottom nav active state matches current route.
- Back behavior is predictable on detail and bottom-sheet flows.
- Deep screens preserve object identity in header.
- Sticky CTA does not conflict with bottom navigation.
- Filters persist or reset intentionally, not accidentally.
