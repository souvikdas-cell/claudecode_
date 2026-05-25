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
