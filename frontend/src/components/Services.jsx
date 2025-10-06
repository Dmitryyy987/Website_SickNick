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
    <section id="services" className="py-24 md:py-36 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-base font-semibold tracking-wider uppercase text-cyan-400 reveal">Capabilities</h3>
          <h2 className="mt-2 text-5xl font-extrabold text-white reveal">The Core of Our Offering</h2>
          <div className="rgb-line max-w-xs mx-auto reveal"></div>
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