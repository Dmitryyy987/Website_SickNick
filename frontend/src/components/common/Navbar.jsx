import { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Magnet from '../reactbits/Magnet';
import BorderGlow from '../reactbits/BorderGlow';

const FlowingMenu = lazy(() => import('../reactbits/FlowingMenu'));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  const menuItems = [
    { link: '/', text: 'Home', image: '/images/home_hero_new.png' },
    { link: '/services', text: 'Services', image: '/images/services_web_dev.png' },
    { link: '/case-studies', text: 'Case Studies', image: '/images/case_study_mockups.png' },
    { link: '/process', text: 'Process', image: '/images/process_main.png' },
    { link: '/contact', text: 'Contact', image: '/images/cta_contact.png' },
  ];

  // Scroll effect for navbar visibility/visuals
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Menu Animations
  useGSAP(() => {
    if (open) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 0.8 }});
      tl.fromTo('.menu-bg', 
        { scaleY: 0, transformOrigin: 'top' }, 
        { scaleY: 1 }
      )
      .from('.menu-item', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
      }, '-=0.4')
      .from('.menu-footer', {
        opacity: 0,
        y: 20
      }, '-=0.4');
    }
  }, { scope: menuRef, dependencies: [open] });

  // GSAP Navbar visibility on scroll
  useGSAP(() => {
    let lastScrollY = window.scrollY;
    const scrollHandler = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' });
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, { scope: navRef });

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav 
        ref={navRef}
        className={`fixed top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-7xl h-16 glass-navbar z-[100] transition-all duration-500 ${scrolled ? 'top-2 py-2' : 'top-4'}`}
      >
        <div className="h-full flex items-center justify-between px-6 sm:px-8">
          
          {/* Brand - Clean & Bold */}
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tighter text-black hover:text-rust transition-colors z-[110] whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            BytBrand<span className="text-rust">.</span>
          </Link>

          {/* Right Section: Hamburger */}
          <div className="flex items-center gap-6 z-[110]">
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-all text-black"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col items-end justify-center gap-1.5 overflow-hidden">
                <motion.span 
                  animate={open ? { rotate: 45, y: 7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                  className="h-0.5 bg-current rounded-full origin-center transition-all" 
                />
                <motion.span 
                  animate={open ? { x: 50, opacity: 0 } : { x: 0, opacity: 1, width: '70%' }}
                  className="h-0.5 bg-current rounded-full transition-all" 
                />
                <motion.span 
                  animate={open ? { rotate: -45, y: -7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                  className="h-0.5 bg-current rounded-full origin-center transition-all" 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <div ref={menuRef} className="fixed inset-0 z-[120]">
            {/* Dark Overlay with Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-cream-soft/80 backdrop-blur-3xl"
              onClick={() => setOpen(false)}
            />

            {/* Menu Sliding Panel */}
            <div className="menu-bg absolute inset-0 bg-white shadow-2xl origin-top flex flex-col pt-24 px-6 sm:px-12">
              
              <div className="flex-1 flex flex-col">
                 <Suspense fallback={<div className="flex-1 flex items-center justify-center font-mono opacity-20">Initializing System...</div>}>
                    <div className="flex-1">
                      <FlowingMenu
                        items={menuItems}
                        bgColor="transparent"
                        textColor="var(--color-black)"
                        marqueeBgColor="var(--color-rust)"
                        marqueeTextColor="var(--color-white)"
                        borderColor="rgba(255,255,255,0.05)"
                        onLinkClick={() => setOpen(false)}
                      />
                    </div>
                 </Suspense>
              </div>

              {/* Menu Footer with CTA */}
              <div className="menu-footer py-12 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                   <p className="text-sm font-mono tracking-widest text-muted uppercase mb-2">Ready to scale?</p>
                   <h4 className="text-2xl font-bold tracking-tight text-black italic font-serif">Let's build the standard.</h4>
                </div>
                
                <div className="w-full md:w-auto">
                   <Magnet strength={0.4}>
                     <BorderGlow 
                       borderRadius={12} 
                       glowColor="40 80 80"
                       className="w-full md:w-auto"
                     >
                       <Link 
                         to="/contact" 
                         className="flex items-center justify-center bg-black text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-rust transition-all menu-button"
                         onClick={() => setOpen(false)}
                       >
                         Start Your Project ——
                       </Link>
                     </BorderGlow>
                   </Magnet>
                </div>
              </div>

              {/* Close Button UI */}
              <button
                className="absolute top-6 right-6 sm:right-12 w-12 h-12 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-black"
                onClick={() => setOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
