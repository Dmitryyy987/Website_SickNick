import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "BytBrand fundamentally transformed our enterprise dashboard. The architecture they deployed allowed us to handle 3x our user load without breaking a sweat.",
    name: "Sarah Chen",
    role: "VP Engineering, Lumina AI",
  },
  {
    text: "We needed a highly technical, conversion-focused platform to launch our Series A. They delivered an incredibly aesthetic SaaS marketing suite that outclassed our competitors instantly.",
    name: "Michael Torres",
    role: "Founder, Stratos",
  },
  {
    text: "Their understanding of modern JavaScript scaling is unmatched. The micro-interactions combined with a bulletproof backend made our product feel like a $1B+ enterprise application.",
    name: "Elena Rostova",
    role: "Director of Product, Vanguard",
  },
  {
    text: "Absolutely ruthless execution. We gave them a deeply fragmented codebase and they returned a highly optimized, beautifully architected masterpiece within 6 weeks.",
    name: "David Kim",
    role: "CTO, Apex Analytics",
  },
  {
    text: "We strictly hire Awwwards-level talent. BytBrand not only met our design expectations but over-engineered the technical reliability to achieve complete zero downtime.",
    name: "Jessica Allyn",
    role: "VP Marketing, Nexus",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index) => {
    if (index === current) return;
    const next = ((index % testimonials.length) + testimonials.length) % testimonials.length;

    if (quoteRef.current) {
      gsap.to(quoteRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setCurrent(next);
          gsap.fromTo(
            quoteRef.current,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
          );
        },
      });
    } else {
      setCurrent(next);
    }
  };

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelector(".testimonial-container"),
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 90%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      className="section-space relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(197,126,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="testimonial-container max-w-4xl mx-auto text-center" style={{ opacity: 0 }}>
          {/* Label */}
          <span className="label-accent mb-8 block">What Clients Say</span>

          {/* Quote */}
          <div ref={quoteRef} className="mb-8">
            {/* Quote mark */}
            <div className="text-6xl md:text-8xl gradient-text font-light leading-none mb-6 select-none">
              "
            </div>

            <blockquote className="heading-md text-[var(--text)] font-medium leading-snug mb-8">
              {t.text}
            </blockquote>

            <div>
              <p className="text-base font-semibold text-[var(--text)]">{t.name}</p>
              <p className="text-sm text-[var(--muted)] mt-1">{t.role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => goTo(current - 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/[0.04] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    i === current
                      ? "bg-[var(--accent)] w-6"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(current + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/[0.04] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
