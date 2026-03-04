const services = [
  {
    title: "Web Platforms",
    description: "Fast, SEO-ready websites and dashboards with modern architecture and clear CMS workflows.",
  },
  {
    title: "Mobile & Cross Platform",
    description: "Native-feel mobile apps with stable APIs, push workflows, and analytics-ready releases.",
  },
  {
    title: "Shopify & WordPress",
    description: "Conversion-focused storefronts and content sites optimized for speed, checkout, and discoverability.",
  },
  {
    title: "AI Automations",
    description: "Chatbots and internal agents that reduce manual work and improve customer response times.",
  },
  {
    title: "UI Systems",
    description: "Design systems and reusable component libraries for consistent, maintainable product experience.",
  },
  {
    title: "Support & Optimization",
    description: "Performance tuning, bug fixes, security hardening, and long-term maintenance plans.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell" data-animate>
      <div className="text-center max-w-2xl mx-auto" data-animate>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Services</p>
        <h2 className="heading-font mt-3 text-3xl md:text-4xl font-semibold">Clean execution across your stack</h2>
        <p className="mt-3 text-[var(--muted)]">
          End-to-end delivery from design to infrastructure, with clear process and maintainable code.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-animate-stagger>
        {services.map((service) => (
          <article key={service.title} className="glass-panel rounded-2xl p-6 shadow-sm card-interactive" data-animate-item>
            <h3 className="heading-font text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
