# Plotline Guidelines Knowledge Pack

**Version:** 1.0  
**Prepared for:** Choice FinX / Growth / Product / Martech / Analytics  
**Date:** 11 May 2026  
**Purpose:** Permanent project knowledge file for Plotline campaign planning, implementation, analytics, CTR interpretation, and reporting.

---

## 1. Executive Summary

Plotline should be treated as the in-app experience layer for Choice FinX campaigns.

It is best used for:

- In-app nudges.
- Bottom sheets.
- Tooltips and coachmarks.
- Guided walkthroughs.
- Stories and swipeable education flows.
- Inline widgets.
- Banners and cards.
- Surveys and feedback prompts.
- Contextual conversion prompts.
- Feature discovery for Trader Mode, NCDs, Weekly Summary, and similar flows.

The internal rule is simple.

Plotline should not only show a message. It should move the user to the next measurable product action.

For every Plotline campaign, PMs must define:

- Target user segment.
- Trigger condition.
- Campaign surface.
- CTA action.
- Conversion event.
- Frequency cap.
- Exit condition.
- Measurement window.
- CTR calculation method.
- Segment-wise and user-level reporting plan.

The most important internal learning is that aggregate CTR alone is not enough. It can hide repeated impressions, repeated clicks, overexposed users, platform differences, and variant-level differences. Plotline reporting must separate total CTR from unique-user CTR.

For product decisions, the preferred metric is:

`Unique-user CTR = Unique clicked users / Unique shown users`

Total-click CTR can be used for creative engagement, but it should not be used alone to judge campaign success.

---

## 2. Source Map

| Guideline Area | Source Type | Source Name / Conversation Reference | Confidence |
|---|---|---|---|
| Plotline product usage | Official Plotline Source | Plotline website and FAQ | High |
| Campaign formats | Official Plotline Source | Plotline FAQ, product pages | High |
| SDK setup and supported platforms | Official Plotline Source | Plotline FAQ, Flutter plugin page | High |
| Metrics available | Official Plotline Source | Plotline FAQ | High |
| Integrations | Official Plotline Source | Plotline integrations page | High |
| In-app layer for FinX | Internal Conversation-Derived Guideline | NCD, Trader Mode, Weekly Summary, education campaigns | High |
| Variant and segment analysis | Internal Conversation-Derived Guideline | Satin NCD analysis workflow | High |
| Individual CTR | Internal Conversation-Derived Guideline | Plotline export and user-level click analysis | High |
| App Open retrigger behavior | Internal Conversation-Derived Guideline | Prior Plotline campaign debugging discussion | Medium |
| PlotlineWeb CTA bridge signature | Internal Conversation-Derived Guideline | Prior HTML and CTA bridge implementation discussion | Medium |
| Android / iOS / Web bridge differences | Internal Conversation-Derived Guideline | Prior Plotline custom HTML implementations | Medium |
| Frequency capping | Inferred Guideline | Derived from App Open retrigger issue and campaign fatigue risk | Medium |
| Attribution window | Needs Confirmation | Not fixed in available context | Low |
| Backend vs frontend tracking ownership | Inferred Guideline | Derived from event reliability needs | Medium |
| Data warehouse sync | Official Plotline Source | Plotline integrations page | High |
| Reporting templates | Internal Conversation-Derived Guideline | MoEngage and Plotline analysis workflows | High |

---

## 3. Official Plotline Guidelines

### 3.1 What Plotline is officially used for

Plotline is used to create in-app experiences without code dependency after integration.

Officially supported experience types include:

- Tooltips.
- Stories.
- Spotlights.
- Surveys.
- Videos.
- Games.
- Coachmarks.
- Bottom sheets.
- Badges.
- Banners.
- Cards.
- Grids.
- Carousels.
- Streaks and milestones.

Official positioning:

- Product and growth teams can trigger in-app experiences in real time based on user behavior.
- The platform is built for consumer mobile apps, including fintech.
- Campaigns can support feature adoption, feedback collection, activation, conversion, retention, and personalized journeys.

### 3.2 Supported platforms

Officially supported platforms include:

- Native iOS.
- Native Android.
- React Native.
- Flutter.
- Web for progressive web apps.

### 3.3 Integration requirements

Official integration steps:

1. Install the SDK.
2. Initialize with API key.
3. Add user properties.
4. Add event tracking.
5. Test the setup.

### 3.4 Triggering and performance

Officially stated capabilities:

- Campaigns can trigger on real-time user actions, milestones, and app states.
- Plotline mentions sub-100 ms latency for event-to-display in official FAQ language.
- Campaigns are cached to reduce network usage.
- SDK size is stated as under 2 MB in the FAQ.

### 3.5 Customization

Officially supported customization includes:

- Fonts.
- Colors.
- Corner radius.
- Spacing.
- Button styles.
- Animations.

Internal implication: every campaign should match the FinX design system. Do not ship generic-looking experiences.

