import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FadeUp({ children, delay = '0ms', className = '', direction = 'up' }) {
  const ref = useRef(null);

  useGSAP(() => {
    // Parse delay: "80ms" -> 0.08
    const delayNum = delay.endsWith('ms') 
      ? parseInt(delay) / 1000 
      : delay.endsWith('s') 
        ? parseFloat(delay) 
        : parseFloat(delay) || 0;

    let fromVars = { opacity: 0 };
    if (direction === 'up') fromVars.y = 35;
    if (direction === 'down') fromVars.y = -35;
    if (direction === 'left') fromVars.x = -50;
    if (direction === 'right') fromVars.x = 50;

    gsap.fromTo(ref.current, 
      fromVars, 
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        delay: delayNum,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [delay]);

  return (
    <div ref={ref} className={`will-change-transform opacity-0 ${className}`}>
      {children}
    </div>
  );
}
