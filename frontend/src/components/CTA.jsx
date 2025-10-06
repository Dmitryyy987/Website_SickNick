import React, { useState, useEffect } from "react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section 
      id="cta-section"
      className="relative py-24 md:py-36 bg-slate-950 border-b border-slate-800/50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-300">
              Free 30-Minute Consultation
            </span>
          </div>

          {/* Main Headline */}
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ready to build{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                something extraordinary
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg"></div>
            </span>
            ?
          </h2>

          {/* Description */}
          <p 
            className={`text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Book a free discovery call with our Lead Engineer. No sales pitch—just honest insights, 
            technical guidance, and <span className="text-white font-semibold">actionable solutions</span> tailored to your vision.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#contact"
              onMouseMove={handleMouseMove}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Spotlight Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent)`
                }}
              ></div>
              
              <span className="relative z-10 flex items-center gap-3">
                Schedule Discovery Call
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 animate-pulse"></div>
              </div>
            </a>

            <a
              href="#portfolio"
              className="group px-10 py-5 bg-slate-800/50 hover:bg-slate-800 text-white font-bold text-lg rounded-xl border border-slate-700 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                View Case Studies
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-800/50 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { icon: "⚡", text: "24-48hr Response" },
              { icon: "✓", text: "No Obligation" },
              { icon: "🎯", text: "Tailored Solutions" },
              { icon: "🔒", text: "NDA Available" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors text-center">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-transparent blur-2xl rounded-full -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-l from-cyan-500/20 to-transparent blur-2xl rounded-full -translate-y-1/2"></div>
      </div>

      {/* Bottom Wave Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </section>
  );
};

export default CTA;