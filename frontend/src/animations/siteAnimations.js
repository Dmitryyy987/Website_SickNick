import { animate } from "animejs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let gsapIsRegistered = false;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ensureGsap() {
  if (!gsapIsRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    gsapIsRegistered = true;
  }
}

export function initPageAnimations(scopeNode) {
  if (!scopeNode || prefersReducedMotion()) return () => {};

  ensureGsap();

  const ctx = gsap.context(() => {
    const revealNodes = gsap.utils.toArray("[data-animate]");
    revealNodes.forEach((node) => {
      gsap.fromTo(
        node,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    const staggerGroups = gsap.utils.toArray("[data-animate-stagger]");
    staggerGroups.forEach((group) => {
      const children = group.querySelectorAll("[data-animate-item]");
      if (!children.length) return;

      gsap.fromTo(
        children,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: group,
            start: "top 85%",
            once: true,
          },
        },
      );
    });
  }, scopeNode);

  return () => ctx.revert();
}

export function bindClickAnimations(rootNode = document) {
  if (!rootNode || prefersReducedMotion()) return () => {};

  const onClick = (event) => {
    const target = event.target.closest("[data-click-animate]");
    if (!target) return;

    animate(target, {
      scale: [{ to: 0.97, duration: 90 }, { to: 1, duration: 180 }],
      ease: "out(3)",
    });
  };

  rootNode.addEventListener("click", onClick, { passive: true });
  return () => rootNode.removeEventListener("click", onClick);
}

export function runLoaderExit(loaderNode, onDone) {
  if (!loaderNode) {
    onDone?.();
    return;
  }

  if (prefersReducedMotion()) {
    loaderNode.style.display = "none";
    onDone?.();
    return;
  }

  ensureGsap();

  const tl = gsap.timeline({
    onComplete: () => {
      loaderNode.style.display = "none";
      onDone?.();
    },
  });

  tl.to(".js-loader-logo", {
    y: -8,
    duration: 0.28,
    repeat: 1,
    yoyo: true,
    ease: "power1.inOut",
  }).to(
    loaderNode,
    {
      autoAlpha: 0,
      duration: 0.42,
      ease: "power2.out",
    },
    "-=0.08",
  );
}
