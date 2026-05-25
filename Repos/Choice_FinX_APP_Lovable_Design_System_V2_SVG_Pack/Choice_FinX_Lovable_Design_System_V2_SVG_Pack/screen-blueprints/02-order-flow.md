# Order Flow Blueprint

## Evidence files

- `reference-svg/screen-order-flow/059_Order_Page_-_Delivery.svg`
- `reference-svg/screen-order-flow/060_Order_Page_-_Delivery-1.svg`
- `reference-svg/screen-order-flow/064_Order_Page_-_Delivery-2.svg`
- `reference-svg/screen-order-flow/071_Order.svg`
- `reference-svg/screen-order-flow/072_Order-1.svg`
- `reference-svg/screen-order-flow/161_MF_Place_Order_-_On_click_of_the_Mutual_Fund_scheme_click_need_to_open_MF_Place_Order_page_shown_o__878787.svg`
- `reference-svg/screen-order-flow/171_Order_Flow.svg`

## Screen purpose

Enable fast, clear, low-error order placement for equity/F&O-style instruments.

## Layout structure

Instrument header with LTP and movement, Buy/Sell mode selection, order type controls, quantity/price inputs, product/validity fields, margin/risk summary, fixed bottom CTA.

## Core components

Header, buy/sell toggle, input fields, dropdowns, segmented controls, margin cards, warning strips, bottom CTA, confirmation bottom sheet.

## Data and numeric rules

Use strong numeric hierarchy for price and margin. Right-align comparable numeric fields. Use explicit labels for quantity, price, trigger, market/limit, product type, validity.

## States

Buy, sell, market, limit, insufficient balance, invalid quantity, price band warning, margin shortfall, confirmation, success, rejected order.

## Lovable build notes

This is not a generic checkout. It is a trading decision surface. Risk and margin must remain visible before execution.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
