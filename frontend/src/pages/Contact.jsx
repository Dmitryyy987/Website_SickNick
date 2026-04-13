import { useState, lazy, Suspense } from 'react';
import useSEO from '../hooks/useSEO';
import FadeUp from '../components/common/FadeUp';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import { api } from '../services/api';
import { Linkedin, Github, Twitter } from 'lucide-react';

const BorderGlow = lazy(() => import('../components/reactbits/BorderGlow'));

const EMPTY_FORM = { name: '', email: '', projectType: '', message: '', company: '', budget: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');
  const [errorText, setErrorText] = useState('');

  useSEO({
    title: 'Contact Us',
    description: 'Contact BytBrand to scope your next high-converting digital product.',
    url: 'https://bytbrand.com/contact',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorText('');
    try {
      await api.sendContactForm(formData);
      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => { setStatus('idle'); setErrorText(''); }, 4000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      const msg = err?.details?.errors?.[0]?.msg || err?.details?.error || err?.message || 'Could not send your message right now. Please try again.';
      setErrorText(msg);
      setTimeout(() => { setStatus('idle'); setErrorText(''); }, 5000);
    }
  };

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError   = status === 'error';

  const socials = [
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: <Linkedin size={16} /> },
    { href: 'https://github.com', label: 'GitHub', icon: <Github size={16} /> },
    { href: 'https://twitter.com', label: 'X / Twitter', icon: <Twitter size={16} /> },
  ];

  return (
    <main className="pt-16 min-h-screen bg-cream-soft overflow-x-hidden">

      <FadeUp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* ── LEFT ── */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">Direct Access</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-6">
              <span className="block"><BlurText text="Ready to" delay={150} animateBy="words" direction="top" /></span>
              <span className="block"><BlurText text="Build Your" delay={150} animateBy="words" direction="top" /></span>
              <span className="block text-rust"><BlurText text="Product?" delay={150} animateBy="words" direction="top" /></span>
            </h1>
            <ScrollReveal baseOpacity={0} blurStrength={5}>
              <p className="text-[15px] max-w-[360px] text-muted font-light leading-relaxed mb-8">
                Partner with a senior team that executes with speed, precision, and uncompromising product quality.
              </p>
            </ScrollReveal>

            <Suspense fallback={<div className="h-40 bg-stone rounded-xl animate-pulse" />}>
              <BorderGlow borderRadius={12} backgroundColor="#0B0B0E">
                <div className="p-6">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">What to Expect</span>
                  <ul className="space-y-3 text-sm text-muted font-light">
                    {['Get a complete technical roadmap', 'Receive transparent project timelines', 'Start development within 7 days'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="text-rust text-xs">✦</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </BorderGlow>
            </Suspense>

            {/* Social links — clean pill buttons, no Folder wrapper */}
            <div className="mt-10">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-5">Global Presence</span>
              <div className="flex flex-wrap items-center gap-3">
                {socials.map(({ href, label, icon }) => (
                  <Magnet key={label} strength={0.3}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white text-sm font-medium text-brown-dark hover:border-rust hover:text-rust transition-colors"
                    >
                      {icon}
                      {label}
                    </a>
                  </Magnet>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <form
            className="bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm flex flex-col gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="font-sans font-bold text-xl text-black">Initialize Communication</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-black/70">Full Name</label>
                <input
                  className="bg-stone/30 border border-transparent focus:border-rust focus:bg-white transition-colors text-black rounded-lg px-4 py-3 text-[15px] outline-none placeholder:text-muted/50"
                  placeholder="Ex. Jane Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required minLength={2} maxLength={80}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-black/70">Email Address</label>
                <input
                  className="bg-stone/30 border border-transparent focus:border-rust focus:bg-white transition-colors text-black rounded-lg px-4 py-3 text-[15px] outline-none placeholder:text-muted/50"
                  type="email"
                  placeholder="director@company.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black/70">Scope of Operation</label>
              <div className="relative">
                <select
                  className="w-full bg-stone/30 border border-transparent focus:border-rust focus:bg-white transition-colors text-black rounded-lg pl-4 pr-10 py-3 text-[15px] outline-none appearance-none"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Framework…</option>
                  <option value="High-Converting Web Platform">High-Converting Web Platform</option>
                  <option value="SaaS Architecture & UI">SaaS Architecture &amp; UI</option>
                  <option value="AI Ecosystem Automation">AI Ecosystem Automation</option>
                  <option value="Enterprise Lead Generation">Enterprise Lead Generation</option>
                  <option value="Dedicated Engineering Pods">Dedicated Engineering Pods</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-black/70">Strategic Brief</label>
              <textarea
                className="w-full bg-stone/30 border border-transparent focus:border-rust focus:bg-white transition-colors text-black rounded-lg px-4 py-3 text-[15px] outline-none resize-y min-h-[140px] placeholder:text-muted/50"
                placeholder="Detail your business bottleneck, target outcomes, timeline constraints, and how this investment translates to revenue…"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required minLength={10} maxLength={5000}
              />
            </div>

            <Magnet strength={0.4} className="w-full">
              <button
                className={`w-full py-4 rounded-lg font-bold text-white shadow-md transition-all menu-button ${
                  isSuccess ? 'bg-green-700' : isError ? 'bg-red-700' : 'bg-black hover:bg-rust'
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Sending…' : isSuccess ? '✓ Brief Received' : isError ? '✕ Delivery Failed — Retry' : 'Dispatch Project Brief'}
              </button>
            </Magnet>

            <p className="text-[9px] uppercase tracking-wider text-center text-muted">
              {isError && errorText ? errorText : 'Briefs reviewed strictly within 12 business hours by senior architects.'}
            </p>
          </form>

        </div>
      </div>
      </FadeUp>
    </main>
  );
}
