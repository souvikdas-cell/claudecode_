# FinX Discovery Widget — Data & Logic Specification

> For engineering handoff and VP review. Covers all data points required, field definitions, and the decision logic behind each UI element.

---

## 1. Overview

The widget has two independent modules:

| Module | Purpose | Primary Users |
|---|---|---|
| **OI Flow** | Open Interest signal scanner for Index (NIFTY, SENSEX) and Stocks | Directional traders |
| **IV Spikes** | Implied Volatility spike scanner for option writers | Premium sellers |

---

## 2. OI Flow — Index (NIFTY / SENSEX)

### 2.1 Data Points Required Per Signal

| Field | Type | Description | Example |
|---|---|---|---|
| `idx` | string | Index name | `"NIFTY"`, `"SENSEX"` |
| `stk` | number | Strike price | `25000`, `82500` |
| `t` | `"ce"` / `"pe"` | Option type — Call or Put | `"ce"` |
| `ltp` | string | Last Traded Price of the option (premium) | `"₹112"` |
| `chg` | string | Option premium % change vs prev close | `"+22%"` |
| `cc` | `"up"` / `"dn"` | Color class for `chg` | `"up"` |
| `oc` | string | Open Interest change in lots (absolute) | `"+9L"`, `"−22L"` |
| `occ` | `"up"` / `"dn"` | Direction of OI change | `"up"` |
| `ocp` | string | OI change as percentage | `"+14.2%"` |
| `bpct` | number (0–100) | Bar fill % for OI visual bar (relative to session high) | `45` |
| `vol` | string | Volume vs daily average (multiplier) | `"3.8×"` |
| `sig` | `"bull"` / `"bear"` / `"cover"` / `"unwind"` | OI signal type (see §4) | `"bull"` |
| `time` | string | Clock time when signal was detected | `"14:14"` |
| `ts` | number | Minutes since 9:15 AM when signal was detected | `299` |

---

### 2.2 Data Points Required Per Stock Signal

Same fields as above except:
- Replace `idx` / `stk` / `t` with:

| Field | Type | Description | Example |
|---|---|---|---|
| `n` | string | Stock ticker | `"RELIANCE"` |
| `sub` | string | Full company name | `"Reliance Industries"` |
| `ltp` | string | Stock Last Traded Price | `"₹1,452"` |

---

### 2.3 Session Constants (from market feed)

| Constant | Value | Meaning |
|---|---|---|
| `NOW_TS` | e.g. `308` | Current time in minutes since 9:15 (308 = 14:23) |
| `SESSION` | `375` | Total session length in minutes (9:15–15:30) |
| `ATM` | `{ NIFTY: 24850, BANKNIFTY: 53200, SENSEX: 82200 }` | Current ATM strike for each index |
| `STEP` | `{ NIFTY: 50, BANKNIFTY: 100, SENSEX: 100 }` | Strike interval per index |

---

## 3. Signal Story Logic

The **Signal Story** text shown in the table is derived from two inputs: `sig` (signal type) and `vol` (volume multiplier).

```
if sig = "bull":
  vol ≥ 5×  →  "Strong Bull Flow"
  vol < 5×  →  "Bull Flow Building"

if sig = "cover":
  vol ≥ 5×  →  "Short Squeeze"
  vol < 5×  →  "Shorts Retreating"

if sig = "bear":
  vol ≥ 5×  →  "Bear Pressure Rising"
  vol < 5×  →  "Bear Pressure"

if sig = "unwind":
  vol ≥ 4×  →  "Longs Unwinding"
  vol < 4×  →  "OI Draining"
```

**Rule:** Intensity threshold is volume. High volume = confirmation. Low volume = early signal.

---

## 4. OI Signal Type Definitions

| Signal | OI Direction | Price Direction | Meaning |
|---|---|---|---|
| `bull` (Bull Flow) | OI ↑ | Price ↑ | New long positions being added |
| `bear` (Bear Pressure) | OI ↑ | Price ↓ | New short positions being added |
| `cover` (Short Squeeze) | OI ↓ | Price ↑ | Shorts forced to cover — bullish |
| `unwind` (Unwinding) | OI ↓ | Price ↓ | Longs reducing positions — bearish |

These are deterministic: derived from `(OI change direction) × (Price change direction)`. No subjectivity.

---

## 5. Status Column Logic

The **Status** column is a single decision output derived from three inputs:

### Inputs

**A. Signal Direction**
- Bullish: `sig = "bull"` or `sig = "cover"`
- Bearish: `sig = "bear"` or `sig = "unwind"`

**B. Signal Age** (freshness thresholds vary by time frame window)

