# Tailwind Token Map

Use this file when converting FinX screens into Lovable, React, or Tailwind.

## Font

```js
fontFamily: {
  finx: ['Onest', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
}
```

## Colors

```js
colors: {
  finx: {
    navy: '#1B1464',
    blue: '#2777F3',
    success: '#45B644',
    error: '#DE493B',
    warning: '#F9EB21',
    info: '#5D99F6',
    neutral: {
      900: '#0F0E16',
      800: '#27262D',
      700: '#4B4A50',
      600: '#6F6E73',
      500: '#87868A',
      400: '#B7B7B9',
      300: '#CFCFD0',
      200: '#E7E7E8',
      100: '#E8E8F0',
      50: '#FCFCFE'
    },
    surface: {
      app: '#FCFCFE',
      soft: '#F4F8FE',
      blueSubtle: '#E9F1FE',
      greenSubtle: '#ECF8EC',
      redSubtle: '#F6CDCA',
      dark: '#070519'
    }
  }
}
```

## Radius

```js
borderRadius: {
  finxXs: '4px',
  finxSm: '8px',
  finxMd: '10px',
  finxLg: '12px',
  finxXl: '16px',
  finxSheet: '18px',
  finxPill: '999px'
}
```

## Spacing

Use a compact mobile-first rhythm. Most product screens use 12 to 16 px internal card padding, 16 px page gutter, and 8 to 16 px gaps between grouped elements.

```js
spacing: {
  finx1: '2px',
  finx2: '4px',
  finx3: '6px',
  finx4: '8px',
  finx5: '10px',
  finx6: '12px',
  finx7: '14px',
  finx8: '16px',
  finx10: '20px',
  finx12: '24px',
  finx16: '32px'
}
```

## Implementation rules

- Build light mode first.
- Keep numeric values right-aligned where they compare across rows.
- Use green and red only for market semantics, success/error, and buy/sell semantics.
- Use blue for navigation, focus, primary app actions, and selected states.
- Keep cards low-contrast. Avoid heavy shadows.
- Use bottom sheets for trading decisions and confirmation states.
