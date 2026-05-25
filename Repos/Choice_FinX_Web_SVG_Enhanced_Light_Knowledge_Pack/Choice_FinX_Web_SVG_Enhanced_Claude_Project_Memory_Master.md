# Choice FinX Web SVG-Enhanced Claude Project Memory Master

Use this file as Claude Project Knowledge for **FinX Web** UI work.

This version combines:

1. The earlier FinX Web HTML and homepage screenshot audit.
2. The uploaded Figma SVG package: `FinX Jan to Dec ‘26.zip`.
3. Extracted SVG evidence from `120` SVG files.
4. Refined design tokens, layout rules, and screen/component blueprints for web.

## Critical framing

The current FinX Web UI is **current-state product evidence**, not the final quality benchmark.

Use the evidence to preserve real product structure, information architecture, labels, data semantics, and FinX brand language. Improve the UI quality where needed. Do not blindly copy clutter, weak hierarchy, or compressed modules from the current site.

## SVG package audit summary

| Metric | Value |
|---|---:|
| Source ZIP | `FinX Jan to Dec ‘26.zip` |
| SVG files audited | `120` |
| Uncompressed SVG evidence | `144.38 MB` |
| Common desktop canvas | `1366 x 768`, `1367 x 768` |
| Long-page canvas | `1440 x 2493` observed |
| Wide Figma board canvas | `6591 x 3720` and other large section boards |

## Readiness after SVG package

| Area | Earlier HTML + screenshot pack | SVG-enhanced pack |
|---|---:|---:|
| FinX Web design understanding | 70-75% | 88-92% |
| Visual replication accuracy | 55-65% | 80-88% |
| Claude/Lovable usefulness | 70% | 88-93% |
| Web component reconstruction | 60% | 82-90% |
| Full FinX Web rebuild readiness | Not enough | 78-85% |

Still not 100%. Exact interactions, all responsive breakpoints, API-driven states, and final designer-approved token names need confirmation.

## SVG evidence buckets

The SVG package materially improves the Web pack because it adds direct layout and component evidence beyond the browser HTML snapshot.

### Miscellaneous visual evidence

- Files: 32
- Examples: `image 542.svg`, `image 533.svg`, `Screenshot 2026-03-12 at 4.26.20 PM 1.svg`, `image 538.svg`, `Screenshot 2026-03-12 at 11.36.36 AM 1.svg`, `image 438.svg`, `image 439.svg`, `image 440.svg`

### Orders, portfolio, funds, messages, states

- Files: 30
- Examples: `Orderbook.svg`, `Orderbook-1.svg`, `Web Order message Option - 1.svg`, `Web Order message Option - 2.svg`, `Web Order message.svg`, `Scenario 4.svg`, `Scenario 1.svg`, `Scenario 3.svg`

### Empty states

- Files: 1
- Examples: `No Data Available for ETF.svg`

### Segment/product listing patterns

- Files: 21
- Examples: `Equity.svg`, `Equity-1.svg`, `Equity-2.svg`, `Equity-3.svg`, `Equity-4.svg`, `Derivatives.svg`, `Derivatives-1.svg`, `Derivatives-2.svg`

### Design-system/components

- Files: 13
- Examples: `1 - Color Palette.svg`, `Container.svg`, `Brokerage.svg`, `Brokerage Slab Display.svg`, `Menu.svg`, `Filter.svg`, `Icons.svg`, `Design Status.svg`

### Dashboard/home sections

- Files: 5
- Examples: `Section 1.svg`, `Dashboard.svg`, `Section 2.svg`, `Dashboard-1.svg`, `Section 3.svg`

### Trader Mode / StrikeX web

- Files: 4
- Examples: `Strike X.svg`, `Strike X-v.2.svg`, `multiple charts.svg`, `https_/finx.choiceindia.com/tv/tv-charts-watch_symbols=1%403456 - https_/finx.choiceindia.com/tv/tv-charts-watch_symbols=1%403456 by html.to.design ❤️ FREE version - 30/03/2026, 12_53_26 GMT+5_30.svg`

### Instrument/company/NCD pages

- Files: 14
- Examples: `Company page.svg`, `Company page-1.svg`, `Company page-2.svg`, `Company page-3.svg`, `Company page-4.svg`, `Company page-5.svg`, `Company page-6.svg`, `Company page-7.svg`

## SVG-derived color evidence

The SVG package confirms that the same FinX App/Choice token family is also present across FinX Web design artifacts.

| Rank | Color | Count | Interpretation |
|---:|---|---:|---|
| 1 | `#0F0E16` | 7219 | Primary text |
| 2 | `#2777F3` | 3060 | Brand action blue |
| 3 | `#6F6E73` | 2949 | Secondary text |
| 4 | `#E3E1EB` | 1462 | Primary border |
| 5 | `#DE493B` | 1209 | Negative/loss/error |
| 6 | `#45B644` | 787 | Positive/gain/success |
| 7 | `#1B1464` | 628 | Brand navy / premium anchor |
| 8 | `#4B4A50` | 426 | Body secondary / neutral text |
| 9 | `#131722` | 408 | Trading terminal dark surface |
| 10 | `#F4F8FE` | 218 | Soft blue panel background |
| 11 | `#F1F1F1` | 155 | Neutral section surface |
| 12 | `#333333` | 153 | Secondary or contextual color. Do not promote without review. |
| 13 | `#87868A` | 142 | Tertiary text |
| 14 | `#2D77F4` | 126 | Alternate action blue |
| 15 | `#3CBA54` | 116 | Positive alternate |
| 16 | `#EE404A` | 105 | Negative alternate |
| 17 | `#E5E5E5` | 92 | Secondary or contextual color. Do not promote without review. |
| 18 | `#E0E3EB` | 88 | Secondary or contextual color. Do not promote without review. |
| 19 | `#EAF2FE` | 79 | Light selected/blue tint |
| 20 | `#797979` | 66 | Secondary or contextual color. Do not promote without review. |
| 21 | `#1C2A35` | 56 | Secondary or contextual color. Do not promote without review. |
| 22 | `#C6C4D8` | 55 | Muted border/neutral stroke |
| 23 | `#F6B925` | 52 | Warning/yellow accent |
| 24 | `#EDEDED` | 51 | Divider |
| 25 | `#DDDDDD` | 48 | Secondary or contextual color. Do not promote without review. |

