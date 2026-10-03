/**
 * avatars.js — single source of truth for all 5 avatar identities.
 *
 * Color palette decisions:
 *  - Hacker:   Acid Lime   (#C8FF00) on near-black (#111) — electric, technical
 *  - Leader:   Signal Red  (#FF3300) on near-white (#F4F3EE) — commanding, assertive
 *  - Athlete:  Pure Cobalt (#003CFF) on near-white — fast, direct
 *  - Musician: Near-Black  (#1A1A1A) — stage darkness, white text
 *  - Designer: Hot Fuchsia (#FF1F6E) on near-white — creative, loud
 *
 * `bg`    = slide background color
 * `ink`   = text color on that background (for contrast)
 * `accent`= used for the nav indicator and tag highlights
 */
export const AVATARS = [
  {
    id: "hacker",
    index: 0,
    label: "Hacker\n& Builder",       // \n is used for the big heading split
    navLabel: "Hacker / Builder",
    tagline: "Ships platforms. Breaks problems.",
    bg: "#111111",
    ink: "#C8FF00",
    accent: "#C8FF00",
    proofs: [
      "Smart India Hackathon 2026 - Round 2 qualifier (freshman year)",
      "SNUC Internal Hackathon 2026",
      "4 shipped projects: UniSOLV, AntiDROP, UNIPECT, LibSync",
      "Currently exploring: CTF, web recon, Kali Linux, Active Directory",
    ],
    skills: ["React", "Python", "TensorFlow", "GSAP", "Linux", "Next.js"],
  },
  {
    id: "leader",
    index: 1,
    label: "Leader\n& Speaker",
    navLabel: "Leader / Speaker",
    tagline: "Represents. Decides. Moves rooms.",
    bg: "#FF3300",
    ink: "#F4F3EE",
    accent: "#FF3300",
    proofs: [
      "Assistant Sports Secretary, SNU Chennai student council",
      "AVMUN'25 AIPPM - second-highest commendation, represented M.K. Stalin",
      "Class leader and team captain in multiple hackathons",
      "Represented school in MUN, cultural events, and sports",
    ],
    skills: ["Public Speaking", "MUN", "Team Leadership", "Strategy"],
  },
  {
    id: "athlete",
    index: 2,
    label: "Athlete",
    navLabel: "Athlete",
    tagline: "Football. Badminton. Multiple trophies.",
    bg: "#003CFF",
    ink: "#F4F3EE",
    accent: "#F4F3EE",
    proofs: [
      "Multiple school trophies in football",
      "Multiple school trophies in badminton",
      "Assistant Sports Secretary at SNU Chennai",
      "Competed across school and university levels",
    ],
    skills: ["Football", "Badminton", "Discipline", "Teamwork"],
  },
  {
    id: "musician",
    index: 3,
    label: "Musician",
    navLabel: "Musician",
    tagline: "Keys, stage, and a world record.",
    bg: "#1A1A1A",
    ink: "#F4F3EE",
    accent: "#F4F3EE",
    proofs: [
      "Asia Book of Records - largest electronic keyboard ensemble, 1 May 2023",
      "School dramas and cultural event performances",
      "Keyboard player across multiple stage productions",
    ],
    skills: ["Keyboard", "Performance", "Stage Presence"],
  },
  {
    id: "designer",
    index: 4,
    label: "Designer",
    navLabel: "Designer",
    tagline: "Brands, UI, and motion with intention.",
    bg: "#FF1F6E",
    ink: "#F4F3EE",
    accent: "#F4F3EE",
    proofs: [
      "Web/app concepts built around GSAP animation and interactive UI",
      "Hackathon team branding and logos (404 Decoders, SIH 2026)",
      "Video concepts and UI direction for UniSOLV",
      "Product and UI direction across 3 shipped projects",
    ],
    skills: ["UI Design", "Branding", "GSAP", "Motion"],
  },
];

export const DEFAULT_AVATAR = AVATARS[0];