### 3.6 A/B testing

Officially supported:

- Multivariate tests.
- Design tests.
- Copy tests.
- Timing tests.
- Targeting tests.
- Statistical significance reporting.

Internal implication: do not only A/B test creative. Test trigger, segment, surface, CTA depth, and post-click path.

### 3.7 Metrics

Officially supported campaign metrics include:

- Views.
- Clicks.
- Dismissals.
- Conversions.
- Funnel drop-offs.
- A/B test results.

### 3.8 Integrations

Officially supported integration capabilities include:

- Import cohorts from analytics, CRM, and engagement tools.
- Trigger campaigns from external events.
- Sync campaign performance data back to analytics tools or data warehouses.

Relevant tools mentioned by Plotline include:

- MoEngage.
- Mixpanel.
- Amplitude.
- Segment.
- Braze.
- Google Analytics.
- BigQuery.
- Snowflake.

---

## 4. Internal Plotline Guidelines From Our Conversations

### 4.1 Core internal definition

Plotline is the in-app experience layer.

Use it to:

- Explain a feature inside the app.
- Push users to a high-intent action.
- Reduce drop-off at product decision points.
- Test creative and CTA variants quickly.
- Add education where native product changes are slower.
- Run controlled experiments without waiting for full app releases.

Do not use Plotline as only a banner tool.

A Plotline campaign should always answer:

- Who sees it?
- Why now?
- What should the user do next?
- What event proves success?
- How will repeat exposure be controlled?

### 4.2 FinX use cases already validated or discussed

| Use Case | Plotline Role | Measurement Focus |
|---|---|---|
| NCD education | Bottom sheet, stories, overlays, in-app campaign | CTR, company page visit, order flow entry, order success |
| NCD company page overlays | Explain reasons to invest and financial highlights | Invest Now clicks, order page visits |
| Trader Mode / StrikeX walkthrough | Guided web/app education and redirection | CTA clicks, Trader Mode visits, tool adoption |
| Weekly Summary cards | Swipeable carousel and dynamic image campaign | Slide progression, last-slide CTA, repeat visits |
| Pick your View | In-app selector/deep link campaign | CTA split, instrument selection, expiry-level action IDs |
| Feature discovery | Nudges and contextual prompts | Feature clicks, flow completion, conversion |

### 4.3 Campaign design rules

Use clean FinX-native design.

Default design direction:

- Onest font.
- Light, clean, app-native surfaces.
- Choice blue `#2777F3` for important instruction text.
- Choice navy `#1B1464` for strong hierarchy.
- Choice green `#45B644` for positive outcomes.
- Choice red `#DE493B` only for risk or loss.
- Subtle borders.
- Rounded cards.
- No noisy gradients.
- No AI-looking mockups.
- No cramped banners.
- No unnecessary CTAs.

For walkthroughs:

- Add instruction text on each screen.
- Use visible contrast.
- Avoid zoom that clips real screens.
- Use hover and click animations only where they explain the flow.
- Add enough delay between screens so users can read.
- Do not move too fast.

For WebView HTML:

- Keep one self-contained HTML file.
- Avoid external assets unless the campaign explicitly depends on CDN-hosted images.
- Use `addEventListener`; avoid inline event handlers.
- Use one primary scroll container for scrollable screens.
- Use safe mobile layout for Android WebView, iOS WKWebView, and Web iframe.
- Guard Plotline bridge calls with platform checks.
- Always provide a fallback for web or bridge failure.

### 4.4 Trigger rules

Use Plotline triggers only when the user is in the right context.

Good triggers:

- User lands on relevant product page.
- User opens Trader Mode area.
- User enters a high-intent screen.
- User drops off from a key journey.
- User matches a lifecycle segment.
- User has not used a relevant feature.
- User has a meaningful portfolio or trading behavior match.

Bad triggers:

- Generic app open for every user.
- Repeated App Open campaigns without frequency control.
- Campaigns that fire after the user already completed the action.
- Campaigns that appear during high-risk execution moments.
- Campaigns that interrupt order placement unless they reduce risk or clarify an action.

### 4.5 Frequency and exit rules

Internal rule:

Every Plotline campaign must have frequency logic.

Minimum checks:

- Show once per session unless repeat exposure is intentional.
- Stop showing after click.
- Stop showing after conversion.
- Stop showing after dismissal if campaign is educational or awareness-led.
- Stop showing after max impressions per user.
- Do not trigger again immediately after redirect.

Known issue:

- App Open event can retrigger the same campaign after CTA redirect if frequency or dismissal is not configured correctly.

Recommended handling:

- Use controlled page-level triggers when possible.
- Use redirect plus dismiss behavior where supported.
- Confirm `requireDismiss`, `isDismissed`, and `dismissLayout` behavior before launch.
- Test post-click navigation and back-navigation.

### 4.6 CTA rules

Every CTA must have a clear action ID.

Action ID should include enough context for analytics.

