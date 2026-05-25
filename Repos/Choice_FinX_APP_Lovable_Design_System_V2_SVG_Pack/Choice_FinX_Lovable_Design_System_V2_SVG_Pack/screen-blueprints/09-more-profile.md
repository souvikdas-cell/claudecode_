# More and Profile Blueprint

## Evidence files

- `reference-svg/screen-more-profile/089_Profile.svg`
- `reference-svg/screen-more-profile/100_Others.svg`
- `reference-svg/screen-more-profile/101_Support_Feedback.svg`
- `reference-svg/screen-more-profile/102_Support_Feedback-1.svg`
- `reference-svg/screen-more-profile/143_Insurance.svg`
- `reference-svg/screen-more-profile/147_More.svg`
- `reference-svg/screen-more-profile/156_Profile-1.svg`
- `reference-svg/screen-more-profile/169_View_More.svg`

## Screen purpose

Provide account, settings, support, profile, reports, and product navigation.

## Layout structure

Profile/account header, grouped menu cards, support/help sections, app settings and account actions.

## Core components

Menu rows, section headers, profile card, icons, tags, support CTA, bottom navigation.

## Data and numeric rules

Use concise labels. Avoid showing user photo if product rules prohibit it. Sensitive account data should be masked.

## States

Logged in, KYC pending, profile incomplete, support ticket open, no photo.

## Lovable build notes

Keep menu predictable. Do not turn More into a promotional surface.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
