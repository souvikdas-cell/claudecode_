# Trading-Specific UI Patterns

## Purpose
FinX includes trading-critical flows where UI correctness affects user decisions. This file defines patterns for market data, order placement, P&L, margin, risk, and confirmation states.

## Instrument identity pattern
Use this order:
1. Symbol or instrument name: `HDFCBANK`, `NIFTY 50`, `NIFTY 30APR25 PE 24000.00`.
2. Exchange/segment: `NSE (EQ)`, `MCXSPOT (EQ)`, `NSEFO`.
3. LTP and change: `1,657.55`, `7.70 (0.40%)`.
4. Optional event or tag: `AGM/EGM`, `Event`, `Pending`, `Good To Enter`.

Rules:
- Keep the symbol visible in every row/detail/order surface.
- Do not show price without exchange context where ambiguity is possible.
- Keep option expiry/strike/type readable and compact.

## Market movement pattern
| Movement | UI treatment |
|---|---|
| Up | Green value and/or upward arrow |
| Down | Red value and/or downward arrow |
| Neutral | Neutral value, no strong semantic color |
| Pending | Yellow tag or note |
| Failed/cancelled | Red-tinted tag |

Do not use color alone. Include sign, arrow, label, or status text.

## Buy and sell pattern
Confirmed screens show buy and sell actions as visually distinct.

Rules:
- Buy action: blue or green depending on product context, but must be consistently mapped per flow.
- Sell action: red.
- Side-by-side buy/sell CTAs should use equal size but distinct colors.
- Destructive sell/exit actions require clear instrument and quantity context.

## Order row pattern
Typical row fields:
- Instrument identity.
- Direction indicator or status tag.
- Quantity and average/placed price.
- LTP or order price.
- P&L or change.
- Order type and product type.

Rules:
- Right side is reserved for latest value/status.
- Status tag sits close to instrument identity or order metadata.
- Market/limit and delivery/intraday labels must not be hidden.

## Order ticket pattern
The company/order flow shows order pages with:
- Instrument header and LTP.
- Tabs for exchange or product context.
- Order type and market/limit choice.
- Quantity or lot input.
- Price field for limit orders.
- Numeric keypad or quick controls in some variants.
- Charges and margin information.
- Buy/sell CTA.

Rules:
- Recalculate margin and charges when quantity, price, product, or order type changes.
- Keep final CTA disabled until required fields are valid.
- Surface warnings before final order placement.

## Market depth pattern
Confirmed structure:
- Columns: Order, Qty, Bid, Ask, Qty, Order.
- Bid side uses green.
- Ask side uses red.
- Total quantity appears at bottom.
- Buy and sell CTAs appear below the table in detail view.

Rules:
- Preserve column labels.
- Align numbers by column.
- Use tabular numerals.
- Do not collapse market depth into unlabelled text.

## P&L pattern
Confirmed portfolio and recommendation cards show P&L and estimated profit/loss blocks.

Rules:
- Positive P&L: green.
- Negative P&L: red.
- Use amount plus percent where available.
- Keep day P&L and overall P&L visually separate.
- Do not hide loss values behind neutral grey.

## Margin and charges pattern
Confirmed bottom sheet shows:
- Actual required.
- Required now.
- Margin benefit.
- Required later.
- Charges.
- Note that amount is approximate and may vary.

Rules:
- Show margin required before order submit.
- Use expandable charges if detailed charges are available.
- Use plain language for margin benefit.
- Keep approximation disclaimer visible.

## Recommendations pattern
Confirmed recommendation cards include:
- Recommendation status such as Good To Enter or Stop Loss Hit.
- Instrument name.
- Strategy type.
- LTP/change.
- Maximum target.
- Capital required or max loss.
- Entry price, stop loss, target price.
- Buy or Sell CTA.
- Publish/update timestamps and suggested by fields in detail.

Rules:
- Recommendation status must be more prominent than generic category.
- Stop loss hit must use red treatment.
- Max target and potential growth can use green only when positive.
- Detail page must show risk, profit/loss, lot, and description before CTA.

## IPO and mutual fund patterns
### IPO
- Use open/upcoming/closed tabs.
- Show issue price/price band, lot size, min amount, listing date, listing gain/current gain, and status.
- Apply CTA must be visible only where applicable.

### Mutual fund
- Show scheme name, category, rating, min amount, lock-in, CAGR, NAV, and order CTA.
- CAGR can use green when positive.
- Do not overstate returns without period label.

## Error, warning, and confirmation states
Use these states across trading flows:
- Invalid quantity or price: inline error below field.
- Insufficient funds or margin: warning note plus add funds path.
- Order submitted: success or pending state with order ID where available.
- Order failed: red state with retry or support path.
- Cancelled: red-tinted status tag.
- Pending: yellow status tag.

## QA checklist
- Buy/sell colors are correct across all variants.
- P&L signs and colors match values.
- Market depth bid/ask colors do not swap.
- Charges and margin recalculate correctly.
- Order CTA disabled for invalid states.
- Long option names fit.
- Dark mode preserves red/green readability.
