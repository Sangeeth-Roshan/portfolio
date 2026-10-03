/**
 * AvatarHorizontal.jsx
 *
 * GSAP horizontal scroll-hijack (HorizontalPan pattern from skill):
 *  - The wrapper section is pinned when its top hits the viewport top.
 *  - The inner track slides LEFT as the user scrolls DOWN.
 *  - Travel distance = (numSlides - 1) × window.innerWidth.
 *  - Each slide is 100vw × 100dvh.
 *
 * Active avatar detection:
 *  - Progress 0–1 is divided evenly; Math.floor(progress * n) gives slide index.
 *  - `onActiveChange` fires on every scrub tick so the Nav stays in sync.
 *
 * NOTE: No Motion imports here — GSAP and Motion must not share a component tree.
 */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { AVATARS } from "../config/avatars";
import { AvatarSlide } from "./AvatarSlide";

gsap.registerPlugin(ScrollTrigger);

export function AvatarHorizontal({ onActiveChange }) {
  const wrapRef       = useRef(null);
  const trackRef      = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const wrap  = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const ctx = gsap.context(() => {
      // Total horizontal travel: move track left by (slides-1) full widths
      const distance = track.scrollWidth - window.innerWidth;

      const st = gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",           // pin when section top hits viewport top
          end: () => `+=${distance}`, // vertical scroll length = horizontal travel
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Determine which slide is in focus and notify Nav
            const idx = Math.min(
              AVATARS.length - 1,
              Math.floor(self.progress * AVATARS.length)
            );
            onActiveChange(AVATARS[idx].id);
          },
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, [prefersReduced, onActiveChange]);

  // ── Fallback: no pan, just vertical stack ─────────────────────────────
  if (prefersReduced) {
    return (
      <section id="avatars" aria-label="Avatar sections">
        {AVATARS.map((avatar) => (
          <AvatarSlide key={avatar.id} avatar={avatar} />
        ))}
      </section>
    );
  }

  return (
    /*
      The wrapper is what GSAP pins.
      overflow-hidden on wrap prevents the sliding track from creating
      a native horizontal scrollbar.
    */
    <section
      ref={wrapRef}
      id="avatars"
      className="relative overflow-hidden"
      aria-label="Avatar sections"
    >
      {/* The track slides horizontally inside the pinned wrapper */}
      <div
        ref={trackRef}
        className="flex h-[100dvh] items-stretch"
        style={{ width: `${AVATARS.length * 100}vw` }}
      >
        {AVATARS.map((avatar) => (
          <AvatarSlide key={avatar.id} avatar={avatar} />
        ))}
      </div>

      {/* Slide progress dots (screen-reader friendly) */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10"
        role="presentation"
        aria-hidden="true"
      >
        {AVATARS.map((avatar) => (
          <span
            key={avatar.id}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: avatar.accent, opacity: 0.5 }}
          />
        ))}
      </div>
    </section>
  );
}
