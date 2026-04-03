import { useState, useEffect, useRef } from "react";
import { ArrowRight, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import gsap from "gsap";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const inputFields = [
  { name: "name", label: "Your Name", type: "text", placeholder: "Erica Chen", required: true, half: true },
  { name: "email", label: "Work Email", type: "email", placeholder: "erica@lumina.ai", required: true, half: true },
  { name: "company", label: "Company", type: "text", placeholder: "Lumina AI Corp.", required: false, half: false },
];

const projectTypes = [
  "Full Architecture Build",
  "SaaS Redesign",
  "Backend Scaling",
  "Premium Marketing Site",
];

const budgetRanges = [
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: projectTypes[0],
    budget: budgetRanges[1],
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-left",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".contact-right",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setToast(null);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.warning) {
          setToast({ type: "warning", message: data.message });
        } else {
          setToast({ type: "success", message: "Message sent. We'll reply within 24 hours." });
        }
        setFormData({ name: "", email: "", company: "", projectType: projectTypes[0], budget: budgetRanges[1], message: "" });
      } else {
        setToast({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setToast({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-space relative overflow-hidden"
      id="contact"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,149,255,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="contact-left lg:col-span-5 lg:sticky lg:top-32" style={{ opacity: 0 }}>
            <span className="label-accent mb-6 block">Get in Touch</span>

            <h1 className="heading-lg text-[var(--text)] mb-6">
              Let's build{" "}
              <span className="gradient-text">something great</span>
              <br />together.
            </h1>

            <p className="body-lg mb-8">
              Share your requirements and we'll respond with actionable architecture
              recommendations, stack suggestions, and timeline estimates.
            </p>

            <div className="space-y-8 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              <div>
                <span className="label block mb-2">Email</span>
                <a
                  href="mailto:bytbrand.info@gmail.com"
                  className="text-lg font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                >
                  bytbrand.info@gmail.com
                </a>
              </div>
              <div>
                <span className="label block mb-2">Response Time</span>
                <p className="text-base text-[var(--text)]">Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="contact-right lg:col-span-7" style={{ opacity: 0 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Email row */}
              <div className="grid sm:grid-cols-2 gap-8">
                {inputFields.filter((f) => f.half).map((field) => (
                  <FloatingInput
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>

              {/* Company */}
              {inputFields.filter((f) => !f.half).map((field) => (
                <FloatingInput
                  key={field.name}
                  field={field}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              ))}

              {/* Selects row */}
              <div className="grid sm:grid-cols-2 gap-8">
                <FloatingSelect
                  name="projectType"
                  label="Project Type"
                  value={formData.projectType}
                  onChange={handleChange}
                  options={projectTypes}
                />
                <FloatingSelect
                  name="budget"
                  label="Budget Range"
                  value={formData.budget}
                  onChange={handleChange}
                  options={budgetRanges}
                />
              </div>

              {/* Message */}
              <FloatingTextarea
                name="message"
                label="Project Details"
                placeholder="Tell us about your project, goals, and timeline..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Toast */}
              {toast && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-lg text-sm font-medium ${
                    toast.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : toast.type === "warning"
                      ? "bg-amber-500/10 text-amber-400"
                      : "bg-rose-500/10 text-rose-400"
                  }`}
                >
                  {toast.type === "success" ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{toast.message}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`btn-primary w-full text-base py-5 ${
                  status === "loading" ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Floating Label Input ─── */
function FloatingInput({ field, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={field.name}
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          isActive
            ? "text-[0.6875rem] font-semibold tracking-[0.15em] uppercase -top-5 text-[var(--accent)]"
            : "top-3 text-sm text-[var(--muted)]"
        }`}
      >
        {field.label}
      </label>
      <input
        id={field.name}
        type={field.type}
        name={field.name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={field.required}
        autoComplete="off"
        className="w-full bg-transparent border-b border-white/[0.08] focus:border-transparent py-3 text-base text-[var(--text)] placeholder-transparent focus:outline-none transition-colors peer"
      />
      {/* Animated gradient line */}
      <div
        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
          focused
            ? "w-full opacity-100"
            : "w-0 opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, var(--accent), var(--accent-secondary))",
        }}
      />
    </div>
  );
}

/* ─── Floating Label Select ─── */
function FloatingSelect({ name, label, value, onChange, options }) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="absolute -top-5 left-0 text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-[var(--muted)]"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-white/[0.08] focus:border-[var(--accent)] py-3 text-base text-[var(--text)] focus:outline-none appearance-none cursor-pointer transition-colors"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[var(--surface)] text-[var(--text)]">
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Floating Label Textarea ─── */
function FloatingTextarea({ name, label, placeholder, value, onChange, required }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`absolute left-0 transition-all duration-300 pointer-events-none ${
          isActive
            ? "text-[0.6875rem] font-semibold tracking-[0.15em] uppercase -top-5 text-[var(--accent)]"
            : "top-3 text-sm text-[var(--muted)]"
        }`}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={4}
        className="w-full bg-transparent border-b border-white/[0.08] focus:border-transparent py-3 text-base text-[var(--text)] placeholder-transparent focus:outline-none resize-y transition-colors"
      />
      <div
        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${
          focused ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg, var(--accent), var(--accent-secondary))",
        }}
      />
    </div>
  );
}
