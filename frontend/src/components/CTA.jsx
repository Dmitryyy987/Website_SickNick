import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiMail } from "react-icons/fi";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="section-shell pt-0" data-animate>
      <div
        className="rounded-3xl bg-[var(--cta-bg)] px-6 py-10 md:px-10 md:py-12 text-[var(--cta-text)] relative overflow-hidden border border-[var(--cta-outline)]/20"
        data-animate
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#4ea8de,transparent_45%)]" />
        <div className="relative z-10 max-w-3xl" data-animate>
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--cta-muted)]">Ready to start</p>
          <h2 className="heading-font mt-3 text-3xl md:text-4xl font-semibold">
            Build a clean, high-performing digital product with us.
          </h2>
          <p className="mt-4 text-[var(--cta-muted)]">
            Share your goals and we will come back with a practical roadmap, timeline, and delivery plan.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-[var(--primary)] border border-white/80 hover:border-[var(--cta-outline)] hover:bg-[#f2f7ff] btn-interactive inline-flex items-center gap-2"
              data-click-animate
            >
              Book a Discovery Call
              <FiArrowRight />
            </button>
            <a
              href="mailto:bytbrand.info@gmail.com"
              className="rounded-xl border border-white/60 px-6 py-3 font-semibold text-[var(--cta-text)] hover:border-[var(--cta-outline)] hover:bg-white/10 btn-interactive inline-flex items-center gap-2"
              data-click-animate
            >
              <FiMail />
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