## Updated FinX Web design rules from SVG evidence

### 1. Web screens should be dashboard-first, not landing-page-first

The SVG package has strong evidence for dashboards, orderbook, holdings, transactions, company pages, NCD pages, StrikeX, and scenarios. Treat FinX Web as a trading and investing workspace. Do not design it like a generic marketing website.

### 2. Use a two-zone structure on desktop

Preferred desktop pattern:

```text
Left rail / watchlist / context panel  |  Main workspace
340px to 400px                         |  Remaining width
```

Use this for trading/instrument-heavy pages. For content-heavy pages, use a centered max-width container but preserve FinX data-card treatment.

### 3. Market data must use compact hierarchy

Numbers are the UI. Use the smallest size that remains readable. Increase contrast and grouping before increasing font size.

Rules:

- Price and percentage move must sit close together.
- Positive and negative colors must be semantic only.
- Use tabular numerals where the technology allows.
- Avoid long text blocks inside trading cards.
- Use section headers, chips, table headers, and dividers to help scanning.

### 4. Cards should be functional, not decorative

Use cards for grouping, not ornamentation. Most cards should be white on light background with subtle border. Soft blue is for selected/highlighted zones.

Recommended card style:

```css
background: #FFFFFF;
border: 1px solid #E3E1EB;
border-radius: 8px;
box-shadow: none or very soft shadow;
```

### 5. Action hierarchy

- Primary action: FinX blue `#2777F3`
- Positive data movement: green `#45B644`
- Negative data movement/error: red `#DE493B`
- Sell/risk actions must not be confused with negative market movement. Use label + color, not color alone.
- Never use green as a generic primary CTA.

### 6. State coverage needs to be explicit

SVG evidence includes order messages, scenarios, no-data/ETF state, action-required messages, filters, and order-history patterns. Any new FinX Web build must define states for:

- Empty
- Loading
- Error
- Warning
- Action required
- Order placed
- Order rejected
- Partial fill
- Funds unavailable
- Market closed
- No data available

### 7. Trader Mode / StrikeX should remain visually distinct

StrikeX SVG files use darker terminal-like surfaces and denser trading modules. Keep Trader Mode visually connected to FinX through Onest and blue accents, but allow dark terminal surfaces where appropriate.

Do not flatten StrikeX into normal FinX cards. It is a pro trading workspace.

## Web screen blueprints to use with Claude/Lovable

### Homepage / Dashboard

Purpose: Give users a financial command center.

Required zones:

1. Top ticker and header navigation.
2. My Assets or portfolio overview.
3. Quick action cards: funds, holdings, orderbook, watchlist.
4. Trader Mode / pro tools entry.
5. Top trading tools: Strategy Builder, Basket Order, GTT Trading.
6. Trading NCDs / investment opportunities.
7. Smart investments: MF, IPO, secured products, buyback.
8. Market movers and top lists.
9. Tools/calculators.
10. Research/news/FinX Flash.

Improvements required over current state:

- Compress long scroll.
- Group trading, investing, insights, and utilities separately.
- Reduce equal-weight cards.
- Make primary user journey clear.

### Orderbook / Orders

Purpose: Help users inspect orders, status, and actions quickly.

Required patterns from SVG evidence:

- Orderbook table/list.
- Filters.
- Details panels.
- Web order message variants.
- Scenario states.
- Order history variants.

Rules:

- Status must be instantly visible.
- Use chips for order status.
- Keep order details dense but grouped.
- Primary row action should not fight with status color.

### Holdings / Transactions / Portfolio

Purpose: Show holdings, ledger/transaction movement, and actionability.

Rules:

- Separate value, quantity, average price, current price, and P&L.
- P&L needs red/green semantic clarity.
- Do not hide transaction labels behind icons.
- Use filters and date ranges clearly.

### Company / Instrument page

Purpose: Combine price, chart, trading actions, fundamentals/metadata, and related modules.

Required patterns from SVG evidence:

- Company page variants.
- Orderbook entry.
- Multiple charts.
- Rating/fund details where relevant.
- NCD Yield and NCD Coupon Rate variants.

Rules:

- Price header must be dominant.
- Buy/Sell or trade CTA must be visible but not oversized.
- Use tabs or segmented sections to reduce page length.
- For NCDs, clearly distinguish coupon, YTM/yield, maturity, rating, payout, and risk.

### Trader Mode / StrikeX web

Purpose: Pro trading environment.

Required patterns from SVG evidence:

- Strike X and Strike X-v.2 boards.
- Multiple charts.
- TradingView chart export.
- Dark terminal surfaces.

Rules:

- Dense but organized.
- Use clear zones: chart, order entry, positions, watchlist, strategy/payoff.
- Keep blue for focus/action.
- Avoid marketing card styling inside terminal.

### Segment/product listing pages

Evidence includes Equity, Derivatives, Commodity, and Currency screens.

Rules:

- Use same table/list skeleton across segments.
- Change labels and metrics by product type.
- Use segment tabs/chips.
- Filters must remain visible and compact.

### Empty/no-data states

Evidence includes `No Data Available for ETF.svg`.

Rules:

- Do not show a dead blank table.
- Provide reason + next action where possible.
- Use simple illustration only if it does not distract from market workflow.
- Keep empty state compact in trading contexts.

## Claude/Lovable build prompt to use with this memory

When generating any FinX Web UI, follow this instruction:

```text
You are designing for Choice FinX Web, a trading and investing platform. Use the FinX Web SVG-enhanced design memory as source of truth. Preserve Onest typography, Choice/FinX colors, compact market-data hierarchy, web dashboard structure, and trading-specific state clarity.

Do not create a generic fintech website. Do not overuse gradients or marketing cards. Use clean white surfaces, subtle borders, clear sections, dense-but-readable tables, and semantic green/red market states. Treat the current FinX Web UI as product evidence but improve hierarchy, spacing, grouping, and premium feel.

For any screen, define:
- screen purpose
- layout zones
- components used
- states
- data formatting rules
- CTA hierarchy
- responsive behavior
- QA checklist

If generating code, use Onest, FinX tokens, and reusable components. Keep trading UI scannable.
```

