# Component Library

## Scope
This file documents the reusable FinX components visible in the uploaded design-system boards and app screens. Each component includes purpose, anatomy, variants, states, behavior, usage rules, do, do not, developer notes, and QA checklist.

## Component inventory
- Buttons
- Text buttons and links
- Tabs and segmented groups
- Tags and status pills
- Input fields
- Dropdowns
- Checkboxes and radio buttons
- Bottom navigation
- Headers
- Cards
- Listing rows
- Tables and market depth
- Bottom sheets
- Toasts and notes
- Graphs and charts
- Tooltips
- Search listing chips
- Order ticket and order detail surfaces

## Buttons

### Purpose
Trigger primary app actions such as Buy, Sell, Apply, Add Fund, Submit, Save, Calculate Brokerage, and Modify.

### Anatomy
- Container with rounded corners
- Label centered
- Optional icon for some text actions
- Semantic fill, stroke, or text treatment

### Variants
- Primary filled
- Secondary outlined
- Text button
- Stroke button
- Tonal button
- Ghost button
- Large, medium, small sizes
- Buy, sell, and generic primary action colors

### States
- Normal
- Hover/press
- Focused
- Disabled

### Behavior
- Press state darkens filled buttons
- Focus state adds visible outline
- Disabled state uses grey fill/stroke and muted text
- Primary CTAs stay visually dominant

### Usage rules
- Use one primary CTA per decision area
- Use red for sell/destructive trading actions
- Use blue for generic buy/apply/submit actions unless product explicitly specifies green buy
- Use secondary buttons for lower-priority actions

### Do
- Keep CTA label short
- Pair high-risk CTAs with confirmation data
- Use full-width CTA in bottom sheet footer
- Use two-button layout only when choices are genuinely parallel

### Do not
- Do not use text buttons for final order placement
- Do not use green and red together without clear buy/sell meaning
- Do not make disabled buttons look active
- Do not overload a row with more than two CTAs

### Developer notes
- Tokenize color by semantic action
- Minimum tap target should be 44px
- Use `button` semantics in web views
- Maintain focus state for keyboard and accessibility

### QA checklist
- Normal, pressed, focused, disabled states render correctly
- Long labels do not wrap badly
- Sell buttons are red
- Primary CTA remains visible above safe area
- CTA is not hidden by keyboard

## Tabs and segmented groups

### Purpose
Switch between sibling content groups such as Equity, Derivative, Commodity, Currency, Position, Order, GTT, MF Orders, Top Gainers, Pending, Executed, Stocks, Mutual Funds, and Baskets.

### Anatomy
- Tab label
- Optional count
- Active indicator or active chip treatment
- Scrollable or grouped container

### Variants
- Primary tabs
- Secondary tabs
- Chip-like tabs
- Tabs with counts
- Product category tabs

### States
- Default
- Selected
- Disabled or unavailable
- Overflow scroll

### Behavior
- Selecting a tab swaps the visible content without navigating away
- Active tab uses blue text or underline
- Secondary chips use lighter outlines and fills

### Usage rules
- Use tabs only for parallel categories
- Keep labels short
- Use counts only when they help trading or order status decisions
- Keep active indicator persistent

### Do
- Use tabs to reduce data density
- Preserve selected tab after returning to screen
- Use horizontal scroll for many categories

### Do not
- Do not use tabs for sequential steps
- Do not hide key status in inactive tabs
- Do not use long phrases as tab labels

### Developer notes
- Implement as accessible tablist where possible
- Store active key in state
- Support deep-linking where product flow requires it

### QA checklist
- Selected tab is clearly visible
- Counts update correctly
- Horizontal scroll works
- Screen reader announces selected state

## Tags and status pills

### Purpose
Communicate order, transaction, IPO, recommendation, notification, and delivery states in compact form.

### Anatomy
- Rounded pill container
- Short label
- Optional icon
- Semantic background and text color

