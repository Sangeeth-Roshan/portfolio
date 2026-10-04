/**
 * Hero.jsx
 * Full-viewport opening section. Light background, dark ink.
 * Font: Bricolage Grotesque 800 — heavy, intentional.
 * Motion: GSAP stagger entry on mount. CSS ticker for identities.
 * Layout: left-aligned, asymmetric.
 */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

const IDENTITIES = [
  "Builder",
  "Hacker",
  "Leader",
  "Speaker",
  "Athlete",
  "Musician",
  "Designer",
];

export function Hero({ onScrollDown }) {
  const sectionRef    = useRef(null);
  const headingRef    = useRef(null);
  const subRef        = useRef(null);
  const ctaRef        = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(headingRef.current, { y: 80, opacity: 0, duration: 1 })
        .from(subRef.current,     { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(ctaRef.current,     { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, [prefersReduced]);

  // Each strip = 6 copies of IDENTITIES. Two strips side by side = 12 copies total.
  // Animation translates -50% = scrolls exactly one strip, then loops seamlessly.
  // 6 copies guarantees the strip is wider than any monitor at this small font size.
  const strip = Array.from({ length: 6 }).flatMap(() => IDENTITIES);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center"
      aria-label="Introduction"
    >
      {/* ── Inner content (max-width constrained) ─────────────────────── */}
      <div className="px-6 md:px-16 pt-20 md:pt-24 pb-6 max-w-[1400px] mx-auto w-full">

        {/* ── Main heading ─────────────────────────────────────────────── */}
        <div ref={headingRef}>
          <h1
            className="font-extrabold tracking-[-0.04em] leading-[0.95]"
            style={{ fontSize: "clamp(3.2rem, 9vw, 7rem)" }}
          >
            Sangeeth
            <br />
            Roshan.
          </h1>
        </div>
      </div>

      {/* ── Identity ticker ─ TRUE full-viewport width ─────────────────── */}
      <div className="w-full overflow-hidden" aria-label="Identities">
        <div
          className="flex w-max"
          style={{
            animation: prefersReduced ? "none" : "ticker-scroll 18s linear infinite",
          }}
        >
          {/* Strip 1 */}
          <div className="flex gap-8 px-4">
            {strip.map((id, i) => (
              <span
                key={`a-${i}`}
                className="shrink-0 text-xs font-mono font-medium uppercase tracking-[0.25em] text-[#6B6B6B]"
              >
                {id}
              </span>
            ))}
          </div>
          {/* Strip 2 — exact duplicate so -50% loops back to start */}
          <div className="flex gap-8 px-4">
            {strip.map((id, i) => (
              <span
                key={`b-${i}`}
                className="shrink-0 text-xs font-mono font-medium uppercase tracking-[0.25em] text-[#6B6B6B]"
              >
                {id}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lower content (max-width constrained) ────────────────────── */}
      <div className="px-6 md:px-16 pb-16 max-w-[1400px] mx-auto w-full">

        {/* ── Subtext ──────────────────────────────────────────────────── */}
        <p
          ref={subRef}
          className="mt-10 text-lg md:text-xl font-medium text-[#6B6B6B] max-w-[48ch] leading-relaxed"
        >
          First-year CSE (Cyber Security) student at SNU Chennai.
          One person, many modes.
        </p>

        {/* ── CTAs ─────────────────────────────────────────────────────── */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onScrollDown}
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold
              bg-[#111111] text-[#F4F3EE]
              hover:bg-[#333] active:scale-[0.97] transition-all duration-150"
          >
            See the avatars
            <ArrowRight
              size={16}
              weight="bold"
              className="group-hover:translate-x-[3px] transition-transform duration-200"
            />
          </button>
          <a
            href="mailto:sangeethroshanr@gmail.com"
            className="px-6 py-3 rounded-full text-sm font-bold border-2 border-[#111111]
              text-[#111111]
              hover:bg-[#111111] hover:text-[#F4F3EE]
              active:scale-[0.97] transition-all duration-150"
          >
            Say hello
          </a>
        </div>
      </div>

      {/* ── Bottom metadata ───────────────────────────────────────────── */}
      <div className="absolute bottom-8 left-6 md:left-16 flex items-center gap-3 text-xs font-mono text-[#9B9B9B]">
        <span>B.Tech CSE</span>
        <span aria-hidden>-</span>
        <span>SNU Chennai</span>
        <span aria-hidden>-</span>
        <span>Batch of 2026</span>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
