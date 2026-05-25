# Visual Regression QA Checklist

Use this checklist after any LLM-generated FinX UI.

## Brand and tokens

- Uses Onest or configured fallback.
- Uses `#2777F3` for primary action/selected state.
- Uses `#1B1464` only as brand navy, not randomly.
- Uses `#45B644` for positive/success states.
- Uses `#DE493B` for negative/error/sell/destructive states.
- Uses neutral text hierarchy from the token set.
- Does not introduce new decorative gradients.

## Layout

- Screen has mobile-first 393px-style density unless requested otherwise.
- Page gutter is close to 16px.
- Cards use subtle borders and rounded corners.
- Cards are not visually heavy.
- Dense rows remain scannable.
- Bottom navigation/header matches FinX proportions.

## Financial readability

- LTP and key amounts are visually dominant.
- Numeric columns align consistently.
- P&L uses both color and sign/label where critical.
- Decimal precision is consistent.
- Rupee values use consistent formatting.
- Dates and expiry labels are explicit.

## Trading safety

- Buy/Sell actions are visually distinct.
- Order quantity, price, product, validity, and margin are visible before CTA.
- Warnings are shown before execution.
- Error states explain what the user can do next.
- Disabled actions look disabled and cannot be mistaken as active.

## Component parity

- Buttons match FinX radius and color.
- Tabs/segmented controls have clear selected states.
- Tags are compact and semantic.
- Inputs have labels, focus, error, and disabled states.
- Bottom sheets have clear header, body, and CTA hierarchy.
- Tables/listings are compact and aligned.

## Output rejection criteria

Reject and rebuild if the output:

- Looks like a generic neobank or SaaS dashboard.
- Uses oversized cards for dense trading data.
- Uses green/red as decoration.
- Has weak CTA hierarchy.
- Hides risk/margin/order confirmation details.
- Does not match reference SVG proportions.
