import { useState, Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import BlurText from '../reactbits/BlurText';
import Magnet from '../reactbits/Magnet';
import Folder from '../reactbits/Folder';
import { api } from '../../services/api';

const BorderGlow = lazy(() => import('../reactbits/BorderGlow'));

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    try {
      const res = await api.subscribeNewsletter(email);
      if (res.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm transition-colors hover:text-rust ${isActive ? 'text-rust' : 'text-cream/70'}`;

  return (
    <footer className="bg-black text-cream pt-16 pb-8 px-4 sm:px-6 lg:px-8 w-full mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          <div className="lg:col-span-4 lg:pr-8">
            <span className="block font-serif italic text-3xl mb-4">
              <BlurText text="BytBrand" delay={100} animateBy="words" direction="top" />
            </span>
            <p className="text-cream/70 text-sm font-light leading-relaxed max-w-sm">
              Technology agency building web apps, mobile products, and
              AI tools for ambitious brands. Est. 2023.
            </p>
          </div>

          <div className="lg:col-span-2">
            <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-white/40 mb-6">Services</span>
            <ul className="space-y-4">
              <li><NavLink to="/services" className={navLinkClass}>Web Development</NavLink></li>
              <li><NavLink to="/services" className={navLinkClass}>Mobile Apps</NavLink></li>
              <li><NavLink to="/services" className={navLinkClass}>UI/UX Design</NavLink></li>
              <li><NavLink to="/services" className={navLinkClass}>AI &amp; Automation</NavLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-white/40 mb-6">Company</span>
            <ul className="space-y-4">
              <li><NavLink to="/case-studies" className={navLinkClass}>Case Studies</NavLink></li>
              <li><NavLink to="/process" className={navLinkClass}>Our Process</NavLink></li>
              <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <span className="block font-mono text-[10px] tracking-[0.16em] uppercase text-white/40 mb-6">Newsletter</span>
            <p className="text-cream/70 text-[13px] font-light mb-4 leading-relaxed">Tech insights and project updates — no spam.</p>
            
            <Suspense fallback={<div className="h-12 bg-white/5 rounded-lg animate-pulse" />}>
              <BorderGlow borderRadius={8} backgroundColor="transparent" glowColor="40 80 80">
                <form className="flex w-full" onSubmit={handleSubscribe} noValidate>
                  <input
                    className="bg-white/5 border border-white/10 text-cream px-4 py-3 text-[13px] rounded-l-lg flex-1 outline-none focus:border-rust transition-colors placeholder:text-cream/30"
                    placeholder="your@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address for newsletter"
                  />
                  <Magnet strength={0.4}>
                    <button 
                      className="bg-rust text-white border-none px-5 py-3 rounded-r-lg text-sm font-semibold hover:bg-rust-light transition-colors min-w-[48px] flex items-center justify-center h-full" 
                      type="submit" 
                      aria-label="Subscribe"
                    >
                      <Folder 
                        color="var(--color-white)" 
                        size={0.4} 
                        items={[status === 'loading' ? '…' : status === 'success' ? '✓' : status === 'error' ? '✕' : '→']} 
                      />
                    </button>
                  </Magnet>
                </form>
              </BorderGlow>
            </Suspense>
          </div>

        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="font-mono text-[9px] tracking-[0.08em] text-white/40 uppercase">© 2025 BytBrand. Technology Agency.</span>
          <span className="font-mono text-[9px] tracking-[0.08em] text-white/40 uppercase">Built with React + Node.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}

