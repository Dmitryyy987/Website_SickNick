import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep-dive into your business goals, audience, and existing tech landscape to define a clear strategy.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Map the architecture, define milestones, and align every decision with your growth objectives.",
  },
  {
    number: "03",
    title: "Design",
    description: "Craft pixel-perfect interfaces that balance editorial beauty with conversion-focused UX patterns.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Build with production-grade code — performant, tested, and ready to scale from day one.",
  },
  {
    number: "05",
    title: "Launch & Grow",
    description: "Deploy, monitor, and iterate. We stay with you post-launch to optimize and extend functionality.",
  },
];

export default function ProcessSteps() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".process-header",
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        }
      );

      // Steps stagger
      gsap.fromTo(
        ".process-step",
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".process-step", start: "top 90%", once: true },
        }
      );

      // Animated progress line
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-space relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      <div className="container-wide relative z-10">
        <div className="process-header mb-12 md:mb-16" style={{ opacity: 0 }}>
          <span className="label-accent mb-4 block">How We Work</span>
          <h2 className="heading-lg text-[var(--text)] max-w-2xl">
            A proven process,{" "}
            <span className="gradient-text">refined over 40+ projects.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-[2rem] top-0 bottom-0 w-[1px] bg-white/[0.04]">
            <div
              ref={timelineRef}
              className="absolute top-0 left-0 w-full h-full origin-top"
              style={{
                background: "linear-gradient(to bottom, var(--accent), var(--accent-secondary))",
                transformOrigin: "top",
              }}
            />
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-step group grid grid-cols-12 gap-4 md:gap-8 md:pl-20 relative"
                style={{ opacity: 0 }}
              >
                {/* Dot on timeline */}
                <div className="hidden md:flex absolute left-[2rem] top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--bg)] border-2 border-white/10 group-hover:border-[var(--accent)] transition-colors duration-500 z-10" />

                {/* Number + Title */}
                <div className="col-span-12 md:col-span-4">
                  <span className="label text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-500 block mb-2">
                    {step.number}
                  </span>
                  <h3 className="heading-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-500">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-7 md:col-start-6">
                  <p className="body-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
