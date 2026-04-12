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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
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

      {/* Vertical Case Studies Stack */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-12">
          {projects.map(project => (
            <FadeUp key={project.slug}>
              <div className="group flex flex-col md:flex-row bg-white border border-border/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                {/* Image Placeholder (Left) */}
                <div className="w-full md:w-[45%] lg:w-[40%] h-64 md:h-auto relative overflow-hidden">
                  <div className="image-placeholder !rounded-none h-full">
                    {/* Placeholder gradient background with tech stack icons or text */}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content (Right) */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-rust bg-rust/5 px-3 py-1 rounded-full">{project.category}</span>
                    <div className="h-[1px] flex-1 bg-border/30" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 group-hover:text-rust transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted font-light leading-relaxed mb-8 max-w-xl">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t, idx) => (
                       <span key={idx} className="bg-stone/50 text-muted font-mono tracking-wider border border-border/40 uppercase rounded-md px-3 py-1 text-[10px]">{t}</span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 mt-auto pt-8 border-t border-border/40">
                    <Magnet strength={0.2}>
                      <Link 
                        to={`/case-study/${project.slug}`} 
                        className="bg-black text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-rust transition-all"
                      >
                        View Details
                      </Link>
                    </Magnet>
                    
                    <Magnet strength={0.2}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-black font-bold text-sm hover:text-rust transition-colors group/link"
                      >
                        Live Project 
                        <span className="text-lg group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    </Magnet>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>


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