Recommended action ID pattern:

`<product>_<campaign>_<surface>_<variant>_<cta>_<date-or-expiry>`

Examples:

- `strikex_pickview_nifty_bullcall_2026_05_12`
- `ncd_satin_h5_monthlyincome_investnow`
- `weeklysummary_card7_explore_tradermode`

Internal learning:

- Dynamic action IDs can be used for separate analytics when campaign variants depend on expiry, instrument, or strategy.
- Do not reuse the same action ID across materially different CTAs.

### 4.7 Bridge rules for Custom HTML

Known bridge patterns from prior work:

- Android: `window.Plotline.onClick(...)`
- iOS: `window.webkit.messageHandlers.Plotline.postMessage(...)`
- Web iframe: `window.PlotlineWeb.onClick(...)`

Known Web bridge signature discussed internally:

`window.PlotlineWeb.onClick(actionId, 'REDIRECT', url, 'WEB', requireDismiss, isDismissed, dismissLayout)`

Needs confirmation before each new campaign because Plotline SDK behavior can differ by platform and account setup.

Implementation rules:

- Never assume the bridge exists outside Plotline campaign runtime.
- Guard all bridge calls.
- Fallback to `window.open` only for local testing or web preview.
- On app campaigns, prefer native Plotline redirect handling where supported.
- Track CTA before redirect.
- Avoid double-click duplicates.

### 4.8 Cross-page walkthrough rules

Internal learning:

- Step IDs stitch a multi-step experience.
- Directly calling the next step ID across pages is not reliable as a generic mechanism.
- Cross-page flows should use page targeting triggers or a Flow Action event to show the next step after navigation.

Operational rule:

For walkthroughs across pages, define a routing map:

| Step | Screen | Trigger | CTA / Action | Next Step Mechanism |
|---|---|---|---|---|
| 1 | Source screen | Page load or feature hover | Redirect | Page targeting or Flow Action |
| 2 | Destination screen | Landing URL or page event | Highlight feature | Same flow continuation |
| 3 | Tool screen | Feature visible | Explain action | User action or timed advance |

### 4.9 Theme handling rules

Internal learning:

- Plotline custom HTML may not reliably access runtime Liquid variables inside JavaScript.
- Prefer resolving theme with rendered Liquid tags or safe static attributes.
- Keep `theme=light`, `theme=dark`, and `theme=auto` support only when tested.
- If Plotline attribute-based theme switching is unreliable, use one stable single-tone design.

### 4.10 Data and reporting rules from NCD analysis

For NCD funnel analysis, internal standard order:

1. `visitedCompanyDetail`
2. `visitedPlaceOrder`
3. `placedOrder`
4. `beDevEvent`

Critical rule:

- `beDevEvent` is only valid when filtered by script token.
- If `beDevEvent` is disproportionately higher than `placedOrder`, flag it.

For behavioural files:

- `No. of Sessions` is not unique users.
- Unique users must be counted row-wise, based on whether any hourly flag is active.
- Do not sum sessions and call it users.

For Plotline campaign files:

- Preserve exact variant labels from export.
- Analyze impressions vs interactions.
- Analyze variant by segment.
- Analyze variant by platform.
- Link exposure to funnel step progression where possible.

---

## 5. Individual CTR Tracking Guidelines

### 5.1 Definition

Individual CTR tracking measures how many unique users clicked after being shown a campaign.

It answers:

`Out of users who saw this campaign, how many users clicked at least once?`

This is different from total CTR, which counts total clicks divided by total impressions.

### 5.2 Why individual CTR is required

Aggregate CTR can mislead when:

- One user sees a campaign many times.
- One user clicks multiple times.
- A user clicks after several repeated impressions.
- A campaign is shown across multiple platforms.
- A campaign has many steps.
- The same user appears in multiple variants due to campaign setup issues.

Unique-user CTR is better for product decisions because it measures user-level movement, not event volume.

### 5.3 Required identifiers

Minimum required fields:

| Field | Required | Reason |
|---|---:|---|
| `user_id` | Yes | Unique-user CTR denominator and numerator |
| `device_id` | Yes | Debugging anonymous or multi-device users |
| `campaign_id` | Yes | Campaign-level aggregation |
| `campaign_name` | Yes | Readable reporting |
| `variant_id` | Yes | A/B analysis |
| `variant_name` | Yes | PM-readable insight |
| `platform` | Yes | Android, iOS, Web split |
| `surface` | Yes | Bottom sheet, story, tooltip, widget |
| `shown_timestamp` | Yes | Impression timing |
| `clicked_timestamp` | Yes, when click exists | Click timing |
| `dismissed_timestamp` | Recommended | Fatigue and quality signal |
| `completed_timestamp` | Recommended for flows | Walkthrough completion |
| `converted_timestamp` | Recommended | Final success |
| `action_id` | Yes for CTA | CTA-level analytics |
| `deep_link_url` | Recommended | Debug redirect issues |
| `source_file` | Recommended | Export audit trail |