### Variants
- Cancelled
- Success
- AMO Submitted
- Delivered
- IPO
- Basket Detail
- Pending
- Failed
- Bullish
- Bearish
- Good To Enter
- Stop Loss Hit

### States
- Default
- Positive
- Negative
- Warning
- Information
- Disabled/inactive

### Behavior
- Tags do not trigger major actions unless styled as filters
- Status tags update with backend status
- Filter chips can be selected/deselected

### Usage rules
- Use tags for status, category, or market view
- Keep text under two words where possible
- Use semantic colors consistently

### Do
- Pair tag color with label
- Use warning yellow for pending
- Use red for failed/cancelled/bearish/stop loss
- Use green for success/bullish/target hit

### Do not
- Do not use tags as primary CTAs
- Do not use yellow with white text
- Do not overload rows with too many pills

### Developer notes
- Create a status enum to avoid inconsistent labels
- Map backend statuses to design tokens
- Use fixed padding and radius for all pills

### QA checklist
- Status text matches backend
- Color matches semantic state
- Long status does not overflow
- Dark-mode contrast passes

## Input fields

### Purpose
Capture values such as email ID, UPI ID, quantity, lot, price, search text, and investment amount.

### Anatomy
- Label or placeholder
- Input container
- Entered value
- Optional leading/trailing icon
- Helper or error text
- Optional stepper controls

### Variants
- Text input
- Email input
- UPI input
- Search input
- Quantity stepper
- Amount confirmation field

### States
- Empty
- Filled
- Focused
- Error
- Disabled
- Read-only

### Behavior
- Focus highlights field
- Error shows red message below
- Stepper increments/decrements value
- Search triggers filtered list

### Usage rules
- Validate financial fields immediately but do not block typing unnecessarily
- Show min investment and required format near the field
- Keep error messages specific

### Do
- Use numeric keyboard for amount and quantity
- Show rupee prefix where amount is entered
- Keep labels visible for important financial inputs

### Do not
- Do not rely only on placeholder for critical fields
- Do not show generic error text
- Do not allow invalid lot or quantity silently

### Developer notes
- Use input type and keyboard hints
- Keep validation schema close to backend rules
- Support paste for UPI and email
- Preserve values across bottom-sheet reopen

### QA checklist
- Focused state visible
- Error state visible
- Keyboard does not cover CTA
- Invalid formats blocked or explained
- Stepper respects min/max

## Dropdowns

### Purpose
Let users choose among account, ledger, statement, format, access, or schedule options.

### Anatomy
- Trigger field
- Selected value
- Chevron
- Optional icon
- Popup or bottom sheet list

### Variants
- Ledger
- MTF Ledger
- Monthly on 18th
- Individual

### States
- Default
- Open
- Selected
- Disabled

### Behavior
- Tap opens options
- Selection updates trigger value
- Close on outside tap or selection

### Usage rules
- Use dropdowns for low-frequency choices
- Use radio groups when all choices must be visible before submission

### Do
- Keep selected value readable
- Use clear field title
- Use bottom sheet for longer option lists on mobile

### Do not
- Do not hide mandatory decisions inside unclear dropdowns
- Do not mix dropdown and free text behavior

### Developer notes
- Support keyboard and screen reader roles
- Debounce remote option loading if applicable

### QA checklist
- Chevron state changes
- Selection persists
- Long option text truncates gracefully
- Dark mode styles apply

## Checkboxes and radio buttons

### Purpose
Support consent, filters, preference selection, financial year selection, file format, and access method choices.

### Anatomy
- Control
- Label
- Optional helper text
- Optional group title

### Variants
- Checkbox
- Radio button
- Single-select group
- Multi-select filter group

### States
- Unchecked
- Checked
- Focused
- Disabled
- Error

### Behavior
- Checkbox toggles independently
- Radio group allows one selected option
- Submit uses current selected values

### Usage rules
- Use checkboxes for independent filters
- Use radio buttons for mutually exclusive choices
- Place selected state clearly near label

### Do
- Keep label tappable
- Group related controls
- Use blue for selected state

