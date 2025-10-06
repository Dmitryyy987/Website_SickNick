import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const ctaRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations on mount
  useEffect(() => {
    const tl = gsap.timeline();
    
    if (logoRef.current) {
      tl.fromTo(logoRef.current, 
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }

    if (navItemsRef.current.length > 0) {
      tl.fromTo(navItemsRef.current,
        { opacity: 0, y: -8 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.08,
          ease: "power2.out"
        },
        "-=0.3"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.4, 
          ease: "back.out(1.7)" 
        },
        "-=0.2"
      );
    }
  }, []);

  // Header background animation on scroll
  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        backgroundColor: scrolled ? "rgba(15, 23, 42, 0.7)" : "rgba(2, 6, 23, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [scrolled]);

  // Mobile menu animations
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (menuOpen) {
        gsap.to(mobileMenuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });

        gsap.fromTo(mobileMenuRef.current.querySelectorAll("button"),
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.25,
            stagger: 0.06,
            ease: "power2.out",
            delay: 0.08
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in"
        });
      }
    }
  }, [menuOpen]);

  // Smooth scroll to section on home page
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    
    // If we're not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          gsap.to(window, {
            duration: 0.8,
            scrollTo: {
              y: element,
              offsetY: headerRef.current?.offsetHeight || 0
            },
            ease: "power2.inOut"
          });
        }
      }, 400);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: {
            y: element,
            offsetY: headerRef.current?.offsetHeight || 0
          },
          ease: "power2.inOut"
        });
      }
    }
  };

  // Navigate to contact page
  const navigateToContact = () => {
    setMenuOpen(false);
    navigate('/contact');
  };

  // Navigate to home and scroll to top
  const navigateToHome = () => {
    setMenuOpen(false);
    
    if (location.pathname === '/') {
      // Already on home page, just scroll to top
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: 0 },
        ease: "power2.inOut"
      });
    } else {
      // Navigate to home
      navigate('/');
      // Scroll to top after navigation
      setTimeout(() => {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: 0 },
          ease: "power2.inOut"
        });
      }, 400);
    }
  };

  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/70 backdrop-blur-xl shadow-xl border-b border-white/10' 
            : 'bg-slate-950/40 backdrop-blur-lg border-b border-white/5'
        }`}
      >
        {/* Glassmorphic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Animated shimmer effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full ${scrolled ? 'animate-shimmer' : ''} pointer-events-none`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo with Glass Effect - Reduced Size */}
            <Link 
              ref={logoRef}
              to="/"
              className="group flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight cursor-pointer"
              onClick={navigateToHome}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Glass container - Smaller */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-2 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-1.5">
                    <span className="relative bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-xl sm:text-2xl font-black">
                      Byt
                    </span>
                    <span className="text-white text-xl sm:text-2xl font-black">Brand</span>
                  </div>
                  
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Reduced Sizes */}
            <div className="hidden md:flex items-center gap-1">
              {['Services', 'Portfolio'].map((item) => (
                <button
                  key={item}
                  ref={addToRefs}
                  className="group relative px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-all duration-200 cursor-pointer overflow-hidden"
                  onClick={() => scrollToSection(item.toLowerCase())}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.03,
                      duration: 0.15,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      duration: 0.15,
                      ease: "power2.out"
                    });
                  }}
                >
                  {/* Glass background on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 backdrop-blur-xl rounded-lg transition-all duration-200 border border-transparent group-hover:border-white/10"></div>
                  
                  {/* Gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-cyan-500/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 blur-lg"></div>
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:scale-102 inline-block transition-transform duration-200">{item}</span>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 group-hover:w-3/4 transition-all duration-300 rounded-full shadow-lg shadow-blue-400/50"></div>
                </button>
              ))}

              {/* Enhanced Get Started Button - Smaller */}
              <button
                ref={ctaRef}
                className="ml-3 group relative px-5 py-2.5 text-sm font-bold text-white rounded-lg overflow-hidden cursor-pointer"
                onClick={navigateToContact}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.04,
                    duration: 0.2,
                    ease: "back.out(1.7)"
                  });
                  const shine = e.currentTarget.querySelector('.btn-shine');
                  if (shine) {
                    gsap.to(shine, {
                      x: '100%',
                      duration: 0.5,
                      ease: "power2.inOut"
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
              >
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-size-200 group-hover:bg-pos-100 transition-all duration-500"></div>
                
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-spin-slow blur-sm"></div>
                </div>
                
                {/* Inner border */}
                <div className="absolute inset-[1px] bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-lg"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 btn-shine"></div>
                </div>
                
                {/* Particle effects - Smaller */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                  <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-white rounded-full animate-ping"></div>
                  <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                {/* Pulsing shadow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 group-hover:animate-pulse"></div>
                
                {/* Button text with icon */}
                <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:scale-102 transition-transform duration-200">
                  <span>Get Started</span>
                  
                  {/* Animated arrow */}
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  
                  {/* Sparkle effect */}
                  <svg 
                    className="absolute -top-0.5 -right-0.5 w-3 h-3 text-cyan-300 opacity-0 group-hover:opacity-100 animate-ping" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L9 9L2 12L9 15L12 22L15 15L22 12L15 9L12 2Z" />
                  </svg>
                </span>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-lg group-active:scale-95 transition-transform duration-100"></div>
              </button>
            </div>

            {/* Mobile Menu Button - Smaller */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white focus:outline-none group"
              aria-label="Toggle menu"
            >
              {/* Glass background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 group-hover:border-blue-400/50 group-hover:bg-white/10 transition-all duration-200"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-lg"></div>
              
              <svg 
                className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:scale-105" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Enhanced Mobile Menu - Smaller */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {['Services', 'Portfolio'].map((item, index) => (
              <button
                key={item}
                className="group relative block w-full text-left px-6 py-4 text-lg font-bold text-slate-300 hover:text-white rounded-xl transition-all duration-200 overflow-hidden"
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{ 
                  transitionDelay: menuOpen ? `${index * 0.08}s` : '0s'
                }}
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-blue-400/50 transition-all duration-200"></div>
                
                {/* Gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <span className="relative z-10">{item}</span>
              </button>
            ))}
            
            {/* Mobile Get Started Button - Smaller */}
            <button
              className="group relative block w-full mt-6 px-6 py-4 text-lg font-bold text-white rounded-xl overflow-hidden cursor-pointer"
              onClick={navigateToContact}
              style={{ 
                transitionDelay: menuOpen ? '0.16s' : '0s'
              }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-size-200 group-active:bg-pos-100 transition-all duration-500"></div>
              
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              
              {/* Border glow */}
              <div className="absolute inset-[1px] bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-xl"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-800 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
              </div>
              
              {/* Shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-50"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          to {
            transform: translateX(200%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 100%;
        }
        
        .bg-pos-100 {
          background-position: 100% 0;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg) scale(1.2);
          }
          to {
            transform: rotate(360deg) scale(1.2);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

export default Header;