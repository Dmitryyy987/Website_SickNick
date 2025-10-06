import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Smooth scroll to section on home page
  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = headerRef.current?.offsetHeight || 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = headerRef.current?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navigateToContact = () => {
    setMenuOpen(false);
    navigate('/contact');
  };

  const navigateToHome = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full ${scrolled ? 'animate-shimmer' : ''} pointer-events-none`}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-3 sm:py-4">
            <a 
              ref={logoRef}
              href="/"
              className="group flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight cursor-pointer z-50"
              onClick={navigateToHome}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <span className="relative bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl font-black">
                      Byt
                    </span>
                    <span className="text-white text-lg sm:text-xl md:text-2xl font-black">Brand</span>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {['services', 'portfolio'].map((item) => (
                <button
                  key={item}
                  className="group relative px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold text-slate-300 hover:text-white transition-all duration-200 cursor-pointer overflow-hidden"
                  onClick={() => scrollToSection(item)}
                >
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 backdrop-blur-xl rounded-lg transition-all duration-200 border border-transparent group-hover:border-white/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-cyan-500/0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 blur-lg"></div>
                  <span className="relative z-10 capitalize">{item}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 group-hover:w-3/4 transition-all duration-300 rounded-full shadow-lg shadow-blue-400/50"></div>
                </button>
              ))}

              <button
                className="ml-2 lg:ml-3 group relative px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base font-bold text-white rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 active:scale-95"
                onClick={navigateToContact}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"></div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="absolute inset-[1px] bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-lg"></div>
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </div>
                
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-slate-300 hover:text-white focus:outline-none group z-50"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-lg border border-white/10 group-hover:border-blue-400/50 group-hover:bg-white/10 transition-all duration-200"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-lg"></div>
              
              <svg className="w-5 h-5 relative z-10 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <div 
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: headerRef.current?.offsetHeight || '64px' }}
      >
        <div 
          className={`absolute inset-0 bg-slate-950/95 backdrop-blur-xl transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>
        
        <div className={`relative h-full overflow-y-auto transition-transform duration-300 ${
          menuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          <div className="px-4 py-6 space-y-3 min-h-full">
            {['services', 'portfolio'].map((item, index) => (
              <button
                key={item}
                className={`group relative block w-full text-left px-5 py-3.5 text-base sm:text-lg font-bold text-slate-300 hover:text-white rounded-xl transition-all duration-200 overflow-hidden ${
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: menuOpen ? `${index * 50}ms` : '0ms'
                }}
                onClick={() => scrollToSection(item)}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl group-hover:bg-white/10 group-hover:border-blue-400/50 transition-all duration-200"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <span className="relative z-10 capitalize">{item}</span>
              </button>
            ))}
            
            <button
              className={`group relative block w-full mt-6 px-5 py-3.5 text-base sm:text-lg font-bold text-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 active:scale-95 ${
                menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: menuOpen ? '100ms' : '0ms'
              }}
              onClick={navigateToContact}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"></div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="absolute inset-[1px] bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-xl"></div>
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
      `}</style>
    </>
  );
};

export default Header;