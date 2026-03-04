import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Projects Delivered", value: "150+" },
  { label: "Client Retention", value: "94%" },
  { label: "Avg Delivery", value: "6-10 weeks" },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="section-shell pt-20 md:pt-24">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Product engineering and growth design
          </p>
          <h1 className="heading-font mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            We design and build websites that convert and scale.
          </h1>
          <p className="mt-5 text-lg text-[var(--muted)] max-w-2xl">
            BytBrand creates high-performance websites, web apps, and automation workflows with a clean
            architecture that can handle growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="rounded-xl px-6 py-3 font-semibold btn-primary btn-interactive"
            >
              Start a Project
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-xl px-6 py-3 font-semibold btn-secondary btn-interactive"
            >
              View Case Studies
            </button>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-7 shadow-sm card-interactive">
          <h2 className="heading-font text-xl font-semibold">Built for reliability</h2>
          <p className="mt-2 text-[var(--muted)]">
            Production-ready stack, clean code, and measurable outcomes from launch to long-term maintenance.
          </p>
          <div className="mt-6 space-y-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl bg-[color:var(--primary-soft)] px-4 py-3 border border-[var(--line)]"
              >
                <span className="text-[var(--muted)]">{item.label}</span>
                <span className="heading-font font-semibold text-lg">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
