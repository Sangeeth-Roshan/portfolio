import { PROJECTS } from "../config/projects";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";

const getWatermarkStyle = (id, accent) => {
  let layout = {};

  switch(id) {
    case 'antidrop':
      // ANTI_DROP: enormous diagonal/slightly rotated wordmark
      layout = {
        left: "45%", 
        top: "40%",
        transform: "translateY(-50%) rotate(-10deg)",
        fontSize: "clamp(12rem, 16vw, 22rem)",
        letterSpacing: "-0.04em",
      };
      break;
    case 'unipect':
      // UNIPECT: enormous horizontal wordmark, partially cropped
      layout = {
        left: "50%",
        top: "55%",
        transform: "translateY(-50%)",
        fontSize: "clamp(14rem, 20vw, 26rem)",
        letterSpacing: "-0.06em",
      };
      break;
    case 'sros':
      // SR.OS: oversized wordmark positioned lower/right
      layout = {
        left: "55%",
        bottom: "-10%",
        fontSize: "clamp(12rem, 18vw, 24rem)",
        letterSpacing: "-0.08em",
      };
      break;
    case 'libsync':
      // LIBSYNC: oversized wordmark extending beyond the right edge
      layout = {
        left: "40%",
        top: "45%",
        transform: "translateY(-50%)",
        fontSize: "clamp(15rem, 22vw, 28rem)",
        letterSpacing: "0.01em",
      };
      break;
    case 'unisolv':
      layout = {
        left: "45%",
        top: "15%",
        fontSize: "clamp(14rem, 20vw, 26rem)",
        letterSpacing: "-0.05em",
      };
      break;
    default:
      layout = {
        left: "55%",
        top: "50%",
        transform: "translateY(-50%) rotate(90deg)",
        transformOrigin: "center left",
        fontSize: "clamp(12rem, 16vw, 22rem)",
        letterSpacing: "0.02em",
      };
  }

  // 12% opacity black mixed with a 25% tint of the accent color for a sophisticated editorial watermark
  const gradient = `linear-gradient(135deg, rgba(17,17,17,0.12) 0%, color-mix(in srgb, ${accent} 25%, rgba(17,17,17,0.05)) 100%)`;

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
    // Slight fade out towards the right edge
    WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0.1) 90%)",
    maskImage: "linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0.1) 90%)",
  };
};

export function Projects() {
  return (
    <section id="projects" className="bg-[#F4F3EE] text-[#111111] border-t-2 border-[#111111] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* ── Section Header ───────────────────────────────────────────── */}
        <div className="px-6 md:px-16 py-20 md:py-32 border-b-2 border-[#111111] bg-[#F4F3EE] relative z-20">
          <h2
            className="font-display font-extrabold tracking-tight uppercase leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Featured
            <br />
            Projects
          </h2>
        </div>

        {/* ── Projects Grid ────────────────────────────────────────────── */}
        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`
                group relative grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] 
                gap-12 lg:gap-24 px-6 md:px-16 py-20 md:py-32 
                border-b-2 border-[#111111] transition-colors duration-300
              `}
            >
              {/* Background Wordmark */}
              <div style={getWatermarkStyle(project.id, project.accent)} aria-hidden="true">
                {project.title}
              </div>

              {/* Left col: Title & Context */}
              <div className="flex flex-col items-start relative z-10">
                <div 
                  className="px-4 py-1.5 mb-8 text-xs font-mono font-bold uppercase border-2 border-[#111111]"
                  style={{ backgroundColor: project.accent, color: '#111111' }}
                >
                  {String(i + 1).padStart(2, "0")} / {project.context}
                </div>
                <h3 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] uppercase leading-[0.95]">
                  {project.title}
                </h3>
              </div>

              {/* Middle col: Description & Features */}
              <div className="flex flex-col gap-10 mt-2 lg:mt-0 relative z-10">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                  {project.description}
                </p>
                
                {project.features.length > 0 && (
                  <ul className="flex flex-col gap-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-base md:text-lg font-medium">
                        <span className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-[#111111]" />
                        <span className="flex-1 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {project.role && (
                  <p className="text-sm md:text-base font-mono font-bold mt-4">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
