import { useState } from "react";
import { ArrowRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

const TIMELINE = [
  {
    year: "2024",
    title: "Class X",
    subtitle: "Amrita Vidyalayam · 92.2% CBSE",
    desc: "Completed Class X at Amrita Vidyalayam with 92.2% CBSE, alongside active involvement in academics, sports, cultural activities and school leadership."
  },
  {
    year: "OCT 2024",
    title: "School Expo",
    detailTitle: "School Expo — UNIPECT",
    subtitle: "Built UNIPECT · Computer Vision",
    desc: "Built UNIPECT, a real-time computer vision system for school uniform compliance and ID-card verification using a live webcam."
  },
  {
    year: "2026",
    title: "Class XII",
    subtitle: "Amrita Vidyalayam · 92.4% CBSE",
    desc: "Completed Class XII at Amrita Vidyalayam with 92.4% CBSE, continuing to balance academics with extracurriculars, leadership and technical projects."
  },
  {
    year: "AUG 2026",
    title: "B.Tech CSE",
    detailTitle: "Shiv Nadar University",
    subtitle: "Shiv Nadar University Chennai · Cyber Security",
    desc: "Joined Shiv Nadar University Chennai for B.Tech CSE, specializing in Cyber Security and building deeper foundations in computer science, systems and security."
  },
  {
    year: "SEP 2026",
    title: "SNUC Internal Hackathon",
    detailTitle: "SNUC Internal Hackathon — AntiDROP",
    subtitle: "Shortlisted for SIH 2026 Round 2 · Built AntiDROP",
    desc: "Led the team in the SNUC Internal Hackathon, building AntiDROP—a causal ML platform for early student-dropout intervention—and successfully progressed to the SIH 2026 Round 2 selection stage."
  },
  {
    year: "NOW",
    title: "SIH 2026 — ROUND 2",
    detailTitle: "SIH 2026 — UniSOLV",
    subtitle: "Developed UniSOLV · Civic Problem-Solving Platform",
    desc: "Currently leading the team in SIH 2026 Round 2, developing UniSOLV—a comprehensive platform connecting citizens, government, universities, and companies to solve real-world civic problems."
  }
];

const ACCENTS = [
  { bg: 'rgba(255, 51, 0, 0.12)', text: '#FF3300', fade: 'rgba(255, 51, 0, 0.02)' },    // Orange/Red
  { bg: 'rgba(0, 60, 255, 0.1)', text: '#003CFF', fade: 'rgba(0, 60, 255, 0.02)' },   // Blue
  { bg: 'rgba(150, 190, 0, 0.15)', text: '#88AA00', fade: 'rgba(150, 190, 0, 0.02)' },  // Lime Green
  { bg: 'rgba(180, 0, 255, 0.1)', text: '#A800FF', fade: 'rgba(180, 0, 255, 0.02)' },  // Purple
  { bg: 'rgba(0, 180, 150, 0.12)', text: '#00B496', fade: 'rgba(0, 180, 150, 0.02)' },   // Teal
  { bg: 'rgba(255, 100, 0, 0.12)', text: '#FF6400', fade: 'rgba(255, 100, 0, 0.02)' }    // Bright Orange
];

export function TimelineContact() {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      {/* ── Timeline Section ─────────────────────────────────────────── */}
      <section className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111] overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[500px_1fr]">
          
          {/* Left: Timeline selector */}
          <div className="p-10 md:p-16 lg:p-24 lg:py-32 flex flex-col">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-16 lg:mb-24">
              The Journey
            </h2>
            
            <div className="flex flex-col gap-6 md:gap-8 relative before:absolute before:inset-y-0 before:left-[39px] before:w-[2px] before:bg-[#111111]/10">
              {TIMELINE.map((item, i) => {
                const isActive = activeId === i;
                const accent = ACCENTS[i % ACCENTS.length];

                return (
                  <button 
                    key={i} 
                    onClick={() => setActiveId(i)}
                    className={`group w-full relative flex items-start text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                  >
                    {/* Active Background Sweep (Starts from timeline line and fades right) */}
                    <div 
                      className={`absolute inset-y-0 left-[40px] right-0 pointer-events-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left rounded-r-2xl ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{
                        background: `linear-gradient(90deg, ${accent.bg} 0%, transparent 100%)`
                      }}
                    />

                    {/* Dot Container (Fixed Width ensures no overlap) */}
                    <div className="w-[80px] pt-[22px] shrink-0 flex justify-center relative z-10">
                      <span 
                        className={`rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isActive 
                            ? 'w-6 h-6 border-[4px] border-[#F4F3EE]' 
                            : 'w-[6px] h-[6px] bg-[#111111] group-hover:scale-150'
                        }`}
                        style={isActive ? { 
                          backgroundColor: accent.text, 
                          boxShadow: `0 0 0 2px ${accent.text}` 
                        } : {}}
                      />
                    </div>
                    
                    {/* Text Container (Slides slightly right when active) */}
                    <div 
                      className="flex flex-col py-4 pr-4 relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ transform: isActive ? 'translateX(12px)' : 'translateX(0px)' }}
                    >
                      <span 
                        className="text-xs md:text-sm font-mono font-bold uppercase tracking-widest transition-colors mb-2"
                        style={{ color: isActive ? accent.text : '#111111' }}
                      >
                        {item.year}
                      </span>
                      <span className="font-display font-bold text-2xl md:text-3xl leading-tight">
                        {item.title}
                      </span>
                      {item.subtitle && (
                        <span className={`font-mono text-xs md:text-sm mt-2 font-medium transition-colors ${isActive ? 'text-[#111111]/90' : 'text-[#111111]/70'}`}>
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Details panel */}
          <div className="lg:border-l-2 border-[#111111]/10 p-10 md:p-16 lg:p-24 lg:py-32 flex flex-col justify-center relative">
            <div className="animate-fade-in flex flex-col items-center text-center relative z-10 w-full" key={activeId}>
              
              {/* Background Typography (Massive Solid Fill, Elongated) */}
              <div 
                className="absolute top-1/2 left-1/2 pointer-events-none select-none -z-10 whitespace-nowrap text-center transition-colors duration-500"
                style={{ 
                  transform: "translate(-50%, -50%) scaleX(2.5)",
                  fontSize: "clamp(10rem, 18vw, 28rem)", 
                  fontWeight: 900, 
                  fontFamily: "var(--font-display)",
                  color: "transparent",
                  backgroundImage: `linear-gradient(135deg, ${ACCENTS[activeId % ACCENTS.length].bg} 0%, ${ACCENTS[activeId % ACCENTS.length].fade} 100%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  letterSpacing: "0.02em"
                }}
                aria-hidden="true"
              >
                {(TIMELINE[activeId].detailTitle || TIMELINE[activeId].title).toUpperCase()}
              </div>

              <div 
                className="inline-block px-6 py-2.5 md:px-8 md:py-3 mb-8 text-sm font-mono font-bold uppercase tracking-widest border-2 text-[#111111] bg-[#F4F3EE] text-center transition-colors duration-500"
                style={{ borderColor: ACCENTS[activeId % ACCENTS.length].text }}
              >
                {TIMELINE[activeId].year}
              </div>
              <h3 className="font-display font-black text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter mb-8 leading-[0.9]">
                {TIMELINE[activeId].detailTitle || TIMELINE[activeId].title}
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl font-mono font-medium leading-relaxed tracking-tight text-[#111111]/90 max-w-[40ch]">
                {TIMELINE[activeId].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Footer ───────────────────────────────────────────── */}
      <footer className="bg-[#111111] text-[#F4F3EE] border-t-2 border-[#111111]">
        <div className="max-w-[1400px] mx-auto p-10 md:p-16 lg:p-24 lg:py-40 flex flex-col items-center text-center">
          <h2 
            className="font-display font-extrabold uppercase tracking-[-0.02em] leading-[0.85] mb-10 w-full"
            style={{ fontSize: "clamp(4rem, 12vw, 12rem)" }}
          >
            Let's build
            <br />
            something.
          </h2>
          <p className="text-[#999] text-lg md:text-2xl font-medium max-w-[40ch] leading-relaxed mb-20">
            Currently open for hackathon teams, open-source collaboration, and interesting conversations.
          </p>

          <div className="w-full max-w-4xl flex flex-col gap-6">
            <a 
              href="mailto:rsangeethroshan@gmail.com"
              className="flex items-center justify-between p-6 md:p-8 border-2 border-[#333] hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors group"
            >
              <div className="flex items-center gap-6">
                <EnvelopeSimple size={32} weight="fill" />
                <span className="font-display font-bold text-xl md:text-4xl break-all">rsangeethroshan@gmail.com</span>
              </div>
              <ArrowRight size={32} weight="bold" className="opacity-0 hidden md:block group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
            </a>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://github.com/Sangeeth-Roshan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-6 md:p-8 border-2 border-[#333] hover:bg-[#F4F3EE] hover:text-[#111111] transition-colors font-bold uppercase tracking-widest text-base"
              >
                <GithubLogo size={28} weight="fill" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/rsangeethroshan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-6 md:p-8 border-2 border-[#333] hover:bg-[#003CFF] hover:border-[#003CFF] hover:text-[#F4F3EE] transition-colors font-bold uppercase tracking-widest text-base"
              >
                <LinkedinLogo size={28} weight="fill" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* ── Copyright ────────────────────────────────────────────────── */}
        <div className="border-t-2 border-[#333]">
          <div className="max-w-[1400px] mx-auto px-10 md:px-16 lg:px-24 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#666]">
            <span>© {new Date().getFullYear()} Sangeeth Roshan</span>
            <span>Designed & Built with React + GSAP</span>
          </div>
        </div>
      </footer>
    </>
  );
}
