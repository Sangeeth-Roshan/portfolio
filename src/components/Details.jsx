import { CaretRight, SoccerBall, FilmStrip, MusicNotes, Camera, PersonSimpleRun } from "@phosphor-icons/react";

export function Details() {
  return (
    <section className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111] flex flex-col overflow-hidden">
      {/* ── ROW 1 ────────────────────────────────────────────────────── */}
      <div className="w-full border-b-2 border-[#111111]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Achievements */}
          <div className="p-10 md:p-16 lg:p-24 lg:py-32 border-b-2 md:border-b-0 md:border-r-2 border-[#111111]">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-16">
              Achievements
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Smart India Hackathon 2026: Round 2 qualifier (freshman year)",
                "SNUC Internal Hackathon 2026",
                "Asia Book of Records: largest electronic keyboard ensemble",
                "AVMUN'25 (AIPPM): delegate representing M.K. Stalin, 2nd highest commendation",
                "Highest marks in Computer Science, Class 11",
                "Multiple school trophies in football and badminton"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CaretRight size={20} weight="bold" className="shrink-0 text-[#FF3300] mt-0.5" />
                  <span className="flex-1 text-base md:text-lg font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Leadership */}
          <div className="p-10 md:p-16 lg:p-24 lg:py-32">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-16">
              Leadership
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Assistant Sports Secretary, student council member, class leader",
                "Technical and team contributions in college hackathon teams",
                "Represented class, school and teams in cultural, sports, MUN and hackathon settings"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CaretRight size={20} weight="bold" className="shrink-0 text-[#003CFF] mt-0.5" />
                  <span className="flex-1 text-base md:text-lg font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── ROW 2 ────────────────────────────────────────────────────── */}
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Cybersecurity */}
          <div className="p-10 md:p-16 lg:p-24 lg:py-32 border-b-2 md:border-b-0 md:border-r-2 border-[#111111] bg-[#111111] text-[#F4F3EE]">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-4">
              Cybersecurity
            </h2>
            <p className="font-mono text-sm text-[#C8FF00] uppercase tracking-widest mb-12">
              [ Currently Exploring ]
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                "Kali Linux", "TryHackMe", "CTF practice", "Web Reconnaissance", 
                "Subdomain Enumeration (ffuf)", "Linux Security Tooling", "Active Directory"
              ].map((skill, i) => (
                <span key={i} className="px-4 py-2 text-sm font-mono font-medium border border-[#333] bg-[#222]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Life Beyond Code */}
          <div className="p-10 md:p-16 lg:p-24 lg:py-32 flex flex-col gap-16 relative z-0">
            
            {/* Background bleed container */}
            <div className="absolute inset-0 md:-right-[50vw] bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC] z-0 overflow-hidden flex flex-col justify-center">
              
              {/* Marquee Vectors (Directly in background, single row) */}
              <div className="flex w-max animate-marquee opacity-[0.12]" style={{ animationDuration: '40s' }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex gap-24 pr-24 items-center text-[#111111]">
                    <SoccerBall size={140} weight="duotone" />
                    <MusicNotes size={140} weight="duotone" />
                    <FilmStrip size={140} weight="duotone" />
                    <Camera size={140} weight="duotone" />
                    <PersonSimpleRun size={140} weight="duotone" />
                  </div>
                ))}
              </div>

              {/* Abstract decorative blobs */}
              <div className="absolute top-0 right-[25vw] w-64 h-64 bg-[#FF9A9E] opacity-30 blur-3xl rounded-full mix-blend-multiply pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#a18cd1] opacity-30 blur-3xl rounded-full mix-blend-multiply pointer-events-none transform -translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold italic mb-16 text-[#111111]" style={{ fontFamily: '"Cormorant Garamond", serif', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                Life Beyond Code
              </h2>
              <div className="flex flex-wrap lg:justify-center gap-4">
                {[
                  "Football", "Badminton", "Athletics", "School Dramas", "Cultural Events",
                  "Keyboard / Music", "MUN", "Public Speaking", "Video Editing"
                ].map((item, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-3 text-sm md:text-base font-mono font-bold uppercase border border-white/50 bg-white/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:bg-white/80 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all cursor-default text-[#111111] rounded-xl"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
