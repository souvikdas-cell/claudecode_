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
