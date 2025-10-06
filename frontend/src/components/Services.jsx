import React from "react";

const Services = () => {
  const services = [
    {
      iconColor: "text-cyan-400",
      title: "Web Platforms",
      description:
        "Building next-generation web applications, optimized for speed, performance, and cross-device functionality.",
      linkColor: "text-cyan-400",
    },
    {
      iconColor: "text-fuchsia-400",
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile experiences that feel seamless on every device (iOS and Android).",
      linkColor: "text-fuchsia-400",
    },
    {
      iconColor: "text-cyan-400",
      title: "Design Systems",
      description:
        "Creating scalable design systems (UI/UX) ensuring consistency and efficient engineering handoffs.",
      linkColor: "text-cyan-400",
    },
  ];

  return (
<<<<<<< Updated upstream
    <section id="services" className="py-24 md:py-36 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-base font-semibold tracking-wider uppercase text-cyan-400 reveal">Capabilities</h3>
          <h2 className="mt-2 text-5xl font-extrabold text-white reveal">The Core of Our Offering</h2>
          <div className="rgb-line max-w-xs mx-auto reveal"></div>
=======
    <section id="services" className="relative py-24 md:py-20 bg-slate-950 border-b border-slate-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Services We <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and drive sustainable growth
          </p>
>>>>>>> Stashed changes
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="minimal-card p-8 rounded-2xl shadow-xl reveal" style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
              <svg className={`w-10 h-10 ${service.iconColor} mb-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 4l2 16m4-4l4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <a href="#contact" className={`mt-4 inline-block ${service.linkColor} hover:text-white text-sm font-medium transition duration-200`}>
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;