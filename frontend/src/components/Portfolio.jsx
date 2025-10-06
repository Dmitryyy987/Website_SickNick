import React from "react";

const Portfolio = () => {
  return (
<<<<<<< Updated upstream
    <section id="portfolio" className="py-24 md:py-36 border-b border-gray-900 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0 reveal" style={{ transitionDelay: "0.1s" }}>
            <h3 className="text-base font-semibold tracking-wider uppercase text-fuchsia-400">Featured Project</h3>
            <h2 className="mt-2 text-5xl font-extrabold text-white">The Quantum Dashboard</h2>
            <div className="rgb-line max-w-xs reveal"></div>
            <p className="mt-6 text-gray-400 text-lg">
              We engineered a real-time data visualization platform for a global logistics firm. Handling <strong>terabytes of streaming data</strong>,
              the system provides predictive insights with sub-second latency.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              <strong>Tech Stack:</strong> React, Python (Django), PostgreSQL, AWS Lambda.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center text-xl font-bold text-fuchsia-400 hover:text-white transition duration-300">
              Request Case Study →
            </a>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.3s" }}>
            <img
              src="https://placehold.co/800x600/111111/e879f9?text=Quantum+Dashboard"
              alt="Featured project screenshot"
              className="w-full rounded-xl shadow-2xl border border-gray-800"
            />
=======
    <section id="portfolio" className="relative py-24 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Work
            </span>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
