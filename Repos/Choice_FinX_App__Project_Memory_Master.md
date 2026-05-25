# Choice FinX App Design System — Claude Project Memory Master

**Purpose:** Single-file knowledge pack for Claude Project Memory / Project Knowledge.

**How to use:** Add this entire Markdown file to Claude Project Knowledge. When asking Claude to generate FinX App UI, HTML, React, product screens, trading widgets, or design-system guidance, instruct it to follow this file as the source of truth.

**Scope:** This master file combines the lightweight Lovable/LLM knowledge pack: Markdown design-system docs, design tokens, CSS variables, Tailwind mapping, build rules, QA checklist, README, and manifest.

**Important use rule:** Treat confirmed rules as stronger than inferred rules. Do not invent non-FinX visual styles when this file provides a rule.

---

## Master Contents



---

# 01. Source File: `00-master-lovable-prompt.md`

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


---

# 02. Source File: `00-design-system-index.md`

# Choice FinX App Design System Knowledge Pack V2

This is the SVG-enhanced Lovable-ready design-system pack for Choice FinX App.

## What changed in V2

The earlier Markdown pack described the FinX design language. This V2 pack adds direct SVG evidence from the latest exports, token files, source inventory, and Lovable build instructions.

## Audit summary

| Source area | Count |
|---|---:|
| Total SVG files audited | 175 |
| Design-system board SVGs | 44 |
| Product / app screen SVGs | 131 |
| Platform screenshot SVGs | 9 |
| Total source categories | 14 |

## Generated files

### Core Lovable files
- `00-master-lovable-prompt.md`
- `design-tokens.json`
- `css-variables.css`
- `tailwind-token-map.md`
- `19-lovable-build-rules.md`
- `20-visual-regression-qa-checklist.md`

### Design system documentation
- `01-brand-and-product-principles.md`
- `02-color-system.md`
- `03-typography-system.md`
- `04-spacing-layout-grid.md`
- `05-iconography-assets.md`
- `06-component-library.md`
- `07-navigation-and-information-architecture.md`
- `08-trading-specific-ui-patterns.md`
- `09-motion-and-interaction.md`
- `10-content-and-microcopy.md`
- `11-accessibility-and-usability.md`
- `12-developer-handoff-guidelines.md`
- `13-design-system-audit.md`
- `14-svg-evidence-map.md`

### Screen blueprints
- `screen-blueprints/01-watchlist.md`
- `screen-blueprints/02-order-flow.md`
- `screen-blueprints/03-company-detail.md`
- `screen-blueprints/04-portfolio.md`
- `screen-blueprints/05-funds-bank.md`
- `screen-blueprints/06-ipo.md`
- `screen-blueprints/07-mutual-funds.md`
- `screen-blueprints/08-reports.md`
- `screen-blueprints/09-more-profile.md`
- `screen-blueprints/10-market-recommendations.md`

### Evidence folders
- `reference-svg/design-system/`
- `reference-svg/screen-watchlist/`
- `reference-svg/screen-order-flow/`
- `reference-svg/screen-company-detail/`
- `reference-svg/screen-portfolio/`
- `reference-svg/screen-funds-bank/`
- `reference-svg/screen-ipo/`
- `reference-svg/screen-mutual-fund/`
- `reference-svg/screen-reports/`
- `reference-svg/screen-more-profile/`
- `reference-svg/screen-market/`
- `reference-svg/screen-recommendations/`
- `reference-svg/screen-onboarding-login/`
- `reference-svg/platform-screens/`
- `reference-svg/screens-misc/`

### Metadata
- `metadata/svg-source-inventory.csv`
- `metadata/svg-color-frequency.csv`
- `metadata/svg-dimension-summary.csv`

## How to use this with Lovable

1. Upload this full ZIP.
2. Paste `00-master-lovable-prompt.md`.
3. Ask Lovable to use `design-tokens.json` and `css-variables.css` as hard constraints.
4. Mention the specific screen you want.
5. Point Lovable to the relevant `screen-blueprints` file and matching `reference-svg` folder.
6. Ask for visual parity against SVG references before adding new UI ideas.

## Evidence level

- Confirmed: visible in SVG design-system boards or product screens.
- Observed: extracted directly from SVG source.
- Inferred: derived from repeated patterns across screens.
- Needs confirmation: should be validated by design/product before hard-coding.


---

# 03. Source File: `01-brand-and-product-principles.md`

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


---

# 04. Source File: `02-color-system.md`

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


---

# 05. Source File: `03-typography-system.md`

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


---

# 06. Source File: `04-spacing-layout-grid.md`

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


---

# 07. Source File: `05-iconography-assets.md`

# Iconography and Assets

## Evidence status

The V2 pack includes SVG exports. This makes icon and asset reconstruction stronger than the PNG-only pack.

## How to use SVG evidence

Use these folders:

- `reference-svg/design-system/` for icon/component rules where visible.
- `reference-svg/screens-misc/` and screen folders for real app usage.
- `metadata/svg-source-inventory.csv` to locate source files.

## Confirmed direction

FinX iconography is functional and compact. Icons support navigation, actions, status, and dense product discovery. They should not dominate the screen.

## Icon rules

- Use simple line or filled icon treatments depending on the source component.
- Keep icons secondary to numbers and labels.
- Active icons should use primary blue `#2777F3` where navigation or selected state requires it.
- Disabled icons should use muted neutrals.
- Status icons should use semantic colors only when needed.
- Do not mix multiple icon styles inside the same navigation or row group.

## Asset rules

- Product screens use restrained app-native visuals.
- Avoid generic fintech illustrations unless the existing screen evidence shows that pattern.
- Use chart, graph, row, card, and status visuals as first-class product assets.
- When generating with Lovable, prefer reconstructing UI components from tokens over embedding static SVG screenshots.

## Developer notes

- Treat exported SVGs as evidence, not final production assets unless design explicitly confirms them.
- Create a final cleaned icon library only after separating reusable icons from screen-specific vector fragments.
- If a generated SVG contains text converted to paths, do not use it as live UI text. Recreate text using Onest and tokenized typography.
- For accessibility, decorative icons should be hidden from screen readers; meaningful icons need labels or adjacent text.

## QA checklist

- Icons are consistent in stroke/fill style.
- Icon size is consistent within each component family.
- Active/selected icon color is correct.
- Icons do not reduce numeric readability.
- SVGs are optimized before production use.


---

# 08. Source File: `06-component-library.md`

# Component Library

## Scope
This file documents the reusable FinX components visible in the uploaded design-system boards and app screens. Each component includes purpose, anatomy, variants, states, behavior, usage rules, do, do not, developer notes, and QA checklist.

## Component inventory
- Buttons
- Text buttons and links
- Tabs and segmented groups
- Tags and status pills
- Input fields
- Dropdowns
- Checkboxes and radio buttons
- Bottom navigation
- Headers
- Cards
- Listing rows
- Tables and market depth
- Bottom sheets
- Toasts and notes
- Graphs and charts
- Tooltips
- Search listing chips
- Order ticket and order detail surfaces

## Buttons

### Purpose
Trigger primary app actions such as Buy, Sell, Apply, Add Fund, Submit, Save, Calculate Brokerage, and Modify.

### Anatomy
- Container with rounded corners
- Label centered
- Optional icon for some text actions
- Semantic fill, stroke, or text treatment

### Variants
- Primary filled
- Secondary outlined
- Text button
- Stroke button
- Tonal button
- Ghost button
- Large, medium, small sizes
- Buy, sell, and generic primary action colors

### States
- Normal
- Hover/press
- Focused
- Disabled

### Behavior
- Press state darkens filled buttons
- Focus state adds visible outline
- Disabled state uses grey fill/stroke and muted text
- Primary CTAs stay visually dominant

### Usage rules
- Use one primary CTA per decision area
- Use red for sell/destructive trading actions
- Use blue for generic buy/apply/submit actions unless product explicitly specifies green buy
- Use secondary buttons for lower-priority actions

### Do
- Keep CTA label short
- Pair high-risk CTAs with confirmation data
- Use full-width CTA in bottom sheet footer
- Use two-button layout only when choices are genuinely parallel

### Do not
- Do not use text buttons for final order placement
- Do not use green and red together without clear buy/sell meaning
- Do not make disabled buttons look active
- Do not overload a row with more than two CTAs

### Developer notes
- Tokenize color by semantic action
- Minimum tap target should be 44px
- Use `button` semantics in web views
- Maintain focus state for keyboard and accessibility

