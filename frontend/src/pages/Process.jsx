import { Link } from 'react-router-dom';
import FadeUp from '../components/common/FadeUp';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import useSEO from '../hooks/useSEO';

const PROCESS_STEPS = [
  {
    phase: 'Phase 01',
    title: 'Discovery',
    description: 'We isolate the exact features that move the revenue needle.',
    image: '/images/process_discovery.png',
    alt: 'Discovery Phase',
  },
  {
    phase: 'Phase 02',
    title: 'Architecture',
    description: 'We blueprint secure, zero-latency cloud database schemas.',
    image: '/images/process_planning.png',
    alt: 'Planning & Architecture',
  },
  {
    phase: 'Phase 03',
    title: 'UI/UX Design',
    description: 'We prototype pixel-perfect, conversion-optimized interfaces.',
    image: '/images/process_development.png',
    alt: 'UI/UX Design',
  },
  {
    phase: 'Phase 04',
    title: 'Development',
    description: 'We write clean, typed, and modular React infrastructure.',
    image: '/images/process_testing.png',
    alt: 'Development',
  },
  {
    phase: 'Phase 05',
    title: 'QA Testing',
    description: 'We stress-test code to guarantee zero launch-day crashes.',
    image: '/images/process_deployment.png',
    alt: 'QA Testing',
  },
  {
    phase: 'Phase 06',
    title: 'Deployment',
    description: 'We distribute your app across global Edge networks.',
    image: '/images/process_delivery.png',
    alt: 'Deployment',
  },
  {
    phase: 'Phase 07',
    title: 'Scaling',
    description: 'We analyze live user telemetrics to drive your next feature sprints.',
    image: '/images/process_support.png',
    alt: 'Scaling & Support',
  },
];

export default function ProcessPage() {
  useSEO({
    title: 'Our Process | Engineering Digital Growth',
    description: 'Learn how BytBrand architects, designs, and engineers scalable digital products from Discovery to Deployment.',
    url: 'https://bytbrand.com/process'
  });

  return (
    <main className="pt-16 min-h-screen bg-cream-soft">
      <FadeUp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4 md:pt-6 md:pb-16 text-center">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">The Pipeline</span>
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-6">
            <BlurText text="How We Build" delay={150} animateBy="words" direction="top" /><br className="hidden md:block" />
            <BlurText text="Winning Products." delay={150} animateBy="words" direction="top" />
          </h1>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            <p className="text-lg text-muted font-light max-w-2xl mx-auto leading-relaxed">
              We execute a rigorous, transparent agile workflow designed to unblock founders. No guesswork or delays—just rapid deployment and continuous iteration.
            </p>
          </ScrollReveal>
        </div>
      </FadeUp>

      {/* ── PROCESS STEPS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="space-y-16 lg:space-y-24 mb-20 overflow-x-hidden p-4 -space-x-4">
          {PROCESS_STEPS.map((step, index) => (
            <FadeUp key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay="0ms">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {index % 2 === 0 ? (
                  <>
                    <img 
                      src={step.image} 
                      alt={step.alt}
                      className="w-full max-w-md mx-auto h-auto object-cover rounded-xl shadow-lg border border-border" 
                      loading="lazy"
                    />
                    <div className="p-4 sm:p-6">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-2">{step.phase}</span>
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[16px] text-muted font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 sm:p-6 order-2 md:order-1">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-2">{step.phase}</span>
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[16px] text-muted font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <img 
                      src={step.image} 
                      alt={step.alt}
                      className="w-full max-w-md mx-auto h-auto object-cover rounded-xl shadow-lg border border-border order-1 md:order-2" 
                      loading="lazy"
                    />
                  </>
                )}

              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-border focus:outline-none">
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
                <Link to="/contact" className="inline-block bg-rust text-white mt-4 sm:mt-6 px-8 py-3 rounded-lg font-medium text-center hover:bg-rust-light transition-colors">
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