### 5.4 Recommended formulas

| Metric | Formula | Use Case |
|---|---|---|
| Unique shown users | `COUNT_DISTINCT(user_id where shown = true)` | Reach quality |
| Unique clicked users | `COUNT_DISTINCT(user_id where clicked = true)` | User-level intent |
| Unique-user CTR | `Unique clicked users / Unique shown users` | Primary CTR |
| Total impressions | `COUNT(shown events)` | Exposure volume |
| Total clicks | `COUNT(click events)` | Interaction volume |
| Total-click CTR | `Total clicks / Total impressions` | Creative engagement |
| Clicks per clicked user | `Total clicks / Unique clicked users` | Repeat-click behavior |
| Impressions per shown user | `Total impressions / Unique shown users` | Frequency pressure |
| Conversion rate from shown | `Unique converted users / Unique shown users` | Campaign success |
| Conversion rate from click | `Unique converted users / Unique clicked users` | CTA quality |

### 5.5 Recommended primary CTR formula

Use this as the default in PM reports:

`Unique-user CTR = Unique clicked users / Unique shown users`

Use total-click CTR only as a secondary metric.

### 5.6 Handling repeated impressions

Rules:

- Store every impression timestamp.
- Count the user once in unique shown users.
- Also report average impressions per user.
- Flag users shown more than the campaign frequency cap.
- Do not let repeated impressions inflate the denominator without showing frequency pressure.

### 5.7 Handling repeated clicks

Rules:

- Store every click timestamp.
- Count the user once in unique clicked users.
- Also report total clicks separately.
- If the same user clicks repeatedly within seconds, check for double-click or redirect retry.
- Do not present total clicks as unique users.

### 5.8 Handling multi-step campaigns

For stories, walkthroughs, or multi-screen flows, track:

- Step shown.
- Step action.
- Step skipped.
- Step completed.
- Flow completed.
- CTA clicked.

Report both:

- Step-wise completion rate.
- Final CTA click rate.

### 5.9 Individual CTR edge cases

| Edge Case | Risk | Handling |
|---|---|---|
| User shown but not logged in | Missing user ID | Use device ID for debug, exclude from final user CTR unless identity is resolved |
| Same user on multiple devices | Duplicate device rows | User ID should dominate for user-level CTR |
| Multiple variants shown to same user | A/B contamination | Flag and exclude from clean A/B comparison |
| Click without shown | Tracking order issue | Audit event timestamps and bridge calls |
| Conversion without click | Organic or external path | Keep separate as assisted or exposed conversion |
| Repeated click timestamps | Possible double-click | Deduplicate within defined time threshold for user CTR |
| Redirect opens new tab | Web iframe behavior | Test platform-specific CTA handling |
| Campaign fires again after CTA | Frequency or dismiss issue | Fix trigger, dismiss, or frequency cap |

---

## 6. Event Tracking Taxonomy

### 6.1 Naming rules

Use lowercase snake_case.

Pattern:

`plotline_<object>_<action>`

Examples:

- `plotline_campaign_viewed`
- `plotline_campaign_clicked`
- `plotline_campaign_dismissed`
- `plotline_campaign_completed`
- `plotline_campaign_converted`
- `plotline_cta_clicked`
- `plotline_segment_entered`
- `plotline_segment_exited`

### 6.2 Core event taxonomy

| Event Name | Trigger Condition | Mandatory Properties | Optional Properties | Owner | Consumer Team |
|---|---|---|---|---|---|
| `plotline_campaign_viewed` | Campaign becomes visible to user | `user_id`, `device_id`, `campaign_id`, `campaign_name`, `variant_id`, `platform`, `surface`, `timestamp` | `screen_name`, `app_version`, `segment_name`, `theme`, `language` | Frontend / SDK | PM, Growth, Analytics |
| `plotline_campaign_clicked` | User clicks inside campaign | All viewed props + `action_id`, `cta_text` | `deep_link_url`, `step_id`, `position` | Frontend / SDK | PM, Growth, Analytics |
| `plotline_campaign_dismissed` | User closes or skips campaign | All viewed props + `dismiss_method` | `step_id`, `time_spent_ms` | Frontend / SDK | PM, Growth |
| `plotline_campaign_completed` | User completes story or walkthrough | All viewed props + `completion_type` | `steps_seen`, `steps_completed`, `time_spent_ms` | Frontend / SDK | PM, Growth |
| `plotline_campaign_converted` | User performs defined success event | `user_id`, `campaign_id`, `conversion_event`, `timestamp` | `order_id`, `instrument`, `revenue`, `attribution_window` | Backend preferred | PM, Growth, Analytics |
| `plotline_cta_clicked` | Specific CTA click occurs | `user_id`, `campaign_id`, `action_id`, `cta_text`, `destination_url`, `timestamp` | `expiry`, `instrument`, `strategy`, `source_screen` | Frontend | PM, Growth, Analytics |
| `plotline_segment_entered` | User enters campaign target segment | `user_id`, `segment_id`, `segment_name`, `timestamp` | `segment_rule`, `source_tool` | Backend / CDP | Growth, Analytics |
| `plotline_segment_exited` | User exits campaign target segment | `user_id`, `segment_id`, `segment_name`, `timestamp`, `exit_reason` | `conversion_event`, `suppression_reason` | Backend / CDP | Growth, Analytics |

