import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="pt-40 pb-56 md:pt-64 md:pb-80 text-center border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 reveal">
        <h1 className="hero-headline mb-6 text-white font-black">
          ENGINEERING THE NEXT GENERATION
        </h1>
        <h2 className="text-3xl font-extralight text-gray-400 max-w-4xl mx-auto reveal" style={{ transitionDelay: "0.2s" }}>
          Scalable software development, delivered with <strong>uncompromising precision</strong>.
        </h2>
        <div className="mt-16 reveal" style={{ transitionDelay: "0.4s" }}>
          <a href="#contact" className="cta-button inline-flex items-center justify-center px-12 py-5 text-xl rounded-xl transition duration-400 transform">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;