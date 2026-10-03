# BUG-005 — Cosmetic/text inconsistencies

**Severity:** Low

1. `src/components/TimelineContact.jsx` timeline says "Shipped UniSOLV, **AntiDROP**, UNIPECT & LibSync", while the project title and card use **Anti_Drop**. Pick one canonical spelling.
2. `portfolio-context.md` lists this as School dramas/AVMUN Class 12 2024; the timeline's first entry is "2024 — Class 12" — fine, but two entries share year "2026" and the hero meta bar says "Batch of 2026" while the brief says the B.Tech is 2026 – present; "Batch of 2026" in the hero reads like the schooling batch, which could confuse visitors.
3. Mobile Nav: inactive pill has no visible border (`borderColor: transparent`) while the active one uses a 2px-ish accent border — slight row-height/border-weight inconsistency vs the gray tab labels; minor polish.
