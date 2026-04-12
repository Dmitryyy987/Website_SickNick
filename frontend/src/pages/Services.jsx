import { Link } from 'react-router-dom';
import FadeUp from '../components/common/FadeUp';
import BlurText from '../components/reactbits/BlurText';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Magnet from '../components/reactbits/Magnet';
import BorderGlow from '../components/reactbits/BorderGlow';
import Folder from '../components/reactbits/Folder';
import useSEO from '../hooks/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Our Services | SaaS & AI Growth Systems',
    description: 'BytBrand offers elite web development, SaaS product development, AI automation, and growth systems to scale your business.',
    url: 'https://bytbrand.com/services'
  });

  return (
    <main className="pt-16 min-h-screen bg-cream-soft">

      <FadeUp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4 md:pt-6 md:pb-16 text-center">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">Capabilities & Offerings</span>
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-6">
            <BlurText text="Technical Solutions" delay={150} animateBy="words" direction="top" /> <br className="hidden md:block"/>
            <BlurText text="That Drive Revenue." delay={150} animateBy="words" direction="top" />
          </h1>
          <ScrollReveal baseOpacity={0} blurStrength={10}>
            <p className="text-lg text-muted font-light max-w-2xl mx-auto leading-relaxed">
              We handle your entire technical infrastructure, empowering your team to focus exclusively on product adoption and scaling operational metrics.
            </p>
          </ScrollReveal>
        </div>
      </FadeUp>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        
        {/* ── SERVICE 1: Web & SaaS Engineering ── */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center" id="web-dev">
            <div>
              <div className="mb-6">
                <Folder color="var(--color-rust)" items={[<span className="text-2xl">⬡</span>]} size={0.7} />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">
                <BlurText text="Web & SaaS Engineering" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-black mb-6 font-light">Custom software infrastructures engineered to process high traffic seamlessly while remaining perfectly secure.</p>
              </ScrollReveal>
              <ul className="list-disc pl-5 space-y-3 text-[15px] text-muted font-light">
                <li>Next.js and Node.js backend architecture</li>
                <li>Secure, multi-tenant billing systems</li>
                <li>Lightning-fast database implementations</li>
              </ul>
            </div>
            <div>
              <img loading="lazy" src="/images/services_web_dev.png" alt="Web Development" className="w-full max-w-sm mx-auto h-auto object-cover rounded-xl shadow-lg border border-border" />
            </div>
          </div>
        </FadeUp>

        {/* ── SERVICE 2: Mobile App Development ── */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center" id="app-dev">
            <div className="order-last md:order-first">
               <img loading="lazy" src="/images/about_team.png" alt="Mobile App Development" className="w-full max-w-sm mx-auto h-auto object-cover rounded-xl shadow-lg border border-border" />
            </div>
            <div className="order-first md:order-last">
              <div className="mb-6 flex justify-end">
                <Folder color="var(--color-rust)" items={[<span className="text-2xl">▣</span>]} size={0.7} />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4 text-right">
                <BlurText text="Mobile App Development" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-black mb-6 font-light text-right">Fluid, cross-platform mobile experiences that boost user retention and feel indistinguishably native on all devices.</p>
              </ScrollReveal>
              <ul className="list-disc pl-5 space-y-3 text-[15px] text-muted font-light text-right list-none">
                <li>Unified React Native codebases</li>
                <li>Butter-smooth app animations</li>
                <li>Integrated push notification pipelines</li>
              </ul>
            </div>
          </div>
        </FadeUp>

        {/* ── SERVICE 3: AI Tool Integrations ── */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center" id="ai-automation">
            <div>
              <div className="mb-6">
                <Folder color="var(--color-rust)" items={[<span className="text-2xl">◈</span>]} size={0.7} />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4">
                <BlurText text="AI Tool Integrations" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-black mb-6 font-light">Deploy advanced Large Language Models into your workflow to instantly reduce manual operations and accelerate data processing.</p>
              </ScrollReveal>
              <ul className="list-disc pl-5 space-y-3 text-[15px] text-muted font-light">
                <li>Automated customer success chatbots</li>
                <li>Internal data parsing and analysis</li>
                <li>Custom OpenAI integrations</li>
              </ul>
            </div>
            <div>
              <img loading="lazy" src="/images/services_automation.png" alt="AI Tool Integrations" className="w-full max-w-sm mx-auto h-auto object-cover rounded-xl shadow-lg border border-border" />
            </div>
          </div>
        </FadeUp>

        {/* ── SERVICE 4: Growth & Conversion UI ── */}
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center" id="ui-ux">
            <div className="order-last md:order-first">
              <img loading="lazy" src="/images/services_ui_design.png" alt="Growth & Conversion UI" className="w-full max-w-sm mx-auto h-auto object-cover rounded-xl shadow-lg border border-border" />
            </div>
            <div className="order-first md:order-last">
              <div className="mb-6 flex justify-end">
                <Folder color="var(--color-rust)" items={[<span className="text-2xl">✏</span>]} size={0.7} />
              </div>
              <h2 className="text-3xl font-bold text-black mb-4 text-right">
                <BlurText text="Growth & Conversion UI" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="text-lg text-black mb-6 font-light text-right">Visual aesthetic frameworks mapped strictly to user psychology, significantly lowering churn and improving direct conversion rates.</p>
              </ScrollReveal>
              <ul className="list-disc pl-5 space-y-3 text-[15px] text-muted font-light text-right list-none">
                <li>Psychological conversion flow mapping</li>
                <li>Atomic design systems built in Figma</li>
                <li>Engaging scroll-based micro-animations</li>
              </ul>
            </div>
          </div>
        </FadeUp>

      </div>

      {/* ── WHY CHOOSE BYTBRAND (ABOUT SECTION) ── */}
      <FadeUp>
        <div className="bg-white py-12 md:py-16 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust block mb-4">Engineered for the Scale-Up Phase</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                <BlurText text="Built By Founders, For Founders" delay={100} animateBy="words" direction="top" />
              </h2>
              <ScrollReveal baseOpacity={0.6}>
                <p className="max-w-2xl mx-auto text-muted font-light text-lg">
                  We know what it takes to survive the startup curve. Let our senior engineers become your technical advantage.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <BorderGlow borderRadius={16} backgroundColor="#ECE7E4">
                <div className="p-8 h-full">
                  <div className="mb-4">
                    <Folder color="var(--color-rust)" items={[<span className="text-2xl">⚡</span>]} size={0.5} />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Senior Talent Only</h3>
                  <p className="text-muted font-light text-sm">No junior devs. You work directly with battle-tested engineers who ship fast.</p>
                </div>
              </BorderGlow>

              <BorderGlow borderRadius={16} backgroundColor="#884531" glowColor="40 80 80">
                <div className="p-8 h-full text-white">
                  <div className="mb-4">
                    <Folder color="var(--color-cream)" items={[<span className="text-2xl text-cream">✦✦</span>]} size={0.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">Zero Tech Debt</h3>
                  <p className="text-white/80 font-light text-sm">We build resilient systems designed to safely support millions of concurrent users.</p>
                </div>
              </BorderGlow>

              <BorderGlow borderRadius={16} backgroundColor="#ECE7E4">
                <div className="p-8 h-full">
                  <div className="mb-4">
                    <Folder color="var(--color-rust)" items={[<span className="text-2xl">📊</span>]} size={0.5} />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Outcome-Driven Execution</h3>
                  <p className="text-muted font-light text-sm">We don't just write code. Every technical architecture maps directly to improving your bottom-line activation and revenue metrics.</p>
                </div>
              </BorderGlow>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* ── Stamp Row ── */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-12 bg-cream-soft text-muted font-mono text-[10px] uppercase tracking-widest border-b border-border">
        <span>Conversion</span>
        <span className="text-rust">✦</span>
        <span>Scale</span>
        <span className="text-rust">✦</span>
        <span>Automation</span>
      </div>

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
