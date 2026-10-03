# BUG-003 — Favicon 404 in development

**Severity:** Low
**Page:** Any page in dev mode

## Observed
`index.html` references `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`, but `vite.config.js` sets `base: "/portfolio/"`. In dev the browser requests `/favicon.svg` → **404** (verified by Playwright `fetch('/favicon.svg')` → 404; `/portfolio/favicon.svg` → 200). No tab icon renders.

## Suggested fix
Use a relative or base-aware path in `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="./favicon.svg" />
```
