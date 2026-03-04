import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";

const navLinks = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Work" },
];

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const runScroll = () => {
      const node = document.getElementById(id);
      if (!node) return;
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(runScroll, 140);
      return;
    }

    runScroll();
  };

  return (
    <header className="sticky top-0 z-50 border-b nav-surface">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="heading-font text-xl font-semibold tracking-tight btn-interactive rounded-lg px-2 py-1"
          data-click-animate
        >
          Byt<span className="text-[var(--primary)]">Brand</span>
        </button>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 rounded-lg text-[var(--muted)] btn-secondary btn-interactive"
              data-click-animate
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-lg px-3 py-2 text-[var(--muted)] btn-secondary btn-interactive"
            aria-label="Toggle theme"
            data-click-animate
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="ml-2 rounded-lg px-5 py-2 btn-primary btn-interactive"
            data-click-animate
          >
            Contact
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden rounded-lg p-2 btn-secondary btn-interactive"
          aria-label="Toggle menu"
          data-click-animate
        >
          <FiMenu className="w-5 h-5" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--line)] bg-[var(--surface)] px-5 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="rounded-lg px-3 py-2 text-left btn-secondary btn-interactive"
              data-click-animate
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-lg px-3 py-2 text-left btn-secondary btn-interactive flex items-center gap-2"
            data-click-animate
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            Theme
          </button>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              navigate("/contact");
            }}
            className="rounded-lg px-3 py-2 text-left btn-primary btn-interactive"
            data-click-animate
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
