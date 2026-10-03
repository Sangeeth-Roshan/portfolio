/**
 * AvatarSlide.jsx
 * One slide in the horizontal avatar pan.
 * Width: 100vw. Height: 100dvh (full viewport, no overflow).
 *
 * Layout: asymmetric split — left 55% identity block, right 45% proof list.
 * Mobile: single column, identity on top, proof scrollable below.
 * Colors: flat solid bg, contrasting ink — NO gradients, NO glows.
 *
 * Fixes (from Playwright visual audit):
 *  - Heading clamp reduced from 3.5rem to 2.8rem base so mobile doesn't clip
 *  - overflow-hidden on root prevents native horizontal scrollbar
 *  - Mobile: horizontal rule between columns instead of vertical
 *  - Proof text smaller on mobile (text-xs) to prevent right-edge clip
 *  - overflow-y-auto on proof container prevents content escaping on small screens
 */
import { CheckFat } from "@phosphor-icons/react";
import { AVATARS } from "../config/avatars";

const AVATARS_COUNT = AVATARS.length;

export function AvatarSlide({ avatar }) {
  const labelLines = avatar.label.split("\n");

  return (
    <div
      className="w-screen h-[100dvh] shrink-0 flex flex-col md:flex-row overflow-hidden"
      style={{ backgroundColor: avatar.bg, color: avatar.ink }}
      data-avatar={avatar.id}
      aria-label={`${avatar.navLabel} section`}
    >
      {/* ── Left: Identity block ─────────────────────────────────────── */}
      <div
        className="flex flex-col justify-end w-full md:w-[55%] px-6 md:px-16 pt-20 pb-6 md:pt-0 md:pb-16 shrink-0"
      >
        {/* Index chip */}
        <div
          className="mb-4 md:mb-6 text-xs font-mono font-medium uppercase tracking-[0.2em]"
          style={{ opacity: 0.5 }}
        >
          {String(avatar.index + 1).padStart(2, "0")} / {String(AVATARS_COUNT).padStart(2, "0")}
        </div>

        {/* Heading: responsive clamp — readable on mobile, massive on desktop */}
        <h2
          className="font-display font-extrabold tracking-[-0.04em] leading-[0.95]"
          style={{ fontSize: "clamp(2.6rem, 8vw, 8rem)" }}
        >
          {labelLines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h2>

        {/* Tagline */}
        <p
          className="mt-4 md:mt-6 text-sm md:text-lg font-medium leading-snug max-w-[36ch]"
          style={{ opacity: 0.75 }}
        >
          {avatar.tagline}
        </p>

        {/* Skill tags */}
        <div className="mt-4 md:mt-8 flex flex-wrap gap-2">
          {avatar.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border"
              style={{ borderColor: `${avatar.ink}40`, color: avatar.ink, opacity: 0.85 }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ── Divider: horizontal on mobile, vertical on desktop ─────────── */}
      <div
        className="block md:hidden h-px mx-6 shrink-0"
        style={{ backgroundColor: `${avatar.ink}20` }}
        aria-hidden="true"
      />
      <div
        className="hidden md:block w-px self-stretch my-16 shrink-0"
        style={{ backgroundColor: `${avatar.ink}20` }}
        aria-hidden="true"
      />

      {/* ── Right: Proof list ─────────────────────────────────────────── */}
      <div className="flex flex-col justify-center w-full md:w-[45%] px-6 md:px-14 py-6 md:py-0 overflow-y-auto">
        <ul className="space-y-3 md:space-y-5" aria-label="Evidence">
          {avatar.proofs.map((proof, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckFat
                size={14}
                weight="fill"
                className="shrink-0 mt-0.5 md:mt-1"
                style={{ color: avatar.ink, opacity: 0.9 }}
                aria-hidden="true"
              />
              <span
                className="text-xs md:text-base leading-relaxed font-medium"
                style={{ opacity: 0.85 }}
              >
                {proof}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
