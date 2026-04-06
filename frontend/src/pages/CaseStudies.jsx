import { Link } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import { projects } from '../data/projects';
import useSEO from '../hooks/useSEO';

export default function CaseStudies() {
  useSEO({
    title: 'Our Work | SaaS & AI Case Studies',
    description: 'Explore the high-converting digital systems, Web apps, and AI automations engineered by BytBrand.',
    url: 'https://bytbrand.com/case-studies'
  });

  return (
    <main className="page case-studies-page">

      <FadeUp>
        <div className="portfolio-header">
          <div>
            <span className="eyebrow">Proven Execution</span>
            <h1>
              <span>Digital</span>
              <span>Dominance.</span>
            </h1>
          </div>
          <div className="portfolio-header-right">
            <p>
              We don't showcase mockups; we showcase shipped revenue-generating systems.
              Below are select architectures and products we've engineered to help our partners
              acquire more users, slash operational costs, and dominate their niches.
            </p>
          </div>
        </div>
      </FadeUp>

      <FadeUp delay="80ms">
        <div className="portfolio-grid">
          {projects.map(project => (
            <Link to={`/case-study/${project.slug}`} key={project.slug} className="portfolio-card block group" style={{ cursor: 'none' }}>
              <div className="portfolio-thumb relative bg-stone overflow-hidden border-b border-border">
                <img src={`/images/cs_${project.slug}_new.png`} alt={`${project.title} Interface`} loading="lazy"  />
              </div>
              
              <div className="portfolio-card-body pb-8 flex flex-col h-full bg-cream-soft group-hover:bg-warm-white transition-colors duration-300">
                <span className="portfolio-card-eyebrow">{project.category}</span>
                <div className="portfolio-card-header mb-4 flex-col md:flex-row">
                  <div className="flex-1">
                    <h3>{project.title}</h3>
                    <p className="mt-2 text-muted leading-relaxed font-light text-sm pr-4">
                      {project.shortDescription}
                    </p>
                  </div>
                  
                  {/* Tags mapping to tech */}
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-start md:justify-end shrink-0 md:max-w-[140px]">
                    {project.tech.map((t, idx) => (
                       <span key={idx} className="tag bg-white shadow-sm" style={{ padding: '2px 8px', fontSize: '8px' }}>{t}</span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between text-rust font-mono text-[9px] uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Analyze Case Study</span>
                  <span className="text-[12px] leading-none">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay="80ms">
        <div className="cta-banner" style={{ margin: '80px 0' }}>
          <h2>Ready for your interface to <span className="accent">start converting?</span></h2>
          <p>Join these brands in deploying elite-level software platforms built entirely to scale your revenue stream.</p>
          <Link to="/contact" className="btn-primary mt-4">Get Your Product Built</Link>
        </div>
      </FadeUp>

    </main>
  );
}
