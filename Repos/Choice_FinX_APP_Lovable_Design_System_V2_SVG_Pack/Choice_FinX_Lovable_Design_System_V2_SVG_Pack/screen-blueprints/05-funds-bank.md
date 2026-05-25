# Funds and Bank Blueprint

## Evidence files

- `reference-svg/screen-funds-bank/095_funds.svg`
- `reference-svg/screen-funds-bank/096_funds-1.svg`
- `reference-svg/screen-funds-bank/097_Bank_Details.svg`
- `reference-svg/screen-funds-bank/105_Bank_Details-1.svg`
- `reference-svg/screen-funds-bank/110_withdraw.svg`
- `reference-svg/screen-funds-bank/111_withdraw-1.svg`
- `reference-svg/screen-funds-bank/112_UPI.svg`
- `reference-svg/screen-funds-bank/125_Mutual_Fund.svg`
- `reference-svg/screen-funds-bank/126_Mutual_Fund-1.svg`
- `reference-svg/screen-funds-bank/149_funds-2.svg`
- `reference-svg/screen-funds-bank/154_withdraw-2.svg`
- `reference-svg/screen-funds-bank/155_Deposit.svg`
- `reference-svg/screen-funds-bank/174_NEFT_page_is_not_easily_highlighted_Banks_Page_-_Set_Autopay_button_is_not_provided_User_needs_to___124355.svg`

## Screen purpose

Support add funds, withdraw, UPI/bank details, transaction history, and payment-related information.

## Layout structure

Balance summary, primary add/withdraw actions, linked bank/UPI sections, transaction list, bottom sheets for details.

## Core components

Balance cards, CTAs, bank detail cards, transaction rows, bottom sheets, info notes, warning banners.

## Data and numeric rules

Amounts must use rupee formatting. Pending/failed/success states must be explicit. Bank details should be masked where required.

## States

Success, failed, pending, bank not linked, UPI not available, withdrawal restricted, loading, empty transaction list.

## Lovable build notes

This area needs trust. Use clear state labels and avoid vague copy.

## QA checklist

- Screen uses FinX tokens only.
- Header hierarchy is clear.
- Primary action is visually dominant.
- Numeric values are aligned and readable.
- Positive/negative values use correct semantic color.
- Spacing feels compact but not cramped.
- No generic fintech decoration is added.
- Output is visually checked against the SVG references.