### Do not
- Do not use checkboxes for single mandatory choice
- Do not make small controls hard to tap

### Developer notes
- Wrap input and label in one accessible control
- Expose checked state to assistive tech

### QA checklist
- Tap label toggles control
- Selected state visible
- Group validation works
- Controls meet tap target

## Bottom navigation

### Purpose
Provide persistent primary navigation across core app sections.

### Anatomy
- Five icon-label items
- Home
- Watchlist
- Order
- Portfolio
- More
- Home indicator safe area

### Variants
- Active item
- Inactive item
- Light mode
- Dark mode

### States
- Default
- Selected
- Inactive
- Disabled inferred

### Behavior
- Active item uses primary blue
- Inactive items use grey
- Tap navigates to root section

### Usage rules
- Use only the five primary destinations
- Keep labels stable
- Do not use bottom nav inside full-screen modals unless required by app shell

### Do
- Preserve bottom safe area
- Keep active state accurate
- Keep icon and text aligned

### Do not
- Do not add more than five items
- Do not hide current section state

### Developer notes
- Use route state to set active item
- Avoid remounting heavy lists when switching tabs unless needed

### QA checklist
- Each item is tappable
- Selected state matches screen
- Safe area is respected
- Labels do not truncate

## Headers

### Purpose
Identify page context and provide navigation or utility actions.

### Anatomy
- Back or logo
- Title or symbol
- Subtitle/segment
- Optional LTP after scroll
- Action icons: search, notification, help, share, bookmark, sort

### Variants
- Portfolio header
- Login/signup header
- Watchlist header
- Company/order before scroll
- Company/order after scroll
- Profile header
- Generic header
- Mutual fund header

### States
- Default
- Scrolled/sticky
- Action-visible
- Search-active

### Behavior
- Back returns to previous screen
- Scrolled header may show compact LTP/change
- Actions open search, help, share, or sort

### Usage rules
- Keep header height compact
- Use sticky compact header when long company detail page scrolls
- Keep title and key context visible

### Do
- Use back arrow for deep screens
- Use logo for app roots
- Use right icons only when relevant

### Do not
- Do not overload header with more than three actions
- Do not hide instrument identity on order screens

### Developer notes
- Use safe-area aware header
- Support long titles with truncation
- Attach analytics to action icons

### QA checklist
- Back behavior correct
- Scrolled state updates correctly
- Long title truncates
- Dark mode icons visible

## Cards

### Purpose
Group financial information, recommendations, IPO data, basket data, portfolio summaries, ledger items, and product entries.

### Anatomy
- Container
- Title/identity
- Metric rows
- Semantic values
- Optional tags
- Optional CTA
- Optional icon/logo

### Variants
- Summary card
- Futures card
- Related company card
- Portfolio card
- Basket detail card
- Ledger card
- P&L report card
- Recommendation card
- Notification card
- IPO card
- Treasury bill card
- Mutual fund card

### States
- Default
- Selected
- Positive
- Negative
- Warning
- Disabled/closed
- Skeleton/loading inferred

### Behavior
- Cards can navigate, expand, or expose CTA depending on product type
- Recommendation cards can lead to buy/sell or details
- IPO cards can apply or view details

### Usage rules
- Use cards when data has multiple related fields
- Keep the top-left as identity and top-right as primary value/status
- Use CTA only when action is direct and clear

### Do
- Use subtle border
- Use semantic background blocks for profit/loss
- Keep card content scannable

### Do not
- Do not put unrelated metrics in one card
- Do not use heavy shadows
- Do not bury risk below CTA

### Developer notes
- Create reusable card shells with slots
- Allow logo fallback
- Support long names and large numbers

### QA checklist
- Long names wrap or truncate correctly
- Semantic colors correct
- CTA disabled when unavailable
- Card tap and CTA tap do not conflict

## Listing rows

### Purpose
Represent repeated instruments, orders, positions, holdings, reports, profile items, transactions, and search results.