### QA checklist
- Normal, pressed, focused, disabled states render correctly
- Long labels do not wrap badly
- Sell buttons are red
- Primary CTA remains visible above safe area
- CTA is not hidden by keyboard

## Tabs and segmented groups

### Purpose
Switch between sibling content groups such as Equity, Derivative, Commodity, Currency, Position, Order, GTT, MF Orders, Top Gainers, Pending, Executed, Stocks, Mutual Funds, and Baskets.

### Anatomy
- Tab label
- Optional count
- Active indicator or active chip treatment
- Scrollable or grouped container

### Variants
- Primary tabs
- Secondary tabs
- Chip-like tabs
- Tabs with counts
- Product category tabs

### States
- Default
- Selected
- Disabled or unavailable
- Overflow scroll

### Behavior
- Selecting a tab swaps the visible content without navigating away
- Active tab uses blue text or underline
- Secondary chips use lighter outlines and fills

### Usage rules
- Use tabs only for parallel categories
- Keep labels short
- Use counts only when they help trading or order status decisions
- Keep active indicator persistent

### Do
- Use tabs to reduce data density
- Preserve selected tab after returning to screen
- Use horizontal scroll for many categories

### Do not
- Do not use tabs for sequential steps
- Do not hide key status in inactive tabs
- Do not use long phrases as tab labels

### Developer notes
- Implement as accessible tablist where possible
- Store active key in state
- Support deep-linking where product flow requires it

### QA checklist
- Selected tab is clearly visible
- Counts update correctly
- Horizontal scroll works
- Screen reader announces selected state

## Tags and status pills

### Purpose
Communicate order, transaction, IPO, recommendation, notification, and delivery states in compact form.

### Anatomy
- Rounded pill container
- Short label
- Optional icon
- Semantic background and text color

### Variants
- Cancelled
- Success
- AMO Submitted
- Delivered
- IPO
- Basket Detail
- Pending
- Failed
- Bullish
- Bearish
- Good To Enter
- Stop Loss Hit

### States
- Default
- Positive
- Negative
- Warning
- Information
- Disabled/inactive

### Behavior
- Tags do not trigger major actions unless styled as filters
- Status tags update with backend status
- Filter chips can be selected/deselected

### Usage rules
- Use tags for status, category, or market view
- Keep text under two words where possible
- Use semantic colors consistently

### Do
- Pair tag color with label
- Use warning yellow for pending
- Use red for failed/cancelled/bearish/stop loss
- Use green for success/bullish/target hit

### Do not
- Do not use tags as primary CTAs
- Do not use yellow with white text
- Do not overload rows with too many pills

### Developer notes
- Create a status enum to avoid inconsistent labels
- Map backend statuses to design tokens
- Use fixed padding and radius for all pills

### QA checklist
- Status text matches backend
- Color matches semantic state
- Long status does not overflow
- Dark-mode contrast passes

## Input fields

### Purpose
Capture values such as email ID, UPI ID, quantity, lot, price, search text, and investment amount.

### Anatomy
- Label or placeholder
- Input container
- Entered value
- Optional leading/trailing icon
- Helper or error text
- Optional stepper controls

### Variants
- Text input
- Email input
- UPI input
- Search input
- Quantity stepper
- Amount confirmation field

### States
- Empty
- Filled
- Focused
- Error
- Disabled
- Read-only

### Behavior
- Focus highlights field
- Error shows red message below
- Stepper increments/decrements value
- Search triggers filtered list

### Usage rules
- Validate financial fields immediately but do not block typing unnecessarily
- Show min investment and required format near the field
- Keep error messages specific

### Do
- Use numeric keyboard for amount and quantity
- Show rupee prefix where amount is entered
- Keep labels visible for important financial inputs

### Do not
- Do not rely only on placeholder for critical fields
- Do not show generic error text
- Do not allow invalid lot or quantity silently

### Developer notes
- Use input type and keyboard hints
- Keep validation schema close to backend rules
- Support paste for UPI and email
- Preserve values across bottom-sheet reopen

### QA checklist
- Focused state visible
- Error state visible
- Keyboard does not cover CTA
- Invalid formats blocked or explained
- Stepper respects min/max

## Dropdowns

### Purpose
Let users choose among account, ledger, statement, format, access, or schedule options.

### Anatomy
- Trigger field
- Selected value
- Chevron
- Optional icon
- Popup or bottom sheet list

### Variants
- Ledger
- MTF Ledger
- Monthly on 18th
- Individual

### States
- Default
- Open
- Selected
- Disabled

### Behavior
- Tap opens options
- Selection updates trigger value
- Close on outside tap or selection

### Usage rules
- Use dropdowns for low-frequency choices
- Use radio groups when all choices must be visible before submission

### Do
- Keep selected value readable
- Use clear field title
- Use bottom sheet for longer option lists on mobile

### Do not
- Do not hide mandatory decisions inside unclear dropdowns
- Do not mix dropdown and free text behavior

### Developer notes
- Support keyboard and screen reader roles
- Debounce remote option loading if applicable

### QA checklist
- Chevron state changes
- Selection persists
- Long option text truncates gracefully
- Dark mode styles apply

## Checkboxes and radio buttons

### Purpose
Support consent, filters, preference selection, financial year selection, file format, and access method choices.

### Anatomy
- Control
- Label
- Optional helper text
- Optional group title

### Variants
- Checkbox
- Radio button
- Single-select group
- Multi-select filter group

### States
- Unchecked
- Checked
- Focused
- Disabled
- Error

### Behavior
- Checkbox toggles independently
- Radio group allows one selected option
- Submit uses current selected values

### Usage rules
- Use checkboxes for independent filters
- Use radio buttons for mutually exclusive choices
- Place selected state clearly near label

### Do
- Keep label tappable
- Group related controls
- Use blue for selected state

### Do not
- Do not use checkboxes for single mandatory choice
- Do not make small controls hard to tap

### Developer notes
- Wrap input and label in one accessible control
- Expose checked state to assistive tech

### QA checklist
- Tap label toggles control
- Selected state visible
- Group validation works
- Controls meet tap target

## Bottom navigation

### Purpose
Provide persistent primary navigation across core app sections.

### Anatomy
- Five icon-label items
- Home
- Watchlist
- Order
- Portfolio
- More
- Home indicator safe area

### Variants
- Active item
- Inactive item
- Light mode
- Dark mode

### States
- Default
- Selected
- Inactive
- Disabled inferred

### Behavior
- Active item uses primary blue
- Inactive items use grey
- Tap navigates to root section

### Usage rules
- Use only the five primary destinations
- Keep labels stable
- Do not use bottom nav inside full-screen modals unless required by app shell

### Do
- Preserve bottom safe area
- Keep active state accurate
- Keep icon and text aligned

### Do not
- Do not add more than five items
- Do not hide current section state

### Developer notes
- Use route state to set active item
- Avoid remounting heavy lists when switching tabs unless needed

### QA checklist
- Each item is tappable
- Selected state matches screen
- Safe area is respected
- Labels do not truncate

## Headers

### Purpose
Identify page context and provide navigation or utility actions.

### Anatomy
- Back or logo
- Title or symbol
- Subtitle/segment
- Optional LTP after scroll
- Action icons: search, notification, help, share, bookmark, sort

### Variants
- Portfolio header
- Login/signup header
- Watchlist header
- Company/order before scroll
- Company/order after scroll
- Profile header
- Generic header
- Mutual fund header

### States
- Default
- Scrolled/sticky
- Action-visible
- Search-active

### Behavior
- Back returns to previous screen
- Scrolled header may show compact LTP/change
- Actions open search, help, share, or sort

### Usage rules
- Keep header height compact
- Use sticky compact header when long company detail page scrolls
- Keep title and key context visible

### Do
- Use back arrow for deep screens
- Use logo for app roots
- Use right icons only when relevant

### Do not
- Do not overload header with more than three actions
- Do not hide instrument identity on order screens

### Developer notes
- Use safe-area aware header
- Support long titles with truncation
- Attach analytics to action icons

### QA checklist
- Back behavior correct
- Scrolled state updates correctly
- Long title truncates
- Dark mode icons visible

## Cards

### Purpose
Group financial information, recommendations, IPO data, basket data, portfolio summaries, ledger items, and product entries.

### Anatomy
- Container
- Title/identity
- Metric rows
- Semantic values
- Optional tags
- Optional CTA
- Optional icon/logo

### Variants
- Summary card
- Futures card
- Related company card
- Portfolio card
- Basket detail card
- Ledger card
- P&L report card
- Recommendation card
- Notification card
- IPO card
- Treasury bill card
- Mutual fund card

