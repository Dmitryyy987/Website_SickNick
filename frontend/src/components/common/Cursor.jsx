import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useGSAP(() => {
    // Hide native cursor setup (backup just in case CSS doesn't catch it all)
    document.body.style.cursor = 'none';

    // Set GSAP quicksetters for performance
    const xSetDot = gsap.quickSetter(dotRef.current, "x", "px");
    const ySetDot = gsap.quickSetter(dotRef.current, "y", "px");

    const onMouseMove = (e) => {
      // Dot follows immediately
      xSetDot(e.clientX);
      ySetDot(e.clientY);
      
      // Ring follows slightly delayed
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const mouseClick = () => {
      gsap.fromTo(ringRef.current, 
        { scale: 0.8 }, 
        { scale: 1.5, duration: 0.2, ease: "power2.out", overwrite: "auto" }
      );
      gsap.to(ringRef.current, { scale: 1, delay: 0.2, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", mouseClick);

    // Hover interactions
    const addHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      
      interactables.forEach(el => {
        el.addEventListener("mouseenter", onHoverEnter);
        el.addEventListener("mouseleave", onHoverLeave);
      });
    };

    const removeHoverListeners = () => {
      const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", onHoverEnter);
        el.removeEventListener("mouseleave", onHoverLeave);
      });
    };

    const onHoverEnter = () => {
      gsap.to(ringRef.current, {
        scale: 1.5,
        backgroundColor: "rgba(136, 69, 49, 0.1)", // rust transparent
        borderColor: "rgba(136, 69, 49, 1)", // solid rust
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(dotRef.current, {
        scale: 0, // dot disappears or shrinks
        duration: 0.2
      });
    };

    const onHoverLeave = () => {
      gsap.to(ringRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(136, 69, 49, 0.5)", // semi rust
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.2
      });
    };

    // Need to re-bind on dom updates if react router changes pages
    const observer = new MutationObserver(() => {
      removeHoverListeners(); // cleanup
      addHoverListeners();    // rebind
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners(); // initial bind

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", mouseClick);
      observer.disconnect();
      removeHoverListeners();
    };
  });

  return (
    <div ref={cursorRef} className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      <div 
        ref={ringRef}
        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-rust/50 mix-blend-difference"
      ></div>
      <div 
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-rust mix-blend-difference"
      ></div>
    </div>
  );
}
