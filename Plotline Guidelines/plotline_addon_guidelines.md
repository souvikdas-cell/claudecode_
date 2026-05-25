# Plotline Addon Guidelines

Souvik Das. Choice FinX 3.0 and StrikeX. Compiled from confirmed Plotline support threads.

## 1. Bridge methods per platform

Plotline exposes three different JS bridges. The widget must detect the platform and call the matching one. Direct anchor clicks and `window.location.assign` do not work inside the Plotline iframe.

| Platform | Bridge object | Detection |
|---|---|---|
| Web (iframe) | `window.PlotlineWeb` | `!!window.PlotlineWeb` |
| Android WebView | `window.Plotline` | `!!window.Plotline` |
| iOS WKWebView | `window.webkit.messageHandlers.Plotline` | `!!window.webkit?.messageHandlers?.Plotline` |

Order checks Web first, then iOS, then Android. Never assume only one bridge exists.

## 2. Redirect bridge signatures

These are the confirmed signatures from Plotline support. Use the exact parameter count and order. The web signature has 7 parameters and the platform identifier must be `'WEB'`.

```js
// Web
window.PlotlineWeb.onClick(
  actionId,    // string, unique per CTA. Used for analytics breakdown.
  'REDIRECT',  // effect
  url,         // target URL
  'WEB',       // platform identifier, must be 'WEB'
  true,        // requireDismiss
  false,       // isDismissed
  true         // dismissLayout
);

// Android
window.Plotline.onClick(
  actionId,    // string
  'REDIRECT',  // effect
  url,         // target URL
  'ANDROID',   // platform
  true,        // requireDismiss
  false        // isDismissed
);

// iOS
window.webkit.messageHandlers.Plotline.postMessage({
  action: actionId,
  effect: 'REDIRECT',
  target: url,
  platform: 'IOS',
  requireDismiss: true,
  isDismissed: false
});
```

Do not pass `null` as the first argument if click tracking matters. A `null` action lumps all clicks under one ID. Use a unique string per CTA.

## 3. Effects supported

| Effect | Behaviour |
|---|---|
| `REDIRECT` | Opens the URL and dismisses the current step. Does not end the campaign. |
| `TRACK_EVENT` | Fires a custom analytics event. Does not navigate. Does not dismiss. |
| `CALLBACK` | Sends a payload to the native app. Requires `setPlotlineRedirectListener` on the native side. Use only when the app is wired to handle it. |
| `END` | Dismisses and ends the campaign for the session. |

`REDIRECT_AND_END` does not exist. Do not use it. Plotline support confirmed this caused a CTA to silently break.

## 4. Preventing App Open campaign retrigger

If a campaign with `App Open` trigger reopens itself after the CTA navigates, two fixes apply:

1. Use `REDIRECT` effect, not raw navigation. Plotline dismisses the step before opening.
2. Set frequency to `Show only once` or `Show up to 1 time per session` in the dashboard.

Test users bypass frequency caps. To verify the fix, activate the campaign on a real segment.

## 5. CTA analytics

The dashboard click rate is aggregate across all CTAs in a widget. It does not break down per button. To get per-CTA data:

1. Use a unique `actionId` string per CTA in the bridge call. Plotline appends each unique action ID as a separate row in the CSV export.
2. For richer attributes, fire `TRACK_EVENT` separately before navigating.

### Dynamic action IDs

Plotline confirmed that the `actionId` parameter is a pass-through string. It can be constructed at runtime. There is no limit on unique action IDs per widget.

Naming convention used in StrikeX widgets:

```
strikex_widget_{underlying}_{direction}_{expiry}_open
```

Example:

```
strikex_widget_nifty_down_2026_05_12_open
strikex_widget_sensex_up_2026_05_14_open
```

Each unique action ID appears as a distinct entry in the CTA report. Including the expiry date in the action ID gives per-expiry analytics granularity.

### TRACK_EVENT signature

Use TRACK_EVENT when you need to attach properties beyond what a single action ID can carry, or when the same CTA should fire multiple analytics events.

