/**
 * App.jsx
 * Root component.
 * Manages active-avatar state and wires Nav <-> AvatarHorizontal.
 */
import { useState, useCallback } from "react";
import { Nav }               from "./components/Nav";
import { Hero }              from "./components/Hero";
import { AvatarHorizontal } from "./components/AvatarHorizontal";
import { Projects } from "./components/Projects";
import { MarqueeBanner } from "./components/MarqueeBanner";
import { Details } from "./components/Details";
import { TimelineContact } from "./components/TimelineContact";
import { AVATARS, DEFAULT_AVATAR } from "./config/avatars";

function App() {
  const [activeAvatarId, setActiveAvatarId] = useState(DEFAULT_AVATAR.id);

  // Fired by AvatarHorizontal on every scroll tick
  const handleActiveChange = useCallback((id) => {
    setActiveAvatarId(id);
  }, []);

  // Fired when user clicks a Nav tab — jumps to the avatars section
  // (GSAP ScrollTrigger will then drive horizontal position from scroll)
  const handleNavSelect = useCallback((id) => {
    setActiveAvatarId(id);
    const avatarSection = document.getElementById("avatars");
    if (!avatarSection) return;

    // Calculate the scroll position that corresponds to this avatar's slide
    const idx      = AVATARS.findIndex((a) => a.id === id);
    const progress = idx / (AVATARS.length - 1);
    // The GSAP pin adds extra scroll height equal to the horizontal distance.
    // We approximate: scroll to the start of the pin zone + fraction of scroll distance.
    const scrollStart  = avatarSection.offsetTop;
    const scrollLength = (AVATARS.length - 1) * window.innerWidth;
    const target       = scrollStart + progress * scrollLength;
    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  // Hero CTA
  const handleHeroScrollDown = useCallback(() => {
    document.getElementById("avatars")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Nav activeId={activeAvatarId} onSelect={handleNavSelect} />
      <Hero onScrollDown={handleHeroScrollDown} />
      <AvatarHorizontal onActiveChange={handleActiveChange} />

      <Projects />
      <MarqueeBanner />
      <Details />
      <TimelineContact />
    </>
  );
}

export default App;
