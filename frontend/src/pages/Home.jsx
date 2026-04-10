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
          <span className="eyebrow hero-eyebrow">Enterprise-Grade Performance</span>
          <h1>
            We build systems<br />
            that generate leads<br />
            <span className="accent">&amp; scale yours.</span>
          </h1>
          <p className="hero-body">
            BytBrand is a modern digital agency that turns ambitious concepts into production-ready growth engines. 
            High-converting websites, scalable SaaS applications, and AI integrations designed for businesses that demand results.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Book a Discovery Call</Link>
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
            <h2>Architecture for <span className="text-rust">Growth</span></h2>
            <p>
              We don't just build websites; we engineer revenue-generating digital infrastructure.
              By combining high-end editorial design, relentless performance optimization, and custom AI solutions, 
              we construct scalable ecosystems that automate tasks, capture leads, and dominate your category.
            </p>
          </div>
          <Link to="/services" className="view-all-link">View our methodology ——</Link>
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
          <h2>Time to Build Your <span className="accent">Digital Advantage</span></h2>
          <p>
            We deploy dedicated senior engineering teams for brands requiring absolute precision. 
            Stop settling for generic templates. Let's engineer a system built strictly for conversion and scale.
          </p>
          <Link to="/contact" className="btn-primary mt-4">Start a Project</Link>
        </div>
      </FadeUp>

    </main>
  );
}
