import { useState } from "react";
import { PROJECTS } from "../config/projects";
import { ArrowUpRight, GithubLogo, CaretRight, CaretDown } from "@phosphor-icons/react";

const getWatermarkStyle = (id, accent) => {
  let layout = {};

  switch(id) {
    case 'antidrop':
      // AntiDROP: extremely massive, displaced right
      layout = {
        right: "-35%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(20rem, 35vw, 50rem)",
        letterSpacing: "-0.02em",
      };
      break;
    case 'unipect':
      // UNIPECT: massive horizontal, highly readable
      layout = {
        right: "-15%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(14rem, 24vw, 32rem)",
        letterSpacing: "-0.04em",
      };
      break;
    case 'libsync':
      // LibSync: massive horizontal, highly readable
      layout = {
        right: "-15%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(14rem, 24vw, 32rem)",
        letterSpacing: "-0.02em",
      };
      break;
    case 'unisolv':
      // UniSOLV: hyper massive, pulled slightly left
      layout = {
        right: "-25%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "clamp(22rem, 38vw, 55rem)",
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="projects" className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111] relative flex flex-col">
      
      {/* ── Full-width Toggle Header ─────────────────────────────────── */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className="group relative w-full flex items-center justify-between p-10 md:p-16 lg:p-24 lg:py-16 text-left border-b-2 border-[#111111] overflow-hidden bg-[#F4F3EE] z-20"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003CFF] via-[#A800FF] to-[#FF1F6E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0" />
        
        <h2 className="relative z-10 font-display font-extrabold text-4xl md:text-5xl lg:text-7xl uppercase tracking-[-0.02em] text-[#111111] group-hover:text-white transition-colors duration-500">
          Featured Projects
        </h2>
        <div className="relative z-10 flex items-center gap-4 md:gap-6">
          <span className="hidden md:inline-flex items-center text-sm md:text-base font-mono font-bold uppercase tracking-widest text-[#111111] group-hover:text-white transition-all duration-500">
            {isOpen ? 'Close Section' : 'Click to view more'}
          </span>
          <span
            className="shrink-0 w-12 h-12 md:w-16 md:h-16 border-2 border-[#111111] group-hover:border-white text-[#111111] group-hover:text-white rounded-full flex items-center justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <CaretDown size={32} weight="bold" />
          </span>
        </div>
      </button>

      {/* ── Collapsible Grid Body ───────────────────────────────────── */}
      <div
        className="grid transition-[grid-template-rows] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-10"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
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
                  <h3 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[0.95]">
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
        </div>
      </div>
    </section>
  );
}
