import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import useSEO from '../hooks/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Our Services | SaaS & AI Growth Systems',
    description: 'BytBrand offers elite web development, SaaS product development, AI automation, and growth systems to scale your business.',
    url: 'https://bytbrand.com/services'
  });

  return (
    <main className="page services-page">

      <FadeUp>
        <div className="page-header">
          <span className="eyebrow">Capabilities & Offerings</span>
          <h1>Systems built to <br />generate revenue.</h1>
          <p>
            We don't sell hours; we sell business outcomes. 
            From converting cold traffic to automating complex internal workflows, 
            our tightly integrated design and engineering teams build full-scale solutions 
            designed explicitly to capture market share.
          </p>
        </div>
      </FadeUp>

      {/* ── SERVICE 1: High-Converting Web Development ── */}
      <FadeUp>
        <div className="service-section" id="web-dev">
          <div>
            <div className="service-section-icon">⬡</div>
            <h2>High-Converting Web Development</h2>
            <p><strong>The Problem:</strong> Most websites are gorgeous digital brochures that completely fail to generate leads.</p>
            <p><strong>The Solution:</strong> We engineer landing pages and brand sites strictly optimized for conversion. Utilizing robust frameworks like Next.js, we guarantee instantaneous load times combined with psychological UI flows designed to capture users.</p>
            <p className="mb-6"><strong>The Outcome:</strong> Skyrocketed conversion rates, radically decreased bounce rates, and a measurable surge in high-quality pipeline volume.</p>
            <Link to="/case-studies" className="btn-ghost" style={{ padding: '10px 20px', fontSize: '13px' }}>View Web Projects →</Link>
          </div>
          <div className="service-img-placeholder" >
            <img loading="lazy" src="/images/srv_web.png" alt="Web Development"  />
          </div>
        </div>
      </FadeUp>

      {/* ── SERVICE 2: App Development ── */}
      <FadeUp>
        <div className="engineering-section" id="app-dev">
          <div className="service-img-placeholder" >
             <img loading="lazy" src="/images/srv_app_new.png" alt="App Development"  />
          </div>
          <div>
            <div className="service-section-icon">▣</div>
            <h2>Scalable Mobile & Web Apps</h2>
            <p><strong>The Problem:</strong> Developing mobile and cross-platform apps often leads to fragmented codebases and performance bottlenecks as user volume spikes.</p>
            <p><strong>The Solution:</strong> We deploy React Native and progressive web app (PWA) architectures backed by headless Node.js infrastructure. This ensures a unified codebase, butter-smooth native-like feel, and infinite scalability.</p>
            <p><strong>The Outcome:</strong> An incredibly sticky mobile experience that retains users, easily handles global traffic spikes, and drives recurring engagement.</p>
          </div>
        </div>
      </FadeUp>

      {/* ── SERVICE 3: AI Automation ── */}
      <FadeUp>
        <div className="service-section" id="ai-automation">
          <div>
            <div className="service-section-icon">◈</div>
            <h2>AI Automation & Integrations</h2>
            <p><strong>The Problem:</strong> Human capital is wasted on repetitive operational tasks and manual customer support, crushing profit margins.</p>
            <p><strong>The Solution:</strong> We seamlessly integrate custom LLM logic via the OpenAI and Vercel AI SDKs. From smart automated customer-success chatbots to complex internal data-parsing workflows, we bake AI directly into your systems.</p>
            <p><strong>The Outcome:</strong> Massive reduction in operational overhead, 24/7 intelligent customer interactions, and radically increased team bandwidth.</p>
          </div>
          <div className="service-img-placeholder" >
            <img loading="lazy" src="/images/srv_ai_new.png" alt="AI Automation"  />
          </div>
        </div>
      </FadeUp>

      {/* ── SERVICE 4: SaaS Product Development ── */}
      <FadeUp>
        <div className="engineering-section" id="saas-dev">
          <div className="service-img-placeholder" >
            <img loading="lazy" src="/images/srv_saas_new.png" alt="SaaS Product Development"  />
          </div>
          <div>
            <div className="service-section-icon">☁</div>
            <h2>SaaS Product Development</h2>
            <p><strong>The Problem:</strong> Founders get stuck in "Development Hell," missing launch windows and shipping clunky MVPs that churn early adopters.</p>
            <p><strong>The Solution:</strong> We execute full-cycle SaaS builds. We map the entire data pipeline, construct secure multi-tenant architectures, wire up complex billing systems (Stripe), and wrap it all in a frictionless React UI.</p>
            <p><strong>The Outcome:</strong> A secure, market-ready, enterprise-grade software product shipped fast, completely primed for explosive user acquisition.</p>
          </div>
        </div>
      </FadeUp>

      {/* ── SERVICE 5: UI/UX Design ── */}
      <FadeUp>
        <div className="service-section" id="ui-ux">
          <div>
            <div className="service-section-icon">✏</div>
            <h2>Strategic UI/UX Design</h2>
            <p><strong>The Problem:</strong> Generic interfaces cause intense friction; users instantly bounce when a product feels cheap, confusing, or untrustworthy.</p>
            <p><strong>The Solution:</strong> We enforce atomic design systems within Figma. Every typography choice, micro-interaction, and layout hierarchy is meticulously tested to ensure intuitive navigation and establish visual authority.</p>
            <p><strong>The Outcome:</strong> An incredibly premium brand aesthetic that immediately commands trust, drastically reducing drop-off rates and elevating your perceived market value.</p>
          </div>
          <div className="service-img-placeholder" >
            <img loading="lazy" src="/images/srv_uiux_new.png" alt="UI/UX Design Workflow"  />
          </div>
        </div>
      </FadeUp>

      {/* ── SERVICE 6: Growth Systems ── */}
      <FadeUp>
        <div className="engineering-section" id="growth">
          <div className="service-img-placeholder" >
            <img loading="lazy" src="/images/srv_growth_new.png" alt="Growth Funnel Pipelines"  />
          </div>
          <div>
            <div className="service-section-icon">📈</div>
            <h2>Growth Systems & Lead Generation</h2>
            <p><strong>The Problem:</strong> Great software without an integrated distribution pipeline is a ghost town. Startups struggle to trace exactly where users abandon the journey.</p>
            <p><strong>The Solution:</strong> We embed robust analytics, complex event tracking, and advanced SEO architectures straight into the codebase. We engineer dynamic marketing funnels that guide cold traffic strictly towards the checkout or lead-capture form.</p>
            <p><strong>The Outcome:</strong> Complete transparency over customer acquisition costs (CAC) and a systematic, automated engine generating a predictable flow of revenue.</p>
          </div>
        </div>
      </FadeUp>

      {/* ── WHY CHOOSE BYTBRAND ── */}
      <FadeUp>
        <div className="aesthetic-section mt-16">
          <span className="aesthetic-eyebrow">The Agency Advantage</span>
          <h2>Why Elite Brands Choose Us</h2>
          <div className="brand-craft-layout">
            <div className="brand-craft-grid">
              
              <div className="brand-craft-card">
                <div className="bc-icon">⚡</div>
                <h3>Unmatched Speed</h3>
                <p>
                  No bloated middle-management. You work directly with senior architects ensuring rapid execution rhythms and compressed launch timelines.
                </p>
              </div>

              <div className="brand-craft-card rust-card">
                <div className="bc-icon">✦✦</div>
                <h3>Design-First Philosophy</h3>
                <p>Features don't sell; experiences do. We enforce a zero-compromise approach to visual elegance and frictionless user workflows.</p>
              </div>

              <div className="brand-craft-card">
                <div className="bc-icon">📊</div>
                <h3>Business-Focused Builds</h3>
                <p>
                  Code is just a tool. Every technical decision we make is reverse-engineered entirely from your ultimate revenue and metric goals.
                </p>
              </div>

              <div className="brand-craft-card">
                <div className="bc-icon">▣</div>
                <h3>Scalable Architecture</h3>
                <p>
                  We don't build disposable MVPs. We engineer enterprise-ready infrastructure designed to support massive traffic surges as you scale.
                </p>
              </div>

            </div>
          </div>
        </div>
      </FadeUp>

      {/* ── Stamp Row ── */}
      <div className="stamp-row">
        <span className="stamp-text">Conversion</span>
        <span className="stamp-star">✦</span>
        <span className="stamp-text">Scale</span>
        <span className="stamp-star">✦</span>
        <span className="stamp-text">Automation</span>
      </div>

      {/* ── CTA BANNER ── */}
      <FadeUp delay="80ms">
        <div className="cta-banner" style={{ margin: '80px 0' }}>
          <h2>Ready to <span className="accent">Scale Your Systems?</span></h2>
          <p>
            Stop losing leads to poor interfaces and sluggish architecture. Partner with an agency that engineers digital dominance.
          </p>
          <Link to="/contact" className="btn-primary mt-6">Book Your Strategy Session</Link>
        </div>
      </FadeUp>

    </main>
  );
}
