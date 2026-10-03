/**
 * Nav.jsx
 * Fixed top navigation.
 * - Logo left, avatar tabs center, links right.
 * - The active tab's color matches the current slide's accent.
 * - Sliding underline moves between tabs on scroll.
 * - Mobile: horizontal scroll pill strip under the main bar.
 */
import { useEffect, useRef } from "react";
import { AVATARS } from "../config/avatars";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Nav({ activeId, onSelect }) {
  const indicatorRef = useRef(null);
  const tabRefs      = useRef({});

  // Move the indicator under the active tab
  useEffect(() => {
    const tab       = tabRefs.current[activeId];
    const indicator = indicatorRef.current;
    if (!tab || !indicator) return;
    const avatar = AVATARS.find((a) => a.id === activeId);
    indicator.style.left            = `${tab.offsetLeft}px`;
    indicator.style.width           = `${tab.offsetWidth}px`;
    indicator.style.backgroundColor = avatar?.accent ?? "#111";
  }, [activeId]);

  const activeAvatar = AVATARS.find((a) => a.id === activeId) ?? AVATARS[0];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backdropFilter:         "blur(14px)",
        WebkitBackdropFilter:   "blur(14px)",
      }}
    >
      {/* Background strip */}
      <div className="absolute inset-0 bg-[#F4F3EE]/85 border-b border-[#D4D3CE]" />

      <nav className="relative max-w-[1400px] mx-auto px-6 md:px-16 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <span className="shrink-0 text-lg font-extrabold tracking-[-0.04em] text-[#111111] select-none">
          S.R.
        </span>

        {/* Avatar tabs (desktop) */}
        <div
          className="hidden md:flex relative items-center gap-1"
          role="tablist"
          aria-label="Avatar navigation"
        >
          {AVATARS.map((avatar) => {
            const isActive = avatar.id === activeId;
            return (
              <button
                key={avatar.id}
                role="tab"
                aria-selected={isActive}
                ref={(el) => { tabRefs.current[avatar.id] = el; }}
                onClick={() => onSelect(avatar.id)}
                className="relative px-3 py-1.5 text-sm font-semibold tracking-tight rounded-md transition-colors duration-200"
                style={{ color: isActive ? "#111111" : "#6B6B6B" }}
              >
                {avatar.navLabel}
              </button>
            );
          })}

          {/* Sliding underline */}
          <span
            ref={indicatorRef}
            className="absolute bottom-0 h-[2.5px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            aria-hidden="true"
          />
        </div>

        {/* Links */}
        <div className="shrink-0 flex items-center gap-4">
          <a
            href="https://github.com/Sangeeth-Roshan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            <GithubLogo size={20} weight="bold" />
          </a>
          <a
            href="https://www.linkedin.com/in/rsangeethroshan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            <LinkedinLogo size={20} weight="bold" />
          </a>
        </div>
      </nav>

      {/* Mobile pill strip */}
      <div className="md:hidden overflow-x-auto border-t border-[#D4D3CE]">
        <div className="flex gap-2 px-4 py-2 w-max">
          {AVATARS.map((avatar) => {
            const isActive = avatar.id === activeId;
            return (
              <button
                key={avatar.id}
                onClick={() => onSelect(avatar.id)}
                className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200"
                style={{
                  borderColor:     isActive ? avatar.accent : "transparent",
                  color:           isActive ? avatar.accent : "#6B6B6B",
                  backgroundColor: isActive ? `${avatar.accent}18` : "transparent",
                }}
              >
                {avatar.navLabel}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
