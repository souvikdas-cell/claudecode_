# FinX 3.0 + StrikeX — Memory Pack

Companion to `Summary_of_FinX3.0`. Adds product, brand, competitor, and execution context derived from prior chats.

Owner: Souvik Das
Scope: FinX trading dashboard, StrikeX trader workspace, retention layer.
Out of scope: NCDs, Bonds, Wealth, AA/CIBIL, RM appointment flows.

---

## 21. StrikeX Product Knowledge

### 21.1 What StrikeX Is

StrikeX is the F&O trader workspace inside FinX.
Entry point on app: small card in "Option Trader Pro Mode" section. Sits below the fold.
90% of users do not know it exists. Visibility is the first problem.

Internal naming:
* Public-facing label: "Trader Mode"
* Internal label: "StrikeX"
* External brand pull is moving away from "StrikeX" toward "Trader Mode" in user-facing copy.

### 21.2 StrikeX Feature Set

Confirmed features inside the workspace:

* Price Ladder
* Price Ladder XY
* Spread Ladder
* Basket Order
* Straddle / Strangle
* Grot Algo
* Watchlist
* Option Chain
* Strategy Builder
* Spread Finder
* Heatmap
* Charts
* IV Charts
* OI Charts
* Rolling Charts

### 21.3 StrikeX URLs and Routing

Production dashboard URL:
`https://strikex.choiceindia.com/v2/dashboard?workspaceId=9d85871f-b4ff-4d0c-8e4c-203ca26dcb13`

Strategy Builder deep-link format:
`https://betafinx.choiceindia.com?productType=strikex&widgets=name:strategy-builder,underlyingInternalToken:{token},expiry:{expiryDate},selectedStrategyKey:{strategyKey}`

Token mapping:
* NIFTY → `Nifty%2050`
* SENSEX → `SENSEX`

### 21.4 StrikeX Strategy Mapping

Direction-based default strategy:

| Direction | Strategy Key |
|---|---|
| Bearish | bear_put_spread |
| Neutral | short_straddle |
| Bullish | bull_call_spread |

### 21.5 Plotline Action ID Format

Pattern: `strikex_widget_{underlying}_{direction}_{yyyy_mm_dd}_open`

Example: `strikex_widget_nifty_bullish_2026_05_05_open`

Web bridge call:
`window.PlotlineWeb.onClick(actionId, 'REDIRECT', url, 'WEB', true, false, true);`

Web only. Do not add Android or iOS bridge for these widgets.

### 21.6 Expiry Logic

* NIFTY rolls to next Tuesday expiry.
* SENSEX rolls to next Thursday expiry.
* Holiday fallback uses manually fed previous trading day.

---

## 22. Retention Strategy — The PowerUp-for-Equity Thesis

### 22.1 Core Insight

PowerUp Money's moat is not advice. It is the rating system that creates urgency to act.
Their genius: they do not give market news. They grade the user's own portfolio.
Every fund in a user's portfolio gets In-Form / On-Track / Off-Track / Out-of-Form. Rating changes monthly. Notification fires on change. That single mechanic drives retention.

PowerUp raised ₹100 Cr. Onboarded 5L+ users in 8 months. Tracking ₹65,000 Cr+ in assets.

### 22.2 The Translation to FinX Equity

| PowerUp (MF) | FinX Equity equivalent |
|---|---|
| Fund rated In-Form / Off-Track | Stock rated Healthy / Watch / Review |
| Monthly rating change → notify | Event-driven signal → notify (result, breakout, risk flag) |
| Portfolio health snapshot on open | Portfolio P&L + Health Score on open |
| Rebalancing recommendation | Position sizing alert / concentration flag |
| Fund rank trends | Stock momentum + fundamental trend |

### 22.3 The Five Features That Win Retention

Ranked by ROI for FinX retention POD:

1. **Stock Health Status Card** — Each holding tagged 🟢 Healthy / 🟡 Watch / 🔴 Review. Composite of price trend, results beat/miss, promoter holding change, technical momentum. Anchor feature.
2. **Earnings Alert (T-3 days)** — "INFY results in 3 days. Last quarter EPS ₹18.6." Push + in-app card. Trendlyne data.
3. **Morning Portfolio Digest (7:45 AM)** — Overnight P&L + one corporate event today + one LLM-generated sentence. 10-second readable. Replaces Moneycontrol habit.
4. **Benchmark Comparison** — "Your portfolio +9.2% vs Nifty +5.8% in 30 days." Free NSE data. Emotionally satisfying when positive. Re-engagement when negative.
5. **Personal Corporate Actions Calendar** — Ex-dividend, bonus, split, results — only for stocks user holds. No noise.

### 22.4 What NOT to Build

