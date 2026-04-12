import { useRef } from 'react';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import BlurText from '../components/reactbits/BlurText';
import Magnet from '../components/reactbits/Magnet';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function ProcessPage() {
  const rootRef = useRef();

  useSEO({
    title: 'Precision Protocol | Our Engineering Process',
    description: 'Explore the BytBrand protocol—a rigorous, architectural approach to designing and engineering world-class SaaS products.',
    url: 'https://bytbrand.com/process'
  });

  const steps = [
    {
      id: "01",
      title: "Strategic Extraction",
      subtitle: "The Inception Phase",
      desc: "We dive deep into your business logic, extracting core engineering requirements and aligning technical strategy with market objectives. This is where the blueprint for scale is born.",
      image: "/images/srv_growth_new.png",
      metrics: ["Logic Mapping", "Technical Roadmap", "ROI Projection"]
    },
    {
      id: "02",
      title: "System Architecture",
      subtitle: "The Foundation Phase",
      desc: "Our engineers design a resilient, high-performance architecture optimized for your specific data-flow needs. We prioritize zero-latency and effortless horizontal scaling from day one.",
      image: "/images/srv_ai_new.png",
      metrics: ["Cloud Strategy", "DB Normalization", "Security Hardening"]
    },
    {
      id: "03",
      title: "High-Fidelity Engineering",
      subtitle: "The Development Phase",
      desc: "We translate the architectural blueprint into production-grade code. Using a sophisticated modern stack, we build systems that are as technically sound as they are visually stunning.",
      image: "/images/srv_app_new.png",
      metrics: ["Rapid Iteration", "CI/CD Integration", "Unit/E2E Testing"]
    },
    {
      id: "04",
      title: "Global Deployment",
      subtitle: "The Scaling Phase",
      desc: "Your system is launched into a globally distributed production environment. We monitor every telemetry point to ensure 99.9% availability and peak performance across all regions.",
      image: "/images/srv_uiux_new.png",
      metrics: ["Asset Optimization", "Global CDN", "Performance Monitoring"]
    }
  ];

  return (
    <main ref={rootRef} className="pt-32 min-h-screen bg-cream-soft px-4 sm:px-6 lg:px-8 pb-32">
      
      {/* ── HEADER ── */}
      <section className="max-w-7xl mx-auto mb-32 text-center lg:text-left">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-rust block mb-8">Protocol Architecture —— 2026</span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black leading-[0.9] mb-12">
          <BlurText text="The Precision" delay={150} animateBy="words" direction="top" /> 
          <span className="text-rust italic font-serif">Protocol.</span>
        </h1>
        <p className="text-xl text-muted font-light max-w-2xl leading-relaxed">
           A rigorous, outcome-driven engineering framework designed to convert 
           complex ideas into scalable, production-grade SaaS ecosystems.
        </p>
      </section>

      {/* ── STEPS (ARCHITECTURAL SPLIT) ── */}
      <div className="max-w-7xl mx-auto space-y-32">
        {steps.map((step, idx) => (
          <ScrollReveal key={step.id} delay={idx * 100}>
            <div className={`flex flex-col lg:flex-row items-center gap-20 py-16 border-t border-border/40 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Visual Side */}
              <div className="flex-1 w-full">
                <div className="glass-card aspect-video w-full p-4 bg-rust/5 relative group overflow-hidden border-rust/10">
                   <div className="absolute inset-0 bg-rust/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="image-placeholder w-full h-full rounded-xl transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute top-8 left-8 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-xl z-20">
                     {step.id}
                   </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted block mb-4 italic">{step.subtitle}</span>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-black leading-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-muted font-light leading-relaxed">
                  {step.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {step.metrics.map(metric => (
                    <span key={metric} className="text-[10px] font-mono tracking-widest px-4 py-2 bg-white/50 border border-border/40 rounded-full uppercase text-muted">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── CALL TO ACTION ── */}
      <section className="max-w-7xl mx-auto mt-32 text-center pt-32 border-t border-border/40">
         <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">
           Ready to initialize the <br />
           <span className="text-rust italic font-serif">BytBrand protocol?</span>
         </h2>
         <Magnet strength={0.4}>
           <Link to="/contact" className="inline-block bg-black text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-rust transition-all shadow-2xl menu-button">
             Begin Strategic Inception ——
           </Link>
         </Magnet>
      </section>

    </main>
  );
}
