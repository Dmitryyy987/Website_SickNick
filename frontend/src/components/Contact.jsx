import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-base font-semibold tracking-wider uppercase text-cyan-400 reveal">Let's Connect</h3>
          <h2 className="mt-2 text-5xl font-extrabold text-white reveal">Inquiry Form</h2>
          <div className="rgb-line max-w-xs mx-auto reveal"></div>
        </div>

        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl shadow-2xl minimal-card reveal" style={{ transitionDelay: "0.1s" }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-200" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Work Email
              </label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-200" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Project Brief
              </label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell us about your challenge and goal..." className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"></textarea>
            </div>
            <button type="submit" className="cta-button w-full px-4 py-4 text-lg rounded-xl transition duration-400">
              {status === "sending" ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
          {status === "success" && (
            <p className="mt-6 text-center text-cyan-400 font-medium">
              Success! Your vision is now in our queue. We'll reply within 24 hours.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
