# Content and Microcopy

## Voice
FinX copy should be direct, functional, and low-noise. The export uses short labels, concise statuses, and financial terms instead of marketing-heavy language.

## Label patterns
| Context | Pattern |
|---|---|
| Instrument | Symbol first, exchange second |
| Order | Status, order type, product type, quantity, price |
| Portfolio | Invested, current, day P&L, overall P&L, XIRR |
| Funds | Available for trading, ledger balance, charges, margin used |
| IPO | Price band, lot size, min amount, listing date, apply/view details |
| Mutual fund | Category, rating, min amount, lock-in, CAGR, NAV |
| Reports | Financial year, file type, access via |

## Number formatting
- Currency: use rupee symbol `₹` with Indian grouping where product requires it: `₹ 25,358.00`.
- Percent: use two decimals when precision matters: `0.40%`, `28.81%`.
- Change: show amount and percent together: `7.70 (0.40%)`.
- Large market volume: use compact suffixes when screen uses them: `2.51 L`, `271.76 Cr`.
- Quantity: label as `Qty` in dense rows.
- Lot: label as `Lot` and explain lot-to-quantity relation where required.

## Status copy
Use consistent status terms:
- `Pending`
- `Executed`
- `Cancelled`
- `Failed`
- `Delivered`
- `AMO Submitted`
- `Good To Enter`
- `Stop Loss Hit`
- `Bullish`
- `Bearish`
- `IPO Closed`
- `To be announced`

## CTA copy
Confirmed CTA patterns include:
- `Buy`
- `Sell`
- `Apply`
- `View More`
- `View Details`
- `Add Fund`
- `Submit`
- `Save`
- `Modify`
- `Cancel`
- `Calculate Brokerage`
- `Subscribe`

Rules:
- Use action verbs.
- Keep CTA labels short.
- Do not use vague CTAs like `Proceed` unless the next step is obvious.
- Avoid mixing noun and verb labels in the same CTA group.

## Error copy
Use specific errors:
- Bad: `Error`
- Good: `Enter correct Email ID`
- Good: `Enter valid UPI ID`
- Good: `Quantity must be in lot size of 75`
- Good: `Insufficient margin. Add funds to continue.`

## Warning and note copy
Confirmed note style:
- `Units will be allocated within 2-3 Working days subject to RTA clearance.`
- `The mentioned amount is approximate and may vary.`

Rules:
- Keep financial caveats explicit.
- Do not use alarming language unless risk is material.
- For pending states, mention what happens next.

## Trading microcopy rules
- Use `LTP`, `P&L`, `Qty`, `NAV`, `CAGR`, `XIRR` only where the user is expected to understand it. Add tooltip or helper text for less common terms.
- Do not abbreviate critical risk fields like `Stop Loss` in final confirmations.
- Use `Market` and `Limit` consistently for order type.
- Use `Delivery`, `Intraday`, or product-specific label consistently.

## Do
- Keep row copy compact.
- Use exact financial terms.
- Keep dates readable: `17 Feb '25`, `Apr 02, 2025`, or product-agreed format.
- Pair values with labels when ambiguity is possible.

## Do not
- Do not add promotional copy inside order forms.
- Do not hide legal or risk disclaimers inside tooltips only.
- Do not use inconsistent capitalization for the same status.
- Do not mix `View Details` and `View More` randomly inside the same product area.

## Needs confirmation
- Final date format by product area.
- Whether Indian grouping is mandatory across all rupee values.
- Final glossary for trading abbreviations.
