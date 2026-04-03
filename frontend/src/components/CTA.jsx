import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-space relative overflow-hidden"
    >
      {/* Background gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(139,149,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 30% 20%, rgba(197,126,255,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="cta-content text-center max-w-3xl mx-auto" style={{ opacity: 0 }}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] shadow-[0_0_8px_var(--success)] animate-pulse" />
            <span className="label">Currently Accepting Projects</span>
          </div>

          {/* Headline */}
          <h2 className="heading-xl text-[var(--text)] mb-6">
            Ready to build
            <br />
            <span className="gradient-text">something exceptional?</span>
          </h2>

          {/* Subtext */}
          <p className="body-lg mb-8 max-w-xl mx-auto">
            Stop losing premium clients to generic templates. Let's architect a
            digital experience that converts, scales, and commands respect.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="btn-primary text-base px-10 py-5"
            data-click-animate
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Micro-copy */}
          <p className="mt-8 text-sm text-[var(--muted)]">
            Free 30-min consultation · No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
