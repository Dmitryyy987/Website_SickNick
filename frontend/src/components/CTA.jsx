import React from "react";

const CTA = () => {
  return (
<<<<<<< Updated upstream
    <section className="py-24 md:py-36 text-center border-b border-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 reveal">
          Ready to build <strong>something impossible</strong>?
        </h2>
        <p className="text-xl text-gray-400 mb-10 reveal">
          Book a free, 30-minute discovery call with our Lead Engineer. No sales pitch—just solutions.
        </p>
        <a
          href="#contact"
          className="cta-button inline-flex items-center justify-center px-12 py-5 text-xl rounded-xl transition duration-400 transform reveal"
          style={{ transitionDelay: "0.2s" }}
        >
          Schedule Discovery Call
        </a>
=======
    <section 
      id="cta-section"
      className="relative py-24 md:py-20 bg-slate-950 border-b border-slate-800/50 overflow-hidden"
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
>>>>>>> Stashed changes
      </div>
    </section>
  );
};

export default CTA;
