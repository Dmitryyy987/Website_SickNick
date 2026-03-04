import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const location = useLocation();
  const emailFromQuery = useMemo(() => new URLSearchParams(location.search).get("email") || "", [location.search]);

  const [formData, setFormData] = useState({ ...initialForm, email: emailFromQuery });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        const errorMsg = result?.errors?.[0]?.msg || result?.error || "Submission failed. Please try again.";
        setStatus({ type: "error", message: errorMsg });
        return;
      }

      const message = result?.emailDelivered
        ? "Your message has been sent. We will contact you shortly."
        : "Your request was saved. We will contact you shortly.";
      setStatus({ type: "success", message });
      setFormData(initialForm);
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again in a moment." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-shell">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Contact</p>
          <h1 className="heading-font mt-3 text-4xl font-semibold">Tell us about your project</h1>
          <p className="mt-3 text-[var(--muted)]">
            We usually reply in 24-48 hours with next steps, timeline estimates, and technical recommendations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 md:p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[var(--muted)] mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[var(--muted)] mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm text-[var(--muted)] mb-1">
                Company
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="projectType" className="block text-sm text-[var(--muted)] mb-1">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
              >
                <option value="">Select type</option>
                <option value="Website">Website</option>
                <option value="Web App">Web App</option>
                <option value="Mobile App">Mobile App</option>
                <option value="AI Automation">AI Automation</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm text-[var(--muted)] mb-1">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
            >
              <option value="">Select range</option>
              <option value="$2k-$10k">$2k-$10k</option>
              <option value="$10k-$30k">$10k-$30k</option>
              <option value="$30k-$75k">$30k-$75k</option>
              <option value="$75k+">$75k+</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-[var(--muted)] mb-1">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl px-6 py-3 font-semibold disabled:opacity-60 btn-primary btn-interactive"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status.message ? (
            <p className={`text-sm ${status.type === "success" ? "text-emerald-600" : "text-rose-600"}`}>{status.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