## Source inventory snapshot

Full detailed SVG inventory is available in `finx-web-svg-evidence-inventory.md` in the light pack.

Key source files by function:

| Function | Example SVG files |
|---|---|
| Dashboard/home | `Dashboard.svg`, `Dashboard-1.svg`, `Section 1.svg`, `Section 2.svg`, `Section 3.svg` |
| Order/orderbook | `Orderbook.svg`, `Orderbook-1.svg`, `Orderbook-2.svg`, `Orderbook-3.svg`, `Web Order message.svg`, `Order History.svg` |
| Segment listings | `Equity.svg`, `Derivatives.svg`, `Commodity.svg`, `Currency.svg` and variants |
| Components/system | `1 - Color Palette.svg`, `Menu.svg`, `Filter.svg`, `Filters.svg`, `Icons.svg`, `BUY/SELL.svg`, `Container.svg` |
| Company/instrument | `Company page.svg` variants, `NCD-Yield.svg`, `NCD-Coupon Rate.svg`, `NCD Company page.svg` |
| Trader Mode | `Strike X.svg`, `Strike X-v.2.svg`, `multiple charts.svg`, TradingView chart SVG |
| States/messages | `No Data Available for ETF.svg`, `Action Required.svg`, `Message.svg`, `Scenario 1.svg` to `Scenario 5.svg` |


---

# Prior Web HTML + Screenshot Audit Preserved

# Choice FinX Web Design System + Iteration Memory

Use this as Claude Project Knowledge for **FinX Web** work.

This file is not for the FinX mobile app. It is for the current public/desktop web experience visible on `finx.choiceindia.com`, including the dashboard-style homepage and instrument/index pages.

## 0. Critical instruction for any LLM using this file

The current FinX Web UI is **evidence**, not the desired final benchmark.

The current design must be considered because it contains real product structure, information architecture, labels, market data conventions, trading modules, and technical CSS evidence. But do not blindly replicate the current visual quality.

When designing or iterating FinX Web:

1. Preserve the product structure and business logic.
2. Preserve FinX colors, Onest typography, market-data semantics, and trading terminology.
3. Improve hierarchy, spacing, grouping, responsiveness, and visual quality.
4. Reduce clutter wherever possible.
5. Use modern fintech dashboard patterns without making the UI look generic.
6. Keep dense trading data scannable.
7. Treat buying, selling, P&L, risk, alerts, orders, funds, and market movement as high-clarity zones.
8. Do not copy the current cluttered long-scroll layout unless explicitly asked.
9. Do not overuse gradients, heavy shadows, decorative badges, or marketing-style cards.
10. Prefer clean cards, clear tables, compact widgets, and data-first hierarchy.

## 1. Source evidence audited

Uploaded evidence used for this memory:

- `finx.choiceindia.com_.png`: long screenshot of current FinX Web homepage/dashboard.
- `Choice FinX - Online Stock Trading & Investment Platform.html`: saved homepage HTML.
- `Nifty 50 Today - Live Nifty 50 Share Price in NSE - Choice FinX.html`: saved Nifty 50 instrument/index page HTML.

Observed implementation:

- Angular app shell.
- `app-root`, `app-header`, `app-footer`, `app-watchlist`, `app-jiffy-dashboard`, `app-market-dashboard`, `app-trending-ncd`, `app-company`, `app-tv-chart-exp`, `app-chartiq-simple`, `app-stock-heatmap`, `app-pivot`.
- Scoped Angular CSS using `_ngcontent-*` attributes.
- Onest font-face declarations embedded in the captured HTML.
- Icomoon and FontAwesome icon usage.
- Plotline widgets and overlays embedded in page structure.
- Very limited global CSS variable usage for FinX itself. Most styling appears compiled/scoped.

## 2. One-line product read

FinX Web is a dense investment and trading dashboard that combines market watch, portfolio snapshot, trader tools, NCDs, smart investments, market movers, corporate actions, calculators, research/news, and product cross-sell in one scrollable desktop/mobile web experience.

## 3. Current-state design assessment

### What is useful and should be retained

- Real FinX brand colors.
- Real Onest typography.
- Trading and investing IA.
- Market ticker behavior.
- Watchlist-plus-content layout pattern.
- Dashboard modules and labels.
- NCD, MF, IPO, secured products, calculators, FinX Flash, corporate action, market tabs.
- Product integrations such as Trader Mode and Plotline widgets.
- Real data formatting patterns for prices, percentages, dates, and market impact.

### What is weak and should be improved

- Homepage is too long and visually flat.
- Component hierarchy is inconsistent.
- Sections feel stacked rather than composed.
- Cards use weak separation and inconsistent density.
- CTA prominence is uneven.
- Some labels and tools are squeezed.
- Dashboard does not clearly separate trading, investing, insights, and utility modules.
- Multiple product cards compete for attention.
- Mobile narrow layout feels like a compressed desktop page.
- Data tables and news sections need stronger scanning behavior.
- Brand premium feel is currently under-leveraged.

## 4. Typography system

### Confirmed

Primary font family:

```css
font-family: Onest, sans-serif;
```

Observed font weights:

```text
200, 300, 400, 500, 600, 700, 800
```

Base CSS:

```css
html { font-size: 12px; }
body {
  font-size: 1rem;
  font-family: Onest, sans-serif;
  background-color: #fff;
  line-height: 1.428571429;
  color: #0f0e16;
}
```

### Practical typography scale for FinX Web iteration

Use this scale for redesign or component iteration:

| Token | Size | Weight | Use |
|---|---:|---:|---|
| Display | 28-32px | 700 | Hero or landing-only headline |
| H1 | 24px | 600-700 | Page title |
| H2 | 20px | 600 | Section title |
| H3 | 18px | 600 | Card group title |
| Card title | 14-16px | 500-600 | Widget/card heading |
| Body | 12-14px | 400-500 | Standard dashboard text |
| Data value | 14-20px | 500-700 | Price, NAV, portfolio value, P&L |
| Meta | 10-12px | 400 | Timestamp, helper label, secondary metrics |
| Table cell | 11-13px | 400-500 | Dense market table |
| CTA | 12-14px | 500-600 | Button/link text |

