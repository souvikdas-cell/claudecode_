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
