import { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = {
  cartonize: {
    title: "Cartonize",
    tagline: "Scalable B2B e-commerce platform for customized packaging solutions.",
    overview:
      "Cartonize required a comprehensive enterprise procurement portal that could handle complex packaging configurations, real-time pricing, and automated vendor coordination — all while maintaining an intuitive user experience that reduced friction in the B2B buying process.",
    problem:
      "Businesses struggled with fragmented workflows, slow manual quoting, and lack of real-time pricing when configuring complex packaging orders. The existing system required 48-hour turnaround for quotes, leading to lost deals.",
    solution:
      "We built a dynamic 3D product configurator with instant algorithmic pricing, automated vendor routing, and a streamlined checkout flow designed specifically for enterprise procurement teams.",
    features: [
      "Dynamic 3D product visualization with real-time customization",
      "Algorithmic cost estimation with instant quotes",
      "Automated vendor dispatch and order routing",
      "Enterprise-grade payment processing via Stripe",
      "Multi-tenant admin dashboard for vendor management",
      "Advanced analytics and reporting suite",
    ],
    tech: ["Next.js", "TypeScript", "Stripe", "Three.js", "Tailwind CSS", "PostgreSQL"],
    results: [
      { metric: "80%", label: "Faster Quoting" },
      { metric: "45%", label: "Higher Conversion" },
      { metric: "3x", label: "Order Volume" },
    ],
    link: "https://cartonize.vercel.app/",
    color: "#8b95ff",
  },
  "gen-ai-engineer": {
    title: "Gen-AI Engineer",
    tagline: "Interactive technical showcase for enterprise-grade AI automation.",
    overview:
      "Enterprise clients needed a way to experience the full power of the AI automation suite before committing. Static documentation wasn't cutting it — they needed hands-on interaction with real AI workflows.",
    problem:
      "Complex AI capabilities and prompt pipelines were difficult to demonstrate through static documentation, significantly slowing down enterprise sales cycles and losing deals to competitors with interactive demos.",
    solution:
      "We built a robust, interactive sandbox environment allowing prospective enterprise clients to test custom prompt workflows and view real-time streaming AI responses directly from the browser.",
    features: [
      "Interactive multi-language code playgrounds",
      "Low-latency streaming AI responses",
      "Dynamic data-flow visualization",
      "Role-based access controls for enterprise sandboxing",
      "Usage analytics and engagement tracking",
      "Custom prompt template builder",
    ],
    tech: ["React", "Node.js", "Vercel AI SDK", "OpenAI API", "WebSocket", "Redis"],
    results: [
      { metric: "3wk", label: "Shorter Sales Cycle" },
      { metric: "60%", label: "Self-Serve Demos" },
      { metric: "2x", label: "Enterprise Leads" },
    ],
    link: "https://gen-ai.engineer/",
    color: "#c57eff",
  },
  brainwave: {
    title: "Brainwave",
    tagline: "Physics-driven immersive marketing experience for next-gen AI.",
    overview:
      "Brainwave's product capabilities needed a visual identity that felt futuristic and genuinely differentiated from the sea of generic SaaS landing pages. The goal was to create an immersive experience that made visitors feel the future.",
    problem:
      "The product's advanced capabilities needed a visual identity that felt futuristic and distinguished it from generic, template-driven SaaS platforms. Standard landing pages couldn't communicate the innovation.",
    solution:
      "We implemented a heavily animated, WebGL-enhanced experience using custom shaders, scroll-hijacking, and physics-based micro-interactions to create a cinematic feel that won industry recognition.",
    features: [
      "Custom WebGL shaders and 3D particle systems",
      "Complex scroll-triggered animation choreography",
      "Performant 60fps rendering across all devices",
      "Fluid layout transition sequences",
      "Immersive audio-visual interactions",
      "Responsive design with graceful degradation",
    ],
    tech: ["React", "GSAP", "Three.js", "Framer Motion", "WebGL", "Vercel"],
    results: [
      { metric: "65%", label: "Waitlist Increase" },
      { metric: "3", label: "Design Awards" },
      { metric: "12s", label: "Avg. Time on Page" },
    ],
    link: "https://ai-landing-page.netlify.app/",
    color: "#8b95ff",
  },
};

const slugs = Object.keys(projectsData);

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const project = projectsData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!pageRef.current || !project) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pd-hero-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );

      // Section reveals
      gsap.utils.toArray(".pd-section").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 25 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });

      // Results counter animation
      gsap.utils.toArray(".result-metric").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.8 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, [project, slug]);

  if (!project) {
    return (
      <section className="section-space flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="heading-lg text-[var(--text)] mb-4">Project Not Found</h1>
          <p className="body-base mb-8">The project you're looking for doesn't exist.</p>
          <button onClick={() => navigate("/")} className="btn-primary">
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    );
  }

  const currentIndex = slugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <div ref={pageRef}>
      {/* ─── 1. Hero ─── */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)`,
            filter: "blur(80px)",
            transform: "translate(20%, -30%)",
          }}
        />
        <div className="container-wide relative z-10">
          <div className="pd-hero-content max-w-4xl" style={{ opacity: 0 }}>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </button>

            <span className="label-accent block mb-4">Case Study</span>
            <h1 className="heading-xl text-[var(--text)] mb-6">{project.title}</h1>
            <p className="heading-sm text-[var(--text-secondary)] font-normal max-w-2xl mb-8">
              {project.tagline}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Visit Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. Overview ─── */}
      <section className="pd-section section-space" style={{ opacity: 0, background: "var(--surface)" }}>
        <div className="container-wide">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="label-accent block mb-4">Overview</span>
              <h2 className="heading-md text-[var(--text)]">The Vision</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="body-lg">{project.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Problem vs Solution ─── */}
      <section className="pd-section section-space" style={{ opacity: 0 }}>
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <span className="label">The Problem</span>
              </div>
              <p className="body-lg">{project.problem}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                <span className="label">Our Solution</span>
              </div>
              <p className="body-lg">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Features ─── */}
      <section className="pd-section section-space" style={{ opacity: 0, background: "var(--surface)" }}>
        <div className="container-wide">
          <span className="label-accent block mb-4">Key Features</span>
          <h2 className="heading-md text-[var(--text)] mb-8 max-w-xl">
            What we built
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="group py-6 border-t border-white/[0.04] hover:border-white/[0.08] transition-colors"
              >
                <span className="label text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors block mb-3">
                  0{i + 1}
                </span>
                <p className="text-base text-[var(--text)] font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. Tech Stack ─── */}
      <section className="pd-section py-12 md:py-16" style={{ opacity: 0 }}>
        <div className="container-wide">
          <span className="label-accent block mb-8">Technology Stack</span>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-5 py-2.5 text-sm font-medium text-[var(--text)] bg-white/[0.03] rounded-full hover:bg-white/[0.06] transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Results ─── */}
      <section className="pd-section section-space" style={{ opacity: 0, background: "var(--surface)" }}>
        <div className="container-wide">
          <span className="label-accent block mb-4">Impact</span>
          <h2 className="heading-md text-[var(--text)] mb-12 max-w-xl">
            Measurable results that matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {project.results.map((r, i) => (
              <div key={i} className="result-metric text-center md:text-left" style={{ opacity: 0 }}>
                <span
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em]"
                  style={{ color: project.color }}
                >
                  {r.metric}
                </span>
                <p className="label mt-3">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. Project Navigation ─── */}
      <section className="py-12 md:py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {prevSlug ? (
              <Link
                to={`/project/${prevSlug}`}
                className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">Previous Project</span>
              </Link>
            ) : (
              <div />
            )}

            {nextSlug ? (
              <Link
                to={`/project/${nextSlug}`}
                className="group flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
              >
                <span className="text-sm font-medium">Next Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* ─── 8. Final CTA ─── */}
      <section className="pd-section section-space" style={{ opacity: 0, background: "var(--surface)" }}>
        <div className="container-wide text-center">
          <h2 className="heading-lg text-[var(--text)] mb-6">
            Want similar results?
          </h2>
          <p className="body-lg max-w-xl mx-auto mb-8">
            Let's discuss how we can build something exceptional for your brand.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="btn-primary text-base px-10 py-5"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
