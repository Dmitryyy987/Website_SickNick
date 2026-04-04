import { useNavigate } from "react-router-dom";
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    if (window.location.pathname === "/contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <footer className="relative pt-16 pb-12 lg:pt-20 lg:pb-16" style={{ background: "var(--surface)" }}>
      <div className="container-wide relative z-10">
        {/* Top section: Large wordmark + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] text-[var(--text)]">
              BYTBRAND
            </h2>
            <p className="body-base mt-4 max-w-md">
              Crafting premium digital experiences for ambitious brands worldwide.
            </p>
          </div>

          <button
            type="button"
            onClick={handleContactClick}
            className="btn-ghost group self-start md:self-end"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/[0.04] mb-12" />

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="label mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button onClick={() => handleNavClick("services")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                  Web Platforms
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                  Mobile Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                  AI Integrations
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button onClick={() => handleNavClick("portfolio")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("process")} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={handleContactClick} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label mb-6">Connect</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:bytbrand.info@gmail.com" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors">
                  bytbrand.info@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label mb-6">Social</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/[0.04] mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} BYTBRAND. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)] shadow-[0_0_6px_var(--success)]" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