### Observed font-size frequency

- `12px` observed `206` times
- `14px` observed `117` times
- `16px` observed `82` times
- `10px` observed `48` times
- `18px` observed `47` times
- `20px` observed `44` times
- `11px` observed `36` times
- `13px` observed `34` times
- `24px` observed `25` times
- `15px` observed `25` times
- `11px!important` observed `10` times
- `22px` observed `10` times
- `63%!important` observed `8` times
- `var(--plotline-option-text-font-size)` observed `8` times
- `var(--plotline-button-text-font-size)` observed `8` times
- `25px` observed `7` times
- `1.5rem` observed `6` times
- `14px!important` observed `6` times
- `9px` observed `5` times
- `26px` observed `4` times

### Typography rules

- Use Onest everywhere.
- Use numeric tabular alignment where possible for market data.
- Do not use large fonts for every metric.
- Market-data pages must use compact but readable numbers.
- Section titles should be short and functional.
- Do not use decorative headline styles for trading screens.
- Keep line height tighter for tables and watchlists.
- Use 500/600 weight for labels and 600/700 for critical values.

## 5. Color system

### Core tokens

| Role | Token | Use |
|---|---|---|
| Brand blue | `#2777F3` | Links, primary CTA, selected state, active tabs |
| Alternate blue | `#2D77F4` | Walkthroughs, highlights, secondary blue usage |
| Text primary | `#0F0E16` | Main labels and primary text |
| Text secondary | `#6F6E73` | Secondary labels |
| Text muted | `#797979` | Footer, helper text |
| Success | `#45B644` | Positive market move, gain, success |
| Danger | `#DE493B` | Negative market move, loss, error |
| Surface | `#FFFFFF` | Primary page/card background |
| Soft blue surface | `#F4F8FE` | Highlight backgrounds, dashboard panels |
| Border | `#E3E1EB` | Card/watchlist border |
| Divider | `#EBEBEB` | Fine dividers |
| Warning/accent yellow | `#F9EB21` | Legacy accent, use carefully |

### Observed color frequency

- `#fff` observed `345` times
- `#2777f3` observed `193` times
- `#0f0e16` observed `129` times
- `#c6c4d8` observed `72` times
- `#ebebeb` observed `64` times
- `#de493b` observed `54` times
- `#000` observed `53` times
- `#2d77f4` observed `52` times
- `#e3e1eb` observed `41` times
- `#45b644` observed `37` times
- `#ccc` observed `27` times
- `#797979` observed `21` times
- `#ffffff` observed `18` times
- `#d0edd0` observed `15` times
- `#f6cdca` observed `15` times
- `#ffc174` observed `14` times
- `#fe616e` observed `14` times
- `#f4f3f8` observed `14` times
- `#535353` observed `14` times
- `#0003` observed `13` times
- `#a2daa1` observed `13` times
- `#6f6e73` observed `12` times
- `#f4f8fe` observed `12` times
- `#666` observed `12` times
- `#00000080` observed `11` times
- `#ddd` observed `11` times
- `#aaa` observed `10` times
- `#87868a` observed `9` times
- `#ff7c7c` observed `9` times
- `#ee9a95` observed `9` times
- `#eee` observed `8` times
- `#fcbe0c` observed `8` times
- `#999` observed `8` times
- `#4b4a50` observed `8` times
- `#f6b900` observed `8` times

### Color rules

- Blue is action and navigation.
- Green is positive movement or successful status.
- Red is negative movement, error, sell/loss context.
- Use red and green only when semantic.
- Do not use green for generic CTA.
- Keep background mostly white and light grey/blue.
- Use subtle blue surfaces for important modules, not for every card.
- Do not create a loud neon trading terminal look for FinX Web.
- Avoid dark UI unless the screen is explicitly Trader Mode/terminal.

## 6. Layout and grid

### Confirmed current layout

The web app uses a fixed left watchlist and right main content layout on desktop:

```css
.watchlistbox {
  width: 340px;
  position: fixed;
  top: 88px;
  height: calc(100vh - 125px);
  margin: 20px 25px;
  border: 1px solid #E3E1EB;
  border-radius: 8px;
}

.maincontainer {
  width: calc(100% - 370px);
  float: right;
  padding-top: 30px;
  margin-top: 89px;
  min-height: 68vh;
}
```

Large desktop changes:

```css
.watchlistbox { width: 400px; }
.maincontainer { width: calc(100% - 440px); }
```

Mobile/tablet behavior:

```css
@media (max-width: 990px) {
  .maincontainer { width: 100%; float: none; padding-top: 20px; }
  .mobile-watchlist { display: inline-block; }
}
```

### Layout rules for iteration

- Desktop should keep the FinX Web mental model: left watchlist, right content.
- Watchlist should not visually dominate the whole page.
- Main content should use clear two-column or modular grid blocks.
- Avoid a single endless stack of unrelated sections.
- Group modules by user intent:
  - Portfolio / assets
  - Trading tools
  - Market discovery
  - Investment products
  - Research / news
  - Utility tools
- Use section headers with one clear CTA.
- Use cards only when they create hierarchy.
- Avoid nested cards inside cards unless required for data grouping.
- Reduce visual noise by standardizing dividers and card padding.

### Suggested modern desktop structure

```text
Global market ticker
Header / Navigation
Left watchlist rail
Main content:
  1. Asset + Funds + Quick action summary
  2. Trader Mode / Pro tools hero
  3. Trading tools row
  4. Market discovery grid
  5. Investment products
  6. FinX Flash / Research
  7. Calculators / Utility tools
Footer
```

### Suggested mobile structure

```text
Header
Market ticker collapsed
Portfolio summary
Primary CTA / quick action
Trader Mode card
Watchlist entry point
Markets module
Investments module
News module
Tools module
Footer
```

## 7. Shape, spacing, and elevation

### Observed radius frequency

