import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let gsapRegistered = false;

function ensureGsap() {
  if (!gsapRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    gsapRegistered = true;
  }
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ─── Scroll reveal: fade + translateY ─── */
export function initPageAnimations(scopeNode) {
  if (!scopeNode || prefersReducedMotion()) return () => {};

  ensureGsap();

  const ctx = gsap.context(() => {
    // Basic reveal elements
    const reveals = gsap.utils.toArray("[data-animate]");
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    // Stagger groups
    const staggerGroups = gsap.utils.toArray("[data-animate-stagger]");
    staggerGroups.forEach((group) => {
      const children = group.querySelectorAll("[data-animate-item]");
      if (!children.length) return;

      gsap.fromTo(
        children,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    // Parallax elements
    const parallaxEls = gsap.utils.toArray("[data-parallax]");
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, scopeNode);

  return () => ctx.revert();
}

/* ─── Text split reveal (character by character) ─── */
export function splitTextReveal(element, options = {}) {
  if (!element || prefersReducedMotion()) return;
  ensureGsap();

  const text = element.textContent;
  element.textContent = "";
  element.style.visibility = "visible";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    element.appendChild(span);
    return span;
  });

  return gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration: options.duration || 0.6,
    stagger: options.stagger || 0.02,
    ease: options.ease || "power3.out",
    delay: options.delay || 0,
    scrollTrigger: options.scrollTrigger || undefined,
  });
}

/* ─── Hover micro-interactions ─── */
export function addHoverLift(element, yOffset = -4) {
  if (!element || prefersReducedMotion()) return;
  ensureGsap();

  element.addEventListener("mouseenter", () => {
    gsap.to(element, { y: yOffset, duration: 0.4, ease: "power2.out" });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, { y: 0, duration: 0.4, ease: "power2.out" });
  });
}

/* ─── Counter animation ─── */
export function animateCounter(element, endValue, duration = 2) {
  if (!element || prefersReducedMotion()) {
    if (element) element.textContent = endValue;
    return;
  }
  ensureGsap();

  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.val);
    },
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      once: true,
    },
  });
}

/* ─── Bind click scale animation ─── */
export function bindClickAnimations(rootNode = document) {
  if (!rootNode || prefersReducedMotion()) return () => {};
  ensureGsap();

  const onClick = (event) => {
    const target = event.target.closest("[data-click-animate]");
    if (!target) return;

    gsap.fromTo(
      target,
      { scale: 0.97 },
      { scale: 1, duration: 0.3, ease: "power2.out" }
    );
  };

  rootNode.addEventListener("click", onClick, { passive: true });
  return () => rootNode.removeEventListener("click", onClick);
}
