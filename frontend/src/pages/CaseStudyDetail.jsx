import { useParams, Navigate, Link } from 'react-router-dom';
import FadeUp from '../components/common/FadeUp';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import { projects } from '../data/projects';
import useSEO from '../hooks/useSEO';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useSEO({
    title: project ? `${project.title} | Case Study` : 'Case Study Not Found',
    description: project?.shortDescription || 'Case study not found',
    url: `https://bytbrand.com/case-study/${project?.slug || ''}`
  });

  if (!project) return <Navigate to="/case-studies" replace />;

  return (
    <main className="pt-16 min-h-screen bg-cream-soft">
      {/* ── COVER IMAGE SHOWCASE ── */}
      <section className="w-full aspect-[21/9] max-h-[65vh] relative bg-stone overflow-hidden border-b border-border flex items-center justify-center">
        <img src={`/images/cs_${project.slug}_new.png`} alt={`${project.title} Interface`} loading="lazy" className="w-full h-full object-cover object-center" />
      </section>

      {/* ── HERO METRICS ── */}
      <section className="max-w-5xl mx-auto -mt-20 relative z-10 px-4 sm:px-6 lg:px-8 mb-24">
        <FadeUp>
          <div className="bg-white p-8 md:p-16 rounded-2xl shadow-xl border border-border">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase block mb-4" style={{ color: project.color || 'var(--color-rust)' }}>{project.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.05] mb-4">
              <BlurText text={project.title} delay={150} animateBy="words" direction="top" />
            </h1>
            <ScrollReveal baseOpacity={0} blurStrength={10}>
              <p className="font-serif italic text-2xl text-muted max-w-3xl mb-12">{project.tagline}</p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-8 border-t border-border">
              <div className="md:col-span-1">
                <span className="block font-mono text-[10px] tracking-[0.12em] uppercase text-muted mb-2">Technology Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map(t => (
                    <span key={t} className="bg-stone text-muted font-mono tracking-wider border border-border/50 uppercase rounded px-2 py-1 text-[9px]">
                      {t}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <div className="mt-8">
                    <span className="block font-mono text-[10px] tracking-[0.12em] uppercase text-muted mb-2">Live Link</span>
                    <a href={project.link} target="_blank" rel="noreferrer" className="font-semibold text-[15px] text-black underline hover:text-rust transition-colors">
                      {project.link.replace('https://', '')}
                    </a>
                  </div>
                )}
              </div>
              <div className="md:col-span-3">
                <span className="block font-mono text-[10px] tracking-[0.12em] uppercase text-muted mb-2">Business Outcome</span>
                <div className="mt-2 text-3xl font-mono font-bold leading-none" style={{ color: project.color || 'var(--color-rust)' }}>
                  {project.result}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── OVERVIEW & SOLUTION ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div className="md:col-span-1">
            <FadeUp>
              <h2 className="text-rust text-2xl font-bold mb-6">The Friction</h2>
              <p className="text-lg leading-relaxed text-black/80 font-light">{project.problem}</p>
            </FadeUp>
          </div>
          <div className="md:col-span-2">
            <FadeUp delay="100ms">
              <h2 className="text-black text-2xl font-bold mb-6">Architectural Shift</h2>
              <p className="text-lg leading-relaxed text-black/80 font-light">{project.shortDescription}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── DEEP DIVE (How It Works & Challenges) ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="border-t border-border pt-16 mt-8">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase block mb-5" style={{ color: project.color || 'var(--color-rust)' }}>Systems Overview</span>
                <h2 className="text-2xl font-bold text-black">How It Works</h2>
              </div>
              <div className="md:col-span-2">
                <p className="leading-relaxed text-muted font-light text-lg">{project.howItWorks}</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="border-t border-border pt-16 mt-16">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-black/40 block mb-5">Bottlenecks</span>
                <h2 className="text-2xl font-bold text-black">Challenges Solved</h2>
              </div>
              <div className="md:col-span-2">
                <p className="leading-relaxed text-muted font-light text-lg">{project.challenges}</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="border-t border-border pt-16 mt-16 pb-24">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-black/40 block mb-5">Future-Proofing</span>
                <h2 className="text-2xl font-bold text-black">Scalability Approach</h2>
              </div>
              <div className="md:col-span-2">
                <p className="leading-relaxed text-muted font-light text-lg">{project.scalability}</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-stone text-center px-4 py-12 md:py-16 border-t border-border mt-12 block">
        <FadeUp>
          <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-rust block mb-5">Dominate Your Category</span>
          <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight leading-[1.1] mb-10 max-w-2xl mx-auto">
            <BlurText text="Ready to architect your digital advantage?" delay={100} animateBy="words" direction="top" />
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Magnet strength={0.5}>
              <Link to="/contact" className="inline-block bg-rust text-white px-8 py-3 rounded-lg font-medium hover:bg-rust-light transition-colors w-full sm:w-auto text-center">
                Book a Call
              </Link>
            </Magnet>
            <Magnet strength={0.5}>
              <Link to="/case-studies" className="inline-block bg-transparent text-black border border-black/10 px-8 py-3 rounded-lg font-medium hover:bg-black/5 transition-colors w-full sm:w-auto text-center">
                View All Systems
              </Link>
            </Magnet>
          </div>
        </FadeUp>
      </section>
    </main>
  );
}
