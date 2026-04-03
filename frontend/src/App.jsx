import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import { initPageAnimations, bindClickAnimations } from "./animations/siteAnimations";

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <ProcessSteps />
      <Testimonials />
      <CTA />
    </>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    return initPageAnimations(mainRef.current);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main ref={mainRef} key={location.pathname} className="route-fade flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <section className="section-space min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="heading-xl gradient-text mb-4">404</h1>
        <p className="body-base mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary">
          <span>Back to Home</span>
        </a>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => bindClickAnimations(document), []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/project/:slug"
          element={
            <Layout>
              <ProjectDetail />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
