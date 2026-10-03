import { PROJECTS } from "../config/projects";
import { ArrowUpRight, GithubLogo, CaretRight } from "@phosphor-icons/react";

const getWatermarkStyle = (id, accent) => {
  let layout = {};

  switch(id) {
    case 'antidrop':
      // AntiDROP: massive horizontal
      layout = {
        right: "-10%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(10rem, 18vw, 22rem)",
        letterSpacing: "-0.02em",
      };
      break;
    case 'unipect':
      // UNIPECT: massive horizontal
      layout = {
        right: "-10%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(12rem, 20vw, 26rem)",
        letterSpacing: "-0.04em",
      };
      break;
    case 'libsync':
      // LibSync: massive horizontal
      layout = {
        right: "-10%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(12rem, 20vw, 26rem)",
        letterSpacing: "-0.02em",
      };
      break;
    case 'unisolv':
      // UniSOLV: massive horizontal
      layout = {
        right: "-10%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(12rem, 20vw, 26rem)",
        letterSpacing: "-0.03em",
      };
      break;
    default:
      layout = {
        right: "-10%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(12rem, 20vw, 26rem)",
      };
  }

  // 15% opacity black mixed with a 25% tint of the accent color for a sophisticated editorial watermark
  const gradient = `linear-gradient(135deg, rgba(17,17,17,0.15) 0%, color-mix(in srgb, ${accent} 25%, rgba(17,17,17,0.06)) 100%)`;

  return {
    ...layout,
    position: "absolute",
    zIndex: 0,
    pointerEvents: "none",
    userSelect: "none",
    whiteSpace: "nowrap",
    fontWeight: 900,
    fontFamily: "var(--font-display)",
    color: "transparent",
    background: gradient,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  };
};

export function Projects() {
  return (
    <section id="projects" className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111] relative">
      
      {/* ── Section Header ───────────────────────────────────────────── */}
      <div className="border-b-2 border-[#111111] bg-[#F4F3EE] relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-20 md:py-32">
          <h2
            className="font-display font-extrabold tracking-tight uppercase leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Featured
            <br />
            Projects
          </h2>
        </div>
      </div>

      {/* ── Projects Grid ────────────────────────────────────────────── */}
      <div className="flex flex-col relative z-10">
        {PROJECTS.map((project, i) => (
          <article
            key={project.id}
            className="group relative overflow-hidden border-b-2 border-[#111111] transition-colors duration-300"
          >
            <div className="max-w-[1400px] mx-auto relative w-full h-full">
              
              {/* Background Wordmark */}
              <div style={getWatermarkStyle(project.id, project.accent)} aria-hidden="true">
                {project.title}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-12 lg:gap-24 px-6 md:px-16 py-16 md:py-24">
                {/* Left col: Title & Context */}
                <div className="flex flex-col items-start relative z-10">
                  <div 
                    className="px-4 py-1.5 mb-8 text-xs font-mono font-bold uppercase border-2 border-[#111111]"
                    style={{ backgroundColor: project.accent, color: '#111111' }}
                  >
                    {String(i + 1).padStart(2, "0")} / {project.context}
                  </div>
                  <h3 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] uppercase leading-[0.95]">
                    {project.title}
                  </h3>
                </div>

                {/* Middle col: Description & Features */}
                <div className="flex flex-col gap-6 mt-2 lg:mt-0 relative z-10">
                  <p className="text-xl md:text-2xl font-medium leading-snug">
                    {project.description}
                  </p>
                  
                  {project.features.length > 0 && (
                    <ul className="flex flex-col gap-1.5">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base md:text-lg font-mono font-medium text-[#111111]/90">
                          <CaretRight size={20} weight="bold" className="shrink-0 mt-0.5 text-[#111111]" />
                          <span className="flex-1 leading-snug tracking-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {project.role && (
                    <p className="text-base md:text-lg font-mono font-bold mt-2">
                      Role: {project.role}
                    </p>
                  )}
                </div>

                {/* Right col: Tags & Links */}
                <div className="flex flex-col lg:items-end justify-between gap-8 lg:gap-0 mt-4 lg:mt-0 relative z-10">
                  <div className="flex flex-wrap lg:justify-end gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 text-xs font-mono font-bold uppercase border border-[#111111]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 self-start lg:self-end px-5 py-3 
                        bg-[#111111] text-[#F4F3EE] font-bold text-sm uppercase tracking-wide
                        hover:bg-[#333] transition-colors
                      "
                    >
                      <GithubLogo size={20} weight="fill" />
                      View Repo
                      <ArrowUpRight size={16} weight="bold" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