### 6.3 Suggested common properties

Use these across all events where available:

| Property | Type | Example |
|---|---|---|
| `user_id` | String | `M012297` |
| `device_id` | String | `PL-OTBV-MU0L-KVD6` |
| `campaign_id` | String | `66b5fb49a44c8fca1942fef4` |
| `campaign_name` | String | `Satin NCD H5 Monthly Income` |
| `variant_id` | String | `variant_a` |
| `variant_name` | String | `H5 Monthly Income` |
| `surface` | String | `bottomsheet` |
| `platform` | String | `android` |
| `theme` | String | `light` |
| `language` | String | `en` |
| `screen_name` | String | `ncd_company_detail` |
| `source_screen` | String | `home` |
| `action_id` | String | `ncd_satin_h5_investnow` |
| `cta_text` | String | `Invest Now` |
| `destination_url` | String | `internal_deeplink` |
| `trigger_event` | String | `visitedCompanyDetail` |
| `segment_name` | String | `45-60_A5L` |
| `shown_count_for_user` | Number | `2` |
| `timestamp` | Datetime | ISO timestamp |

### 6.4 Example payloads

#### Campaign viewed

```json
{
  "event_name": "plotline_campaign_viewed",
  "user_id": "M012297",
  "device_id": "PL-OTBV-MU0L-KVD6",
  "campaign_id": "66b5fb49a44c8fca1942fef4",
  "campaign_name": "Satin NCD Monthly Income",
  "variant_id": "variant_e",
  "variant_name": "H5 Monthly Income",
  "surface": "bottomsheet",
  "platform": "android",
  "theme": "light",
  "screen_name": "ncd_company_detail",
  "segment_name": "45-60_A5L",
  "timestamp": "2026-04-08T09:05:47.832+05:30"
}
```

#### CTA clicked

```json
{
  "event_name": "plotline_cta_clicked",
  "user_id": "M012297",
  "device_id": "PL-OTBV-MU0L-KVD6",
  "campaign_id": "66b5fb49a44c8fca1942fef4",
  "campaign_name": "Satin NCD Monthly Income",
  "variant_name": "H5 Monthly Income",
  "surface": "bottomsheet",
  "platform": "android",
  "action_id": "ncd_satin_h5_monthlyincome_investnow",
  "cta_text": "Invest Now",
  "destination_type": "deeplink",
  "destination_url": "internal_ncd_order_page",
  "timestamp": "2026-04-08T09:06:21.101+05:30"
}
```

#### Campaign converted

```json
{
  "event_name": "plotline_campaign_converted",
  "user_id": "M012297",
  "campaign_id": "66b5fb49a44c8fca1942fef4",
  "campaign_name": "Satin NCD Monthly Income",
  "conversion_event": "beDevEvent",
  "script_token_filter_applied": true,
  "order_id": "NCD_ORDER_12345",
  "instrument": "SATIN_NCD",
  "attribution_window_hours": 24,
  "timestamp": "2026-04-08T09:20:31.000+05:30"
}
```

---

## 7. Campaign Setup Guidelines

### 7.1 Campaign brief template

Every Plotline campaign brief must include:

| Field | Requirement |
|---|---|
| Campaign name | Clear and versioned |
| Product area | NCD, Trader Mode, Weekly Summary, MF, Onboarding, etc. |
| User problem | Why the campaign exists |
| Business goal | What metric should move |
| Target segment | Exact user rules |
| Entry trigger | Event or screen where campaign starts |
| Exit rule | Conversion, dismissal, max shows, date expiry |
| Surface | Bottom sheet, tooltip, story, widget, banner |
| Copy | Final approved text |
| CTA | Text, action ID, destination |
| Deep link | Tested URL or route |
| Primary metric | Usually unique-user CTR or conversion |
| Secondary metric | Impressions, total clicks, completion, dismissals |
| Attribution window | Must be defined before launch |
| QA owner | Named person or team |
| Report owner | PM / analyst |

### 7.2 Targeting rules

Target users based on behavior and relevance.

Good segment rules:

- Viewed product but did not proceed.
- Used F&O but never opened Trader Mode.
- Opened option chain but did not use Strategy Builder.
- Eligible for NCD but did not visit company page.
- Saw Weekly Summary but did not click final CTA.
- High-intent users who match instrument or product behavior.

Avoid:

- All users by default.
- Users already converted.
- Users in active order execution.
- Users who dismissed repeatedly.
- Users without eligibility.