### States
- Default
- Selected
- Positive
- Negative
- Warning
- Disabled/closed
- Skeleton/loading inferred

### Behavior
- Cards can navigate, expand, or expose CTA depending on product type
- Recommendation cards can lead to buy/sell or details
- IPO cards can apply or view details

### Usage rules
- Use cards when data has multiple related fields
- Keep the top-left as identity and top-right as primary value/status
- Use CTA only when action is direct and clear

### Do
- Use subtle border
- Use semantic background blocks for profit/loss
- Keep card content scannable

### Do not
- Do not put unrelated metrics in one card
- Do not use heavy shadows
- Do not bury risk below CTA

### Developer notes
- Create reusable card shells with slots
- Allow logo fallback
- Support long names and large numbers

### QA checklist
- Long names wrap or truncate correctly
- Semantic colors correct
- CTA disabled when unavailable
- Card tap and CTA tap do not conflict

## Listing rows

### Purpose
Represent repeated instruments, orders, positions, holdings, reports, profile items, transactions, and search results.

### Anatomy
- Left identity block
- Optional icon/trend
- Secondary metadata
- Right value block
- Optional status tag
- Optional navigation chevron

### Variants
- Watchlist row
- Order row
- Position row
- Holding row
- Market gainer row
- Transaction row
- Profile row
- Search listing chip
- Trending strike row

### States
- Default
- Positive
- Negative
- Pending
- Cancelled
- Failed
- Selected/editable

### Behavior
- Rows navigate to detail or expose actions depending on context
- Editable rows show drag handle and remove icon
- Search rows can be added or selected

### Usage rules
- Keep identity left and latest value right
- Use metadata for exchange, qty, avg price, product type
- Use separators for long lists

### Do
- Align values
- Use short symbols
- Show status tags only when they change action meaning

### Do not
- Do not mix row structures within the same list
- Do not hide exchange or product type in trading rows

### Developer notes
- Virtualize long lists
- Use stable row keys
- Support swipe or edit mode only if product specifies it

### QA checklist
- Rows align across list
- Large values fit
- Status updates correctly
- Edit mode controls work

## Tables and market depth

### Purpose
Show high-density numeric comparison such as market depth, order details, OHLC, buy/sell quantities, reports, and top gainers.

### Anatomy
- Column headers
- Rows
- Numeric cells
- Dividers
- Optional totals row
- Semantic bid/ask colors

### Variants
- Market depth table
- Top gainer table
- Order detail metrics
- Funds ledger details
- Portfolio details

### States
- Default
- Positive/negative cell
- Expanded
- Loading inferred
- Empty inferred

### Behavior
- Rows are read-only unless row-level action is explicitly available
- Expanded details reveal secondary metrics

### Usage rules
- Use table only when comparison across rows or columns matters
- Align numeric values consistently
- Keep headers visible where needed

### Do
- Use green for bid
- Use red for ask
- Use totals row
- Separate sections with clear labels

### Do not
- Do not use center alignment for financial values
- Do not remove column labels in complex tables

### Developer notes
- Use tabular numerals
- Keep column width responsive
- Round/truncate consistently

### QA checklist
- Columns do not collapse
- Values align
- Bid/ask colors correct
- Totals compute correctly

## Bottom sheets

### Purpose
Handle secondary decisions without leaving the current screen, including order charges, filters, preferences, IPO status, and reports export.

### Anatomy
- Dimmed backdrop
- Sheet surface
- Title
- Close icon
- Content sections
- Footer CTA
- Safe area

### Variants
- Order charges
- Filter and sort
- Start page preference
- Reports filter
- IPO status

### States
- Closed
- Open
- Scrollable
- Submitting/loading inferred
- Error inferred

### Behavior
- Slides from bottom
- Closes through close icon/backdrop/back
- Footer CTA stays accessible
- Content may scroll independently

### Usage rules
- Use for temporary choices
- Keep primary context visible where possible
- Use full page only for complex multi-step flows

### Do
- Show title clearly
- Keep close icon
- Use single primary CTA
- Group options by label

### Do not
- Do not use bottom sheets for critical final confirmations without clear data
- Do not trap user without close or back behavior

### Developer notes
- Lock background scroll
- Respect keyboard and safe area
- Persist selected filters until apply/clear

### QA checklist
- Open/close works
- Backdrop dims
- Footer visible
- Back button closes
- Keyboard does not cover inputs

## Toasts and notes

### Purpose
Communicate temporary or contextual messages for info, warning, success, and error states.

### Anatomy
- Optional icon
- Message text
- Semantic surface
- Optional close/action inferred

### Variants
- Info
- Warning
- Success
- Error
- With icon
- Without icon

### States
- Visible
- Dismissed
- Auto-dismiss inferred
- Persistent note inferred

### Behavior
- Toast appears near context or standard app toast area
- Notes can be embedded in forms, order status, or allocation messages

### Usage rules
- Use toasts for short messages
- Use embedded notes for financial caveats
- Use error state for blocked actions

### Do
- Keep message concise
- Use semantic color
- Include action only if needed

### Do not
- Do not use toast for irreversible confirmation
- Do not show multiple stacked messages over dense order content

### Developer notes
- Create toast type enum
- Support reduced motion
- Ensure screen reader announcement for critical states

### QA checklist
- Message readable
- Color type correct
- Dismiss timing acceptable
- Dark-mode contrast passes

## Graphs and charts

### Purpose
Visualize price movement, score, returns, performance, market cap distribution, and market depth distribution.

### Anatomy
- Chart canvas
- Line or gauge
- Tooltip
- Time-range selector
- Legend or labels
- Watermark where used

### Variants
- Score gauge
- Company detail price line chart
- Mutual fund returns chart
- Performance donut
- Market cap distribution bar
- Market depth ratio bar

### States
- Default
- Selected time range
- Tooltip active
- Empty/loading/error inferred

### Behavior
- Tap or drag reveals tooltip
- Time range changes chart data
- Chart must not block scroll gestures incorrectly

### Usage rules
- Use charts to support decision, not decorate
- Keep tooltip compact
- Use semantic colors consistently

### Do
- Show axis or reference where needed
- Keep time range controls visible
- Use blue for selected period

### Do not
- Do not use complex chart visuals in tiny cards
- Do not hide data source/date when relevant

### Developer notes
- Use responsive chart container
- Debounce tooltip updates
- Use accessible summary text

### QA checklist
- Tooltip correct
- Selected time range highlighted
- Chart handles no data
- Data labels do not overlap

## Tooltips

### Purpose
Explain short terms such as key metrics, charges, or financial labels.

### Anatomy
- Trigger icon
- Tooltip container
- Short title or body
- Pointer/callout inferred

### Variants
- Light tooltip
- Dark tooltip

### States
- Hidden
- Visible
- Dismissed

### Behavior
- Tap or hover trigger opens tooltip
- Tap outside or second tap closes

### Usage rules
- Use for one-line clarification
- Prefer bottom sheet for long education

### Do
- Keep text short
- Anchor near trigger
- Support dark mode

### Do not
- Do not hide critical trading risk only inside tooltip
- Do not use tooltip for mandatory disclosures

### Developer notes
- Position to avoid clipping
- Expose as accessible description

### QA checklist
- Does not clip
- Dismiss works
- Readable on both themes

## Order ticket and order detail surfaces

### Purpose
Capture and confirm trading order choices such as buy/sell, order type, market/limit, quantity, price, validity, product, charges, and margin.

### Anatomy
- Instrument header
- LTP/change
- Buy/sell toggle or CTA
- Order inputs
- Quick quantity keypad
- Charge/margin note
- Primary action
- Status/details view

### Variants
- Buy order
- Sell order
- Market
- Limit
- Pending order detail
- Cancelled order detail
- Executed order detail
- GTT and MF order rows

### States
- Draft
- Valid
- Invalid
- Submitting inferred
- Pending
- Executed
- Cancelled
- Failed

### Behavior
- Changing quantity/order type recalculates required amount
- Charges bottom sheet explains cost
- Order detail bottom sheet shows status and audit fields

### Usage rules
- Keep instrument identity visible
- Show risk and charge context before final CTA
- Use red for sell and blue/green for buy according to product mapping

### Do
- Show product type and validity
- Validate lot and quantity
- Provide details for pending/cancelled orders

### Do not
- Do not allow final action without required values
- Do not hide charges behind unclear label
- Do not make sell and buy equal color

### Developer notes
- Connect form state to backend validations
- Block repeated submissions
- Track CTA and order type changes

