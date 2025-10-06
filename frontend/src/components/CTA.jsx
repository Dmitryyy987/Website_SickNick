import React from "react";

const CTA = () => {
  return (
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
      </div>
    </section>
  );
};

export default CTA;