### 7.3 Trigger rules

Preferred triggers:

- Page load of relevant product screen.
- User clicks a related feature entry point.
- User reaches an empty state.
- User completes a prerequisite action.
- User returns after drop-off.

Use App Open only when:

- The message is genuinely broad.
- Frequency cap is strict.
- The campaign will not retrigger after redirect.
- QA confirms no repeated popup loop.

### 7.4 Frequency cap rules

Minimum recommended frequency:

| Campaign Type | Frequency Rule |
|---|---|
| Education story | 1 to 2 times per user, then suppress |
| Critical product update | 1 per session, max 3 lifetime |
| Conversion nudge | 1 per day, suppress after conversion |
| Tooltip / coachmark | Until feature used or max 3 views |
| Walkthrough | Once completed, never show again unless relaunched |
| Weekly Summary | Once per weekly cycle unless user reopens intentionally |

### 7.5 QA rules

Before launch, test:

- Android light mode.
- Android dark mode.
- iOS.
- Web iframe if applicable.
- Deep link destination.
- CTA tracking.
- Dismiss behavior.
- Back button behavior.
- Repeat app open behavior.
- Frequency cap.
- Segment eligibility.
- A/B assignment.
- User exclusion after conversion.
- No clipping on small devices.
- No white bleed in WebView.
- No unreadable copy on theme backgrounds.

---

## 8. Analytics and Reporting Guidelines

### 8.1 Metrics hierarchy

| Metric Type | Metric | Decision Weight |
|---|---|---|
| Reach | Target users, unique shown users | Medium |
| Exposure pressure | Impressions per user | High for fatigue |
| Engagement | Unique-user CTR | High |
| Creative interaction | Total-click CTR | Medium |
| Flow quality | Completion rate, step drop-off | High |
| Conversion | Company page visit, order page visit, order success | Very high |
| Revenue | Order value, brokerage, product revenue | Very high |
| Quality | Dismissal rate, repeated dismissals | High |
| Debug | Click without shown, conversion without click | High |

### 8.2 Campaign report format

| Section | What to include |
|---|---|
| Campaign summary | Name, objective, dates, segment, surface |
| Setup | Trigger, CTA, destination, frequency cap |
| Topline metrics | Target users, unique shown, impressions, unique clicks, total clicks, CTR |
| Segment cut | Age, income, platform, user type, product behavior |
| Variant cut | Variant labels exactly as exported |
| Funnel impact | Visit, intent, order, success |
| Learnings | What worked, what failed, why |
| Decision | Scale, iterate, pause, or kill |
| Next action | Specific owner and next experiment |

### 8.3 Daily report format

| Date | Campaign | Unique Shown | Impressions | Unique Clicks | Total Clicks | Unique CTR | Total CTR | Conversions | Notes |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|

### 8.4 Segment-wise report format

| Segment | Target Users | Unique Shown | Unique Clicks | Unique CTR | Conversion | Conversion Rate | Best Variant | Learning |
|---|---:|---:|---:|---:|---:|---:|---|---|

### 8.5 User-level report format

| User ID | Device ID | Segment | Platform | Variant | Shown Count | First Shown | Clicked | Click Count | First Click | Converted | Conversion Time |
|---|---|---|---|---|---:|---|---|---:|---|---|---|

### 8.6 Funnel report format

Use the correct funnel for the product.

For NCD:

| Step | Event | Meaning |
|---:|---|---|
| 1 | `visitedCompanyDetail` | User landed on NCD product page |
| 2 | `visitedPlaceOrder` | User clicked invest or showed order intent |
| 3 | `placedOrder` | User initiated order |
| 4 | `beDevEvent` | Order success, only when script token filter is applied |

### 8.7 CTR interpretation rules

Good interpretation:

- Compare unique CTR by segment.
- Compare unique CTR by platform.
- Compare variant CTR only when A/B assignment is clean.
- Compare clicks with downstream conversion.
- Check frequency pressure before celebrating CTR.
- Check dismissal rate before scaling.

Bad interpretation:

- Reporting total clicks as users.
- Reporting impressions without unique reach.
- Mixing Android light, Android dark, and iOS without label clarity.
- Ignoring repeated exposures.
- Using `beDevEvent` without script token filter.
- Treating CTR as success when conversion does not move.

---

## 9. Developer Implementation Checklist

### 9.1 SDK and identity

- SDK installed on supported platform.
- API key initialized correctly.
- User ID passed after login.
- Device ID available for debugging.
- User properties are updated before campaign eligibility checks.
- Segment properties are stable and not stale.
- Logout or user switch behavior is tested.

### 9.2 Events

- Events use agreed naming.
- Mandatory properties are present.
- Timestamps are consistent.
- Events are not duplicated on re-render.
- Click fires before redirect.
- Dismiss fires only on real dismiss.
- Completion fires only after full flow completion.
- Conversion is preferably backend-validated.