### QA checklist
- Validation works
- Margin updates
- Charges open
- Submit disabled when invalid
- Status mapping correct


## V2 SVG evidence usage

Before implementing any component, check the closest SVG design-system board in `reference-svg/design-system/`. The SVG files provide stronger evidence for proportions, corner radius, visual density, and state treatment than the earlier PNG-only audit.

Do not copy full SVG component boards into production. Recreate components with live UI, tokens, and accessible states.


---

# 09. Source File: `07-navigation-and-information-architecture.md`

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


---

# 10. Source File: `08-trading-specific-ui-patterns.md`

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


---

# 11. Source File: `09-motion-and-interaction.md`

# Motion and Interaction

## Evidence level
The uploaded export is primarily static PNG screens and component boards. Motion rules below are inferred from visible states such as hover/press/focused buttons, bottom sheets, filters, tabs, and modal backdrops.

## Confirmed interaction states
- Buttons include normal, hover/press, focused, and disabled states.
- Tabs include active and inactive states.
- Inputs include normal, filled, focused, and error states.
- Bottom sheets appear with dimmed background.
- Filter and order detail states appear as overlays.
- Header changes after scroll in company/order flow.

## Motion principles
- Motion should clarify state change, not decorate.
- Use short transitions for trading actions.
- Avoid slow animation before order placement or confirmation.
- Respect reduced-motion settings.
- Do not animate numeric market values in a way that harms readability.

## Recommended durations
| Interaction | Duration | Easing |
|---|---:|---|
| Button press | 80 to 120ms | ease-out |
| Tab switch indicator | 120 to 180ms | ease-out |
| Bottom sheet open/close | 220 to 280ms | ease-out open, ease-in close |
| Toast enter/exit | 180 to 220ms | ease-out |
| Header compact transition | 120 to 180ms | linear/ease-out |
| Skeleton shimmer | 1000 to 1400ms | linear, optional |

## Bottom sheet behavior
- Slide from bottom.
- Dim background immediately.
- Lock background scroll.
- Close on close icon, Android back, and optional backdrop tap depending on risk level.
- High-risk sheets should not close accidentally if unsaved critical values exist.

## Button behavior
- Press state should visibly darken or compress slightly.
- Focus state should show a visible outline.
- Disabled state should not respond to taps.
- Loading state should prevent duplicate submission.

## Tab and chip behavior
- Selected tab updates content without page reload.
- Active chip can use blue fill, blue outline, or blue label based on variant.
- Horizontal chip lists must allow native horizontal scroll.

## Data updates
- Price, P&L, and market data updates should not create distracting animation.
- If values update live, use subtle flash only when product defines it.
- Use stable layout so values do not jump.

## Empty/loading/error interactions
- Empty state CTA should be single and clear.
- Loading state should preserve the final layout shape.
- Error state should include retry, edit, or support path.
- Warning state should not block unless action would be unsafe.

## QA checklist
- No animation delays trading action beyond necessary feedback.
- Bottom sheet does not stutter on low-end Android devices.
- Focus state is visible with keyboard navigation.
- Reduced-motion mode disables decorative animation.
- Live data updates do not move layout unexpectedly.


---

# 12. Source File: `10-content-and-microcopy.md`

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


---

# 13. Source File: `11-accessibility-and-usability.md`

# Accessibility and Usability

## Core requirements
FinX handles financial and trading actions. Accessibility must support safe decision-making, not just compliance.

## Color accessibility
- Do not use red and green as the only indicator of movement or status.
- Pair movement color with arrow, sign, label, or status text.
- Warning yellow must use dark text.
- Disabled states must be visibly inactive but still readable.
- Check semantic colors in both light and dark mode.

## Touch targets
- Minimum target: 44px by 44px for actionable icons and controls.
- Dense rows can look compact, but tappable area must remain large.
- Bottom nav items must be easy to tap.
- Radio and checkbox labels should be tappable.

## Typography readability
- Do not use type below 10px for meaningful financial data.
- Use 12px minimum for secondary labels in app screens.
- Use tabular numerals for financial values.
- Avoid low contrast grey for important numbers.

## Screen reader and semantics
- Buttons must announce action and context: `Buy HDFCBANK`, not only `Buy` when multiple actions are on screen.
- Tabs must announce selected state.
- Status tags must be read as status, not decorative text.
- Inputs must include labels and error associations.
- Charts need textual summaries for key values.

## Error prevention
- Disable final order CTA until the form is valid.
- Confirm or clearly display risky sell/exit actions.
- Show charges and margin before order submission.
- Use inline errors next to the field.
- Prevent duplicate submissions after CTA tap.

## Keyboard and focus
- All form fields and buttons must support focus.
- Focus order should follow visual order.
- Bottom sheets must trap focus while open in web contexts.
- Escape/back behavior should close bottom sheets where safe.

## Loading, empty, and error states
The export does not contain a full state library, so use these implementation rules:
- Loading: skeleton should match final row/card shape.
- Empty: explain what is missing and offer one useful action.
- Error: explain what failed and give retry/support path.
- Warning: explain consequence and next step.

## Trading-specific accessibility
- Market depth columns must be labelled for screen readers.
- Buy and sell buttons must be semantically distinct.
- P&L should include sign, not only color.
- Live market updates should not steal focus.
- Major price updates should avoid excessive announcements.

## QA checklist
- Contrast checked for primary, success, error, warning, disabled, and dark mode.
- All CTAs are reachable and labelled.
- Bottom sheet focus and back behavior work.
- Field errors are announced.
- Screen reader can understand order details before submit.
- Color-blind review passes for P&L and market depth.


---

# 14. Source File: `12-developer-handoff-guidelines.md`

# Developer Handoff Guidelines

## Token baseline
Use these as the first implementation tokens. Values marked inferred should be confirmed before final design-system lock.

```css
:root {
  --finx-blue-500: #2777F3;
  --finx-navy-900: #1B1464;
  --finx-success-500: #45B644;
  --finx-error-500: #DE493B;
  --finx-warning-500: #F9EB21;
  --finx-info-500: #5D99F6;
  --finx-natural-950: #0F0E16;
  --finx-dark-bg: #262626;

  --finx-surface-white: #FFFFFF;
  --finx-surface-soft: #F3F5FA; /* inferred */
  --finx-border-soft: #E5E7EF;  /* inferred */
  --finx-text-primary: #0F0E16;
  --finx-text-secondary: #73737A; /* inferred */

  --finx-space-2: 2px;
  --finx-space-4: 4px;
  --finx-space-6: 6px;
  --finx-space-8: 8px;
  --finx-space-12: 12px;
  --finx-space-16: 16px;
  --finx-space-24: 24px;
  --finx-space-32: 32px;
  --finx-space-40: 40px;

  --finx-radius-sm: 8px;   /* inferred */
  --finx-radius-md: 12px;  /* inferred */
  --finx-radius-lg: 16px;  /* inferred */
}
```

## Font implementation
```css
body {
  font-family: "Onest", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-feature-settings: "tnum" 1;
}

.finx-number {
  font-variant-numeric: tabular-nums;
}
```

## Component implementation rules
- Build components from tokens, not hard-coded colors.
- Implement normal, pressed, focused, disabled, loading, error, and selected states where relevant.
- Keep semantic state mapping centralised.
- Do not map backend statuses directly to UI colors in each component. Use one status mapper.
- Support light and dark themes through variables.

## Recommended status map
```ts
type FinxStatus =
  | 'success'
  | 'positive'
  | 'error'
  | 'negative'
  | 'warning'
  | 'pending'
  | 'info'
  | 'neutral'
  | 'disabled';
```

## Trading value formatter requirements
Implement shared formatters for:
- Rupee values.
- Indian number grouping.
- Percent values.
- LTP and price precision.
- P&L amount and percent.
- Large values: L, Cr.
- Signed change values.

## Responsive rules
- Target mobile widths from 320px upward.
- Preserve safe area on iOS and Android.
- Avoid horizontal overflow in list rows.
- Use ellipsis for long symbols or issuer names, but keep full value accessible.
- Keep sticky footer above keyboard and system home indicator.

## State requirements per component
| Component | Required states |
|---|---|
| Button | normal, pressed, focused, disabled, loading |
| Input | empty, filled, focused, error, disabled, read-only |
| Tab | inactive, active, disabled |
| Tag | semantic states, selected where filter |
| Bottom sheet | closed, open, scrollable, submitting, error |
| Toast | info, warning, success, error |
| Row | default, selected/edit, positive, negative, pending, failed |
| Chart | loading, no data, tooltip active, error |

