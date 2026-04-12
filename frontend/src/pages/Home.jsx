import { Link } from 'react-router-dom';
import LogoLoop from '../components/reactbits/LogoLoop';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import BorderGlow from '../components/reactbits/BorderGlow';
import Folder from '../components/reactbits/Folder';
import useSEO from '../hooks/useSEO';
import { useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { projects } from '../data/projects';

// Lazy load complex animation components for performance
const ImageTrail = lazy(() => import('../components/reactbits/ImageTrail'));

export default function Home() {
  const rootRef = useRef();

  useGSAP(() => {
    // Elegant Hero Entrance
    gsap.from('.hero-content > *', {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    });

    gsap.from('.hero-visual', {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.8
    });
  }, { scope: rootRef });

  useSEO({
    title: 'Precision SaaS Engineering Agency',
    description: 'BytBrand engineers scalable digital ecosystems for high-growth startups and enterprise partners.',
    url: 'https://bytbrand.com/'
  });

  return (
    <main ref={rootRef} className="pt-24 min-h-screen bg-cream-soft overflow-x-hidden">

      {/* ── SECTION 1: HERO (SPLIT) ── */}
      <section className="section-container min-h-[80vh] flex flex-col lg:flex-row items-center gap-20 py-20">
        <div className="hero-content flex-1 text-left">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rust block mb-8">System Architecture —— 2026</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10">
            <BlurText text="Engineer The" delay={150} animateBy="words" direction="top" /> 
            <span className="text-rust italic font-serif">Standard.</span>
          </h1>
          <p className="text-xl text-muted font-light max-w-xl leading-relaxed mb-12">
            We design and engineer high-performance SaaS platforms that eliminate technical 
            friction and drive compounding business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <BorderGlow borderRadius={12}>
               <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-rust transition-all menu-button">
                 Initialize Project ——
               </Link>
            </BorderGlow>
            <Magnet strength={0.3}>
               <Link to="/case-studies" className="inline-block border border-black/10 px-8 py-3 rounded-lg font-bold text-black hover:bg-black/5 transition-all menu-button">
                 Explore Systems
               </Link>
            </Magnet>
          </div>
        </div>
        
        <div className="hero-visual flex-1 relative w-full aspect-square">
           <div className="absolute inset-0 bg-rust/5 rounded-full blur-[120px] animate-pulse" />
           <Suspense fallback={<div className="w-full h-full bg-stone/20 rounded-3xl animate-pulse" />}>
              <ImageTrail items={[]} variant={3}>
                 <div className="glass-card w-full h-full p-6 flex items-center justify-center overflow-hidden border-rust/10">
                    <div className="image-placeholder w-full h-full" />
                 </div>
              </ImageTrail>
           </Suspense>
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <section className="border-y border-border/40 py-12 bg-white/30 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap min-w-full gap-20">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="h-8 w-32 bg-black/5 rounded-md flex-shrink-0" />
           ))}
        </div>
      </section>

      {/* ── ZIG-ZAG SECTIONS ── */}
      
      {/* 01: Engineering */}
      <section className="py-32 section-container">
        <ScrollReveal baseOpacity={0} blurStrength={10}>
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-last lg:order-first">
               <div className="glass-card aspect-[4/3] w-full flex items-center justify-center p-8 bg-rust/5 relative">
                  <span className="text-[200px] font-bold text-rust/5 select-none">ARCHITECTURE</span>
                  <div className="image-placeholder absolute w-[80%] h-[60%] shadow-3xl" />
               </div>
            </div>
            <div className="flex-1">
               <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust block mb-6 px-4 py-1.5 border border-rust/10 w-fit rounded-full">01. Engineering</span>
               <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-8 leading-tight">
                 Scalable Infrastructure <br />
                 <span className="italic font-serif font-medium text-rust">Built for Performance.</span>
               </h2>
               <p className="text-lg text-muted font-light leading-relaxed mb-10 max-w-lg">
                 We architect zero-latency cloud ecosystems that scale effortlessly with your user-base, 
                 ensuring your product remains fast, secure, and reliable globally.
               </p>
               <Link to="/services" className="text-black font-bold border-b border-rust/40 pb-1 hover:text-rust transition-colors uppercase tracking-widest text-xs">Analyze Technical Stack ——</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 02: Design */}
      <section className="py-32 bg-stone/10">
        <div className="section-container">
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                 <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust block mb-6 px-4 py-1.5 border border-rust/10 w-fit rounded-full">02. Design Architecture</span>
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-8 leading-tight">
                   Interfaces That <br />
                   <span className="italic font-serif font-medium text-rust">Drive Conversion.</span>
                 </h2>
                 <p className="text-lg text-muted font-light leading-relaxed mb-10 max-w-lg">
                   Our design philosophy bridges technical precision with high-fidelity visual storytelling. 
                   We build interfaces that don't just look premium—they convert.
                 </p>
                 <Link to="/services" className="text-black font-bold border-b border-rust/40 pb-1 hover:text-rust transition-colors uppercase tracking-widest text-xs">Explore Design Logic ——</Link>
              </div>
              <div className="flex-1">
                 <div className="glass-card aspect-[4/3] w-full flex items-center justify-center p-8 bg-black">
                    <div className="image-placeholder w-full h-full opacity-60" />
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CASE STUDIES (FOLDER COMPONENT) ── */}
      <section className="py-32 section-container overflow-hidden">
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-black leading-none mb-6">
            Elite <span className="italic font-serif font-medium text-rust">Cases.</span>
          </h2>
          <p className="text-lg text-muted font-light max-w-xl">
             A high-level view of the systems we've shipped for market leaders 
             and innovative startups across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="flex flex-col items-center">
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
                <div className="text-center mt-12">
                   <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                   <p className="text-sm text-muted mb-6 px-4">{project.tagline}</p>
                   <Link to={`/case-study/${project.slug}`} className="text-xs font-bold uppercase tracking-widest text-rust hover:text-black transition-colors">Analyze Case ——</Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FINAL CTAs ── */}
      <section className="py-32 section-container border-t border-border/40">
        <div className="glass-panel p-16 md:p-32 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rust/10 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none" />
          <h2 className="relative z-10 text-4xl md:text-7xl font-bold tracking-tighter text-black leading-none mb-10">
            Ready to initialize <br />
            <span className="italic font-serif font-medium text-rust">your system?</span>
          </h2>
          <BorderGlow borderRadius={16} className="relative z-10 inline-block">
             <Link to="/contact" className="inline-block bg-black text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-rust transition-all menu-button">
               Initialize Partner Discovery ——
             </Link>
          </BorderGlow>
        </div>
      </section>

    </main>
  );
}
