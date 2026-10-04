/**
 * Hero.jsx
 * Full-viewport opening section. Light background, dark ink.
 * Background: staggered typographic collage of identity words.
 * Heading: Loki-style rapid font-flip animation on mount.
 */
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

// Each row: words, font-size class, opacity, left offset (px) to break grid symmetry
const WORD_ROWS = [
  {
    words: ["BUILDER", "LEADER", "HACKATHONS", "DEVELOPER", "BUILDER"],
    size: "text-[5rem] md:text-[8rem] lg:text-[11rem]",
    opacity: "opacity-[0.04]",
    offset: -30,
  },
  {
    words: ["ATHLETE", "CTFs", "FOOTBALL", "MUSICIAN", "ATHLETE", "CTFs"],
    size: "text-[3rem] md:text-[4.5rem] lg:text-[6rem]",
    opacity: "opacity-[0.055]",
    offset: 110,
  },
  {
    words: ["CYBERSECURITY", "HACKER", "MUN", "DESIGNER", "CYBERSECURITY"],
    size: "text-[4.5rem] md:text-[7rem] lg:text-[9.5rem]",
    opacity: "opacity-[0.035]",
    offset: -80,
  },
  {
    words: ["SPORTSMAN", "BADMINTON", "OPEN SOURCE", "CULTURAL", "SPORTSMAN"],
    size: "text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem]",
    opacity: "opacity-[0.06]",
    offset: 200,
  },
  {
    words: ["ATHLETICS", "KEYBOARD", "FILMMAKER", "SPEAKER", "ATHLETICS", "KEYBOARD"],
    size: "text-[4rem] md:text-[6rem] lg:text-[8rem]",
    opacity: "opacity-[0.04]",
    offset: 50,
  },
  {
    words: ["DIGITAL DESIGN", "HACKATHONS", "FOOTBALL", "LEADER"],
    size: "text-[3.5rem] md:text-[5rem] lg:text-[7rem]",
    opacity: "opacity-[0.05]",
    offset: -50,
  },
];

// Massive font list — system fonts + heavy cursives
const FONTS = [
  // Heavy Cursives
  '"Pacifico", cursive',
  '"Lobster", cursive',
  '"Oleo Script", cursive',
  '"Kaushan Script", cursive',
  '"Courgette", cursive',
  // System serifs
  '"Times New Roman", Times, serif',
  "Georgia, serif",
  "Garamond, serif",
  "Palatino, 'Palatino Linotype', serif",
  "'Book Antiqua', Palatino, serif",
  "Baskerville, 'Baskerville Old Face', serif",
  "'Century Schoolbook', serif",
  "'Bodoni MT', Didot, serif",
  "Didot, 'Didot LT STD', serif",
  "Superclarendon, Clarendon, serif",
  "'Big Caslon', 'Book Antiqua', serif",
  "'Hoefler Text', Garamond, serif",
  // System sans-serifs
  "'Arial Black', Gadget, sans-serif",
  "'Arial Narrow', Arial, sans-serif",
  "'Century Gothic', Futura, sans-serif",
  "'Franklin Gothic Medium', 'Franklin Gothic', sans-serif",
  "Verdana, Geneva, sans-serif",
  "Tahoma, Geneva, sans-serif",
  "'Gill Sans', 'Gill Sans MT', sans-serif",
  "Optima, Segoe, sans-serif",
  "Futura, 'Trebuchet MS', sans-serif",
  "'Helvetica Neue', Helvetica, Arial, sans-serif",
  // System display / condensed
  "Impact, Haettenschweiler, sans-serif",
  "'Rockwell Extra Bold', 'Rockwell', serif",
  "'Copperplate Gothic Bold', Copperplate, serif",
  // System mono
  "'Courier New', Courier, monospace",
  "'Lucida Console', Monaco, monospace",
  "'Andale Mono', monospace",
  // Our loaded fonts
  '"Oswald", sans-serif',
  '"Cormorant Garamond", serif',
  '"JetBrains Mono", monospace',
  '"Bricolage Grotesque", sans-serif',
];

