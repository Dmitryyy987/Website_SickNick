import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionWrapper({
  children,
  id,
  label,
  className = "",
  background = "transparent",
  noPadding = false,
}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full overflow-hidden ${noPadding ? "" : "section-space"} ${className}`}
      style={{ background, opacity: 0 }}
    >
      <div className="container-wide relative z-10">
        {label && (
          <div className="mb-6">
            <span className="label-accent">{label}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
