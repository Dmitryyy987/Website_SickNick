import { useState, lazy, Suspense } from 'react';
import useSEO from '../hooks/useSEO';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import Folder from '../components/reactbits/Folder';
import { api } from '../services/api';

const BorderGlow = lazy(() => import('../components/reactbits/BorderGlow'));

const EMPTY_FORM = { name: '', email: '', projectType: '', message: '', company: '', budget: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorText, setErrorText] = useState('');

  useSEO({
    title: 'Contact Us',
    description: 'Contact BytBrand to scope your next high-converting digital product.',
    url: 'https://bytbrand.com/contact'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorText('');
    try {
      await api.sendContactForm(formData);
      setStatus('success');
      setFormData(EMPTY_FORM);
      setTimeout(() => {
        setStatus('idle');
        setErrorText('');
      }, 4000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      const firstValidationMessage = err?.details?.errors?.[0]?.msg;
      const serverMessage = err?.details?.error || err?.message;
      setErrorText(firstValidationMessage || serverMessage || 'Could not send your message right now. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setErrorText('');
      }, 5000);
    }
  };

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError   = status === 'error';

  return (
    <main className="pt-16 min-h-screen bg-cream-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4 md:pt-6 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* ── LEFT ── */}
          <div>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">Direct Access</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-6">
              <span className="block"><BlurText text="Ready to" delay={150} animateBy="words" direction="top" /></span>
              <span className="block"><BlurText text="Build Your" delay={150} animateBy="words" direction="top" initialDelay={200} /></span>
              <span className="block text-rust"><BlurText text="Product?" delay={150} animateBy="words" direction="top" initialDelay={400} /></span>
            </h1>
            <ScrollReveal baseOpacity={0} blurStrength={5}>
              <p className="text-[15px] max-w-[360px] text-muted font-light leading-relaxed mb-8">
                Partner with a senior team that executes with speed, precision, and uncompromising product quality.
              </p>
            </ScrollReveal>

            <Suspense fallback={<div className="h-40 bg-stone rounded-xl animate-pulse" />}>
              <BorderGlow borderRadius={12} backgroundColor="#FFFFFF">
                <div className="p-6 flex flex-col items-start h-full">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-3">What to Expect</span>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted font-light">
                    <li>Get a complete technical roadmap</li>
                    <li>Receive transparent project timelines</li>
                    <li>Start development within 7 days</li>
                  </ul>
                </div>
              </BorderGlow>
            </Suspense>

            <div className="mt-12 px-0">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-6">Global Presence</span>
              <div className="flex flex-wrap items-center gap-4 text-black text-sm">
                <Magnet strength={0.2}><Folder color="#0a66c2" items={[<a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-4 py-2 font-semibold tracking-wide">LinkedIn</a>]} size={0.6} /></Magnet>
                <Magnet strength={0.2}><Folder color="#333" items={[<a href="https://github.com" target="_blank" rel="noreferrer" className="px-4 py-2 font-semibold tracking-wide">GitHub</a>]} size={0.6} /></Magnet>
                <Magnet strength={0.2}><Folder color="#1da1f2" items={[<a href="https://twitter.com" target="_blank" rel="noreferrer" className="px-4 py-2 font-semibold tracking-wide">X/Twitter</a>]} size={0.6} /></Magnet>
              </div>
            </div>
          </div>


          {/* ── RIGHT: FORM ── */}
          <form
            className="bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm flex flex-col"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="font-sans font-bold text-xl text-black mb-6">Initialize Communication</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black/70">Full Name</label>
                <input
                  className="bg-stone/30 border border-transparent focus:border-rust focus:bg-white transition-colors text-black rounded-lg px-4 py-3 text-[15px] outline-none placeholder:text-muted/50"
                  placeholder="Ex. Jane Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={80}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black/70">Email Address</label>
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

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-sm font-bold text-black/70">Scope of Operation</label>
              <div className="relative">
                <select
                  className="w-full bg-stone/30 border border-transparent focus:border-rust focus:bg-white transition-colors text-black rounded-lg pl-4 pr-10 py-3 text-[15px] outline-none appearance-none"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Framework...</option>
                  <option value="High-Converting Web Platform">High-Converting Web Platform</option>
                  <option value="SaaS Architecture & UI">SaaS Architecture &amp; UI</option>
                  <option value="AI Ecosystem Automation">AI Ecosystem Automation</option>
                  <option value="Enterprise Lead Generation">Enterprise Lead Generation</option>
                  <option value="Dedicated Engineering Pods">Dedicated Engineering Pods</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label className="text-sm font-bold text-black/70">Strategic Brief</label>
              <textarea
                className="w-full bg-stone/30 border border-transparent focus:border-rust focus:bg-white transition-colors text-black rounded-lg px-4 py-3 text-[15px] outline-none resize-y min-h-[140px] placeholder:text-muted/50"
                placeholder="Detail your business bottleneck, target outcomes, timeline constraints, and how this investment translates to revenue..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
                maxLength={5000}
              />
            </div>

            <Magnet strength={0.4} className="w-full">
              <button
                className={`w-full py-4 rounded-lg font-medium text-white shadow-md transition-all ${
                  isSuccess ? 'bg-green-700' : isError ? 'bg-red-700' : 'bg-black hover:bg-rust'
                }`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Sending…' : isSuccess ? '✓ Brief Received' : isError ? '✕ Delivery Failed — Retry' : 'Dispatch Project Brief'}
              </button>
            </Magnet>
            <p className="mt-4 text-[9px] uppercase tracking-wider text-center text-muted w-full">
              {isError && errorText ? errorText : 'Briefs reviewed strictly within 12 business hours by senior architects.'}
            </p>
          </form>

        </div>
      </div>
    </main>
  );
}
