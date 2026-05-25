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
