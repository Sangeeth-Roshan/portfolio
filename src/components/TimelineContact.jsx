import { useState } from "react";
import { ArrowRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

const TIMELINE = [
  { year: "2024", title: "Class 12", desc: "Graduated from Amrita Vidyalayam (92.4%). Secured the highest marks in Computer Science, building a strong foundation in programming logic and software development." },
  { year: "2026", title: "B.Tech CSE", desc: "Joined Shiv Nadar University Chennai, specializing in Cyber Security. Deepened knowledge in foundational computer science, algorithms, and secure systems architecture." },
  { year: "2026", title: "Hackathons", desc: "Began actively competing in hackathons. Qualified for Round 2 of the Smart India Hackathon 2026 during freshman year, collaborating with a tight-knit technical team." },
  { year: "2026", title: "Projects", desc: "Designed and shipped multiple full-stack and AI projects including UniSolV, AntiDROP, UNIPECT, and LibSYNC, focusing on real-world impact and scalable architecture." },
  { year: "Now", title: "Cybersecurity", desc: "Actively exploring offensive security, CTF challenges, Web Reconnaissance, and Linux Tooling. Preparing for industry certifications and diving into Active Directory exploits." },
];

export function TimelineContact() {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      {/* ── Timeline Section ─────────────────────────────────────────── */}
      <section className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111]">
        <div className="max-w-[1400px] mx-auto p-10 md:p-16 lg:p-24 lg:py-32">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-16 lg:mb-24">
            The Journey
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 min-h-[400px]">
            {/* Left: Timeline selector */}
            <div className="flex flex-col gap-6 md:gap-8 lg:w-[400px] shrink-0 relative before:absolute before:inset-y-0 before:left-[39px] before:w-[2px] before:bg-[#111111]/10">
              {TIMELINE.map((item, i) => {
                const isActive = activeId === i;
                return (
                  <button 
                    key={i} 
                    onClick={() => setActiveId(i)}
                    className={`group w-full flex items-start text-left transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                  >
                    {/* Dot Container (Fixed Width ensures no overlap) */}
                    <div className="w-[80px] pt-[22px] shrink-0 flex justify-center relative z-10">
                      <span 
                        className={`rounded-full transition-all duration-300 ${
                          isActive 
                            ? 'w-6 h-6 bg-[#FF3300] border-[4px] border-[#F4F3EE] shadow-[0_0_0_2px_#FF3300]' 
                            : 'w-[6px] h-[6px] bg-[#111111] group-hover:scale-150'
                        }`} 
                      />
                    </div>
                    
                    {/* Text Container */}
                    <div className="flex flex-col py-4 pr-4">
                      <span className={`text-xs md:text-sm font-mono font-bold uppercase tracking-widest transition-colors mb-2 ${isActive ? 'text-[#FF3300]' : 'text-[#111111]'}`}>
                        {item.year}
                      </span>
                      <span className="font-display font-bold text-2xl md:text-3xl leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Details panel */}
            <div className="flex-1 lg:pl-16 lg:border-l-2 border-[#111111]/10 flex flex-col justify-center mt-12 lg:mt-0">
              <div className="animate-fade-in" key={activeId}>
                <div className="inline-block px-4 py-1.5 mb-8 text-sm font-mono font-bold uppercase tracking-widest border-2 border-[#111111] text-[#111111]">
                  {TIMELINE[activeId].year}
                </div>
                <h3 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-[0.95]">
                  {TIMELINE[activeId].title}
                </h3>
                <p className="text-lg md:text-xl lg:text-2xl font-mono font-medium leading-relaxed tracking-tight text-[#111111]/90 max-w-[40ch]">
                  {TIMELINE[activeId].desc}
                </p>
              </div>
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
