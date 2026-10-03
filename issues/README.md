# Test Report — Portfolio (localhost:5173) — 2026-10-03

Tested with `playwright-cli` against `http://localhost:5173/portfolio/` at 1280×720 and 390×844, plus `prefers-reduced-motion: reduce`.

## Issues

| ID | Title | Severity |
|----|-------|----------|
| BUG-001 | Global CSS reset disables all Tailwind margin/padding utilities | Critical |
| BUG-002 | Nav tab clicks scroll to wrong position, wrong slide shown | High |
| BUG-003 | Favicon 404 in dev (vite base mismatch) | Low |
| BUG-004 | React warning: `background` shorthand vs `backgroundClip` mix in Projects watermark | Low |
| BUG-005 | Minor content/naming inconsistencies | Low |

## What passed
- Page loads, title correct, no React mount errors.
- Reduced-motion fallback renders all 5 avatar slides stacked (no GSAP pin).
- GitHub/LinkedIn links point to the correct URLs from the brief.
- Mobile pill strip + desktop tab strip swap correctly at the `md` breakpoint.

## Notes
- BUG-001 is the root cause of the clipped/overlapping mobile slide layout and the collapsed spacing seen everywhere; fixing it should resolve most visual noise reported in BUG-005 #3 and the avatar-slide screenshots.
