import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import "./index.css";

// Home Page Component
function HomePage() {
  useEffect(() => {
    // Scroll reveal logic for home page only
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
    <>
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
    </>
  );
}

// Contact Page Component
function ContactPage() {
  return (
    <div className="pt-20"> {/* Add padding to account for fixed header */}
      <Contact />
    </div>
  );
}

// Layout Component
function Layout({ children }) {
  return (
    <div className="antialiased bg-black text-white font-inter">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <Layout>
              <HomePage />
            </Layout>
          } 
        />
        
        {/* Contact Route - FIXED PATH */}
        <Route 
          path="/contact" 
          element={
            <Layout>
              <ContactPage />
            </Layout>
          } 
        />
        
        {/* 404 Catch-all Route */}
        <Route 
          path="*" 
          element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                  <p className="text-xl text-slate-400 mb-8">Page not found</p>
                  <a 
                    href="/" 
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;