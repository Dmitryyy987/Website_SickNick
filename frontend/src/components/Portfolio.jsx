const projects = [
  {
    title: "Cartonize",
    description: "E-commerce platform for custom packaging procurement workflows.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    link: "https://cartonize.vercel.app/",
  },
  {
    title: "ArcadiaX",
    description: "Gaming-focused web product with real-time experiences and user dashboards.",
    tech: ["React", "Node.js", "WebSocket"],
    link: "https://arcadiax.vercel.app/",
  },
  {
    title: "Gen-AI Engineer",
    description: "AI product site highlighting workflows, demos, and technical documentation.",
    tech: ["React", "Node.js", "AI APIs"],
    link: "https://gen-ai.engineer/",
  },
  {
    title: "Weather Application",
    description: "Responsive weather app with chart-based forecast visualization.",
    tech: ["React", "Chart.js", "Weather API"],
    link: "https://react-weather-app.netlify.app/",
  },
  {
    title: "Brainwave",
    description: "Marketing site for an AI product with immersive sections and interactive UI.",
    tech: ["React", "Framer Motion", "Three.js"],
    link: "https://ai-landing-page.netlify.app/",
  },
  {
    title: "Nike Frontend",
    description: "Product-focused commerce frontend built for strong storytelling and UX flow.",
    tech: ["React", "Tailwind", "Animation"],
    link: "https://nike-frontend.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-shell pt-0" data-animate>
      <div className="glass-panel rounded-3xl p-6 md:p-9" data-animate>
        <div className="max-w-2xl" data-animate>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Selected Work</p>
          <h2 className="heading-font mt-3 text-3xl md:text-4xl font-semibold">Recent projects and deliveries</h2>
          <p className="mt-3 text-[var(--muted)]">
            A snapshot of websites and products we have designed, built, and shipped.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4" data-animate-stagger>
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-sm card-interactive"
              data-animate-item
            >
              <h3 className="heading-font text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-[var(--muted)] text-sm leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-xs text-[var(--primary)]">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--primary)] btn-interactive rounded-lg px-2 py-1"
                data-click-animate
              >
                Open project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
