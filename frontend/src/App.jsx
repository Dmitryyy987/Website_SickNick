import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <CTA />
    </>
  );
}

function Layout({ children, theme, onToggleTheme }) {
  const location = useLocation();
  return (
    <div className="min-h-screen page-grid">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main key={location.pathname} className="route-fade">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <section className="section-shell min-h-[60vh] flex items-center justify-center">
      <div className="glass-panel rounded-2xl p-10 text-center max-w-xl w-full">
        <h1 className="heading-font text-5xl font-bold mb-4">404</h1>
        <p className="text-[var(--muted)]">The page you are looking for does not exist.</p>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("bytbrand-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("bytbrand-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout theme={theme} onToggleTheme={toggleTheme}>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout theme={theme} onToggleTheme={toggleTheme}>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout theme={theme} onToggleTheme={toggleTheme}>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
