# BUG-002 — Nav tab clicks scroll to the wrong position; wrong avatar slide shown

**Severity:** High (core navigation broken)
**Page:** Avatar navigation (all 5 tabs in Nav + mobile pill strip)
**Evidence:** `issues/evidence/nav-athlete-click-shows-leader.png`

## Steps to reproduce
1. Open http://localhost:5173/portfolio/
2. Scroll past the hero into the pinned horizontal avatar section (or stay anywhere)
3. Click the "Athlete" tab in the Nav

## Expected
Smooth-scroll so the "Athlete" slide fills the viewport and the "Athlete" tab becomes active.

## Actual
- Clicking "Athlete" scrolls to `y = 2560` with `innerHeight = 720`, i.e. avatar progress ≈ 0.36 → the **Leader** slide (index 1) is shown and the Leader tab is active.
- Same math applies to every tab: the scroll target is off by a constant ≈ one hero height (720px).

## Root cause
`App.jsx#handleNavSelect` computes the target with:

```js
const scrollStart = avatarSection.offsetTop;
```

`avatarSection` is rendered inside GSAP ScrollTrigger's `.pin-spacer` wrapper (positioned, at the section's location), so `offsetTop` is measured against the pin spacer and returns **~0** instead of the section's absolute document position (~720px, hero height). The code then scrolls to `progress * scrollLength`, missing the hero offset — landing mid-way one slide zone too early (e.g. "Athlete" → Leader zone; "Musician" only landed correctly by the 0.609 vs 0.6–0.75 zone edge case).

Verified: `getBoundingClientRect().top + window.scrollY` → 720, while `offsetTop` → 0.

## Suggested fix
Use `avatarSection.getBoundingClientRect().top + window.scrollY` when not pinned, or better, ask GSAP directly:

```js
const st = ScrollTrigger.getAll().find(t => t.trigger === avatarSection);
const target = st.start + progress * (st.end - st.start);
```
