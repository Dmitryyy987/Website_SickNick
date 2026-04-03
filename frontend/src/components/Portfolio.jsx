import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: "cartonize",
    title: "Cartonize",
    tagline: "B2B e-commerce platform for custom packaging at scale",
    problem: "Fragmented workflows and manual quoting slowing enterprise procurement",
    result: "80% faster quoting, 45% higher conversion",
    tech: ["Next.js", "TypeScript", "Stripe", "Three.js"],
    color: "#8b95ff",
    link: "https://cartonize.vercel.app/",
  },
  {
    slug: "gen-ai-engineer",
    title: "Gen-AI Engineer",
    tagline: "Interactive showcase for enterprise AI automation",
    problem: "Complex AI capabilities impossible to demo through static docs",
    result: "Sales cycle shortened by 3 weeks",
    tech: ["React", "Node.js", "Vercel AI SDK", "OpenAI"],
    color: "#c57eff",
    link: "https://gen-ai.engineer/",
  },
  {
    slug: "brainwave",
    title: "Brainwave",
    tagline: "Physics-driven marketing experience for next-gen AI",
    problem: "Needed a visual identity distinct from generic SaaS templates",
    result: "65% waitlist increase, 3 design awards",
    tech: ["React", "GSAP", "Three.js", "Framer Motion"],
    color: "#8b95ff",
    link: "https://ai-landing-page.netlify.app/",
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-header",
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        }
      );

      gsap.utils.toArray(".project-block").forEach((block, i) => {
        gsap.fromTo(
          block,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section-space relative overflow-hidden"
    >
      <div className="container-wide relative z-10">
        <div className="portfolio-header mb-12 md:mb-16" style={{ opacity: 0 }}>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <span className="label-accent mb-4 block">Selected Work</span>
              <h2 className="heading-lg text-[var(--text)]">
                Projects that{" "}
                <span className="gradient-text">speak for themselves.</span>
              </h2>
            </div>
            <div className="md:text-right">
              <p className="body-base max-w-md md:ml-auto">
                We architect scalable solutions that solve complex bottlenecks and
                drive measurable business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Project Blocks */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.slug}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-block group relative block rounded-2xl overflow-hidden cursor-pointer"
              style={{
                opacity: 0,
                background: `linear-gradient(135deg, var(--surface-elevated), var(--surface))`,
              }}
            >
              <div className="relative z-10 p-6 md:p-10 lg:p-12">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left: Title & Tagline */}
                  <div className={`md:col-span-7 ${index % 2 !== 0 ? "md:order-2 md:col-start-6" : ""}`}>
                    <span className="label mb-4 block">0{index + 1}</span>
                    <h3 className="heading-md text-[var(--text)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="body-lg mb-8 max-w-lg">{project.tagline}</p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-medium text-[var(--text-secondary)] bg-white/[0.04] rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Result */}
                    <div className="inline-flex items-center gap-3">
                      <div className="w-1 h-8 rounded-full" style={{ background: project.color }} />
                      <div>
                        <span className="label block mb-1">Impact</span>
                        <span className="text-base font-semibold text-[var(--text)]">
                          {project.result}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Problem & CTA */}
                  <div className={`md:col-span-5 flex flex-col justify-between h-full ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                    <div>
                      <span className="label mb-3 block">The Challenge</span>
                      <p className="body-base">{project.problem}</p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-500">
                      <span className="text-sm font-semibold">View Project</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent 50%)`,
                }}
              />

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
