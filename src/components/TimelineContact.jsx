import { ArrowRight, GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

const TIMELINE = [
  { year: "2024", title: "Class 12", desc: "Amrita Vidyalayam (92.4%). Highest marks in CS." },
  { year: "2026", title: "B.Tech CSE", desc: "Joined Shiv Nadar University Chennai (Cyber Security spec)." },
  { year: "2026", title: "Hackathons", desc: "Started competing. SIH 2026 Round 2 qualifier." },
  { year: "2026", title: "Projects", desc: "Shipped UniSOLV, AntiDROP, UNIPECT & LibSync." },
  { year: "Now", title: "Cybersecurity", desc: "Exploring CTFs, Kali Linux, and active directory." },
];

export function TimelineContact() {
  return (
    <>
      {/* ── Timeline Section ─────────────────────────────────────────── */}
      <section className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111]">
        <div className="max-w-[1400px] mx-auto p-10 md:p-16 lg:p-24 lg:py-32">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-24">
            The Journey
          </h2>
          <div className="max-w-3xl flex flex-col gap-16 relative before:absolute before:inset-y-0 before:left-[3px] before:w-px before:bg-[#111111]">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#FF3300]" />
                <span className="text-xs font-mono font-bold uppercase text-[#FF3300] tracking-widest">
                  {item.year}
                </span>
                <h3 className="font-display font-bold text-xl md:text-3xl mt-3 mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg font-medium leading-relaxed max-w-[40ch]">
                  {item.desc}
                </p>
              </div>
            ))}
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