- `50%` observed `79` times
- `8px` observed `70` times
- `4px` observed `34` times
- `0` observed `30` times
- `100%` observed `21` times
- `2px` observed `12` times
- `var(--plotline-background-radius)` observed `12` times
- `6px` observed `10` times
- `var(--plotline-option-border-radius)` observed `10` times
- `5px` observed `9` times
- `3px` observed `9` times
- `80%` observed `8` times
- `var(--plotline-button-border-radius)` observed `8` times
- `10px` observed `7` times
- `20px` observed `7` times
- `50%!important` observed `6` times

### Practical shape tokens

| Token | Value | Use |
|---|---:|---|
| Small radius | 4px | Small controls, tags |
| Medium radius | 8px | Cards, inputs, watchlist |
| Large radius | 10-12px | Prominent cards |
| Pill radius | 999px | Chips, selected tags, badges |
| Circle | 50% | Avatar, icon bubble, progress ring |

### Observed spacing frequency

- `0` observed `110` times
- `10px` observed `35` times
- `15px` observed `30` times
- `0px` observed `26` times
- `5px` observed `15` times
- `0!important` observed `15` times
- `16px` observed `14` times
- `20px` observed `13` times
- `8px` observed `11` times
- `0 15px` observed `10` times
- `16px!important` observed `10` times
- `0 2px` observed `9` times
- `1px 3px` observed `8` times
- `6px 12px` observed `8` times
- `12px` observed `8` times
- `5px 10px` observed `8` times
- `24px` observed `7` times
- `5px 15px` observed `6` times
- `10px 15px` observed `6` times
- `0 8px` observed `5` times

### Observed shadow frequency

- `none` observed `31` times
- `none !important` observed `26` times
- `0 0 10px #ccc` observed `12` times
- `0 0 10px rgba(0,0,0,.3)` observed `6` times
- `0 0 50px #a9acbd26` observed `4` times
- `0 0 30px #0000004d` observed `4` times
- `inherit` observed `4` times
- `0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f` observed `3` times
- `0 4px 12px rgba(0, 0, 0, 0.3) !important` observed `2` times
- `0 0 5px #0000001a` observed `2` times
- `#2e2d2e 4px 6px 38px -8px` observed `2` times
- `0 0 50px #0000004d` observed `2` times
- `0 0 0 5000px #00000080` observed `2` times
- `unset` observed `2` times
- `0 0 5px #00000080` observed `2` times
- `0 0 24px #0000003d` observed `2` times

### Rules

- Use `8px` as default card radius.
- Use `4px` for compact controls.
- Use shadows sparingly. Current shadows are often heavy or inconsistent.
- Prefer border + light surface over strong shadow.
- Standard card padding should be 12-16px for dense sections and 20-24px for hero/product sections.
- Tables and watchlists can use 8-12px row padding.
- Do not compress CTAs below touch/click comfort.

## 8. Core FinX Web components

### 8.1 Market ticker

Purpose:
- Show live index and currency movement at the top/bottom depending context.

Observed labels:
- NIFTY 50
- BANKNIFTY
- FINNIFTY
- SENSEX
- INDIAVIX
- MIDCPNIFTY
- NIFTYSMALL
- NIFTY IT
- NIFTY NEXT 50
- NIFTY PHARMA
- NIFTY INFRA
- USDINR

Rules:
- Values must include current price and change/percentage.
- Positive and negative movement must use semantic green/red.
- Ticker should not distract from order/trading actions.
- On mobile, allow collapse or horizontal scroll.
- Do not make ticker a large card.

### 8.2 Header and global navigation

Observed navigation:
- Dashboard
- Markets
- Positions
- Holdings
- Orderbook
- Funds
- Trader Mode
- Profile
- Alerts
- Ledger
- P&L Report
- Global Details Report
- Contract Notes
- Tax Report
- Order Messages
- Shortcut Keys
- Sign Out

Rules:
- Trading-critical navigation should remain first-level.
- Reports and utility links should be grouped.
- Keep Trader Mode prominent.
- Avoid hiding trading routes under generic menus.
- Search should be visible and fast.

### 8.3 Watchlist

Purpose:
- Persistent instrument monitor and quick trade entry.

Observed:
- Desktop fixed left rail.
- Buy/Sell quick actions.
- Watchlist names: Watchlist 1, Watchlist 2, etc.
- Mobile watchlist becomes a floating entry.

Rules:
- Watchlist rows must show instrument, LTP, change, and action affordance.
- Buy and Sell should remain distinct.
- Avoid overcrowding every row with all possible actions.
- Use hover/reveal actions on desktop.
- On mobile, prioritize LTP and change first.
- Maintain fast scan behavior.

### 8.4 Asset summary

Observed homepage content:
- Greeting: `Hi Souvik`
- `My Assets`
- P&L Total
- Invested Amount
- Current Value
- Stock
- Mutual Funds
- Funds Available
- Add Funds / Mutual Funds action entry

Rules:
- Asset summary should be the top decision block.
- P&L should be instantly readable.
- Invested amount and current value should be paired.
- Avoid squeezing chart/progress ring and numbers into tiny areas.
- Make Add Funds visible but not noisy.
- Negative P&L must use red and include amount + percentage.

### 8.5 Trader Mode / Option Trader Pro Mode

Observed:
- Homepage has `Option Trader Pro Mode`.
- Card promotes hedged strategies and Trader Mode.
- Index/instrument page includes `Create Your Strategy`, `Trader Mode`, `Option Chart`, `Pivot Points`.

Rules:
- Trader Mode should feel like a premium pro tool.
- Use darker terminal visual only inside the Trader Mode card or terminal context.
- CTA should be clear: Explore Trader Mode / Open Trader Mode / Create Strategy.
- Avoid tiny compressed screenshots without clear CTA.
- For marketing cards, explain outcome: sharper trades, hedged strategies, multi-chart, ladder order, strategy builder.

### 8.6 Trading tools

Observed:
- Strategy Builder
- Basket Order
- Grot Trading
- Calculators: SIP & Lumpsum Calculator, Margin Calculator, Brokerage Calculator

Rules:
- Tool cards should show:
  - Icon
  - Tool name
  - One-line value
  - Chevron/action
- Keep a consistent card height.
- Avoid three different icon/background treatments in one row.
- Trading tools should be visually grouped separately from investment products.

### 8.7 Trending NCDs

Observed fields:
- Issuer/company name
- Coupon %
- Maturity Date
- Compact product card layout

