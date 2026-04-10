import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import FadeUp from '../components/FadeUp';
import useSEO from '../hooks/useSEO';

// SVG removed, using AI-generated asset

export default function Home() {
  useSEO({
    title: 'High-Converting SaaS Agency',
    description: 'BytBrand is a modern SaaS-focused technology agency building scalable web apps, mobile apps, and AI automation systems.',
    url: 'https://bytbrand.com/'
  });

  return (
    <main className="page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-left">
          <span className="eyebrow hero-eyebrow">Digital SaaS Agency</span>
          <h1>
            We design and build<br />
            SaaS products that<br />
            <span className="accent">drive measurable growth.</span>
          </h1>
          <p className="hero-body">
            BytBrand is a full-stack digital SaaS agency helping teams launch, optimize, and scale modern products.
            We combine product strategy, engineering, and AI automation to deliver platforms that improve activation,
            retention, and revenue.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Book a Strategy Call</Link>
            <Link to="/case-studies" className="btn-ghost">View Case Studies →</Link>
          </div>
        </div>
        <div className="hero-image" >
          <img 
            src="/images/home_hero_new.png" 
            alt="BytBrand SaaS Dashboard and AI Systems" 
            loading="eager"
             
          />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── SERVICES INTRO ── */}
      <FadeUp>
        <div className="services-intro">
          <div className="services-intro-left">
            <h2>Built for <span className="text-rust">SaaS Outcomes</span></h2>
            <p>
              We build the core systems that SaaS companies rely on: conversion-focused web experiences,
              robust product architecture, and automation that reduces operational drag.
              Every engagement is aligned to clear business metrics and long-term product velocity.
            </p>
          </div>
          <Link to="/services" className="view-all-link">Explore our services ——</Link>
        </div>
      </FadeUp>

      {/* ── SERVICE CARDS 2×2 ── */}
      <FadeUp delay="80ms">
        <div className="services-grid">

          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon">⬡</div>
            <h3>SaaS & Web App Development</h3>
            <p>
              Performant, resilient, and infinitely scalable web applications built on Next.js, React, and Node.js. 
              We engineer complex platforms that deliver butter-smooth UX and bulletproof security.
            </p>
            <div className="service-tags">
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>

          {/* Card 2 — Featured stat */}
          <div className="service-card featured">
            <div className="service-icon mb-4 block" style={{ fontSize: '24px' }}>◈</div>
            <h3>AI Automation Systems</h3>
            <p>
              Deploy LLM-powered chatbots, intelligent internal workflows, and seamless tool integrations. 
              We build systems that slash manual operations and unlock exponential bandwidth for your team.
            </p>
            <div className="service-tags mt-auto pt-6">
              <span className="tag opacity-80 border-white/20 bg-black/20 text-white">OpenAI</span>
              <span className="tag opacity-80 border-white/20 bg-black/20 text-white">Vercel AI SDK</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon">▤</div>
            <h3>High-Converting Web Design</h3>
            <p>
              Landing pages and corporate websites engineered as elite sales tools. We utilize psychological design principles, 
              cinematic visuals, and GSAP micro-animations to command attention and skyrocket conversions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Growth & Lead Generation</h3>
            <p>
              We integrate analytics pipelines, dynamic marketing funnels, and structured SEO frameworks directly into the codebase. 
              Your product launches with the fundamental hooks to capture and nurture every visitor.
            </p>
          </div>

        </div>
      </FadeUp>

      {/* ── CTA BANNER ── */}
      <FadeUp delay="80ms">
        <div className="cta-banner">
          <h2>Ready to Scale Your <span className="accent">SaaS Product?</span></h2>
          <p>
            Partner with a senior team that can ship your roadmap faster, improve product quality,
            and build the technical foundation required for sustainable growth.
          </p>
          <Link to="/contact" className="btn-primary mt-4">Start Your Project</Link>
        </div>
      </FadeUp>

    </main>
  );
}
