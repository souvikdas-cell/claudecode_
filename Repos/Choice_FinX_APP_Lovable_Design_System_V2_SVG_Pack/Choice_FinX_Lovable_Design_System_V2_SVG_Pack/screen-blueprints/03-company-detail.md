# Company Detail Blueprint

## Evidence files

- `reference-svg/screen-company-detail/065_Company_Detail_Page.svg`
- `reference-svg/screen-company-detail/066_Company_Detail_Page-1.svg`
- `reference-svg/screen-company-detail/075_Mobile_Company_Fundamental_page_1.svg`
- `reference-svg/screen-company-detail/076_Mobile_Company_page_technical_section_1.svg`
- `reference-svg/screen-company-detail/162_Company_Detail_Page-2.svg`
- `reference-svg/screen-company-detail/165_Open_and_Close_card._Status_wise_5_card_Technical_Card._Open_2._Closed_Call_Stop_Loss_Hit_Exit_Cal__825499.svg`
- `reference-svg/screen-company-detail/168_Company_Detail_Page_Recommendation.svg`

## Screen purpose

Show instrument/company context and allow users to understand price, fundamentals/technicals, recommendations, and order entry.

## Layout structure

Company header, LTP/change block, chart section, tabs/sections, key metrics cards, fundamentals/technicals, recommendation block where applicable, sticky action area.

## Core components

Company header, price module, chart block, tabs, metric cards, tables, graph blocks, tags, CTA buttons.

## Data and numeric rules

LTP is primary. Price movement appears adjacent to LTP. Financial ratios and metrics use compact labels with strong values.

## States

Market open/closed, positive/negative/neutral movement, loading chart, no data, recommendation available, recommendation closed.

## Lovable build notes

Keep the screen information-dense but layered. Do not use marketing-style oversized cards.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