### Anatomy
- Left identity block
- Optional icon/trend
- Secondary metadata
- Right value block
- Optional status tag
- Optional navigation chevron

### Variants
- Watchlist row
- Order row
- Position row
- Holding row
- Market gainer row
- Transaction row
- Profile row
- Search listing chip
- Trending strike row

### States
- Default
- Positive
- Negative
- Pending
- Cancelled
- Failed
- Selected/editable

### Behavior
- Rows navigate to detail or expose actions depending on context
- Editable rows show drag handle and remove icon
- Search rows can be added or selected

### Usage rules
- Keep identity left and latest value right
- Use metadata for exchange, qty, avg price, product type
- Use separators for long lists

### Do
- Align values
- Use short symbols
- Show status tags only when they change action meaning

### Do not
- Do not mix row structures within the same list
- Do not hide exchange or product type in trading rows

### Developer notes
- Virtualize long lists
- Use stable row keys
- Support swipe or edit mode only if product specifies it

### QA checklist
- Rows align across list
- Large values fit
- Status updates correctly
- Edit mode controls work

## Tables and market depth

### Purpose
Show high-density numeric comparison such as market depth, order details, OHLC, buy/sell quantities, reports, and top gainers.

### Anatomy
- Column headers
- Rows
- Numeric cells
- Dividers
- Optional totals row
- Semantic bid/ask colors

### Variants
- Market depth table
- Top gainer table
- Order detail metrics
- Funds ledger details
- Portfolio details

### States
- Default
- Positive/negative cell
- Expanded
- Loading inferred
- Empty inferred

### Behavior
- Rows are read-only unless row-level action is explicitly available
- Expanded details reveal secondary metrics

### Usage rules
- Use table only when comparison across rows or columns matters
- Align numeric values consistently
- Keep headers visible where needed

### Do
- Use green for bid
- Use red for ask
- Use totals row
- Separate sections with clear labels

### Do not
- Do not use center alignment for financial values
- Do not remove column labels in complex tables

### Developer notes
- Use tabular numerals
- Keep column width responsive
- Round/truncate consistently

### QA checklist
- Columns do not collapse
- Values align
- Bid/ask colors correct
- Totals compute correctly

## Bottom sheets

### Purpose
Handle secondary decisions without leaving the current screen, including order charges, filters, preferences, IPO status, and reports export.

### Anatomy
- Dimmed backdrop
- Sheet surface
- Title
- Close icon
- Content sections
- Footer CTA
- Safe area

### Variants
- Order charges
- Filter and sort
- Start page preference
- Reports filter
- IPO status

### States
- Closed
- Open
- Scrollable
- Submitting/loading inferred
- Error inferred

### Behavior
- Slides from bottom
- Closes through close icon/backdrop/back
- Footer CTA stays accessible
- Content may scroll independently

### Usage rules
- Use for temporary choices
- Keep primary context visible where possible
- Use full page only for complex multi-step flows

### Do
- Show title clearly
- Keep close icon
- Use single primary CTA
- Group options by label

### Do not
- Do not use bottom sheets for critical final confirmations without clear data
- Do not trap user without close or back behavior

### Developer notes
- Lock background scroll
- Respect keyboard and safe area
- Persist selected filters until apply/clear

### QA checklist
- Open/close works
- Backdrop dims
- Footer visible
- Back button closes
- Keyboard does not cover inputs

## Toasts and notes

### Purpose
Communicate temporary or contextual messages for info, warning, success, and error states.

### Anatomy
- Optional icon
- Message text
- Semantic surface
- Optional close/action inferred

### Variants
- Info
- Warning
- Success
- Error
- With icon
- Without icon

### States
- Visible
- Dismissed
- Auto-dismiss inferred
- Persistent note inferred

### Behavior
- Toast appears near context or standard app toast area
- Notes can be embedded in forms, order status, or allocation messages

### Usage rules
- Use toasts for short messages
- Use embedded notes for financial caveats
- Use error state for blocked actions

### Do
- Keep message concise
- Use semantic color
- Include action only if needed