```js
function trackEventOnPlotline(eventName, properties){
  var eventData = JSON.stringify({
    eventName: eventName,
    properties: properties || {}
  });
  if(window.PlotlineWeb){
    window.PlotlineWeb.onClick(null, 'TRACK_EVENT', eventData, 'WEB', false, false, false);
  }
  if(window.Plotline){
    window.Plotline.onClick(null, 'TRACK_EVENT', eventData, 'ANDROID', false, false);
  }
  if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Plotline){
    window.webkit.messageHandlers.Plotline.postMessage({
      action: null,
      effect: 'TRACK_EVENT',
      target: eventData,
      platform: 'IOS',
      requireDismiss: false,
      isDismissed: false
    });
  }
}
```

Fire `TRACK_EVENT` first, then `REDIRECT` with an 80ms delay. The redirect kills the queue, so the event must leave first.

## 6. Anchor tags do not work

`<a href>` clicks inside Plotline custom HTML are not natively handled on Web iframe. Right click opens the URL because that bypasses the iframe sandbox. Normal left click does nothing unless you bind a JS handler that calls the bridge.

Always attach a click listener and call the bridge from JS.

```js
document.getElementById('cta_button').addEventListener('click', function(e){
  e.preventDefault();
  redirectOnPlotline('https://target-url');
});
```

## 7. Dynamic content in HTML

Three ways to inject server-side or user-side data into custom HTML.

1. **User Attributes**. Already set via SDK. Use directly with Liquid: `{{ user.segment }}`, `{{ user.token }}`. No SDK upgrade needed.
2. **Content API**. Plotline calls your backend at render time. Inject with `{{ result.symbol }}`. Requires Android 4.7.4+ and iOS 4.6.4+.
3. **CALLBACK payloads**. Pass full JSON to the app. Requires `setPlotlineRedirectListener` on the native side. Will silently fail if the listener is not implemented.

Dynamic URLs work the same way:

```
https://finx.choiceindia.com/client/ncd/{{user.segment}}/{{user.token}}
```

## 8. Single widget for web and app

Do not duplicate widgets for web and app. Use platform guards inside one HTML file.

```js
function handleCTA(url, kvpData, actionId){
  if(window.PlotlineWeb){
    window.PlotlineWeb.onClick(actionId, 'REDIRECT', url, 'WEB', true, false, true);
    return;
  }
  if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Plotline){
    window.webkit.messageHandlers.Plotline.postMessage({
      action: actionId,
      effect: 'CALLBACK',
      target: JSON.stringify(kvpData),
      platform: 'IOS',
      requireDismiss: true,
      isDismissed: false
    });
    return;
  }
  if(window.Plotline){
    window.Plotline.onClick(actionId, 'CALLBACK', JSON.stringify(kvpData), 'ANDROID', true, false);
    return;
  }
}
```

On web: opens URL with REDIRECT. On app: sends payload via CALLBACK to the native handler.

## 9. Web SDK setup

Plotline support confirmed:

1. Use the correct product API key. Each product has its own. Choice Web Dev key is not the same as production.
2. The Plotline script must load before the `init` call. Loading order breaks the SDK silently.

## 10. CSV export limitations

The master campaign CSV does not break down per CTA inside a single Custom HTML widget. Unique `actionId` values do appear, but the CSV does not generate one sheet per CTA. This was raised as a feature request and is pending. Workaround: filter the action ID column in the CSV manually or use TRACK_EVENT exports from Data Center.

## 11. Pre-flight checklist before going live

| Check | Required |
|---|---|
| Unique `actionId` per CTA | Yes |
| Platform identifier matches the bridge | Yes |
| `requireDismiss: true` on REDIRECT | Yes |
| TRACK_EVENT fires before REDIRECT with 80ms gap | If using TRACK_EVENT |
| No `<a href>` as primary CTA | Yes |
| Frequency capped correctly for App Open campaigns | Yes |
| Test user removed from segment for frequency QA | Yes |
| URL is properly encoded | Yes |
| Dynamic URLs validated with current user attributes | Yes |
| Expiry dates checked against current date and trading holidays | Yes for strategy widgets |
