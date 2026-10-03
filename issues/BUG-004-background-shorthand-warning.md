# BUG-004 — React warning: watermark style mixes `background` shorthand with `backgroundClip`

**Severity:** Low (console error, potential styling bug)
**File:** `src/components/Projects.jsx` → `getWatermarkStyle()`

## Console
Repeated on every render that includes a project card:

```
[ERROR] Updating a style property during rerender (backgroundClip) when a conflicting property is set (background) can lead to styling bugs. ... don't mix shorthand and non-shorthand properties for the same value ...
```

The style object sets both `background: <gradient>` and `WebkitBackgroundClip: "text"` / `backgroundClip: "text"`.

## Suggested fix
Drop the shorthand and set explicit pieces:

```js
backgroundImage: gradient,
WebkitBackgroundClip: "text",
backgroundClip: "text",
```