## Data contract notes
Ask backend/API teams for explicit fields rather than deriving from display text:
- `symbol`
- `displayName`
- `exchange`
- `segment`
- `ltp`
- `changeValue`
- `changePercent`
- `pnlValue`
- `pnlPercent`
- `orderStatus`
- `orderType`
- `productType`
- `quantity`
- `lotSize`
- `marginRequired`
- `charges`
- `riskStatus`

## QA handoff checklist
- Token values match design-system board.
- Onest font loads correctly.
- Light and dark mode render correctly.
- Status colors match semantic state.
- Buy/sell actions are distinct.
- Numeric alignment works for small and large values.
- Long names do not break layout.
- Bottom sheets respect safe area.
- Screen reader labels exist for critical actions.
- Error, empty, loading, warning, and disabled states are implemented.

## Known handoff gaps
- Exact shade ramp tokens need designer confirmation.
- Complete icon SVG library is not included as code in the PNG export.
- Motion specs are inferred, not explicitly provided.
- Empty/loading/error state library is partial and should be completed.


## V2 SVG handoff rule

The SVGs in `reference-svg/` are evidence files. Use them for visual parity, proportions, layout density, and icon inspection. Do not ship them as static screens. Rebuild UI using tokens, semantic HTML/React components, live text, and accessible states.


---

# 15. Source File: `13-design-system-audit.md`

# Design System Audit

## ZIP Audit Summary

Audited uploaded SVG exports:

| ZIP / Source bucket | SVG files | Main content |
|---|---:|---|
| Choice FinX Design (4).zip | 44 | Design-system boards: colors, typography, buttons, tabs, tags, inputs, dropdowns, menu, header, cards, tables, graphs, bottom sheets, tooltips, checkboxes/radio, company detail variants |
| Choice FinX Design (5).zip | 9 | Android/iOS platform screenshot strips and product screenshots |
| Choice FinX Design (6).zip | 122 | Product screens, order flow, company detail, portfolio, funds, IPO, mutual funds, reports, recommendations, profile, more pages, onboarding/login, misc screens |
| Total | 175 | SVG evidence for design-system and app UI |

## Category coverage

| design-system | 44 |
| platform-screens | 9 |
| screen-company-detail | 7 |
| screen-funds-bank | 13 |
| screen-ipo | 4 |
| screen-market | 2 |
| screen-more-profile | 8 |
| screen-onboarding-login | 1 |
| screen-order-flow | 7 |
| screen-portfolio | 2 |
| screen-recommendations | 1 |
| screen-reports | 8 |
| screen-watchlist | 1 |
| screens-misc | 68 |

## Common canvas sizes observed

| 393 | 852 | `0 0 393 852` | 17 |
| 720 | 1600 | `0 0 720 1600` | 14 |
| 393 | 863 | `0 0 393 863` | 11 |
| 280 | 621 | `0 0 280 621` | 7 |
| 740 | 1600 | `0 0 740 1600` | 6 |
| 1220 | 2712 | `0 0 1220 2712` | 5 |
| 1440 | 900 | `0 0 1440 900` | 3 |
| 388 | 863 | `0 0 388 863` | 3 |
| 1170 | 2532 | `0 0 1170 2532` | 3 |
| 1440 | 1545 | `0 0 1440 1545` | 2 |
| 1440 | 2938 | `0 0 1440 2938` | 2 |
| 1440 | 814 | `0 0 1440 814` | 2 |
| 1440 | 1343 | `0 0 1440 1343` | 2 |
| 1440 | 652 | `0 0 1440 652` | 2 |
| 1440 | 2876 | `0 0 1440 2876` | 2 |

## Top observed color values from SVG source

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

## What the SVG export improves

The SVG export improves the pack in these areas:

- More accurate color extraction.
- Better component proportions.
- Better icon and visual asset evidence.
- Better screen-level layout density.
- Better light and dark variant inspection.
- Better visual parity for Lovable and other code-generating LLMs.

## What still needs confirmation

- Exact semantic names for every shade in each color ramp.
- Whether all SVG colors are official tokens or one-off values.
- Which icons are reusable product icons versus screen-specific vector assets.
- Exact animation timings.
- All empty/loading/error states across the full product.
- Responsive behavior outside the exported mobile sizes.
- Whether some screenshot-named files are historical, exploratory, or production-current.

## Evidence level labels

- Confirmed: directly visible in uploaded design-system board SVGs or product screen SVGs.
- Observed: extracted from SVG source.
- Inferred: practical rule derived from repeated usage across screens.
- Needs confirmation: gap where product/design/engineering validation is required.


---

# 16. Source File: `14-svg-evidence-map.md`

# SVG Evidence Map

This file maps the V2 source SVGs to design-system usage.

## Evidence categories

| design-system | 44 |
| platform-screens | 9 |
| screen-company-detail | 7 |
| screen-funds-bank | 13 |
| screen-ipo | 4 |
| screen-market | 2 |
| screen-more-profile | 8 |
| screen-onboarding-login | 1 |
| screen-order-flow | 7 |
| screen-portfolio | 2 |
| screen-recommendations | 1 |
| screen-reports | 8 |
| screen-watchlist | 1 |
| screens-misc | 68 |

## Design-system boards

Use these before any product screen when defining components, tokens, or reusable rules.

- `reference-svg/design-system/010_Design_System.svg`
- `reference-svg/design-system/011_Design_System-1.svg`
- `reference-svg/design-system/012_1_-_Color_Palette.svg`
- `reference-svg/design-system/013_1_-_Color_Palette-1.svg`
- `reference-svg/design-system/014_2_-_Typography.svg`
- `reference-svg/design-system/015_2_-_Typography-1.svg`
- `reference-svg/design-system/016_2_-_Typography-2.svg`
- `reference-svg/design-system/017_3_-_Buttons.svg`
- `reference-svg/design-system/018_3_-_Buttons-1.svg`
- `reference-svg/design-system/019_3_-_Buttons-2.svg`
- `reference-svg/design-system/020_6_-_Tags.svg`
- `reference-svg/design-system/021_6_-_Tags-1.svg`
- `reference-svg/design-system/022_4_-_Tabs.svg`
- `reference-svg/design-system/023_4_-_Tabs-1.svg`
- `reference-svg/design-system/024_17_-_Drop_down.svg`
- `reference-svg/design-system/025_17_-_Drop_down-1.svg`
- `reference-svg/design-system/026_18_-_Extra.svg`
- `reference-svg/design-system/027_18_-_Extra-1.svg`
- `reference-svg/design-system/028_7_-_Input_fields.svg`
- `reference-svg/design-system/029_7_-_Input_fields-1.svg`
- `reference-svg/design-system/030_8_-_Menu.svg`
- `reference-svg/design-system/031_8_-_Menu-1.svg`
- `reference-svg/design-system/032_9_-_Header.svg`
- `reference-svg/design-system/033_9_-_Header-1.svg`
- `reference-svg/design-system/034_11_-_Cards.svg`
- `reference-svg/design-system/035_11_-_Cards-1.svg`
- `reference-svg/design-system/036_13_-_Spacing.svg`
- `reference-svg/design-system/037_13_-_Spacing-1.svg`
- `reference-svg/design-system/038_14_-_Toast.svg`
- `reference-svg/design-system/039_14_-_Toast-1.svg`
- `reference-svg/design-system/040_10_-_Graph.svg`
- `reference-svg/design-system/041_10_-_Graph-1.svg`
- `reference-svg/design-system/042_5_-_Table.svg`
- `reference-svg/design-system/043_5_-_Table-1.svg`
- `reference-svg/design-system/044_listing_components.svg`
- `reference-svg/design-system/045_listing_components-1.svg`
- `reference-svg/design-system/046_15_-_Bottom_Sheet.svg`
- `reference-svg/design-system/047_15_-_Bottom_Sheet-1.svg`
- `reference-svg/design-system/048_16_-_Tool_Tip.svg`
- `reference-svg/design-system/049_16_-_Tool_Tip-1.svg`
- `reference-svg/design-system/050_Company_Detail_Page.svg`
- `reference-svg/design-system/051_Company_Detail_Page_light_grey_option.svg`
- `reference-svg/design-system/052_Radio_Button.svg`
- `reference-svg/design-system/053_Radio_Button-1.svg`

## Watchlist

- `reference-svg/screen-watchlist/069_Watchlist.svg`

## Order flow

