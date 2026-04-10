import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <span className="footer-brand-name">BytBrand</span>
          <p className="footer-brand-desc">
            Technology agency building web apps, mobile products, and
            AI tools for ambitious brands. Est. 2023.
          </p>
        </div>

        <div>
          <span className="footer-col-label">Services</span>
          <ul className="footer-links">
            <li><NavLink to="/services">Web Development</NavLink></li>
            <li><NavLink to="/services">Mobile Apps</NavLink></li>
            <li><NavLink to="/services">UI/UX Design</NavLink></li>
            <li><NavLink to="/services">AI &amp; Automation</NavLink></li>
          </ul>
        </div>

        <div>
          <span className="footer-col-label">Company</span>
          <ul className="footer-links">
            <li><NavLink to="/case-studies">Case Studies</NavLink></li>
            <li><NavLink to="/process">Our Process</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <span className="footer-col-label">Newsletter</span>
          <p className="newsletter-sub">Tech insights and project updates — no spam.</p>
          <form className="newsletter-row" onSubmit={handleSubscribe} noValidate>
            <input
              className="newsletter-input"
              placeholder="your@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for newsletter"
            />
            <button className="newsletter-btn" type="submit" aria-label="Subscribe">
              {subscribed ? '✓' : '→'}
            </button>
          </form>
        </div>

      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2025 BytBrand. Technology Agency.</span>
        <span className="footer-copy">Built with React + Node.js · Deployed on Vercel</span>
      </div>
    </footer>
  );
}