### 9.3 Custom HTML

- No inline handlers.
- Use `addEventListener`.
- Use guarded bridge calls.
- Support Android, iOS, and Web where required.
- Fallback does not break local preview.
- CTA cannot double-fire on double tap.
- WebView safe area is handled.
- Main scroll area is controlled.
- Text remains readable in light and dark contexts.
- Assets load inside app runtime.

### 9.4 Deep links

- Destination URL is tested.
- Query parameters are encoded.
- Instrument tokens are correct.
- Expiry values are correct.
- Product type is correct.
- Redirect opens inside expected app surface.
- Campaign does not reappear after redirect.

### 9.5 QA before launch

- Test with eligible user.
- Test with ineligible user.
- Test after click.
- Test after dismiss.
- Test after conversion.
- Test after app restart.
- Test after back navigation.
- Test slow network.
- Test dark mode if applicable.
- Test event stream in analytics.

---

## 10. PM Launch Checklist

### 10.1 Before launch

- Goal is defined.
- User segment is defined.
- Trigger is defined.
- Exit condition is defined.
- Frequency cap is defined.
- CTA action is defined.
- Deep link is tested.
- Event names and properties are approved.
- Unique-user CTR formula is agreed.
- Conversion event is agreed.
- Attribution window is agreed.
- Variant names are final.
- Design matches FinX standards.
- Copy is short and clear.
- QA screenshots are reviewed.
- Report format is ready.

### 10.2 During launch

- Check first impressions.
- Check clicks.
- Check dismissals.
- Check conversion events.
- Check if same user is overexposed.
- Check if campaign fires after CTA.
- Check platform-level behavior.
- Check errors from bridge or deep link.

### 10.3 After launch

- Report unique-user CTR.
- Report total-click CTR separately.
- Report segment-wise performance.
- Report variant-wise performance.
- Report funnel impact.
- Report conversion quality.
- Document what worked.
- Document what failed.
- Decide scale, iterate, pause, or kill.

---

## 11. Mistakes to Avoid

### 11.1 Tracking mistakes

- Missing user ID.
- Using only device ID for final CTR.
- Click event fires after redirect and gets lost.
- Duplicate click events from double tap.
- Campaign viewed fires on render but user never saw it.
- Dismiss fires on redirect.
- Conversion is not linked to campaign exposure.
- Variant labels are renamed manually.

### 11.2 CTR mistakes

- Mixing total CTR and unique-user CTR.
- Using total clicks as unique clicks.
- Ignoring repeated impressions.
- Ignoring users with multiple clicks.
- Reporting CTR without sample size.
- Comparing variants with unequal targeting.
- Comparing Android and iOS without platform split.

### 11.3 Campaign mistakes

- Triggering on App Open without frequency control.
- Showing campaign to already converted users.
- Showing too many campaigns in the same session.
- Using generic copy.
- Using unclear CTA.
- Redirecting users to a broad page instead of the exact action path.
- Creating walkthroughs with no instruction text.
- Using zoom animations that crop the screen.

### 11.4 Reporting mistakes

- Reporting only impressions and clicks.
- Not including conversion.
- Not including dismissals.
- Not labeling date range.
- Not preserving variant names.
- Not checking script token filter for `beDevEvent`.
- Not separating MoEngage communication performance from Plotline in-app performance.

---

## 12. Open Questions / Needs Confirmation

| Area | Question | Owner |
|---|---|---|
| Attribution window | Should default Plotline attribution be 24h, 48h, 7d, or campaign-specific? | PM + Analytics |
| Unique CTR dedupe | What duplicate click time threshold should be used? | Analytics |
| Bridge signature | Which exact PlotlineWeb signature is approved for current SDK version? | Plotline / Frontend |
| Dismiss behavior | Does REDIRECT auto-dismiss in current Plotline setup? | Plotline / QA |
| App Open campaigns | What is the approved default frequency cap? | Growth PM |
| Segment sync | Which source is final for target segments: MoEngage, backend, Mixpanel, or Plotline? | Martech + Analytics |
| Conversion source | Should conversion be taken from MoEngage, backend DB, or Plotline export? | Analytics |
| Cross-page walkthrough | Should next step be handled by Flow Action or page targeting? | Plotline / Frontend |
| Theme handling | Should campaigns use single-tone design or light/dark separate campaigns? | PM + Design |
| Data warehouse sync | Which final table will store Plotline campaign events? | Data Team |

---

## 13. Final Clean Guidelines

### 13.1 Operating principles

1. Plotline is the in-app experience layer.
2. Every campaign must move the user to a measurable next action.
3. Every campaign must have a target segment, trigger, CTA, conversion event, and exit condition.
4. Every campaign must define frequency before launch.
5. Every campaign must be measured at user level and event level.
6. Unique-user CTR is the primary CTR for decisions.
7. Total-click CTR is secondary.
8. Variant names must remain exactly as exported.
9. Platform splits must be preserved.
10. Campaign success requires downstream funnel movement, not just clicks.

