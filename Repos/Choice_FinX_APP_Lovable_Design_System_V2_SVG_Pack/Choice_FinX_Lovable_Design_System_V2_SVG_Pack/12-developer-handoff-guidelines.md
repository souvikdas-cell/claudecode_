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