* AI stock recommendations — needs RA/IA registration. Keep AI descriptive ("what happened"), not prescriptive ("what to do").
* Generic stock screener — Tickertape and Trendlyne already own it.
* Social / community features — moderation risk, slow network effects.
* Complex ML signal models — rule-based is enough for MVP, faster to ship.

### 22.5 4-Week MVP Spec

* Week 1–2: Portfolio snapshot home screen + corporate events calendar + Firebase push for earnings alerts.
* Week 3: Stock Health Card (rule-based composite) + benchmark vs Nifty.
* Week 4: Morning digest push + home screen redesign (lands on portfolio, not terminal).

API cost estimate: ₹15K–25K/month. Serves first 50K users.

### 22.6 Plug-and-Play API Stack

Tier 1 (2–4 weeks, plug-and-play):
* Trendlyne Data API — corporate actions, earnings, ratings, DVM, technicals
* Truedata — NSE/BSE OHLCV live + historical
* BSE/NSE Corporate Actions feed — free
* Claude or OpenAI — plain-language commentary
* Firebase / OneSignal — push delivery

Tier 2 (4–6 weeks):
* Screener.in licensing — fundamental enrichment
* Sensibull API — F&O analytics on holdings

Tier 3 (skip for MVP):
* Custom screener engine, ML signal models, tick-level exchange feeds

---

## 23. Trader Mode Weekly Analysis Cards

### 23.1 Concept

7-card swipeable post-week diagnosis. Lives in plotline.
Goal shift: from post-trade regret to pre-trade planning.
No loss-report energy. Diagnosis, not punishment.

### 23.2 Card Arc (Final Approved)

| # | Story beat | Visual |
|---|---|---|
| 1 | Risk not defined | Diagnosis stat (single number) |
| 2 | All trades naked | Pattern — wide red tile + CE/PE counts |
| 3 | Losses hit harder | Cost — horizontal bars (loss vs win amounts) |
| 4 | Industry context anchor | "95% of retail naked option traders end the week in loss." Single big number, two contrast chips. |
| 5 | Pre-trade payoff check | Payoff chart — loss zone vs profit zone |
| 6 | Workspace bridge | Trader Mode screenshots (2×3 grid) |
| 7 | Open CTA | Full-bleed Trader Mode screenshot + dark CTA strip |

Removed: generic before/after framing in Card 4 (felt redundant with Card 5).

### 23.3 Card Sizing and Layout Rules

* Each card: 870 × 555 px exactly.
* `?card=1` to `?card=7` in URL for single-card capture.
* No query param: all 7 stacked.
* No absolute positioning in hero zones. Flex only.
* Bottom bar: fixed 46px height. `-webkit-line-clamp: 2` on note.
* Footer must never overlap content.
* Screenshots placed in 2×3 (not 3×2) for legibility on phone at 430px.

### 23.4 Approved Design Tokens (Cards)

```css
--choice-blue: #2777F3
--choice-green: #45B644
--choice-red: #DE493B
--green2: #2F9B4D
--red2: #C7362C
--page-bg: #DDEAF6
--title: #1B1464
--ink: #101828
--muted: #667085
```

Card background: triple-radial blue glow on light gradient. Glass tiles. 34px corner radius. Soft shadow `0 18px 44px rgba(27,20,100,.10)`.

### 23.5 Dynamic Variable Pattern

All editable values live in a single `DATA = { }` JS object at top of script. AI team only touches that block. Every text node uses `data-var` attributes. No HTML digging.

Variables: `c1_stat_value`, `c2_main_val`, `c2_ce_val`, `c2_pe_val`, `c3_loss_amt`, `c3_win_amt`, `c3_loss_bar_pct`, `c3_win_bar_pct`, `c4_industry_pct`, `c4_your_loss`.

---

## 24. StrikeX Strategy Builder Widget

### 24.1 Layout Spec

Compact horizontal widget. Plotline Web only.

* Top row left: "Pick your view, get a strategy" + "Build strategy in 1 click" (small gap) + expiry pill below.
* Top row right: NIFTY / SENSEX switch (top-right, small, no blue dot, subtle running grey conic border).
* Right side visual: slow-moving candlesticks + glowing chess knight (strategy, not luxury).
* Bottom row: three CTAs — Bearish | Neutral | Bullish (equal width).

### 24.2 CTA Treatment

Light tinted backgrounds. Not dark filled.

| Direction | Tint | Border |
|---|---|---|
| Bearish | red tint | 1.2px red |
| Neutral | indigo / soft purple tint | 1.2px indigo |
| Bullish | green tint | 1.2px green |

Each CTA has an animated payoff line in its icon: bearish slopes down, neutral draws short-straddle tent, bullish slopes up.

### 24.3 What to Avoid

