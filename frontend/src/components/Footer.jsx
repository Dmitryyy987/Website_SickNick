import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowRight, FiBriefcase, FiGrid, FiMail, FiPhoneCall } from "react-icons/fi";

const links = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleJump = (id) => {
    const runScroll = () => {
      const node = document.getElementById(id);
      if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(runScroll, 140);
      return;
    }
    runScroll();
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    const normalized = email.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);

    if (!isValid) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setEmail("");
    navigate(`/contact?email=${encodeURIComponent(normalized)}`);
  };

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="section-shell py-12">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <p className="heading-font text-2xl font-semibold">
              Byt<span className="text-[var(--primary)]">Brand</span>
            </p>
            <p className="mt-3 max-w-md text-[var(--muted)]">
              We help companies launch and scale digital products with clean UI, maintainable code, and reliable
              backend systems.
            </p>
            <div className="mt-4 flex items-center gap-4 text-[var(--muted)]">
              <a href="mailto:bytbrand.info@gmail.com" className="btn-interactive rounded-lg p-1" aria-label="Email">
                <FiMail />
              </a>
              <a href="tel:+15551234567" className="btn-interactive rounded-lg p-1" aria-label="Phone">
                <FiPhoneCall />
              </a>
            </div>
          </div>

          <div>
            <h3 className="heading-font text-base font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              {links.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleJump(item.id)}
                  className="hover:text-[var(--primary)] btn-interactive rounded-lg px-2 py-1 inline-flex items-center gap-2 btn-secondary"
                  >
                    {item.id === "services" ? <FiBriefcase size={14} /> : <FiGrid size={14} />}
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="hover:text-[var(--primary)] btn-interactive rounded-lg px-2 py-1 btn-secondary"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading-font text-base font-semibold">Stay in Touch</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">Enter your email and continue to our contact form.</p>
            <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="rounded-lg px-4 py-2 text-sm font-semibold btn-primary btn-interactive inline-flex items-center gap-2"
              >
                Continue
                <FiArrowRight size={14} />
              </button>
            </form>
            {error ? <p className="mt-2 text-xs text-rose-600">{error}</p> : null}
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
          {currentYear} BytBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
