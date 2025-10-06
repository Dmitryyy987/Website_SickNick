import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css"; // Tailwind

function App() {
  useEffect(() => {
    // Scroll reveal logic
    const checkReveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", checkReveal);
    window.addEventListener("load", checkReveal);
    checkReveal();

    return () => {
      window.removeEventListener("scroll", checkReveal);
      window.removeEventListener("load", checkReveal);
    };
  }, []);

  return (
    <div className="antialiased bg-black text-white font-inter">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;