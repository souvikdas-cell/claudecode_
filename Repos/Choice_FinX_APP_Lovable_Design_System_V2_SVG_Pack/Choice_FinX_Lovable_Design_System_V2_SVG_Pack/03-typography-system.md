# Typography System

## Confirmed font
The typography boards use **Onest** as the font family across display, heading, and body styles.

Recommended fallback stack:
```css
font-family: "Onest", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## Confirmed app typography scale
The more compact typography board appears aligned to mobile app usage.

| Style | Weight variants | Size | Line height | Typical usage |
|---|---|---:|---:|---|
| Display Large | Semi Bold | 32 | 36 | Company LTP, hero numeric display, major value |
| Heading Large | Bold, Semi Bold, Regular | 18 | 21 | Page section title, major section label |
| Heading Mid | Bold, Semi Bold, Regular | 16 | 20 | Subheading, card title, list group title |
| Body Large | Bold, Semi Bold, Regular | 16 | 20 | Input label, important row text, CTA text |
| Body Medium | Bold, Semi Bold, Regular | 14 | 18 | Generic use, row body, labels, values |
| Body Small | Bold, Semi Bold, Regular | 12 | 16 | Meta labels, tags, timestamps, secondary values |

## Confirmed extended typography scale
Another board includes a larger extended scale. Use this for non-dense surfaces, web views, campaign content, and large app sections.

| Style | Weight variants | Size | Line height |
|---|---|---:|---:|
| Heading Extra Large | Bold, Semi, Regular | 36 | 40 |
| Heading Large | Bold, Semi, Regular | 32 | 36 |
| Heading Medium | Bold, Semi, Regular | 26 | 30 |
| Heading Small | Bold, Semi, Regular | 21 | 24 |
| Heading Extra Small | Bold, Semi, Regular | 18 | 21 |
| Body Extra Large | Bold, Semi, Regular | 20 | 24 |
| Body Large | Bold, Semi, Regular | 18 | 22 |
| Body Medium | Bold, Semi, Regular | 16 | 20 |
| Body Small | Bold, Semi, Regular | 14 | 18 |
| Body Extra Small | Bold, Semi, Regular | 12 | 16 |
| Body Extra Small 2 | Bold, Semi, Regular | 10 | 14 |

## Numeric hierarchy
Confirmed screens use large, strong numeric values for LTP, amount, balance, CAGR, P&L, margin, and order quantities.

Rules:
- Use Semi Bold or Bold for primary numbers.
- Use Regular or Medium for labels.
- Use smaller line-height for compact rows, but never below readable density.
- Use tabular numeric rendering where available.

CSS:
```css
.numeric {
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.01em;
}
```

## Text roles
| Role | Style recommendation |
|---|---|
| Page title | Heading Large Semi or Bold, 18/21 |
| Section title | Heading Large or Heading Mid, 16 to 18 |
| Card title | Heading Mid Semi, 16/20 |
| Primary list value | Body Medium Bold, 14/18 |
| Secondary label | Body Small Regular, 12/16 |
| CTA label | Body Medium Semi or Body Large Semi |
| Tag label | Body Small Semi, 10 to 12 |
| Helper/error text | Body Small Regular, 12/16 |

## Trading text rules
- Keep scrip names uppercase when shown as symbols: `HDFCBANK`, `NIFTY 50`, `SENSEX`.
- Keep exchange and segment in small secondary text: `NSE (EQ)`, `MCXSPOT (EQ)`.
- Show price and percentage change together when space allows: `7.70 (0.40%)`.
- Use consistent capitalization for order fields: `Order Type`, `Market Type`, `Validity / Products`.
- Avoid long marketing text inside trading rows.

## Do
- Use Onest everywhere.
- Use stronger weight for money, LTP, quantity, and P&L.
- Keep labels grey and values dark.
- Pair color-coded numbers with signs or labels.

## Do not
- Do not use more than three type sizes in one dense card.
- Do not use light grey for important values.
- Do not use large heading sizes inside watchlist or order rows.
- Do not mix unrelated font families.

## Needs confirmation
- Final engineering token names for typography.
- Whether the compact or extended scale is the official default for all app screens.
- Whether Onest is bundled locally or loaded through an app-level font provider.


## V2 SVG note

Many typography board SVGs convert text to vector paths. Use the confirmed typography scale from this document and `design-tokens.json` for implementation. Do not treat path outlines as production text. Live UI must render text with Onest.
