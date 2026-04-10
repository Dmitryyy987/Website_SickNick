import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top  = e.clientY + 'px';
      }
    };
    let raf;
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top  = ring.current.y + 'px';
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('mousemove', onMove);

    const enterHandlers = new Map();
    const leaveHandlers = new Map();

    const attach = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        if (enterHandlers.has(el)) return; // already attached
        const onEnter = () => {
          dotRef.current?.classList.add('hovered');
          ringRef.current?.classList.add('hovered');
        };
        const onLeave = () => {
          dotRef.current?.classList.remove('hovered');
          ringRef.current?.classList.remove('hovered');
        };
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        enterHandlers.set(el, onEnter);
        leaveHandlers.set(el, onLeave);
      });
    };
    attach();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      enterHandlers.forEach((handler, el) => el.removeEventListener('mouseenter', handler));
      leaveHandlers.forEach((handler, el) => el.removeEventListener('mouseleave', handler));
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