* Spinning conic border on the widget — visually noisy, no meaning.
* Decorative crowns or luxury motifs.
* Dark saturated CTA fills.
* "Strategy Builder" pill or "Edge" word — removed from final design.
* Loud gradients.

---

## 25. StrikeX Visibility Banner (Plotline Above Greeting)

### 25.1 Final Spec

Full-width horizontal banner. Sits above "Hi Souvik" greeting on home dashboard.

* Height: 96–104px (Plotline iframe must match).
* Width: full container with hard-fixed `height` (not `100%` — Plotline injects taller iframes).
* Background: `#EEF4FF` light blue-white. Border `#C8DCFF`.
* Left anchor: "Trader Mode" badge (260px fixed) + one-line value prop.
* Center: animated feature pill carousel (12 pills, 4 colors, staggered glow).
* Right: single CTA "Open Trader Mode" or "Try Trader Mode" (fixed width, hugs right edge).
* Bottom strip (34–42px): scrolling index ticker — 10 assets (Nifty 50, Bank Nifty, Sensex, India VIX, FinNifty, MidcpNifty, Nifty IT, Gold, Crude Oil, Silver).

### 25.2 Animation Rules

* No dynamic prices or percentages — static visuals only. Avoids data liability.
* Candlestick build: `scaleY(0)` → up, staggered 0.3s ease-out, then breathing loop.
* Mix red and green candles per asset. Never all-red.
* Continuous scroll: duplicate-set technique. No restart flash.
* No spinning rings on the banner border.

### 25.3 Validation Plan

Phase 1: Plotline web banner. CTR target 8% in week 1 = pass.
Phase 2: Move to in-app placement only after CTR validated.

---

## 26. Brand System Anchors

### 26.1 Colors (Authoritative)

| Token | Hex | Use |
|---|---|---|
| Primary Blue | `#2777F3` | CTAs, active tabs, highlights |
| Dark Navy | `#1B1464` | Headlines, titles |
| Success | `#45B644` | Gains, approvals |
| Error | `#DE493B` | Losses, blocked actions |
| Warning | `#F9EB21` | Caution, pending |
| Info | `#5D99F6` | Tooltips |
| Background Light | `#F4F6FB` | Page background |
| Surface White | `#FFFFFF` | Cards, modals |
| Border | `#E8ECF5` | Dividers |
| Charcoal | `#3A3D5C` | Secondary text |
| Muted | `#9BA5BF` | Placeholders |
| Ink | `#0F0E16` | Body text |

### 26.2 Typography

Font: **Onest** (Google Fonts).
Body left-aligned. Center only hero titles.

Key sizes: Display 32/36 SemiBold. Heading Lg 18/21. Heading Mid 16/20. Body Lg 16/20. Body Md 14/18. Body Sm 12/16.

### 26.3 Buttons

Primary filled: `#2777F3` (blue) / `#DE493B` (sell) / `#45B644` (green). White bold text. 8px radius.
* Large 44px / 14px font. Medium 36px / 13px. Small 28px / 12px.
* Disabled: `#E8ECF5` bg, `#9BA5BF` text.

Secondary outline: white bg, 1.2px colored border, bold colored text.

Text button: `#2777F3`, no bg. With or without arrow. "View More ↑/↓" variant for expandables.

### 26.4 Tabs

Primary (underline): active = blue text + 2px bottom border. Inactive = charcoal, no border.
Secondary (pill): active = filled `#2777F3` white text 99px radius. Inactive = white bg, `#E8ECF5` border, charcoal text.

---

## 27. Competitor Intelligence (Trading Focus)

### 27.1 Multibagger.ai

* Shark Tank featured. Iris is a chat-based AI research assistant.
* Features: portfolio tracker, watchlist, corporate actions calendar, screeners (stocks/ETFs/IPO/intraday), discovery engine.
* Indexes 100K+ official documents (annual reports, concalls, presentations).
* Gap: Generic research tool. Not connected to user's actual broker holdings. No personalized signal layer.

### 27.2 Jarvis Invest

* SEBI Registered AI advisor.
* Equity-focused. Continuously analyzes ~40M data points.
* Closest in DNA to "personalized portfolio AI" we want to build.

### 27.3 PowerUp Money

* Mutual fund focus. The retention thesis we are translating to equity.
* In-Form / On-Track / Off-Track / Out-of-Form rating per fund.
* Monthly rating change is the entire retention engine.

### 27.4 Tickertape

* Strong screener and stock analytics.
* Fundamentals + scorecards + peer comparison.
* Owns "stock discovery" mindshare in India.

### 27.5 Trendlyne

* Deep data: corporate actions, earnings calendar, analyst ratings, DVM scores, technical indicators.
* API licensable. Powers many retail fintech analytics apps.

### 27.6 StockEdge

