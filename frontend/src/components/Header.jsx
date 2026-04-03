import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Animate mobile menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll(".mobile-link"),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.15 }
      );
    }
  }, [isOpen]);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Services", action: () => handleNavClick("services") },
    { label: "Work", action: () => handleNavClick("portfolio") },
    { label: "Process", action: () => handleNavClick("process") },
    { label: "Contact", action: () => { setIsOpen(false); navigate("/contact"); } },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0E0E0E]/90 backdrop-blur-xl py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-lg font-bold tracking-[-0.03em] text-[var(--text)] hover:opacity-70 transition-opacity"
          >
            BYTBRAND
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="label text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors duration-300 cursor-pointer"
                style={{ letterSpacing: "0.12em", fontSize: "0.6875rem" }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 group"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[var(--text)] p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-[var(--bg)] pt-24 px-8 md:hidden flex flex-col"
        >
          <nav className="flex flex-col gap-1 flex-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="mobile-link text-left py-4 text-3xl font-bold tracking-[-0.03em] text-[var(--text)] hover:text-[var(--accent)] transition-colors border-b border-white/5"
              >
                {item.label}
              </button>
            ))}

            <div className="mt-12">
              <button
                type="button"
                onClick={() => { setIsOpen(false); navigate("/contact"); }}
                className="btn-primary w-full text-base"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
