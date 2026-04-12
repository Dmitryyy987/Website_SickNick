import { Link } from 'react-router-dom';
import FadeUp from '../components/common/FadeUp';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import BorderGlow from '../components/reactbits/BorderGlow';
import { projects } from '../data/projects';
import useSEO from '../hooks/useSEO';

export default function CaseStudies() {
  useSEO({
    title: 'Our Work | SaaS & AI Case Studies',
    description: 'Explore the high-converting digital systems, Web apps, and AI automations engineered by BytBrand.',
    url: 'https://bytbrand.com/case-studies'
  });

  return (
    <main className="pt-16 min-h-screen bg-cream-soft overflow-x-hidden">

      <FadeUp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4 md:pt-6 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">Proven Execution</span>
              <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.1]">
                <span className="block"><BlurText text="Digital" delay={150} animateBy="words" direction="top" /></span>
                <span className="block text-rust"><BlurText text="Dominance." delay={150} animateBy="words" direction="top" /></span>
              </h1>
            </div>
            <div className="pt-2 md:pt-8 md:border-l border-border md:pl-16">
              <ScrollReveal baseOpacity={0} blurStrength={8}>
                <p className="text-lg text-muted font-light leading-relaxed">
                  We design and deploy verifiable, revenue-generating software architectures that allow partners to massively scale user acquisition and dominate their specific niches.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Horizontal Scroll Projects */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 md:px-8">
        <div className="scroll-container flex gap-6 pb-12 overflow-x-auto">
          {projects.map(project => (
            <div key={project.slug} className="snap-start flex-shrink-0 w-[90vw] md:w-[70vw] lg:w-[60vw]">
              <BorderGlow borderRadius={24} backgroundColor="#FFFFFF" className="h-full">
                <Link to={`/case-study/${project.slug}`} className="block group h-full">
                  <div className="relative aspect-video overflow-hidden rounded-t-[23px]">
                    <img src={`/images/cs_${project.slug}_new.png`} alt={`${project.title} Interface`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col h-auto">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">{project.category}</span>
                    
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-4xl font-bold text-black mb-4">
                          <BlurText text={project.title} animateBy="words" />
                        </h3>
                        <ScrollReveal baseOpacity={0.4}>
                          <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-xl">
                            {project.shortDescription}
                          </p>
                        </ScrollReveal>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 h-fit">
                        {project.tech.map((t, idx) => (
                           <span key={idx} className="bg-stone text-muted font-mono tracking-wider border border-border/50 uppercase rounded-md px-3 py-1 text-[10px]">{t}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-rust font-mono text-[10px] uppercase tracking-widest gap-2">
                      <Magnet strength={0.3}>
                        <span className="flex items-center gap-2">Analyze Case Study <span className="text-[14px]">→</span></span>
                      </Magnet>
                    </div>
                  </div>
                </Link>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>


      <FadeUp delay="80ms">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 mb-12">
          <div className="bg-stone border border-border p-8 md:p-16 rounded-2xl text-center relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">
              <BlurText text="Build faster." delay={100} animateBy="words" direction="top" /> 
              <span className="text-rust">
                <BlurText text="Scale smarter." delay={100} animateBy="words" direction="top" />
              </span>
            </h2>
            <ScrollReveal baseOpacity={0} blurStrength={5}>
              <p className="text-lg text-muted font-light mb-8 max-w-2xl mx-auto">
                We engineer full-stack SaaS products that remove friction from user journeys and drive real, compounding business growth over time.
              </p>
            </ScrollReveal>
            <Magnet strength={0.6}>
              <Link to="/contact" className="inline-block bg-rust text-white px-8 py-3 rounded-lg font-medium hover:bg-rust-light transition-colors mt-4 sm:mt-6">
                Get Your Product Built
              </Link>
            </Magnet>
          </div>
        </section>
      </FadeUp>

    </main>
  );
}
