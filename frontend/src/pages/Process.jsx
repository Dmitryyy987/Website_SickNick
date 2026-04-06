import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import useSEO from '../hooks/useSEO';

export default function ProcessPage() {
  useSEO({
    title: 'Our Process | Engineering Digital Growth',
    description: 'Learn how BytBrand architects, designs, and engineers scalable digital products from Discovery to Deployment.',
    url: 'https://bytbrand.com/process'
  });

  return (
    <main className="page services-page">
      <FadeUp>
        <div className="page-header">
          <span className="eyebrow">The Pipeline</span>
          <h1>Precision. <br />From day one.</h1>
          <p>
            We don't guess. We execute based on a battle-tested blueprint. 
            Our agile engineering pipeline ensures high transparency, rapid feedback loops, and 
            bulletproof code architecture designed to scale your business gracefully.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay="60ms">
        <div className="service-img-placeholder process-diagram mb-24">
          <img loading="lazy" src="/images/process_main.png" alt="Engineering Process Pipeline" />
        </div>
      </FadeUp>

      <div className="process-timeline">
        
        {/* Phase 1 */}
        <FadeUp>
          <div className="service-section" style={{ paddingTop: '0', paddingBottom: '60px', borderTop: 'none' }}>
            <div>
              <span className="eyebrow" style={{ fontSize: '14px', marginBottom: '8px' }}>Phase 01</span>
              <h2>Discovery Phase</h2>
              <p>
                <strong>What We Do:</strong> We audit your business model, trace customer pain points, and map the friction in your current software ecosystem.
              </p>
              <p>
                <strong>Tools / Tech Used:</strong> FigJam, Notion, Advanced Analytics, Stakeholder Workshops
              </p>
              <p>
                <strong>The Outcome:</strong> A ruthless clarity on features that actually move the revenue needle and a concrete definition of your Minimum Viable Product (MVP).
              </p>
            </div>
            <div className="flex items-center justify-center p-8 bg-border/20 rounded-md">
              <span className="text-[120px] font-mono text-rust opacity-20 leading-none">01</span>
            </div>
          </div>
        </FadeUp>

        {/* Phase 2 */}
        <FadeUp>
          <div className="service-section" style={{ padding: '60px 0' }}>
            <div>
              <span className="eyebrow" style={{ fontSize: '14px', marginBottom: '8px' }}>Phase 02</span>
              <h2>Planning & Architecture</h2>
              <p>
                <strong>What We Do:</strong> We blueprint the entire scalable system. We design database schemas, configure cloud infrastructure, and plan the API endpoints so they can handle enterprise-scale traffic.
              </p>
              <p>
                <strong>Tools / Tech Used:</strong> AWS, PostgreSQL schemas, Next.js App Router, Docker, Prisma
              </p>
              <p>
                <strong>The Outcome:</strong> A hardened technical roadmap ensuring ZERO technical debt and preventing costly structural rewrites down the line.
              </p>
            </div>
            <div className="flex items-center text-left pl-12 border-l border-border">
              <div>
                <span className="block text-rust font-mono text-sm mb-2">Systems Output</span>
                <p className="text-muted text-sm font-light leading-relaxed">
                  "Architecture dictates destiny. We secure your core data models so you can scale to millions of users without server latency."
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Phase 3 */}
        <FadeUp>
          <div className="service-section" style={{ padding: '60px 0' }}>
            <div>
              <span className="eyebrow" style={{ fontSize: '14px', marginBottom: '8px' }}>Phase 03</span>
              <h2>UI/UX Design</h2>
              <p>
                <strong>What We Do:</strong> We design the visual identity and interaction models. We produce high-fidelity prototypes and atomic design systems focusing heavily on user psychology and conversion optimization.
              </p>
              <p>
                <strong>Tools / Tech Used:</strong> Figma, Principle, Lottie, GSAP for interaction planning
              </p>
              <p>
                <strong>The Outcome:</strong> A breathtaking, pixel-perfect visual prototype that creates a massive perceived value and builds unshakeable user trust.
              </p>
            </div>
            <div className="flex items-center justify-center p-8 bg-border/20 rounded-md">
              <span className="text-[120px] font-mono text-rust opacity-20 leading-none">03</span>
            </div>
          </div>
        </FadeUp>

        {/* Phase 4 */}
        <FadeUp>
          <div className="service-section" style={{ padding: '60px 0' }}>
            <div>
              <span className="eyebrow" style={{ fontSize: '14px', marginBottom: '8px' }}>Phase 04</span>
              <h2>Development Phase</h2>
              <p>
                <strong>What We Do:</strong> We translate prototypes into functional React infrastructure. We write typed, modular code and hook into secure Node.js backends.
              </p>
              <p>
                <strong>Tools / Tech Used:</strong> React, Next.js, Node.js, TypeScript, Tailwind CSS, Stripe integration
              </p>
              <p>
                <strong>The Outcome:</strong> High-performance, SEO-optimized application code executing precisely as architected, passing Core Web Vitals checks.
              </p>
            </div>
            <div className="flex items-center text-left pl-12 border-l border-border">
              <div>
                <span className="block text-rust font-mono text-sm mb-2">Sprint Cadence</span>
                <p className="text-muted text-sm font-light leading-relaxed">
                  "Development operates in tight 2-week iterations. You preview staging environments frequently, guaranteeing zero surprises upon launch."
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Phase 5 */}
        <FadeUp>
          <div className="service-section" style={{ padding: '60px 0' }}>
            <div>
              <span className="eyebrow" style={{ fontSize: '14px', marginBottom: '8px' }}>Phase 05</span>
              <h2>Testing & QA</h2>
              <p>
                <strong>What We Do:</strong> We relentlessly attempt to break what we've built. We run end-to-end testing, simulate traffic spikes, and ensure compatibility across every modern browser and device.
              </p>
              <p>
                <strong>Tools / Tech Used:</strong> Cypress, Jest, Vercel Previews, BrowserStack
              </p>
              <p>
                <strong>The Outcome:</strong> A virtually bug-free interface preventing you from losing money due to broken checkout flows or edge-case crashes.
              </p>
            </div>
            <div className="flex items-center justify-center p-8 bg-border/20 rounded-md">
              <span className="text-[120px] font-mono text-rust opacity-20 leading-none">05</span>
            </div>
          </div>
        </FadeUp>

        {/* Phase 6 */}
        <FadeUp>
          <div className="service-section" style={{ padding: '60px 0' }}>
            <div>
              <span className="eyebrow" style={{ fontSize: '14px', marginBottom: '8px' }}>Phase 06</span>
              <h2>Deployment</h2>
              <p>
                <strong>What We Do:</strong> We transition the codebase from staging to live production. We configure automated CI/CD pipelines, SSL certificates, and set up the DNS.
              </p>
              <p>
                <strong>Tools / Tech Used:</strong> Vercel, AWS ECS, GitHub Actions, Cloudflare
              </p>
              <p>
                <strong>The Outcome:</strong> A flawless, zero-downtime launch sequence securely distributing your product across global Edge networks.
              </p>
            </div>
            <div className="flex items-center text-left pl-12 border-l border-border">
              <div>
                <span className="block text-rust font-mono text-sm mb-2">Edge Delivery</span>
                <p className="text-muted text-sm font-light leading-relaxed">
                  "Your code gets cached at global CDNs. Whether your client is in London or Tokyo, the system delivers milliseconds-fast loading."
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Phase 7 */}
        <FadeUp>
          <div className="service-section" style={{ padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
            <div>
              <span className="eyebrow" style={{ fontSize: '14px', marginBottom: '8px' }}>Phase 07</span>
              <h2>Scaling & Growth Support</h2>
              <p>
                <strong>What We Do:</strong> Launch is only day one. We stay integrated post-launch, analyzing real user telemetry, optimizing A/B tests, scaling servers, and shipping new features entirely informed by data.
              </p>
              <p>
                <strong>Tools / Tech Used:</strong> PostHog, Google Analytics, Sentry, Stripe Billing
              </p>
              <p>
                <strong>The Outcome:</strong> Compounding momentum. Your application evolves dynamically to capture more market share without collapsing under the weight of its own success.
              </p>
            </div>
            <div className="flex items-center justify-center p-8 bg-border/20 rounded-md">
              <span className="text-[120px] font-mono text-rust opacity-20 leading-none">07</span>
            </div>
          </div>
        </FadeUp>

      </div>

      <FadeUp delay="80ms">
        <div className="cta-banner" style={{ margin: '80px 0 0' }}>
          <h2>Execute Your <span className="accent">Vision</span></h2>
          <p>We deploy senior engineering teams to build products for companies prioritizing speed and uncompromising quality.</p>
          <Link to="/contact" className="btn-primary mt-6">Contact the Agency</Link>
        </div>
      </FadeUp>

    </main>
  );
}
