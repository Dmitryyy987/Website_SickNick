import { Link } from 'react-router-dom';
import LogoLoop from '../components/reactbits/LogoLoop';
import FadeUp from '../components/common/FadeUp';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import BorderGlow from '../components/reactbits/BorderGlow';
import useSEO from '../hooks/useSEO';
import { useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Lazy load complex animation components below the fold
const ImageTrail = lazy(() => import('../components/reactbits/ImageTrail'));
const ScrollStack = lazy(() => import('../components/reactbits/ScrollStack'));
const PixelTransition = lazy(() => import('../components/reactbits/PixelTransition'));

export default function Home() {
  const rootRef = useRef();

  useGSAP(() => {
    gsap.from('.hero-sub', { 
      y: 30, opacity: 0, duration: 1, stagger: 0.2, delay: 0.8, ease: 'power3.out' 
    });
    gsap.from('.hero-img', { 
      scale: 0.95, opacity: 0, duration: 1.5, delay: 1, ease: 'power3.out' 
    });
  }, { scope: rootRef });

  useSEO({
    title: 'High-Converting SaaS Agency',
    description: 'BytBrand is a modern SaaS-focused technology agency building scalable web apps, mobile apps, and AI automation systems.',
    url: 'https://bytbrand.com/'
  });

  const clientLogos = [
    { src: '/images/client_kinfolk.png', alt: 'Kinfolk Digital' },
    { src: '/images/client_aura.png', alt: 'Aura Labs' },
    { src: '/images/client_mono.png', alt: 'Mono Brand' },
    { src: '/images/client_editorial.png', alt: 'Editorial Collective' },
    { src: '/images/client_nova.png', alt: 'NovaTech' },
    { src: '/images/client_vanta.png', alt: 'Vanta Systems' },
    { src: '/images/client_orbital.png', alt: 'Orbital SaaS' },
  ];

  return (
    <main ref={rootRef} className="pt-16 min-h-screen bg-cream-soft">

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4 md:pt-6 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="hero-sub font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">
              Digital SaaS Agency
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-6">
              <BlurText text="Ship Faster." delay={100} animateBy="words" direction="top" /><br />
              <BlurText text="Scale With" delay={100} animateBy="words" direction="top" /><br />
              <span className="text-rust">
                <BlurText text="Confidence." delay={100} animateBy="words" direction="top" />
              </span>
            </h1>
            <ScrollReveal baseOpacity={0} blurStrength={10}>
              <p className="hero-sub text-lg text-muted font-light max-w-md mb-6 leading-relaxed">
                We design and build scalable SaaS platforms that help teams launch faster, improve user experience, and drive consistent growth.
              </p>
            </ScrollReveal>
            <ul className="hero-sub list-disc pl-5 space-y-2 text-sm text-muted font-light mb-8">
              <li>Production-ready architectures deployed rapidly</li>
              <li>Conversion-obsessed interface and UX design</li>
              <li>Intelligent workflows powered by LLM models</li>
            </ul>
            <div className="hero-sub flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
              <Magnet strength={0.5}>
                <Link to="/contact" className="block bg-rust text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-rust-light transition-colors">
                  Start Your Project
                </Link>
              </Magnet>
              <Magnet strength={0.5}>
                <Link to="/case-studies" className="block bg-transparent text-black border border-black/10 px-6 py-3 rounded-lg font-medium text-center hover:bg-black/5 transition-colors">
                  Explore Work →
                </Link>
              </Magnet>
            </div>
          </div>
          <div className="order-first md:order-last mb-8 md:mb-0">
            <img
              src="/images/hero_dashboard.png"
              alt="BytBrand SaaS Dashboard and AI Systems"
              className="hero-img w-full max-w-xl mx-auto object-cover rounded-2xl shadow-xl border border-border"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── LOGO LOOP ── */}
      <section className="border-y border-border py-12 overflow-hidden bg-cream-soft">
        <div className="mb-8 text-center">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted">Our Trusted Clients</span>
        </div>
        <LogoLoop 
          logos={clientLogos} 
          speed={60} 
          direction="left" 
          logoHeight={40} 
          gap={80} 
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="mt-4">
          <LogoLoop 
            logos={clientLogos} 
            speed={60} 
            direction="right" 
            logoHeight={40} 
            gap={80} 
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </section>

      {/* ── SERVICES INTRO ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-12">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mb-4">
                <BlurText text="Technical Solutions" delay={150} animateBy="words" direction="top" /> 
                <span className="text-rust">
                  <BlurText text="That Drive Revenue" delay={150} animateBy="words" direction="top" />
                </span>
              </h2>
              <ScrollReveal baseOpacity={0} blurStrength={8}>
                <p className="text-lg text-muted font-light leading-relaxed">
                  We handle the complete technical pipeline—from infrastructure to analytics—so your team can focus entirely on acquiring active users and maximizing LTV.
                </p>
              </ScrollReveal>
            </div>
            <Magnet strength={0.4}>
              <Link to="/services" className="font-mono text-[10px] tracking-[0.1em] text-rust uppercase hover:text-rust-light transition-colors pb-2 border-b border-rust/20">
                Explore our services ——
              </Link>
            </Magnet>
          </div>
        </FadeUp>

        {/* ── SERVICE CARDS 2×2 ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            { 
              title: "Web & SaaS Engineering", 
              desc: "High-performance infrastructure that scales effortlessly.", 
              tags: ["Next.js", "TypeScript", "PostgreSQL"],
              icon: "⬡",
              images: ["/images/tech_saas_1.png", "/images/tech_saas_2.png", "/images/tech_saas_3.png"]
            },
            { 
              title: "AI Tool Integrations", 
              desc: "Replace manual operations with intelligent LLM workflows.", 
              tags: ["OpenAI", "Vercel AI SDK"],
              icon: "◈",
              dark: true,
              images: ["/images/tech_ai_1.png", "/images/tech_ai_2.png", "/images/tech_ai_3.png"]
            },
            { 
              title: "Growth & Conversion UI", 
              desc: "Cinematic design engineered strictly for user acquisition.", 
              tags: ["UX Audit", "A/B Testing"],
              icon: "✏",
              images: ["/images/tech_growth_1.png", "/images/tech_growth_2.png", "/images/tech_growth_3.png"]
            },
            { 
              title: "Mobile App Development", 
              desc: "Cross-platform mobile experiences that feel seamlessly native.", 
              tags: ["React Native", "Expo"],
              icon: "▣",
              images: ["/images/tech_mobile_1.png", "/images/tech_mobile_2.png", "/images/tech_mobile_3.png"]
            }
          ].map((service, idx) => (
            <Suspense key={idx} fallback={<div className="h-64 bg-stone rounded-2xl animate-pulse" />}>
              <ImageTrail items={service.images}>
                <BorderGlow 
                  borderRadius={16} 
                  glowColor="40 80 80" 
                  backgroundColor={service.dark ? "#1C1B1A" : "#FFFFFF"}
                  className="h-full"
                >
                  <div className={`p-8 md:p-10 flex flex-col items-start h-full ${service.dark ? 'text-white' : 'text-black'}`}>
                    <div className="text-3xl text-rust mb-6">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <ScrollReveal baseOpacity={0.5}>
                      <p className={`text-base font-light leading-relaxed mb-8 ${service.dark ? 'text-cream/80' : 'text-muted'}`}>
                        {service.desc}
                      </p>
                    </ScrollReveal>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/20 w-full">
                      {service.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={`text-[11px] font-mono tracking-wider px-3 py-1 rounded-md uppercase ${service.dark ? 'bg-white/10 text-cream' : 'bg-stone text-muted'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </BorderGlow>
              </ImageTrail>
            </Suspense>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES SCROLL STACK ── */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            <BlurText text="Portfolio" delay={150} animateBy="words" direction="top" />
            <br />
            <span className="text-rust">
              <BlurText text="Elite Cases." delay={150} animateBy="words" direction="top" />
            </span>
          </h2>
        </div>
        
        <Suspense fallback={<div className="h-[80vh] flex items-center justify-center text-white">Loading Stack...</div>}>
          <ScrollStack items={[
            { id: 1, title: 'NovaPay', category: 'FinTech', desc: 'Next-gen payment infrastructure for global SaaS platforms.', image: '/images/cs_novapay.png' },
            { id: 2, title: 'AuraAI', category: 'Artificial Intelligence', desc: 'Predictive analytics engine for enterprise resource planning.', image: '/images/cs_auraai.png' },
            { id: 3, title: 'VantaCommerce', category: 'E-commerce', desc: 'High-conversion checkout experience for luxury brands.', image: '/images/cs_vanta.png' }
          ]}>
            {(project) => (
              <div className="w-[100vw] h-[80vh] flex items-center justify-center px-4 snap-start">
                <BorderGlow 
                  borderRadius={32} 
                  glowRadius={60} 
                  className="w-full max-w-6xl aspect-video overflow-hidden"
                  backgroundColor="#1C1B1A"
                >
                  <PixelTransition
                    firstContent={
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    }
                    secondContent={
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-12 bg-black/80">
                        <span className="font-mono text-xs tracking-widest text-rust uppercase mb-4">{project.category}</span>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h3>
                        <p className="text-lg text-cream/60 max-w-xl font-light leading-relaxed">
                          {project.desc}
                        </p>
                        <Magnet strength={0.5}>
                          <Link to={`/case-study/${project.title.toLowerCase()}`} className="mt-8 bg-rust text-white px-8 py-3 rounded-lg font-medium">
                            View Case Study
                          </Link>
                        </Magnet>
                      </div>
                    }
                    gridSize={20}
                    pixelColor="#884531"
                    animationStepDuration={0.4}
                  />
                </BorderGlow>
              </div>
            )}
          </ScrollStack>
        </Suspense>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <FadeUp delay="80ms">
          <div className="bg-stone border border-border p-8 md:p-16 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rust/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brown-dark/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">
                <BlurText text="Build faster." delay={100} animateBy="words" direction="top" /> 
                <span className="text-rust">
                  <BlurText text="Scale smarter." delay={100} animateBy="words" direction="top" />
                </span>
              </h2>
              <ScrollReveal baseOpacity={0} blurStrength={5}>
                <p className="text-lg text-muted font-light mb-8">
                  We engineer full-stack SaaS products that remove friction from user journeys and drive real, compounding business growth over time.
                </p>
              </ScrollReveal>
              <ul className="text-left w-fit mx-auto mb-10 text-sm text-muted font-light list-square pl-5 space-y-3">
                <li>Get a complete technical roadmap</li>
                <li>Receive transparent project timelines</li>
                <li>Start development within 7 days</li>
              </ul>
              <Magnet strength={0.6}>
                <Link to="/contact" className="inline-block bg-rust text-white px-8 py-3 rounded-lg font-medium text-center hover:bg-rust-light transition-colors">
                  Let's Work Together
                </Link>
              </Magnet>
            </div>
          </div>
        </FadeUp>
      </section>

    </main>
  );
}