| Window | FRESH | ACTIVE | AGING |
|---|---|---|---|
| 5 MIN | ≤ 2 min old | 3–4 min old | > 4 min old |
| 15 MIN | ≤ 5 min old | 6–12 min old | > 12 min old |
| 1 HOUR | ≤ 15 min old | 16–40 min old | > 40 min old |
| TODAY | ≤ 30 min old | 31–120 min old | > 120 min old |
| Stocks | ≤ 20 min old | 21–60 min old | > 60 min old |

**C. Volume Multiplier**
- Confirmed: `vol ≥ 4×` daily average

### Decision Table

| Direction | Age | Volume | → Status |
|---|---|---|---|
| Bullish | FRESH | ≥ 4× | **ENTRY** |
| Bullish | FRESH | < 4× | **WATCH** |
| Bullish | ACTIVE | any | **IN PLAY** |
| Bullish | AGING | any | **FADING** |
| Bearish | FRESH | any | **WATCH** |
| Bearish | ACTIVE or AGING | any | **FADING** |

### What each Status means

| Status | Color | Trader Action |
|---|---|---|
| **ENTRY** | Green | Signal just confirmed — act now |
| **IN PLAY** | Blue | Signal live — position still valid |
| **WATCH** | Amber | Signal present but not yet confirmed |
| **FADING** | Grey | Signal aging — avoid chasing |

The sub-line below the badge shows **signal age** (e.g., "4 min ago") — how long ago the OI move was detected.

---

## 6. Strike Context

For Index view, each strike shows its position relative to ATM:

```
diff = (strike - ATM) / step  (rounded to nearest integer)

diff = 0         →  "At ATM"
diff = +1 / −1   →  "ATM±1 · Near ATM"
CE + diff > 0    →  "ATM+N OTM"
CE + diff < 0    →  "ATM−N ITM"
PE + diff < 0    →  "ATM−N OTM"
PE + diff > 0    →  "ATM+N ITM"
```

Example: NIFTY ATM = 24850, Strike = 25000 → diff = +3 → `ATM+3 OTM`

---

## 7. Time Frame Windows

| Label | Window | Meaning |
|---|---|---|
| **5 MIN** | Last 5 minutes | Ultra-fresh signals — scalping / intraday entries |
| **15 MIN** | Last 15 minutes | Short-term momentum confirmation |
| **1 HOUR** | Last 60 minutes | Trend-building signals |
| **TODAY** | Full session (9:15–15:30) | All signals from the current trading day |

Each window uses different freshness thresholds (see §5). The same signal appears across multiple windows — older windows show more signals but with lower freshness ratings.

---

## 8. Market Countdown

- Computed: `SESSION (375 min) − NOW_TS (current minutes since 9:15)`
- Displayed: `"Xh YYm"` format, turns red when ≤ 30 minutes remaining
- Shows `"Closed"` when `NOW_TS ≥ SESSION`

---

## 9. IV Spikes Module

### Data Points Required Per Row

| Field | Type | Description | Example |
|---|---|---|---|
| `n` | string | Stock ticker | `"BAJFINANCE"` |
| `sub` | string | Full company name | `"Bajaj Finance"` |
| `ltp` | string | Current LTP | `"₹6,844"` |
| `chg` | string | Price % change | `"−5.2%"` |
| `cc` | `"up"` / `"dn"` | Color class | `"dn"` |
| `iv` | string | Current Implied Volatility | `"58%"` |
| `iva` | string | 30-day average IV | `"34%"` |
| `spk` | string | IV spike % above average | `"+71%"` |
| `stk` | string | Best strike for writing | `"6800 PE"` |
| `pre` | string | Current option premium | `"₹182"` |
| `mgn` | string | SPAN writing margin required | `"₹84,200"` |
| `yld` | string | Yield % = (Premium × Lot Size) ÷ Writing Margin | `"21.7%"` |

### Filter Logic

- **Top Losers** (`ivDir = "drops"`): Stocks that have fallen — PE writing opportunity
- **Top Gainers** (`ivDir = "rises"`): Stocks that have risen — CE writing opportunity
- **Move threshold**: Only shows stocks where price moved > 2%, 4%, or 6% (user selectable)

---

## 10. Column Reference — OI Flow Table

| Column | Source Field(s) | Notes |
|---|---|---|
| Strike / Stock | `stk + t` / `n + sub` | Index shows strike + CE/PE + ATM context |
| LTP | `ltp` | Option premium for Index; stock price for Stocks |
| Chg % | `chg` | Option premium change % (Index) / stock price change % (Stocks) |
| OI Chg | `oc` + `occ` + `bpct` | Absolute OI change with mini bar |
| OI Chg % | `ocp` | OI change as percentage |
| Vol / Avg | `vol` | Volume vs daily average |
| Signal Story | Derived: `sig` + `vol` | Rule-based text (see §3) |
| Status | Derived: `sig` + `ts` + `vol` | Decision badge + age (see §5) |

---

*Last updated: May 2026 · FinX Discovery Widget v5*