Rules:
- NCD cards require coupon, maturity, rating if available, and issuer.
- Use coupon % as key number.
- Avoid making NCDs look like equity gainers.
- Bond/NCD cards need trust hierarchy: issuer, rating, coupon, maturity, CTA.

### 8.8 Smart investments

Observed:
- Mutual Funds
- Invest in IPO
- Secured Products
- Buyback

Rules:
- These are product entry points, not trading widgets.
- Use calmer visual style than trading tools.
- Keep icon, label, and concise helper text.
- Avoid mixing with high-volatility trading content.

### 8.9 Recommendations

Observed:
- Recommendation module with success ratio.
- CTA: `See All Calls`.

Rules:
- State the basis of recommendation.
- Success ratio must not overpromise.
- Use compliance-safe copy.
- Keep CTA clear and singular.
- Avoid implying guaranteed returns.

### 8.10 MF Basket

Observed:
- Basket title
- Amount
- Return period/type
- `VIEW ALL`

Rules:
- Show minimum investment and return context.
- Make risk/return period visible.
- Avoid treating MF basket like a quick trade card.

### 8.11 Markets module

Observed tabs:
- Trending
- Top Gainer
- Top Loser
- Indian Indices
- Global Indices

Observed table fields:
- Company
- LTP
- Change (%)
- Volume
- Value

Rules:
- Tables need aligned numeric columns.
- Change should use red/green and include %.
- Tabs should have clear selected state.
- Avoid cramped table cells.
- Use sticky header where useful.
- On mobile, use horizontal scroll or compact list cards.

### 8.12 Corporate actions

Observed:
- Corporate actions card with company/action/date and market impact.

Rules:
- Show action type, record/ex-date, company, and market impact separately.
- Keep status labels neutral unless direction is confirmed.
- Do not bury important dates in paragraph text.

### 8.13 FinX Flash / News

Observed:
- Labels: Bearish, Neutral
- Timestamp
- Headline
- Summary text
- Impact After News value

Rules:
- News cards should be compact.
- Sentiment label must be visually distinct but not overpowering.
- Impact after news should use semantic movement color.
- CTA/share/save icons should be low emphasis.
- Avoid long paragraphs in dashboard cards.

### 8.14 Partner products

Observed:
- Narnolia
- AlgoWizard

Rules:
- Partner products should sit lower in hierarchy.
- Avoid mixing partner promos with top user assets.
- Use clear external/partner affordance if applicable.

### 8.15 Footer

Observed footer links:
- About Us
- Margin Against Shares
- Terms of Use
- Privacy Policy
- Disclaimer
- Beta T&C
- Exchange Messages
- Membership Details
- Call for Trade
- Exchange Timings
- Fund Transfer
- Screener
- Support
- Branches
- FAQ
- Charges
- NSE
- BSE
- MCX
- NCDEX
- SEBI
- Back Office
- Brokerage Calculator
- Holiday Calendar
- Event Calendar
- Margin Calculator
- Shortcut Keys
- E-voting

Rules:
- Footer is link-heavy. Keep grouped and low visual priority.
- On mobile, collapse into accordions.

## 9. Instrument / index page patterns

The Nifty 50 page confirms that FinX Web has instrument/index detail pages with:

- Watchlist rail
- Instrument/index detail content
- Strategy creation entry
- Trader Mode entry
- Option Chart
- Pivot Points
- Stock composition table
- Last updated timestamp
- Standard footer

Rules:
- Instrument page must prioritize live price, change, chart, technical/contextual tools, and constituent table.
- `Create Your Strategy` should be visible for indices/F&O-relevant assets.
- Chart and table should not compete for attention.
- Last updated timestamp should be present near data-heavy modules.
- On mobile, chart first, then action strip, then tables.

## 10. Trading-specific UI rules

### Numeric clarity

- Always align prices, percentages, quantity, value, and volume.
- Use Indian number formatting where appropriate.
- Use consistent decimal precision.
- Keep percent signs visible.
- Do not truncate instrument names without tooltip or expansion.

### Buy/Sell

- Buy and Sell actions must remain visually distinct.
- Do not use identical outline buttons for Buy and Sell in dense contexts.
- Avoid accidental tap risk by spacing actions clearly.
- Confirmation states must be stronger than discovery states.

### P&L and market movement

- Green means positive movement/gain.
- Red means negative movement/loss.
- Neutral should be grey or muted.
- Do not use red/green for decorative cards.
- P&L needs both amount and percentage where possible.

### Risk, order, and margin

- Risk states should not be hidden in helper copy.
- Margin shortfall must use warning/error treatment.
- Order confirmation should summarize instrument, quantity, price type, validity, margin, and charges where applicable.
- Error states should include recovery action.

## 11. Motion and interaction

Observed:
- Walkthrough overlays use blue background, arrows, dark backdrop, and high z-index.
- Watchlist transitions use `transition: all .3s ease`.
- Ticker uses marquee-style movement.
- Plotline overlays/widgets exist.
- Search placeholder has an animated slide.

Rules:
- Use motion only for orientation or feedback.
- Avoid continuous motion in trading zones unless it is a ticker.
- Keep interactions fast and low-latency.
- Hover states should reveal extra actions on desktop.
- Mobile actions should not depend on hover.
- Walkthroughs should be short, anchored, and readable.

## 12. Responsive behavior

Observed media breakpoints include frequent usage of:

- `(max-width: 767px)` observed `203` times
- `(max-width: 1550px)` observed `59` times
- `screen and (max-width: 767px)` observed `43` times
- `(max-width: 992px)` observed `38` times
- `(max-width: 1367px)` observed `37` times
- `(max-width: 990px)` observed `23` times
- `(max-width: 1392px)` observed `19` times
- `(max-width: 1200px)` observed `16` times
- `(max-width: 768px)` observed `15` times
- `screen and (max-width: 560px)` observed `14` times
- `screen and (min-width: 1537px) and (max-width: 3000px)` observed `12` times
- `(min-width:1200px)` observed `10` times
- `(max-width: 1024px)` observed `9` times
- `(max-width: 1280px)` observed `9` times
- `(min-width: 768px) and (max-width: 990px)` observed `8` times
- `(max-width: 560px)` observed `6` times
- `(max-width: 1440px)` observed `6` times
- `(min-width: 1200px) ` observed `6` times
- `(max-width: 360px)` observed `5` times
- `(max-width: 990px) and (min-width: 768px)` observed `5` times
- `(max-width:767px)` observed `5` times
- `(min-width:768px)` observed `5` times
- `(min-width:992px)` observed `5` times
- `(min-width: 768px) and (max-width: 993px)` observed `4` times
- `(min-width: 992px) and (max-width: 990px)` observed `4` times

