import { useEffect, useRef, useState } from 'react';

export default function FadeUp({ children, delay = '0ms' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fallback: forcefully show element after 1.5s just in case observer fails
    const fallback = setTimeout(() => { setVisible(true); }, 1500);

    const obs = new IntersectionObserver(
      ([e]) => { 
        if (e.isIntersecting) { 
          setVisible(true); 
          obs.disconnect(); 
          clearTimeout(fallback);
        } 
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <div ref={ref} className={`fade-up${visible ? ' visible' : ''}`} style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
}