* Research-heavy. Scans, alerts, learn modules.
* Strong on technical and fundamental scans for serious retail.

### 27.7 Groww (Direct Broker Competitor)

* Clean white UI, minimal data, fast onboarding.
* Option Chain: center strike, OI bars, easy toggle.
* Order flow: simple, inline chart, minimal inputs.
* Strength: low friction, beginner friendly.
* Weakness: no guidance, no strategy intelligence, no risk clarity.
* Observation: User trades fast. User learns nothing.

### 27.8 Fyers (Direct Broker Competitor)

* Dense, data-heavy, chart-first.
* Advanced charting, indicators, drawing tools.
* Strength: power tools for serious traders.
* Weakness: overwhelming, no guidance.
* Observation: User can trade. User must already know what to do.

### 27.9 Dhan (Direct Broker Competitor)

* Trader-focused with advanced execution tools.
* Active community of derivatives traders.

### 27.10 Paytm Money (Direct Broker Competitor)

* Mass retail. Simple, low friction.
* Lighter on derivatives depth.

### 27.11 Motilal Oswal (Comparison Point)

* Strongest among broker apps for listed NCD data display (YTM, repayment schedule, investment calculator together).
* Less differentiated on F&O execution.

### 27.12 INDmoney (Wealth Comparator)

* Clean, spaced, friendly. Portfolio first, trading secondary.
* Light nudges. Not actionable.
* Strength: trust, simplicity, wealth context.
* Weakness: weak F&O depth, no execution edge.
* Observation: User feels safe. User does not trade actively.

### 27.13 Sharesight (Global Reference)

* Global portfolio tracker.
* Personal corporate actions calendar is one of their most-loved features. Reference pattern for FinX retention.

---

## 28. Decision History and Learnings

### 28.1 What Was Tried and Discarded

* Dynamic prices on the StrikeX banner — removed. Data liability and refresh complexity. Static candles win.
* "12+ Live strategies" stat chip — removed. Replaced with "Weekly · Expiry" then dropped entirely for cleaner layout.
* "StrikeX" name in user-facing banner — removed. Replaced with "Trader Mode."
* Card 4 "before/after framed boxes" — removed. Too text-heavy. Replaced with industry stat (95% lose money trading naked).
* Card 5 "max loss simulation chart" alongside Card 4 simulation — removed. Same message twice. Card 4 became cause (industry context), Card 5 became cure (payoff visual).
* "Strategy Builder" pill and "Edge" word in widget — removed. Visually redundant.
* Spinning conic ring borders — removed in places. Decorative without meaning.
* Crown / luxury motifs in chess element — removed. Replaced with knight (strategy, not luxury).
* Collapsible reasoning in stock recommendation cards — not possible per design constraint. Used compact 2-line plain language reasons instead.
* Rank numbers (1, 2, 3) on stock list — removed. Used space for reasoning.
* "Desk Verified" / "Research Verified" badges — removed. Cluttered the card.
* "Top stocks" precise target / stop-loss numbers — softened. Easy plain-language reasons preferred ("You already hold Jio, this is the parent company").

### 28.2 Reusable Patterns

* Single dynamic-variable JS object at top of every Plotline widget. AI team only edits that block.
* Light-tinted CTA buttons over filled dark buttons. Matches Choice in-app feel.
* Fixed-height containers for Plotline iframes. Never use `height: 100%` — Plotline injects taller containers and creates whitespace.
* Duplicate-set scroll technique for continuous animation. No restart flash.
* Minimum 2-line reason copy in any card. Never single-line opaque reasons.
* Always lead with the user's own data, not market news.

---

## 29. Plotline Integration Patterns

### 29.1 Widget Build Rules

* Single self-contained HTML file.
* Internal CSS and JS only.
* No external JS libraries.
* No inline `onclick` handlers — `addEventListener` only.
* SVG / CSS for charts. No external chart libs.
* Onest font from Google Fonts.

### 29.2 Web Bridge

```js
window.PlotlineWeb.onClick(actionId, 'REDIRECT', url, 'WEB', true, false, true);
```

Falls back to `window.open` for browser testing.

### 29.3 Validation Funnel

Test on web first → measure CTR on Plotline → if CTR ≥ 8% in week 1, move to in-app placement.

---

## 30. Source-of-Truth Hierarchy

When two project docs conflict, this is the precedence:

1. `Summary_of_FinX3.0` — north star, anchor lines, intelligence layer definitions.
2. `FinX_StrikeX_Memory_Pack` (this file) — concrete product, brand, competitor, decision history.
3. `FinX_App_Screen_Catalog` — visual reference for as-is screens.
4. `ChoiceFinX_Brand_Prompt` — exhaustive design tokens.

This file is appended only. Do not overwrite history. When new decisions land, add a dated note under the relevant section.