Practical rules:

- Desktop: watchlist rail + right content.
- Tablet: watchlist can collapse, content goes full width.
- Mobile: stacked content, sticky key actions where needed.
- Do not simply shrink desktop cards into mobile.
- Mobile cards should become compact lists.
- Long horizontal tables need either scroll or list transformation.
- Footer should collapse.

## 13. Current class/component evidence

Common class names observed in the captured HTML:

- `animate` observed `129` times
- `btn` observed `60` times
- `text-right` observed `52` times
- `child` observed `50` times
- `btn-outline` observed `46` times
- `text-gray` observed `38` times
- `fullwidth` observed `30` times
- `row` observed `29` times
- `percentage` observed `28` times
- `ng-untouched` observed `28` times
- `ng-pristine` observed `28` times
- `carousel-tag` observed `24` times
- `carousel-percentage` observed `24` times
- `percentage-section` observed `24` times
- `ng-valid` observed `24` times
- `col-xs-6` observed `22` times
- `text-uppercase` observed `21` times
- `font-12` observed `20` times
- `font-11` observed `20` times
- `parent` observed `20` times
- `highlight` observed `20` times
- `text-highlight` observed `20` times
- `dropdown-menu` observed `19` times
- `text-green` observed `18` times
- `head` observed `18` times
- `change` observed `18` times
- `active` observed `17` times
- `img-responsive` observed `16` times
- `item` observed `16` times
- `clearfix` observed `15` times
- `text-left` observed `15` times
- `hidden-lg` observed `14` times
- `visible-xs-block` observed `14` times
- `cardwrap` observed `14` times
- `card-bottom` observed `14` times
- `count` observed `14` times
- `col-sm-12` observed `14` times
- `d-none` observed `13` times
- `btn-buy` observed `13` times
- `buy` observed `13` times
- `text-red` observed `13` times
- `text` observed `13` times
- `padding-0` observed `13` times
- `sec2` observed `12` times
- `text-pink` observed `12` times
- `search1` observed `12` times
- `ncd-label` observed `12` times
- `ncd-related-value` observed `12` times
- `col-xs-12` observed `12` times
- `sec1` observed `12` times
- `font14` observed `12` times
- `form-control` observed `11` times
- `imgwrap` observed `11` times
- `sm-ttl` observed `11` times
- `editable` observed `10` times
- `watchEditName` observed `10` times
- `watch-ttl` observed `10` times
- `watchlist-name` observed `10` times
- `watchlist-edit` observed `10` times
- `hidden-md` observed `10` times

Use these only as evidence of current implementation. Do not make new UI depend on these exact class names unless updating the existing Angular codebase.

## 14. Design tokens JSON

```json
{
  "product": "Choice FinX Web",
  "source_type": "Homepage screenshot + saved Angular HTML pages",
  "status": "current-state evidence, not final-quality design direction",
  "typography": {
    "primaryFont": "Onest",
    "fallback": "sans-serif",
    "weightsObserved": [
      200,
      300,
      400,
      500,
      600,
      700,
      800
    ],
    "htmlBaseFontSize": "12px",
    "bodyFontSize": "1rem",
    "bodyLineHeight": "1.428571429",
    "commonSizesPx": [
      "10px",
      "11px",
      "12px",
      "13px",
      "14px",
      "15px",
      "16px",
      "18px",
      "20px",
      "24px"
    ]
  },
  "colors": {
    "primaryBlue": "#2777F3",
    "alternateBlue": "#2D77F4",
    "textPrimary": "#0F0E16",
    "textSecondary": "#6F6E73",
    "textMuted": "#797979",
    "success": "#45B644",
    "danger": "#DE493B",
    "surface": "#FFFFFF",
    "softBlueSurface": "#F4F8FE",
    "border": "#E3E1EB",
    "divider": "#EBEBEB",
    "warningYellow": "#F9EB21"
  },
  "shape": {
    "standardRadius": [
      "4px",
      "8px"
    ],
    "pillRadius": "999px / 50%",
    "largeRadius": [
      "10px",
      "20px"
    ]
  },
  "layout": {
    "desktopWatchlistWidth": "340px",
    "largeDesktopWatchlistWidth": "400px",
    "desktopMainContainer": "calc(100% - 370px)",
    "largeDesktopMainContainer": "calc(100% - 440px)",
    "headerHeightObserved": "115px",
    "tickerPosition": "fixed bottom"
  }
}
```

## 15. CSS variables for future standardization

```css
:root {
  --finx-web-font-family: "Onest", sans-serif;
  --finx-web-text-primary: #0F0E16;
  --finx-web-text-secondary: #6F6E73;
  --finx-web-text-muted: #797979;
  --finx-web-brand-blue: #2777F3;
  --finx-web-brand-blue-alt: #2D77F4;
  --finx-web-success: #45B644;
  --finx-web-danger: #DE493B;
  --finx-web-warning: #F9EB21;
  --finx-web-surface: #FFFFFF;
  --finx-web-surface-subtle: #F9F9F9;
  --finx-web-surface-blue: #F4F8FE;
  --finx-web-border: #E3E1EB;
  --finx-web-divider: #EBEBEB;

  --finx-web-radius-sm: 4px;
  --finx-web-radius-md: 8px;
  --finx-web-radius-lg: 10px;
  --finx-web-radius-pill: 999px;

  --finx-web-shadow-soft: 0 0 50px #A9ACBD26;
  --finx-web-shadow-overlay: 0 0 30px #0000004D;

  --finx-web-watchlist-width: 340px;
  --finx-web-main-width: calc(100% - 370px);
  --finx-web-header-height: 115px;
}
```

## 16. Suggested FinX Web redesign principles