- `reference-svg/screen-order-flow/059_Order_Page_-_Delivery.svg`
- `reference-svg/screen-order-flow/060_Order_Page_-_Delivery-1.svg`
- `reference-svg/screen-order-flow/064_Order_Page_-_Delivery-2.svg`
- `reference-svg/screen-order-flow/071_Order.svg`
- `reference-svg/screen-order-flow/072_Order-1.svg`
- `reference-svg/screen-order-flow/161_MF_Place_Order_-_On_click_of_the_Mutual_Fund_scheme_click_need_to_open_MF_Place_Order_page_shown_o__878787.svg`
- `reference-svg/screen-order-flow/171_Order_Flow.svg`

## Company detail

- `reference-svg/screen-company-detail/065_Company_Detail_Page.svg`
- `reference-svg/screen-company-detail/066_Company_Detail_Page-1.svg`
- `reference-svg/screen-company-detail/075_Mobile_Company_Fundamental_page_1.svg`
- `reference-svg/screen-company-detail/076_Mobile_Company_page_technical_section_1.svg`
- `reference-svg/screen-company-detail/162_Company_Detail_Page-2.svg`
- `reference-svg/screen-company-detail/165_Open_and_Close_card._Status_wise_5_card_Technical_Card._Open_2._Closed_Call_Stop_Loss_Hit_Exit_Cal__825499.svg`
- `reference-svg/screen-company-detail/168_Company_Detail_Page_Recommendation.svg`

## Portfolio

- `reference-svg/screen-portfolio/070_Portfolio.svg`
- `reference-svg/screen-portfolio/077_Mobile_Portfolio_page_1.svg`

## Funds and bank flows

- `reference-svg/screen-funds-bank/095_funds.svg`
- `reference-svg/screen-funds-bank/096_funds-1.svg`
- `reference-svg/screen-funds-bank/097_Bank_Details.svg`
- `reference-svg/screen-funds-bank/105_Bank_Details-1.svg`
- `reference-svg/screen-funds-bank/110_withdraw.svg`
- `reference-svg/screen-funds-bank/111_withdraw-1.svg`
- `reference-svg/screen-funds-bank/112_UPI.svg`
- `reference-svg/screen-funds-bank/125_Mutual_Fund.svg`
- `reference-svg/screen-funds-bank/126_Mutual_Fund-1.svg`
- `reference-svg/screen-funds-bank/149_funds-2.svg`
- `reference-svg/screen-funds-bank/154_withdraw-2.svg`
- `reference-svg/screen-funds-bank/155_Deposit.svg`
- plus 1 more files in this category

## IPO

- `reference-svg/screen-ipo/093_Mobile_IPO_Detail_page_1.svg`
- `reference-svg/screen-ipo/128_Mobile_IPO_Listing_page_2.svg`
- `reference-svg/screen-ipo/129_IPO.svg`
- `reference-svg/screen-ipo/130_IPO-1.svg`

## Mutual funds

- No direct SVG files in this category.

## Reports

- `reference-svg/screen-reports/090_Profit_and_Loss_Report.svg`
- `reference-svg/screen-reports/098_Reports_statements.svg`
- `reference-svg/screen-reports/099_Reports_statements-1.svg`
- `reference-svg/screen-reports/104_Reports_statements-2.svg`
- `reference-svg/screen-reports/109_Transaction_history.svg`
- `reference-svg/screen-reports/138_Ledger_Report.svg`
- `reference-svg/screen-reports/139_Profit_and_Loss_Report-1.svg`
- `reference-svg/screen-reports/152_Profit_and_Loss_Report-2.svg`

## More and profile

- `reference-svg/screen-more-profile/089_Profile.svg`
- `reference-svg/screen-more-profile/100_Others.svg`
- `reference-svg/screen-more-profile/101_Support_Feedback.svg`
- `reference-svg/screen-more-profile/102_Support_Feedback-1.svg`
- `reference-svg/screen-more-profile/143_Insurance.svg`
- `reference-svg/screen-more-profile/147_More.svg`
- `reference-svg/screen-more-profile/156_Profile-1.svg`
- `reference-svg/screen-more-profile/169_View_More.svg`

## Market and recommendations

- `reference-svg/screen-market/091_Market.svg`
- `reference-svg/screen-market/150_Market-1.svg`

- `reference-svg/screen-recommendations/088_Recommendations.svg`

## Platform screenshots

- `reference-svg/platform-screens/001_android.svg`
- `reference-svg/platform-screens/002_Screenshot_20250515_124941_Choice.svg`
- `reference-svg/platform-screens/003_Screenshot_20250515_120037_Choice_FinX.svg`
- `reference-svg/platform-screens/004_Screenshot_20250515_120028_Choice_FinX.svg`
- `reference-svg/platform-screens/005_Screenshot_20250515_115913_Choice_FinX.svg`
- `reference-svg/platform-screens/006_Screenshot_20250515_115907_Choice_FinX.svg`
- `reference-svg/platform-screens/007_Screenshot_20250515_115855_Choice_FinX.svg`
- `reference-svg/platform-screens/008_Screenshot_20250515_115849_Choice_FinX.svg`
- `reference-svg/platform-screens/009_ios.svg`

## Miscellaneous product screens

- `reference-svg/screens-misc/054_Rectangle_51.svg`
- `reference-svg/screens-misc/055_Frame_46.svg`
- `reference-svg/screens-misc/056_Frame_47.svg`
- `reference-svg/screens-misc/058_Frame_42.svg`
- `reference-svg/screens-misc/061_Frame_21.svg`
- `reference-svg/screens-misc/062_image_7.svg`
- `reference-svg/screens-misc/063_image_5.svg`
- `reference-svg/screens-misc/067_Frame_48.svg`
- `reference-svg/screens-misc/068_image_2.svg`
- `reference-svg/screens-misc/073_Frame_186.svg`
- `reference-svg/screens-misc/074_image_1.svg`
- `reference-svg/screens-misc/078_Screenshot_20250121-132008.Choice_FinX.svg`
- `reference-svg/screens-misc/079_image_3.svg`
- `reference-svg/screens-misc/080_image_4.svg`
- `reference-svg/screens-misc/081_image_6.svg`
- `reference-svg/screens-misc/082_Screenshot_20250328_104229_Choice_1.svg`
- `reference-svg/screens-misc/083_Other_Pages.svg`
- `reference-svg/screens-misc/084_Screenshot_2025-04-17_at_9.21.05_PM_1.svg`
- `reference-svg/screens-misc/085_Frame_108.svg`
- `reference-svg/screens-misc/086_Frame_187.svg`
- `reference-svg/screens-misc/087_image_25.svg`
- `reference-svg/screens-misc/092_image_22.svg`
- `reference-svg/screens-misc/094_image_19.svg`
- `reference-svg/screens-misc/103_Screenshot_20250404_162633_Choice_1.svg`
- `reference-svg/screens-misc/106_Screenshot_20250403_111456_Choice_1.svg`
- `reference-svg/screens-misc/107_Screenshot_20250403_111452_Choice_1.svg`
- `reference-svg/screens-misc/108_Screenshot_20250403_111535_Choice_1.svg`
- `reference-svg/screens-misc/113_Image_20250403_114104_699_1.svg`
- `reference-svg/screens-misc/114_Screenshot_20250403_111545_Choice_1.svg`
- `reference-svg/screens-misc/115_Image_20250403_142309_978_1.svg`
- `reference-svg/screens-misc/116_Screenshot_20250403_143227_Choice_1.svg`
- `reference-svg/screens-misc/117_Image_20250403_114104_733_1.svg`
- `reference-svg/screens-misc/118_Image_20250403_114104_545_1.svg`
- `reference-svg/screens-misc/119_Image_20250403_150514_337_1.svg`
- `reference-svg/screens-misc/120_Screenshot_20250403_111550_Choice_1.svg`
- `reference-svg/screens-misc/121_Screenshot_20250403_111605_Choice_1.svg`
- `reference-svg/screens-misc/122_Image_20250403_114104_668_1.svg`
- `reference-svg/screens-misc/123_Image_20250403_114104_578_1.svg`
- `reference-svg/screens-misc/124_Frame.svg`
- `reference-svg/screens-misc/127_Basket.svg`
- `reference-svg/screens-misc/131_image_10.svg`
- `reference-svg/screens-misc/132_image_9.svg`
- `reference-svg/screens-misc/133_Image_20250403_142309_741_1.svg`
- `reference-svg/screens-misc/134_Image_20250403_142309_904_1_1.svg`
- `reference-svg/screens-misc/135_Image_20250404_103437_001_1.svg`
- `reference-svg/screens-misc/136_Screenshot_20250403_111610_Choice_1.svg`
- `reference-svg/screens-misc/137_Screenshot_20250403_111614_Choice_1.svg`
- `reference-svg/screens-misc/140_Screenshot_20250403_111622_Choice_1.svg`
- `reference-svg/screens-misc/141_Screenshot_20250404_115608_Choice_1.svg`
- `reference-svg/screens-misc/142_image_11.svg`
- plus 18 more files in this category

