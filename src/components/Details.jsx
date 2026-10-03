export function Details() {
  return (
    <section className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* ── Achievements ──────────────────────────────────────────────── */}
        <div className="p-10 md:p-16 lg:p-24 lg:py-32 border-b-2 md:border-b-0 md:border-r-2 border-[#111111]">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-16">
            Achievements
          </h2>
          <ul className="flex flex-col gap-8">
            {[
              "Smart India Hackathon 2026: Round 2 qualifier (freshman year)",
              "SNUC Internal Hackathon 2026",
              "Asia Book of Records: largest electronic keyboard ensemble",
              "AVMUN'25 (AIPPM): delegate representing M.K. Stalin, 2nd highest commendation",
              "Highest marks in Computer Science, Class 11",
              "Multiple school trophies in football and badminton"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 mt-2.5 w-1.5 h-1.5 bg-[#FF3300]" />
                <span className="flex-1 text-base md:text-lg font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Leadership ────────────────────────────────────────────────── */}
        <div className="p-10 md:p-16 lg:p-24 lg:py-32 border-b-2 border-[#111111]">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-16">
            Leadership
          </h2>
          <ul className="flex flex-col gap-8">
            {[
              "Assistant Sports Secretary, student council member, class leader",
              "Technical and team contributions in college hackathon teams",
              "Represented class, school and teams in cultural, sports, MUN and hackathon settings"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="shrink-0 mt-2.5 w-1.5 h-1.5 bg-[#003CFF]" />
                <span className="flex-1 text-base md:text-lg font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Cybersecurity ─────────────────────────────────────────────── */}
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

        {/* ── Beyond Code ───────────────────────────────────────────────── */}
        <div className="p-10 md:p-16 lg:p-24 lg:py-32 flex flex-col gap-16">
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl uppercase tracking-[-0.02em] mb-16">
              Beyond Code
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                "Football", "Badminton", "School Dramas", "Cultural Events",
                "Keyboard / Music", "MUN", "Team Branding", "Hackathon Logos", "Video Concepts"
              ].map((item, i) => (
                <span key={i} className="px-5 py-3 text-sm md:text-base font-mono font-bold uppercase border-2 border-[#111111] hover:bg-[#FF1F6E] hover:text-[#F4F3EE] hover:border-[#FF1F6E] transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
