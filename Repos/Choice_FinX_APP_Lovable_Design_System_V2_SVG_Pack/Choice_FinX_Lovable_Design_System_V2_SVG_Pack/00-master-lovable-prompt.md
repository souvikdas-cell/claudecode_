# Master Lovable Prompt: Build in Choice FinX App Design Language

You are building UI for Choice FinX App, a fintech trading and investing product.

Use this ZIP as the design source of truth. Do not create a generic fintech UI. Use the actual FinX design language from the included Markdown files, JSON tokens, CSS variables, and SVG evidence.

## Source hierarchy

Use the files in this order:

1. `design-tokens.json`
2. `css-variables.css`
3. `00-design-system-index.md`
4. `06-component-library.md`
5. `08-trading-specific-ui-patterns.md`
6. `screen-blueprints/*.md`
7. `reference-svg/design-system/*.svg`
8. `reference-svg/*/*.svg`
9. `13-design-system-audit.md`
10. `14-svg-evidence-map.md`

## Product context

Choice FinX is a trading and investing app. The UI must feel sharp, compact, trustable, and production-grade. It must support dense financial information without losing scannability.

Critical constraints:

- Numeric clarity is more important than decoration.
- Buy/sell actions must be visually distinct.
- Profit/loss states must be instantly readable.
- Market movement colors must stay consistent.
- Dense screens must remain scannable.
- Risk, margin, order, and confirmation states need strong hierarchy.
- Empty, loading, error, and warning states must not look like placeholders.
- The UI should feel native to a real Indian trading app, not a generic portfolio dashboard.

## Visual language

Use:

- Light app background.
- White and soft-blue card surfaces.
- Primary blue `#2777F3`.
- Brand navy `#1B1464`.
- Success green `#45B644`.
- Error red `#DE493B`.
- Neutral text system from `#0F0E16` to `#87868A`.
- Subtle borders.
- Rounded cards.
- Onest typography.
- Strong numeric hierarchy.
- Compact spacing.
- Low noise.

Avoid:

- Loud gradients.
- Generic SaaS dashboards.
- Oversized marketing cards.
- Random illustrations.
- Heavy shadows.
- Inconsistent greens/reds.
- Text-heavy layouts.
- Decorative badges that do not communicate state.

## Build rules

When creating a screen:

1. Identify the closest existing screen blueprint.
2. Use the relevant component rules.
3. Use tokens from `design-tokens.json`.
4. Use reference SVGs for proportions, density, and visual evidence.
5. Keep screen width mobile-first unless asked otherwise.
6. Use exact FinX semantics for financial values.
7. Do not invent new color palettes.
8. Do not change the product character into a generic app.

## Component expectations

For every screen, construct the UI from these system pieces:

- Header
- Bottom navigation where applicable
- Cards
- Listing rows
- Tabs
- Tags/status pills
- Table/market-depth rows
- Chart/graph blocks
- Input fields
- Dropdowns
- Bottom sheets
- CTA bars
- Toasts
- Empty/loading/error/warning states

## Trading-specific rules

- LTP should dominate company/order surfaces.
- Price movement should appear next to price and use correct semantic color.
- Buy and sell CTAs must be visually separated and easy to scan.
- Order confirmation must show instrument, quantity, price type, order type, validity, margin/risk, and final CTA.
- Avoid ambiguity between market movement red/green and generic decorative red/green.
- Use right alignment for comparable numeric values.
- Use muted text for labels and high-emphasis text for values.
- Show warnings before execution, not after.

## Output quality

The UI should look like it belongs inside Choice FinX. It should be clean, compact, fintech-native, and implementation-ready.
