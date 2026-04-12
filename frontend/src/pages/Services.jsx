import { Link } from 'react-router-dom';
import FadeUp from '../components/common/FadeUp';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import BorderGlow from '../components/reactbits/BorderGlow';
import useSEO from '../hooks/useSEO';

const SERVICE_ICON = ({ children, align = 'left' }) => (
  <div className={`flex ${align === 'right' ? 'justify-end' : 'justify-start'} mb-6`}>
    <div className="w-12 h-12 rounded-xl bg-rust/10 border border-rust/20 flex items-center justify-center text-2xl text-rust">
      {children}
    </div>
  </div>
);

export default function ServicesPage() {
  useSEO({
    title: 'Our Services | SaaS & AI Growth Systems',
    description: 'BytBrand offers elite web development, SaaS product development, AI automation, and growth systems to scale your business.',
    url: 'https://bytbrand.com/services',
  });

  return (
    <main className="pt-16 min-h-screen bg-cream-soft">

      {/* ── HERO ── */}
      <FadeUp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">
            Capabilities & Offerings
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-[1.1] mb-6">
            <BlurText text="Technical Solutions" delay={150} animateBy="words" direction="top" />
            <br className="hidden md:block" />
            <BlurText text="That Drive Revenue." delay={150} animateBy="words" direction="top" />
          </h1>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            <p className="text-base text-muted font-light max-w-2xl mx-auto leading-relaxed">
              We handle your entire technical infrastructure, empowering your team to focus
              exclusively on product adoption and scaling operational metrics.
            </p>
          </ScrollReveal>
        </div>
      </FadeUp>

      {/* ── SERVICE ROWS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20 mb-20">

        {/* 1 — Web & SaaS */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center" id="web-dev">
            <div>
              <SERVICE_ICON>⬡</SERVICE_ICON>
              <h2 className="text-3xl font-bold text-black mb-4">
                <BlurText text="Web & SaaS Engineering" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-muted font-light mb-6 leading-relaxed">
                  Custom software infrastructures engineered to process high traffic seamlessly
                  while remaining perfectly secure.
                </p>
              </ScrollReveal>
              <ul className="space-y-3 text-[15px] text-muted font-light">
                {['Next.js and Node.js backend architecture', 'Secure, multi-tenant billing systems', 'Lightning-fast database implementations'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-rust mt-1 text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="image-placeholder w-full max-w-sm mx-auto aspect-square" />
            </div>
          </div>
        </FadeUp>

        {/* 2 — Mobile */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center" id="app-dev">
            <div className="order-last md:order-first">
              <div className="image-placeholder w-full max-w-sm mx-auto aspect-square" />
            </div>
            <div className="order-first md:order-last">
              <SERVICE_ICON align="left">▣</SERVICE_ICON>
              <h2 className="text-3xl font-bold text-black mb-4">
                <BlurText text="Mobile App Development" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-muted font-light mb-6 leading-relaxed">
                  Fluid, cross-platform mobile experiences that boost user retention and feel
                  indistinguishably native on all devices.
                </p>
              </ScrollReveal>
              <ul className="space-y-3 text-[15px] text-muted font-light">
                {['Unified React Native codebases', 'Butter-smooth app animations', 'Integrated push notification pipelines'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-rust mt-1 text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* 3 — AI */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center" id="ai-automation">
            <div>
              <SERVICE_ICON>◈</SERVICE_ICON>
              <h2 className="text-3xl font-bold text-black mb-4">
                <BlurText text="AI Tool Integrations" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-muted font-light mb-6 leading-relaxed">
                  Deploy advanced Large Language Models into your workflow to instantly reduce
                  manual operations and accelerate data processing.
                </p>
              </ScrollReveal>
              <ul className="space-y-3 text-[15px] text-muted font-light">
                {['Automated customer success chatbots', 'Internal data parsing and analysis', 'Custom OpenAI integrations'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-rust mt-1 text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="image-placeholder w-full max-w-sm mx-auto aspect-square" />
            </div>
          </div>
        </FadeUp>

        {/* 4 — Growth UI */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center" id="ui-ux">
            <div className="order-last md:order-first">
              <div className="image-placeholder w-full max-w-sm mx-auto aspect-square" />
            </div>
            <div className="order-first md:order-last">
              <SERVICE_ICON>✏</SERVICE_ICON>
              <h2 className="text-3xl font-bold text-black mb-4">
                <BlurText text="Growth & Conversion UI" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-muted font-light mb-6 leading-relaxed">
                  Visual aesthetic frameworks mapped strictly to user psychology, significantly
                  lowering churn and improving direct conversion rates.
                </p>
              </ScrollReveal>
              <ul className="space-y-3 text-[15px] text-muted font-light">
                {['Psychological conversion flow mapping', 'Atomic design systems built in Figma', 'Engaging scroll-based micro-animations'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-rust mt-1 text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* ── WHY BYTBRAND ── */}
      <FadeUp>
        <div className="bg-white py-12 md:py-16 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">
                Engineered for the Scale-Up Phase
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                <BlurText text="Built By Founders, For Founders" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="max-w-2xl mx-auto text-muted font-light text-lg">
                  We know what it takes to survive the startup curve. Let our senior engineers
                  become your technical advantage.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <BorderGlow borderRadius={16} backgroundColor="#ECE7E4">
                <div className="p-8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center text-xl mb-5">⚡</div>
                  <h3 className="text-lg font-bold text-black mb-3">Senior Talent Only</h3>
                  <p className="text-muted font-light text-sm leading-relaxed">No junior devs. You work directly with battle-tested engineers who ship fast.</p>
                </div>
              </BorderGlow>

              <BorderGlow borderRadius={16} backgroundColor="#884531" glowColor="40 80 80">
                <div className="p-8 h-full text-white">
                  <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center text-xl mb-5">✦</div>
                  <h3 className="text-lg font-bold text-white mb-3">Zero Tech Debt</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed">We build resilient systems designed to safely support millions of concurrent users.</p>
                </div>
              </BorderGlow>

              <BorderGlow borderRadius={16} backgroundColor="#ECE7E4">
                <div className="p-8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-rust/10 flex items-center justify-center text-xl mb-5">📊</div>
                  <h3 className="text-lg font-bold text-black mb-3">Outcome-Driven Execution</h3>
                  <p className="text-muted font-light text-sm leading-relaxed">Every architecture maps directly to improving your bottom-line activation and revenue metrics.</p>
                </div>
              </BorderGlow>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* ── Stamp Row ── */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-10 bg-cream-soft text-muted font-mono text-[10px] uppercase tracking-widest border-b border-border">
        <span>Conversion</span>
        <span className="text-rust">✦</span>
        <span>Scale</span>
        <span className="text-rust">✦</span>
        <span>Automation</span>
      </div>

      {/* ── CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <FadeUp>
          <div className="bg-stone border border-border p-8 md:p-16 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rust/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brown-dark/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">
                <BlurText text="Build faster." delay={100} animateBy="words" direction="top" />
                <span className="text-rust">
                  <BlurText text=" Scale smarter." delay={100} animateBy="words" direction="top" />
                </span>
              </h2>
              <ScrollReveal baseOpacity={0} blurStrength={5}>
                <p className="text-lg text-muted font-light mb-8">
                  We engineer full-stack SaaS products that remove friction from user journeys
                  and drive real, compounding business growth over time.
                </p>
              </ScrollReveal>
              <ul className="text-left w-fit mx-auto mb-10 text-sm text-muted font-light space-y-3">
                {['Get a complete technical roadmap', 'Receive transparent project timelines', 'Start development within 7 days'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-rust text-xs">✦</span>{item}
                  </li>
                ))}
              </ul>
              <Magnet strength={0.6}>
                <Link to="/contact" className="inline-block bg-rust text-white px-8 py-3 rounded-lg font-bold hover:bg-rust-light transition-all menu-button">
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