## Metadata files

- `metadata/svg-source-inventory.csv` contains every copied SVG, its original source path, destination path, category, dimensions, and rough color count.
- `metadata/svg-color-frequency.csv` contains all observed colors and occurrence count.
- `metadata/svg-dimension-summary.csv` contains repeated canvas sizes.


---

# 17. Source File: `19-lovable-build-rules.md`

# Lovable Build Rules

## Use the pack like a product design system

This pack is not a moodboard. It is a source-of-truth package for generating Choice FinX-style UI.

## Mandatory rules

1. Use `design-tokens.json`.
2. Use `css-variables.css` for color, radius, typography, and spacing.
3. Check `reference-svg/design-system/` before creating any reusable component.
4. Check a matching `screen-blueprints/` file before creating a full screen.
5. Check `reference-svg/*` for visual density and hierarchy.
6. Preserve financial semantics.
7. Do not invent new gradients, palettes, or decorative visuals.
8. Do not create generic fintech cards when a FinX component pattern exists.
9. Keep numeric information compact and clear.
10. Create empty/loading/error/warning states even if the first prompt does not ask for them.

## Prompt pattern for Lovable

Use this structure:

```text
Use the attached Choice FinX V2 SVG design-system pack.

Build [SCREEN NAME / COMPONENT].

Use:
- design-tokens.json
- css-variables.css
- screen-blueprints/[relevant file]
- reference-svg/[relevant folder]
- 06-component-library.md
- 08-trading-specific-ui-patterns.md

Hard constraints:
- Use Onest.
- Use FinX tokens only.
- Keep layout compact and mobile-first.
- Match FinX card, row, CTA, tab, and bottom sheet patterns.
- Use correct trading semantics for green/red, buy/sell, profit/loss, margin, and risk.
- Do not make the screen look like a generic fintech dashboard.
```

## Drift checks

Reject the output if:

- Primary blue is not `#2777F3`.
- The UI uses random gradients.
- Rows are too tall.
- Numbers are not aligned.
- Buy/sell CTAs are visually weak.
- Profit/loss colors are inconsistent.
- The screen feels like a template app instead of FinX.


---

# 18. Source File: `20-visual-regression-qa-checklist.md`

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


---

# 19. Source File: `design-tokens.json`

```json
{
  "meta": {
    "product": "Choice FinX App",
    "version": "V2 SVG-enhanced knowledge pack",
    "source": "Figma export SVG ZIPs plus prior Markdown audit",
    "evidence": {
      "svg_files_audited": 175,
      "design_system_svgs": 44,
      "product_screen_svgs": 131,
      "note": "Color values are extracted from SVG source. Semantic token naming is based on visible design-system boards and repeated product usage."
    }
  },
  "color": {
    "brand": {
      "navy": {
        "value": "#1B1464",
        "usage": "Brand anchor, major identity surfaces, high emphasis"
      },
      "primaryBlue": {
        "value": "#2777F3",
        "usage": "Primary CTA, selected state, link, active icon, information action"
      }
    },
    "semantic": {
      "success": {
        "value": "#45B644",
        "usage": "Profit, gains, positive movement, success"
      },
      "error": {
        "value": "#DE493B",
        "usage": "Loss, sell/destructive, error, negative movement"
      },
      "warning": {
        "value": "#F9EB21",
        "usage": "Warning, attention, pending/closed indicator"
      },
      "info": {
        "value": "#5D99F6",
        "usage": "Info state, secondary blue emphasis"
      }
    },
    "neutral": {
      "900": {
        "value": "#0F0E16"
      },
      "800": {
        "value": "#27262D"
      },
      "700": {
        "value": "#4B4A50"
      },
      "600": {
        "value": "#6F6E73"
      },
      "500": {
        "value": "#87868A"
      },
      "400": {
        "value": "#B7B7B9"
      },
      "300": {
        "value": "#CFCFD0"
      },
      "200": {
        "value": "#E7E7E8"
      },
      "100": {
        "value": "#E8E8F0"
      },
      "50": {
        "value": "#FCFCFE"
      }
    },
    "surface": {
      "appBg": {
        "value": "#FCFCFE"
      },
      "softBg": {
        "value": "#F4F8FE"
      },
      "blueSubtle": {
        "value": "#E9F1FE"
      },
      "greenSubtle": {
        "value": "#ECF8EC"
      },
      "redSubtle": {
        "value": "#F6CDCA"
      },
      "blueBorderSoft": {
        "value": "#C9DDFC"
      },
      "darkBg": {
        "value": "#070519"
      },
      "darkSurface": {
        "value": "#27262D"
      }
    },
    "observedMostFrequent": [
      {
        "value": "#0F0E16",
        "count": 2437
      },
      {
        "value": "#6F6E73",
        "count": 2253
      },
      {
        "value": "#87868A",
        "count": 1987
      },
      {
        "value": "#2777F3",
        "count": 1701
      },
      {
        "value": "#45B644",
        "count": 1284
      },
      {
        "value": "#E7E7E8",
        "count": 1032
      },
      {
        "value": "#4B4A50",
        "count": 1030
      },
      {
        "value": "#1B1464",
        "count": 694
      },
      {
        "value": "#E9F1FE",
        "count": 676
      },
      {
        "value": "#DE493B",
        "count": 444
      },
      {
        "value": "#C6C4D8",
        "count": 396
      },
      {
        "value": "#5D99F6",
        "count": 354
      },
      {
        "value": "#E8E8F0",
        "count": 267
      },
      {
        "value": "#9747FF",
        "count": 218
      },
      {
        "value": "#696A6A",
        "count": 192
      },
      {
        "value": "#B7B7B9",
        "count": 190
      },
      {
        "value": "#3F8CF4",
        "count": 183
      },
      {
        "value": "#F4F8FE",
        "count": 176
      },
      {
        "value": "#CFCFD0",
        "count": 164
      },
      {
        "value": "#F9685F",
        "count": 149
      },
      {
        "value": "#27262D",
        "count": 146
      },
      {
        "value": "#FCFCFE",
        "count": 110
      },
      {
        "value": "#ECF8EC",
        "count": 107
      },
      {
        "value": "#B8DAFF",
        "count": 92
      },
      {
        "value": "#C9DDFC",
        "count": 86
      },
      {
        "value": "#070519",
        "count": 84
      },
      {
        "value": "#F9EB21",
        "count": 64
      },
      {
        "value": "#FEFDFE",
        "count": 57
      },
      {
        "value": "#93BBF9",
        "count": 54
      },
      {
        "value": "#F6CDCA",
        "count": 43
      }
    ]
  },
  "typography": {
    "fontFamily": "\"Onest\", Inter, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif",
    "compactScale": {
      "displayLarge": {
        "fontSize": 32,
        "lineHeight": 36,
        "weights": [
          "600"
        ]
      },
      "headingLarge": {
        "fontSize": 18,
        "lineHeight": 21,
        "weights": [
          "400",
          "600",
          "700"
        ]
      },
      "headingMedium": {
        "fontSize": 16,
        "lineHeight": 20,
        "weights": [
          "400",
          "600",
          "700"
        ]
      },
      "bodyLarge": {
        "fontSize": 16,
        "lineHeight": 20,
        "weights": [
          "400",
          "600",
          "700"
        ]
      },
      "bodyMedium": {
        "fontSize": 14,
        "lineHeight": 18,
        "weights": [
          "400",
          "600",
          "700"
        ]
      },
      "bodySmall": {
        "fontSize": 12,
        "lineHeight": 16,
        "weights": [
          "400",
          "600",
          "700"
        ]
      }
    },
    "extendedScale": {
      "headingXL": {
        "fontSize": 36,
        "lineHeight": 40
      },
      "headingLarge": {
        "fontSize": 32,
        "lineHeight": 36
      },
      "headingMedium": {
        "fontSize": 26,
        "lineHeight": 30
      },
      "headingSmall": {
        "fontSize": 21,
        "lineHeight": 24
      }
    }
  },
  "radius": {
    "xsmall": 4,
    "small": 8,
    "medium": 10,
    "large": 12,
    "xlarge": 16,
    "sheet": 18,
    "pill": 999
  },
  "spacing": {
    "scale": [
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
      24,
      28,
      32
    ],
    "mobileScreenGutter": 16,
    "cardPaddingCompact": 12,
    "cardPaddingComfortable": 16,
    "sectionGap": 16
  },
  "componentRules": {
    "primaryCTA": "Use one dominant CTA in each decision zone.",
    "buySell": "Buy and sell actions must be visually distinct and cannot rely only on text.",
    "marketColor": "Positive movement uses success green, negative movement uses error red, neutral uses neutral text.",
    "denseRows": "Keep numeric columns right-aligned and labels scannable.",
    "bottomSheet": "Use clear top radius, header, content body, and fixed CTA area for decision-heavy flows."
  }
}
```


