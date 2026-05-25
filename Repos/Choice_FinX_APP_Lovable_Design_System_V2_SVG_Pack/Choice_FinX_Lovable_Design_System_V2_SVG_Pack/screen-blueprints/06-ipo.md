# IPO Blueprint

## Evidence files

- `reference-svg/screen-ipo/093_Mobile_IPO_Detail_page_1.svg`
- `reference-svg/screen-ipo/128_Mobile_IPO_Listing_page_2.svg`
- `reference-svg/screen-ipo/129_IPO.svg`
- `reference-svg/screen-ipo/130_IPO-1.svg`

## Screen purpose

Show IPO listings, IPO detail, application status, price band, lot size, dates, and application CTA.

## Layout structure

IPO list, status tags, IPO detail header, key facts, timeline, lot/price details, apply CTA.

## Core components

IPO cards, tags, timeline, metric rows, CTA bar, bottom sheet confirmation.

## Data and numeric rules

Use exact dates, price band, lot size, minimum investment, issue status. Closed/open/upcoming tags must be clear.

## States

Open, upcoming, closed, applied, mandated, failed mandate, allotment pending.

## Lovable build notes

IPO UI should balance discovery and transaction safety. CTA appears only when the action is valid.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
