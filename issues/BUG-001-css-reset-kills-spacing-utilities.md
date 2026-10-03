# BUG-001 — Global CSS reset silently disables ALL Tailwind margin/padding utilities (critical)

**Severity:** Critical (breaks layout site-wide)
**Page(s):** Every section, desktop + mobile
**Evidence:** `issues/evidence/hero.png`, `issues/evidence/desktop-avatar-hacker.png`, `issues/evidence/mobile-hero2.png`, `issues/evidence/mobile-avatars-p0.png`

## Summary
`src/index.css` ends the `@import "tailwindcss";` block with an **unlayered** global reset:

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Tailwind v4 emits its utilities inside `@layer utilities`. Per the CSS cascade, **unlayered author rules beat layered rules**, so this reset overrides every `mt-*`, `mb-*`, `pt-*`, `pb-*`, `px-*`, `py-*`, `p-*`, `mx-*/my-*`, `space-y-*` utility on the whole site.

## Verified via Playwright
- `getComputedStyle(...).paddingTop` on a `pt-20` element → `"0px"` even though the rule `.pt-20` exists in the served CSS.
- `matchMedia('(width >= 48rem)')` → `false` at 390px, ruling out a breakpoint mixup.

## Observed symptoms
- **Hero:** heading flush against the left edge (`px-6 md:px-16` dead); no vertical gaps between heading, ticker, subtext, CTAs (`mt-8`, `mt-10` dead). See `hero.png`.
- **Avatar slides:** identity text flush to slide edges/bottom (`px-6 md:px-16 pt-20 md:pb-16` dead), vertical divider spans full height edge-to-edge, proofs start right at the divider. See `desktop-avatar-hacker.png`.
- **Mobile 390×844:** slide heading clipped at the top, skill chips overlap proofs, content begins under the fixed nav. See `mobile-avatars-p0.png`.
- **Details/Timeline/Footer:** `p-10 md:p-16 lg:p-24` becomes 0px — headings and lists touch cell borders.

## Suggested fix
Remove the unlayered reset (Tailwind v4 preflight already zeroes margin/padding inside `@layer base`), or scope it into the base layer:

```css
@layer base {
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
}
```
