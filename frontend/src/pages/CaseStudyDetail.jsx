import { useParams, Link, Navigate } from 'react-router-dom';
import FadeUp from '../components/FadeUp';
import { projects } from '../data/projects';
import useSEO from '../hooks/useSEO';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useSEO({
<<<<<<< HEAD
    title: project ? `${project.title} | Case Study` : 'Case Study Not Found',
    description: project?.shortDescription || 'Case study not found',
    url: `https://bytbrand.com/case-study/${project?.slug || ''}`
=======
    title: project ? `${project.title} | Case Study` : 'Case Study',
    description: project?.shortDescription ?? '',
    url: `https://bytbrand.com/case-study/${slug}`
>>>>>>> 041cb3bed71f23a195b5f975d6d8f674a804082a
  });

  if (!project) return <Navigate to="/case-studies" replace />;

  return (
    <main className="cs-detail-page">
      {/* ── COVER IMAGE SHOWCASE ── */}
      <section className="cs-cover">
        <img src={`/images/cs_${project.slug}_new.png`} alt={`${project.title} Interface`} loading="lazy"  />
      </section>

      {/* ── HERO METRICS ── */}
      <section className="cs-hero">
        <FadeUp>
          <div className="cs-hero-card">
            <span className="eyebrow block mb-4" style={{ color: project.color || 'var(--rust)' }}>{project.category}</span>
            <h1>{project.title}</h1>
            <p className="cs-tagline">{project.tagline}</p>
            
            <div className="cs-metrics-grid mt-12 pt-8 border-t border-border">
              <div>
                <span className="cs-metric-label">Technology Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                
                {project.link && (
                  <div className="mt-6">
                    <span className="cs-metric-label">Live Link</span>
                    <a href={project.link} target="_blank" rel="noreferrer" className="cs-client-name underline hover:text-rust transition-colors">{project.link.replace('https://', '')}</a>
                  </div>
                )}
              </div>
              <div>
                <span className="cs-metric-label">Business Outcome</span>
                <div className="cs-metrics-row mt-2">
                   <span className="cs-metric-val leading-none" style={{ color: project.color || 'var(--rust)', fontSize: '28px' }}>
                    {project.result}
                   </span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── OVERVIEW & SOLUTION ── */}
      <section className="cs-content pb-0">
        <div className="cs-content-grid">
          <div>
            <FadeUp>
              <h2 className="text-rust">The Friction</h2>
              <p className="text-lg">{project.problem}</p>
            </FadeUp>
          </div>
          <div>
            <FadeUp delay="100ms">
              <h2>Architectural Shift</h2>
              <p>{project.shortDescription}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE (How It Works & Challenges) ── */}
      <section className="cs-content pt-12">
        <div className="border-t border-border pt-16 mt-8">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="col-span-1">
                <span className="cs-process-label" style={{ color: project.color || 'var(--rust)' }}>Systems Overview</span>
                <h2>How It Works</h2>
              </div>
              <div className="col-span-2">
                <p className="leading-relaxed text-muted font-light">{project.howItWorks}</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="border-t border-border pt-16 mt-16">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="col-span-1">
                <span className="cs-process-label text-black/40">Bottlenecks</span>
                <h2>Challenges Solved</h2>
              </div>
              <div className="col-span-2">
                <p className="leading-relaxed text-muted font-light">{project.challenges}</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="border-t border-border pt-16 mt-16 pb-16">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="col-span-1">
                <span className="cs-process-label text-black/40">Future-Proofing</span>
                <h2>Scalability Approach</h2>
              </div>
              <div className="col-span-2">
                <p className="leading-relaxed text-muted font-light">{project.scalability}</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cs-next">
        <FadeUp>
          <span className="cs-next-eyebrow">Dominate Your Category</span>
          <h2>Ready to architect your digital advantage?</h2>
          <div className="cs-next-buttons mt-8">
            <Link to="/contact" className="btn-primary">Book a Call</Link>
            <Link to="/case-studies" className="btn-ghost">View All Systems</Link>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
