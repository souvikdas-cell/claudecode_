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