---

# 20. Source File: `css-variables.css`

```css
/* Choice FinX App Design Tokens - SVG enhanced V2 */
:root {
  --finx-font-family: "Onest", Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  --finx-brand-navy: #1B1464;
  --finx-primary-blue: #2777F3;
  --finx-success: #45B644;
  --finx-error: #DE493B;
  --finx-warning: #F9EB21;
  --finx-info: #5D99F6;

  --finx-neutral-900: #0F0E16;
  --finx-neutral-800: #27262D;
  --finx-neutral-700: #4B4A50;
  --finx-neutral-600: #6F6E73;
  --finx-neutral-500: #87868A;
  --finx-neutral-400: #B7B7B9;
  --finx-neutral-300: #CFCFD0;
  --finx-neutral-200: #E7E7E8;
  --finx-neutral-100: #E8E8F0;
  --finx-neutral-50: #FCFCFE;

  --finx-surface-app: #FCFCFE;
  --finx-surface-soft: #F4F8FE;
  --finx-surface-blue-subtle: #E9F1FE;
  --finx-surface-green-subtle: #ECF8EC;
  --finx-surface-red-subtle: #F6CDCA;
  --finx-border-blue-soft: #C9DDFC;
  --finx-dark-bg: #070519;
  --finx-dark-surface: #27262D;

  --finx-radius-xs: 4px;
  --finx-radius-sm: 8px;
  --finx-radius-md: 10px;
  --finx-radius-lg: 12px;
  --finx-radius-xl: 16px;
  --finx-radius-sheet: 18px;
  --finx-radius-pill: 999px;

  --finx-space-1: 2px;
  --finx-space-2: 4px;
  --finx-space-3: 6px;
  --finx-space-4: 8px;
  --finx-space-5: 10px;
  --finx-space-6: 12px;
  --finx-space-7: 14px;
  --finx-space-8: 16px;
  --finx-space-9: 18px;
  --finx-space-10: 20px;
  --finx-space-12: 24px;
  --finx-space-14: 28px;
  --finx-space-16: 32px;

  --finx-type-display-lg-size: 32px;
  --finx-type-display-lg-line: 36px;
  --finx-type-heading-lg-size: 18px;
  --finx-type-heading-lg-line: 21px;
  --finx-type-heading-md-size: 16px;
  --finx-type-heading-md-line: 20px;
  --finx-type-body-md-size: 14px;
  --finx-type-body-md-line: 18px;
  --finx-type-body-sm-size: 12px;
  --finx-type-body-sm-line: 16px;
}

.finx-screen {
  font-family: var(--finx-font-family);
  background: var(--finx-surface-app);
  color: var(--finx-neutral-900);
}

.finx-card {
  background: #fff;
  border: 1px solid var(--finx-neutral-200);
  border-radius: var(--finx-radius-lg);
  padding: var(--finx-space-8);
}

.finx-primary-cta {
  background: var(--finx-primary-blue);
  color: #fff;
  border-radius: var(--finx-radius-md);
  min-height: 44px;
  font-weight: 600;
}

.finx-buy {
  color: var(--finx-success);
}

.finx-sell,
.finx-loss {
  color: var(--finx-error);
}

.finx-gain {
  color: var(--finx-success);
}

.finx-muted {
  color: var(--finx-neutral-600);
}
```


---

# 21. Source File: `tailwind-token-map.md`

# Tailwind Token Map

Use this file when converting FinX screens into Lovable, React, or Tailwind.

## Font

```js
fontFamily: {
  finx: ['Onest', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
}
```

## Colors

```js
colors: {
  finx: {
    navy: '#1B1464',
    blue: '#2777F3',
    success: '#45B644',
    error: '#DE493B',
    warning: '#F9EB21',
    info: '#5D99F6',
    neutral: {
      900: '#0F0E16',
      800: '#27262D',
      700: '#4B4A50',
      600: '#6F6E73',
      500: '#87868A',
      400: '#B7B7B9',
      300: '#CFCFD0',
      200: '#E7E7E8',
      100: '#E8E8F0',
      50: '#FCFCFE'
    },
    surface: {
      app: '#FCFCFE',
      soft: '#F4F8FE',
      blueSubtle: '#E9F1FE',
      greenSubtle: '#ECF8EC',
      redSubtle: '#F6CDCA',
      dark: '#070519'
    }
  }
}
```

## Radius

```js
borderRadius: {
  finxXs: '4px',
  finxSm: '8px',
  finxMd: '10px',
  finxLg: '12px',
  finxXl: '16px',
  finxSheet: '18px',
  finxPill: '999px'
}
```

## Spacing

Use a compact mobile-first rhythm. Most product screens use 12 to 16 px internal card padding, 16 px page gutter, and 8 to 16 px gaps between grouped elements.

```js
spacing: {
  finx1: '2px',
  finx2: '4px',
  finx3: '6px',
  finx4: '8px',
  finx5: '10px',
  finx6: '12px',
  finx7: '14px',
  finx8: '16px',
  finx10: '20px',
  finx12: '24px',
  finx16: '32px'
}
```

## Implementation rules

- Build light mode first.
- Keep numeric values right-aligned where they compare across rows.
- Use green and red only for market semantics, success/error, and buy/sell semantics.
- Use blue for navigation, focus, primary app actions, and selected states.
- Keep cards low-contrast. Avoid heavy shadows.
- Use bottom sheets for trading decisions and confirmation states.


---

# 22. Source File: `README.md`

# Choice FinX Lovable Design System V2 SVG Pack

This ZIP is built for Lovable, GPT, Claude, or any code-generation LLM that needs to understand the Choice FinX App UI.

## What is inside

- Markdown design-system documentation.
- Direct SVG evidence from Figma exports.
- `design-tokens.json`.
- `css-variables.css`.
- Tailwind token map.
- Screen blueprints.
- Lovable master prompt.
- SVG source inventory and color-frequency extraction.

## Recommended usage

1. Upload this full ZIP to Lovable.
2. Paste `00-master-lovable-prompt.md`.
3. Ask Lovable to use `design-tokens.json` and `css-variables.css`.
4. Point it to the screen blueprint for the screen you want.
5. Ask it to cross-check output against the matching `reference-svg` folder.

## Readiness estimate

With SVG evidence added, this pack is materially stronger than the previous Markdown-only version.

- Design understanding: 90–95%
- Lovable usefulness: 90–95%
- UI replication accuracy: 85–92%
- Full app rebuild readiness: 80–88%

Still not perfect because interaction logic, every app state, responsive rules, and final token naming need product/design confirmation.


---

# 23. Source File: `manifest.json`

```json
{
  "pack": "Choice FinX Lovable Design System V2 SVG Pack",
  "created_from": [
    "Choice FinX Design (5).zip",
    "Choice FinX Design (4).zip",
    "Choice FinX Design (6).zip",
    "Choice_FinX_App_Design_System_Knowledge_Pack.zip"
  ],
  "svg_files": 175,
  "categories": {
    "design-system": 44,
    "platform-screens": 9,
    "screen-company-detail": 7,
    "screen-funds-bank": 13,
    "screen-ipo": 4,
    "screen-market": 2,
    "screen-more-profile": 8,
    "screen-onboarding-login": 1,
    "screen-order-flow": 7,
    "screen-portfolio": 2,
    "screen-recommendations": 1,
    "screen-reports": 8,
    "screen-watchlist": 1,
    "screens-misc": 68
  },
  "key_files": [
    "README.md",
    "00-master-lovable-prompt.md",
    "00-design-system-index.md",
    "design-tokens.json",
    "css-variables.css",
    "tailwind-token-map.md",
    "19-lovable-build-rules.md",
    "20-visual-regression-qa-checklist.md"
  ]
}
```
