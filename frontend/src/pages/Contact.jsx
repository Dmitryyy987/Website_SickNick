import { useState } from 'react';
import useSEO from '../hooks/useSEO';

const EMPTY_FORM = { name: '', email: '', projectType: '', message: '' };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

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
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData(EMPTY_FORM);
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError   = status === 'error';

  return (
    <main className="page contact-page">
      <div className="contact-grid">

        {/* ── LEFT ── */}
        <div>
          <span className="eyebrow text-rust">Direct Access</span>
          <h1 className="contact-h1" style={{ fontSize: 'clamp(44px, 5.5vw, 68px)' }}>
            <span>Architect</span>
            <span>your</span>
            <span className="accent">market</span>
            <span className="accent">advantage.</span>
          </h1>
          <p className="contact-sub text-[16px] max-w-md">
            Whether you require a high-converting web platform, a complex SaaS workflow integration,
            or enterprise-grade AI automation pipelines—our engineering team is ready to execute.
          </p>

          <div className="contact-card mt-12 bg-white hover:shadow-lg transition-shadow">
            <div className="contact-card-content">
              <span className="eyebrow" style={{ marginBottom: '4px' }}>Discovery Phase</span>
              <h3>Technical Brief Review</h3>
              <p>A rigorous 30-minute system evaluation outlining a roadmap to unblock your bottlenecks and scale revenue.</p>
            </div>
            <span className="contact-card-arrow text-2xl">→</span>
          </div>

          <div className="contact-card bg-transparent border-transparent px-0 hover:border-transparent cursor-default">
            <div className="contact-card-content">
              <span className="eyebrow" style={{ marginBottom: '8px' }}>Global Presence</span>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-semibold tracking-wide hover:underline cursor-none">LinkedIn</a>
                <span className="social-sep">·</span>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="font-semibold tracking-wide hover:underline cursor-none">GitHub</a>
                <span className="social-sep">·</span>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="font-semibold tracking-wide hover:underline cursor-none">X/Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: FORM ── */}
        <form
          className="contact-form mt-8 md:mt-0 bg-white p-8 md:p-12 rounded-lg border border-border shadow-sm"
          onSubmit={handleSubmit}
          noValidate
        >
          <h3 className="font-sans font-bold text-xl mb-6">Initialize Communication</h3>
          <div className="form-row-2col">
            <div className="form-group">
              <label className="form-label font-bold text-black/70">Full Name</label>
              <input
                className="form-input bg-stone/30"
                placeholder="Ex. Jane Doe"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength={2}
                maxLength={80}
              />
            </div>
            <div className="form-group">
              <label className="form-label font-bold text-black/70">Email Address</label>
              <input
                className="form-input bg-stone/30"
                type="email"
                placeholder="director@company.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group mt-2">
            <label className="form-label font-bold text-black/70">Scope of Operation</label>
            <div className="select-wrapper">
              <select
                className="form-select bg-stone/30"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="">Select Framework...</option>
                <option value="High-Converting Web Platform">High-Converting Web Platform</option>
                <option value="SaaS Architecture & UI">SaaS Architecture &amp; UI</option>
                <option value="AI Ecosystem Automation">AI Ecosystem Automation</option>
                <option value="Enterprise Lead Generation">Enterprise Lead Generation</option>
                <option value="Dedicated Engineering Pods">Dedicated Engineering Pods</option>
              </select>
              <svg className="select-caret" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>

          <div className="form-group mt-2">
            <label className="form-label font-bold text-black/70">Strategic Brief</label>
            <textarea
              className="form-textarea bg-stone/30"
              placeholder="Detail your business bottleneck, target outcomes, timeline constraints, and how this investment translates to revenue..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              maxLength={5000}
            />
          </div>

          <button
            className={`btn-submit shadow-md mt-4${isSuccess ? ' bg-green-800' : isError ? ' bg-red-700' : ''}`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Sending…' : isSuccess ? '✓ Brief Received' : isError ? '✕ Delivery Failed — Retry' : 'Dispatch Project Brief'}
          </button>
          <p className="form-note opacity-80 mt-3 text-[9px] uppercase tracking-wider text-center w-full">Briefs reviewed strictly within 12 business hours by senior architects.</p>
        </form>

      </div>
    </main>
  );
}
