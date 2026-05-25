# Brand and Product Principles

## Product identity
Choice FinX is a fintech trading and investing app. The export shows one design language used across watchlist, order, portfolio, company detail, funds, IPO, mutual funds, baskets, reports, recommendations, calculators, and secured products.

## Confirmed visual direction
- Light mode is the primary app surface across most Figma screens.
- Dark mode exists for selected product screens and full component variants.
- Primary action color is blue `#2777F3`.
- Brand navy `#1B1464` anchors page headings and design-system documentation.
- Positive, negative, warning, information, and dark-mode tokens are explicitly defined.
- Onest is the system font in the uploaded design-system boards.
- Mobile screens use card-based sections, compact tabs, bottom navigation, top headers, sticky action zones, and bottom sheets.

## Product principles

### 1. Numeric clarity before decoration
Numbers are the product. Price, P&L, margin, quantity, order value, NAV, CAGR, listing gain, and market depth must be visually precise.

Rules:
- Keep numbers right-aligned in rows and tables when comparing values.
- Use tabular numerals wherever supported.
- Keep decimal precision consistent inside the same component.
- Use color only to support meaning, not to decorate.

### 2. Action safety for trading flows
Trading screens must reduce accidental actions.

Rules:
- Buy and sell actions must be visually distinct.
- Confirmation, charges, margin required, and order status must be visible before final action.
- Disabled states must be clearly inactive.
- Focus states must be visible for accessibility and QA.

### 3. Dense screens must remain scannable
The export uses dense but structured watchlist, order, market depth, holdings, reports, and recommendation screens.

Rules:
- Use compact rows with predictable left, middle, and right zones.
- Keep separators subtle but present.
- Use tabs and chips to narrow data before adding long lists.
- Prefer progressive disclosure through bottom sheets and detail pages.

### 4. Semantic color consistency
The same meaning must keep the same color across the app.

Rules:
- Green means positive, profit, success, target hit, gain, or upward movement.
- Red means negative, loss, error, sell, failed, bearish, stop loss, or downward movement.
- Yellow means pending, warning, AMO, or attention.
- Blue means primary action, link, selected state, information, or brand accent.

### 5. Native mobile behavior
The screens follow native mobile patterns: bottom navigation, top header, segmented tabs, bottom sheets, list rows, sticky CTAs, and system safe areas.

Rules:
- Keep a single primary scroll direction per screen.
- Keep high-risk actions near confirmation details.
- Do not place destructive and constructive CTAs with the same visual weight.
- Preserve system safe area and bottom home indicator spacing.

## Inferred product hierarchy
1. Market context: index cards, LTP, change, chart, watchlist.
2. Decision context: fundamentals, technicals, recommendations, risk, target, stop loss.
3. Action context: buy, sell, apply, add fund, submit, calculate.
4. Confirmation context: order status, charges, margin, payment, reports.
5. Support context: help, profile, feedback, statements, bank, insurance.

## Anti-patterns
- Do not use generic gradients on dense trading tables.
- Do not mix green and red for non-market meanings unless tagged clearly.
- Do not place important numeric values in low-contrast grey.
- Do not remove bottom sheet close controls.
- Do not make chips look like primary buttons.
- Do not use large empty hero sections inside trading workflows.