### Do not
- Do not use toast for irreversible confirmation
- Do not show multiple stacked messages over dense order content

### Developer notes
- Create toast type enum
- Support reduced motion
- Ensure screen reader announcement for critical states

### QA checklist
- Message readable
- Color type correct
- Dismiss timing acceptable
- Dark-mode contrast passes

## Graphs and charts

### Purpose
Visualize price movement, score, returns, performance, market cap distribution, and market depth distribution.

### Anatomy
- Chart canvas
- Line or gauge
- Tooltip
- Time-range selector
- Legend or labels
- Watermark where used

### Variants
- Score gauge
- Company detail price line chart
- Mutual fund returns chart
- Performance donut
- Market cap distribution bar
- Market depth ratio bar

### States
- Default
- Selected time range
- Tooltip active
- Empty/loading/error inferred

### Behavior
- Tap or drag reveals tooltip
- Time range changes chart data
- Chart must not block scroll gestures incorrectly

### Usage rules
- Use charts to support decision, not decorate
- Keep tooltip compact
- Use semantic colors consistently

### Do
- Show axis or reference where needed
- Keep time range controls visible
- Use blue for selected period

### Do not
- Do not use complex chart visuals in tiny cards
- Do not hide data source/date when relevant

### Developer notes
- Use responsive chart container
- Debounce tooltip updates
- Use accessible summary text

### QA checklist
- Tooltip correct
- Selected time range highlighted
- Chart handles no data
- Data labels do not overlap

## Tooltips

### Purpose
Explain short terms such as key metrics, charges, or financial labels.

### Anatomy
- Trigger icon
- Tooltip container
- Short title or body
- Pointer/callout inferred

### Variants
- Light tooltip
- Dark tooltip

### States
- Hidden
- Visible
- Dismissed

### Behavior
- Tap or hover trigger opens tooltip
- Tap outside or second tap closes

### Usage rules
- Use for one-line clarification
- Prefer bottom sheet for long education

### Do
- Keep text short
- Anchor near trigger
- Support dark mode

### Do not
- Do not hide critical trading risk only inside tooltip
- Do not use tooltip for mandatory disclosures

### Developer notes
- Position to avoid clipping
- Expose as accessible description

### QA checklist
- Does not clip
- Dismiss works
- Readable on both themes

## Order ticket and order detail surfaces

### Purpose
Capture and confirm trading order choices such as buy/sell, order type, market/limit, quantity, price, validity, product, charges, and margin.

### Anatomy
- Instrument header
- LTP/change
- Buy/sell toggle or CTA
- Order inputs
- Quick quantity keypad
- Charge/margin note
- Primary action
- Status/details view

### Variants
- Buy order
- Sell order
- Market
- Limit
- Pending order detail
- Cancelled order detail
- Executed order detail
- GTT and MF order rows

### States
- Draft
- Valid
- Invalid
- Submitting inferred
- Pending
- Executed
- Cancelled
- Failed

### Behavior
- Changing quantity/order type recalculates required amount
- Charges bottom sheet explains cost
- Order detail bottom sheet shows status and audit fields

### Usage rules
- Keep instrument identity visible
- Show risk and charge context before final CTA
- Use red for sell and blue/green for buy according to product mapping

### Do
- Show product type and validity
- Validate lot and quantity
- Provide details for pending/cancelled orders

### Do not
- Do not allow final action without required values
- Do not hide charges behind unclear label
- Do not make sell and buy equal color

### Developer notes
- Connect form state to backend validations
- Block repeated submissions
- Track CTA and order type changes

### QA checklist
- Validation works
- Margin updates
- Charges open
- Submit disabled when invalid
- Status mapping correct


## V2 SVG evidence usage

Before implementing any component, check the closest SVG design-system board in `reference-svg/design-system/`. The SVG files provide stronger evidence for proportions, corner radius, visual density, and state treatment than the earlier PNG-only audit.

Do not copy full SVG component boards into production. Recreate components with live UI, tokens, and accessible states.