### 13.2 Product usage rules

Use Plotline for:

- Feature discovery.
- Product education.
- Contextual nudges.
- Drop-off recovery.
- In-app conversion prompts.
- Stories and swipeable learning flows.
- Guided walkthroughs.
- Surveys and feedback.
- Time-sensitive product campaigns.
- Controlled A/B tests.

Do not use Plotline for:

- Generic spam inside the app.
- Repeated App Open popups.
- Critical product logic.
- Anything that should be native for long-term UX.
- Order flow interruptions without clear user benefit.
- Campaigns with no measurement plan.

### 13.3 Design rules

- Use FinX-native visual style.
- Use Onest font where possible.
- Use clean cards and strong hierarchy.
- Keep text short.
- Make CTA obvious.
- Avoid clutter.
- Avoid white bleed.
- Avoid unreadable text on theme backgrounds.
- Do not crop real screens in walkthroughs.
- Use animation only to clarify action.

### 13.4 Tracking rules

Track:

- Viewed.
- Clicked.
- Dismissed.
- Completed.
- Converted.
- Segment entered.
- Segment exited.

Always include:

- User ID.
- Device ID.
- Campaign ID.
- Campaign name.
- Variant ID.
- Variant name.
- Platform.
- Surface.
- Timestamp.
- Action ID for CTA.

### 13.5 CTR rules

Default:

`Unique-user CTR = Unique clicked users / Unique shown users`

Also report:

- Total impressions.
- Total clicks.
- Total-click CTR.
- Impressions per user.
- Clicks per clicked user.
- Dismissal rate.
- Conversion rate.

Never report CTR without stating which CTR method is used.

### 13.6 Funnel rules

For NCD, use this funnel order:

1. `visitedCompanyDetail`
2. `visitedPlaceOrder`
3. `placedOrder`
4. `beDevEvent`, only with script token filter

For Trader Mode, define the funnel per campaign:

1. Campaign viewed.
2. CTA clicked.
3. Trader Mode opened.
4. Target tool opened.
5. Order or target product action completed.

For Weekly Summary:

1. Campaign viewed.
2. Card progression.
3. Last card reached.
4. CTA clicked.
5. Destination opened.
6. Repeat engagement or trade action.

### 13.7 Reporting rules

Every report must include:

- Date range.
- Campaign name.
- Segment.
- Platform.
- Variant.
- Surface.
- Unique shown.
- Total impressions.
- Unique clicks.
- Total clicks.
- Unique-user CTR.
- Total-click CTR.
- Dismissal rate.
- Conversion event.
- Conversion rate.
- Learning.
- Next action.

### 13.8 Decision rules

Scale when:

- Unique-user CTR is strong.
- Conversion improves.
- Dismissals are acceptable.
- Frequency pressure is controlled.
- Segment performance is consistent.

Iterate when:

- CTR is good but conversion is weak.
- One segment works and others do not.
- Variant performance is mixed.
- CTA click is high but destination drop-off is high.

Pause when:

- Dismissal rate is high.
- Campaign repeats after CTA.
- Tracking is unreliable.
- Variant assignment is contaminated.
- Conversion data is missing.

Kill when:

- CTR is weak.
- Conversion is weak.
- Users are overexposed.
- Campaign interrupts the core journey.
- The message has no product relevance.

---

## Appendix A. PM Quick Template

```md
# Plotline Campaign Brief

## Campaign Name

## Product Area

## Objective

## Target Segment

## Trigger

## Surface

## Copy

## CTA

## Deep Link

## Frequency Cap

## Exit Rule

## Events Required

## Primary Metric

## Secondary Metrics

## Attribution Window

## QA Checklist

## Reporting Format
```

---

## Appendix B. Analyst Quick Template

```md
# Plotline Campaign Report

## Campaign Metadata
- Name:
- Dates:
- Segment:
- Surface:
- Platform:
- Variants:

## Topline
- Unique shown users:
- Total impressions:
- Unique clicked users:
- Total clicks:
- Unique-user CTR:
- Total-click CTR:
- Dismissal rate:
- Completion rate:
- Conversion event:
- Conversion rate:

## Segment Cut

## Platform Cut

## Variant Cut

## Funnel Impact

## Learnings

## Decision
Scale / Iterate / Pause / Kill

## Next Action
```

---

## Appendix C. Developer Quick Checklist

```md
# Plotline Developer Checklist

- SDK initialized.
- User ID passed.
- Device ID available.
- User properties updated.
- Events implemented.
- CTA action IDs unique.
- Bridge guarded for Android, iOS, Web.
- Click fires before redirect.
- Dismiss does not fire incorrectly.
- Conversion event source confirmed.
- Frequency cap tested.
- App Open retrigger tested.
- Deep links tested.
- Platform and theme QA done.
- Analytics export verified.
```
