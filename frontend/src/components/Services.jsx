import { useEffect, useRef } from "react";
import { Monitor, Smartphone, ShoppingCart, Cpu, Layers, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Monitor,
    number: "01",
    title: "Web Platforms",
    summary: "High-performance web applications built for scale",
    description:
      "Full-stack SaaS platforms, marketing sites, and data-dense dashboards. SEO-optimized, blazing fast, and architected for millions of users.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Mobile Architecture",
    summary: "Cross-platform experiences with native performance",
    description:
      "React Native and Flutter applications backed by low-latency APIs. Fluid animations, offline-first architecture, and seamless deployment pipelines.",
  },
  {
    icon: ShoppingCart,
    number: "03",
    title: "Digital Commerce",
    summary: "Conversion-optimized storefronts that sell",
    description:
      "Custom e-commerce platforms with instant checkout flows, dynamic pricing engines, and enterprise-grade CMS integration for maximum revenue.",
  },
  {
    icon: Cpu,
    number: "04",
    title: "AI Integrations",
    summary: "Intelligent automation that eliminates manual work",
    description:
      "Custom LLM pipelines, retrieval-augmented generation workflows, and ML-driven features woven directly into your product experience.",
  },
  {
    icon: Layers,
    number: "05",
    title: "UI Engineering",
    summary: "Pixel-perfect design systems at any scale",
    description:
      "Bespoke component libraries, exhaustive design tokens, and production-grade UI kits crafted for $10K+ tier visual precision.",
  },
  {
    icon: Shield,
    number: "06",
    title: "Ongoing Ops",
    summary: "Enterprise maintenance and security hardening",
    description:
      "24/7 monitoring, database optimization, security audits, CI/CD pipeline management, and rapid incident response for mission-critical platforms.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".services-header",
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        }
      );

      // Service items stagger
      gsap.fromTo(
        ".service-row",
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".service-row", start: "top 90%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="section-space relative overflow-hidden"
    >
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,149,255,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="services-header mb-12 md:mb-16 max-w-3xl" style={{ opacity: 0 }}>
          <span className="label-accent mb-4 block">What We Do</span>
          <h2 className="heading-lg text-[var(--text)] mb-6">
            Engineering that delivers{" "}
            <span className="gradient-text">measurable results.</span>
          </h2>
          <p className="body-lg max-w-2xl">
            From deep-stack database architecture to micro-interaction polish.
            Every sprint executed with obsessive technical precision.
          </p>
        </div>

        {/* Service Rows — editorial split layout */}
        <div className="flex flex-col">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="service-row group relative py-8 md:py-10 border-t border-white/[0.04] first:border-t-0 cursor-default"
                style={{ opacity: 0 }}
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="label text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Title + Icon */}
                  <div className="col-span-10 md:col-span-4 flex items-center gap-4">
                    <Icon className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-500 flex-shrink-0" />
                    <h3 className="heading-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>

                  {/* Summary — visible always */}
                  <div className="col-span-12 md:col-span-4 md:col-start-6 mt-2 md:mt-0">
                    <p className="body-base text-[var(--text-secondary)]">
                      {service.summary}
                    </p>
                  </div>

                  {/* Description — shown on hover (desktop) */}
                  <div className="col-span-12 md:col-span-3 md:col-start-10 mt-2 md:mt-0">
                    <p className="text-sm text-[var(--muted)] md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Hover surface shift */}
                <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -mx-4 px-4 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
