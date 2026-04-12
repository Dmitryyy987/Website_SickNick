import { useParams, Navigate, Link } from 'react-router-dom';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import BorderGlow from '../components/reactbits/BorderGlow';
import Folder from '../components/reactbits/Folder';
import { projects } from '../data/projects';
import useSEO from '../hooks/useSEO';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useSEO({
    title: project ? `${project.title} | Technical Systems Case Study` : 'Case Study Not Found',
    description: project?.shortDescription || 'Case study not found',
    url: `https://bytbrand.com/case-study/${project?.slug || ''}`
  });

  if (!project) return <Navigate to="/case-studies" replace />;

  return (
    <main className="pt-24 min-h-screen bg-cream-soft px-4 sm:px-6 lg:px-8 pb-32">
      
      {/* ── CINEMATIC HEADER ── */}
      <section className="max-w-7xl mx-auto py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b border-border/40 pb-20">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rust block mb-8">Industrial Case Study —— {project.category}</span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-black leading-[0.85] mb-12">
              <BlurText text={project.title} delay={100} animateBy="words" direction="top" />
            </h1>
            <p className="text-xl md:text-2xl text-muted font-light leading-relaxed italic font-serif">
              "{project.tagline}"
            </p>
          </div>
          <div className="hidden lg:block pb-4">
             <div className="flex flex-col gap-2 text-right">
                <span className="font-mono text-[9px] tracking-widest text-muted uppercase">Core KPI</span>
                <span className="text-3xl font-bold text-rust tabular-nums">{project.result.split(';')[0]}</span>
             </div>
          </div>
        </div>
      </section>

      {/* ── ASYMMETRIC CONTENT GRID ── */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 py-20">
        
        {/* Sidebar: Technical Specs */}
        <div className="lg:col-span-4 space-y-12">
           <ScrollReveal delay={200}>
              <div className="glass-card p-8 border-rust/10 bg-rust/[0.02]">
                 <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust mb-8 pb-4 border-b border-rust/10">Technical Architecture</h4>
                 <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-white border border-border/40 rounded text-[9px] font-mono tracking-widest text-black uppercase">
                        {t}
                      </span>
                    ))}
                 </div>
              </div>
           </ScrollReveal>

           <ScrollReveal delay={300}>
              <div className="p-8">
                 <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-8 italic">The Objective</h4>
                 <p className="text-lg text-black font-medium leading-snug">
                   Revolutionizing procurement friction through reactive 3D logic and serverless edge automation.
                 </p>
              </div>
           </ScrollReveal>
        </div>

        {/* Main Content: Narrative */}
        <div className="lg:col-span-8 space-y-32">
           <ScrollReveal>
              <div className="space-y-8">
                 <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-black/20">01 // The Friction</span>
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-tight">
                   {project.problem}
                 </h2>
              </div>
           </ScrollReveal>

           <ScrollReveal delay={200}>
              <div className="space-y-8">
                 <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-rust/40">02 // The Shift</span>
                 <p className="text-xl md:text-3xl text-muted font-light leading-relaxed">
                   {project.shortDescription}
                 </p>
              </div>
           </ScrollReveal>
        </div>

      </section>

      {/* ── SYSTEM LOGIC (FOLDER INTEGRATION) ── */}
      <section className="max-w-7xl mx-auto py-32 mt-32 border-t border-border/40">
        <div className="flex flex-col lg:flex-row items-center gap-24">
           <div className="flex-1">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rust block mb-8">Architectural Analysis</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-none mb-10 italic font-serif">
                System Logic <br /> 
                <span className="text-rust not-italic">& Operations.</span>
              </h2>
              <p className="text-lg text-muted font-light leading-relaxed mb-12">
                {project.howItWorks}
              </p>
              <div className="glass-card p-6 border-rust/10 bg-rust/5">
                 <h5 className="font-mono text-[9px] tracking-widest text-rust uppercase mb-4">Scaling Intelligence</h5>
                 <p className="text-sm text-black italic leading-relaxed">
                   {project.scalability}
                 </p>
              </div>
           </div>

           <div className="flex-1 flex justify-center">
              <Folder 
                color="#884531" 
                size={1.4}
                items={[
                  <div key="1" className="image-placeholder w-full h-full" />,
                  <div key="2" className="p-10 flex flex-col justify-center h-full bg-white">
                     <h4 className="text-xl font-bold text-black mb-4">Strategic Challenges</h4>
                     <p className="text-[13px] text-muted leading-relaxed font-light">{project.challenges}</p>
                  </div>,
                  <div key="3" className="p-8 flex flex-col items-center justify-center h-full bg-black text-white text-center">
                      <span className="text-4xl font-bold mb-4 tabular-nums text-rust">{project.result.split(';')[1] || project.result}</span>
                      <span className="text-[9px] uppercase font-mono tracking-[0.3em] opacity-60">Outcome Delta</span>
                  </div>
                ]}
              />
           </div>
        </div>
      </section>

      {/* ── RECURSIVE CTA ── */}
      <section className="max-w-7xl mx-auto py-32 text-center mt-32 border-y border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone/20 -z-10" />
        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
          Ready to architect <br />
          <span className="text-rust italic font-serif">your system?</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
           <Magnet strength={0.4}>
              <BorderGlow borderRadius={16}>
                <Link to="/contact" className="inline-block bg-black text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-rust transition-all shadow-2xl menu-button">
                  Begin Strategic Inception ——
                </Link>
              </BorderGlow>
           </Magnet>
        </div>
      </section>

    </main>
  );
}