export function Hero({ onScrollDown }) {
  const sectionRef      = useRef(null);
  const headingRef      = useRef(null);
  const subRef          = useRef(null);
  const ctaRef          = useRef(null);
  const prefersReduced  = useReducedMotion();
  const [headingStyle, setHeadingStyle] = useState({ fontFamily: FONTS[FONTS.length - 1], fontStyle: "normal" });

  // GSAP fade-in
  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(headingRef.current, { opacity: 0, duration: 0.2 })
        .from(subRef.current,     { y: 30, opacity: 0, duration: 0.7 }, "+=0.3")
        .from(ctaRef.current,     { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
    }, sectionRef);
    return () => ctx.revert();
  }, [prefersReduced]);

  // Endless font cycling — fixed ultra-fast 50ms interval for zero stutter
  useEffect(() => {
    if (prefersReduced) return;
    let lastIdx = FONTS.length - 1;
    let timer;

    const cycle = () => {
      let nextIdx;
      do { nextIdx = Math.floor(Math.random() * FONTS.length); } while (nextIdx === lastIdx);
      lastIdx = nextIdx;
      
      // Randomly make it italic (~30% chance) to add more flavor
      const isItalic = Math.random() > 0.7;
      
      setHeadingStyle({
        fontFamily: FONTS[nextIdx],
        fontStyle: isItalic ? "italic" : "normal"
      });
      // Slower 200ms interval for readability
      timer = setTimeout(cycle, 200);
    };

    timer = setTimeout(cycle, 200);
    return () => clearTimeout(timer);
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >

      {/* ── Background typographic collage ──────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col justify-around pointer-events-none select-none"
        aria-hidden="true"
      >
        {WORD_ROWS.map((row, ri) => (
          <div
            key={ri}
            className={`flex items-center whitespace-nowrap gap-8 md:gap-12 ${row.opacity}`}
            style={{ marginLeft: row.offset }}
          >
            {row.words.map((word, wi) => (
              <span
                key={wi}
                className={`font-display font-black uppercase leading-none tracking-[-0.03em] text-[#111111] ${row.size} shrink-0`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ── Foreground content ──────────────────────────────────────────── */}
      <div className="relative z-10 px-6 md:px-16 pt-20 md:pt-24 pb-16 max-w-[1400px] mx-auto w-full flex flex-col items-center text-center">

        {/* ── Main heading ─────────────────────────────────────────────── */}
        <div ref={headingRef} className="min-h-[220px] md:min-h-[280px] flex flex-col justify-center">
          <h1
            className="font-extrabold tracking-[-0.04em] leading-[0.95] transition-none"
            style={{
              fontSize: "clamp(3.2rem, 9vw, 7rem)",
              fontFamily: headingStyle.fontFamily,
              fontStyle: headingStyle.fontStyle,
            }}
          >
            Sangeeth
            <br />
            Roshan.
          </h1>
        </div>

        {/* ── Subtext ──────────────────────────────────────────────────── */}
        <p
          ref={subRef}
          className="mt-10 text-lg md:text-xl font-medium text-[#6B6B6B] max-w-[48ch] leading-relaxed"
        >
          First-year CSE (Cyber Security) student at SNU Chennai.
          One person, many modes.
        </p>

        {/* ── CTAs ─────────────────────────────────────────────────────── */}
        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
      <div className="absolute bottom-8 left-6 md:left-16 z-10 flex items-center gap-3 text-xs font-mono text-[#9B9B9B]">
        <span>B.Tech CSE</span>
        <span aria-hidden>-</span>
        <span>SNU Chennai</span>
        <span aria-hidden>-</span>
        <span>Batch of 2026</span>
      </div>

    </section>
  );
}