1. **Dashboard must become intent-based.**  
   Separate trading, investing, insights, and tools instead of one long mixed feed.

2. **Top fold must answer the user’s main question.**  
   What is my position? What changed? What should I do next?

3. **Market modules should be tables or compact lists, not decorative cards.**

4. **Trader Mode should be treated as a premium trading upgrade.**  
   It needs visual prominence and a clear CTA.

5. **Investment products need calm trust cues.**  
   NCD, MF, IPO, and secured products should not look like trading widgets.

6. **CTAs must be reduced.**  
   Every module should not scream for action.

7. **Use visual rhythm.**  
   Alternate summary modules, tool grids, and data tables.

8. **Preserve dense information, improve grouping.**  
   FinX Web cannot become a blank lifestyle fintech landing page.

## 17. Claude design generation rules

When asked to create or redesign a FinX Web screen:

- Start from FinX Web IA and current modules.
- Use Onest.
- Use `#2777F3` as primary action blue.
- Use `#45B644` for positive movement.
- Use `#DE493B` for negative movement.
- Use white/light surfaces.
- Use subtle blue background sections only for priority modules.
- Use `8px` radius for cards.
- Use clean borders over heavy shadows.
- Keep trading data aligned and compact.
- Create a professional fintech dashboard, not a marketing website.
- Make the design visibly better than the current website.
- Do not remove important product modules unless user asks.
- Do not invent irrelevant consumer-finance widgets.
- Do not use generic SaaS dashboard UI.
- Do not make Trader Mode look like the normal investment dashboard.
- Use real labels from current FinX Web where possible.

## 18. Claude prompt template

Use this prompt when asking Claude to redesign a FinX Web screen:

```text
You are redesigning Choice FinX Web, a trading and investing platform.

Use the uploaded FinX Web Project Memory as source of truth.

Important:
The current FinX Web UI is evidence, not the final desired quality. Preserve product structure, terminology, colors, typography, and trading logic, but improve visual hierarchy, spacing, density, grouping, and premium fintech feel.

Design rules:
- Use Onest typography.
- Use #2777F3 as primary blue.
- Use #45B644 for positive market/P&L movement.
- Use #DE493B for negative market/P&L movement.
- Use #0F0E16 for primary text.
- Use white/light surfaces with subtle #F4F8FE sections.
- Use 8px radius cards and clean borders.
- Keep trading data scannable.
- Preserve buy/sell distinction.
- Use compact tables for markets.
- Do not make it look like a generic SaaS dashboard.
- Do not blindly replicate the current cluttered long-scroll layout.

Task:
[insert exact screen or component to redesign]

Output:
[ask for HTML, React, Figma brief, UI spec, or PM note]
```

## 19. Screen blueprint: FinX Web homepage/dashboard

### Current modules

```text
Top index ticker
Header/navigation
Watchlist
Greeting
My Assets
Stock / MF / Funds Available summary
Trader Mode / Option Trader Pro Mode card
Top Trading Tools
Trending NCDs
Smart Investments
Recommendations
MF Basket
Partner Products
Markets
Corporate Actions
Tools
Academy banner
FinX Flash
Community/footer
```

### Better target structure

```text
Top market ticker
Header with search + core nav
Left watchlist
Right main dashboard:
  A. Portfolio health + funds + quick actions
  B. Trading command center
  C. Market movement table
  D. Investing opportunities
  E. Research and alerts
  F. Calculators and utilities
Footer
```

### Required improvements

- Stronger first fold.
- Clearer portfolio summary.
- Better Trader Mode prominence.
- Fewer competing CTAs.
- Cleaner market table.
- More consistent card sizes.
- Better responsive behavior.

## 20. Screen blueprint: FinX Web Nifty 50 / index detail

### Current modules

```text
Header/navigation
Watchlist
Index detail page
Create Your Strategy
Trader Mode
Option Chart
Pivot Points
Stocks comprising Nifty 50
Last updated timestamp
Footer
```

### Better target structure

```text
Index summary header:
  Price, change, day range, key stats, timestamp

Primary action strip:
  Create Strategy
  Open Trader Mode
  Option Chart
  Pivot Points

Chart section:
  Live chart / technical view

Market structure:
  Constituents
  Top gainers/losers inside index
  Volume/value table

Context:
  News, events, corporate action where relevant
```

## 21. Accessibility and usability rules

- Text contrast must pass basic readability on white and light blue surfaces.
- Red/green states need labels or symbols, not color alone.
- Interactive controls must have minimum comfortable click/tap area.
- Market tables need keyboard focus and visible row hover.
- Important actions need confirmation.
- Error states must be human-readable.
- Footer links must remain accessible on mobile.
- Animated ticker must not block reading critical data.

## 22. QA checklist

Before approving any FinX Web iteration:

- Does it still feel like FinX?
- Does it use Onest?
- Are colors semantically correct?
- Are positive/negative values instantly readable?
- Are Buy/Sell actions distinct?
- Is the first fold useful?
- Are sections grouped by intent?
- Does the watchlist remain usable?
- Are market tables aligned?
- Is Trader Mode prominent enough?
- Are CTAs limited and clear?
- Does mobile avoid compressed desktop layout?
- Are empty/loading/error states included?
- Does it avoid generic fintech/SaaS look?
- Does it improve current visual quality instead of copying current clutter?

## 23. Known gaps

This memory is based on one homepage screenshot and two saved HTML pages. It is strong for current FinX Web structure and styling direction, but not complete for the whole product.

Still needed for stronger accuracy:

- Full SVG/Figma export for FinX Web.
- Component screenshots for order flow, funds, positions, holdings, reports, and alerts.
- Dark mode or Trader Mode web references.
- Exact design tokens from source Figma if available.
- Current production CSS source files instead of saved compiled/scoped HTML only.
- Responsive screenshots for mobile, tablet, and desktop.
- Empty/loading/error/warning state references.
- Product confirmation on which current sections should stay, merge, or be removed.

## 24. Final stance

FinX Web should not be replicated as-is.

It should be treated as:

```text
Current-state product evidence + real IA + real tokens + real labels
```

The target should be:

```text
A cleaner, sharper, more premium, decision-first trading and investing web dashboard.
```
