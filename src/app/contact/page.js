"use client";
import React, { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <section className="section relative overflow-hidden">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.18]"
          style={{
            background: "radial-gradient(closest-side, rgba(212, 175, 55, 0.45), transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Get in touch</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl mb-5">
            Let&apos;s build <span className="gold-text">something</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
            Have an idea, a role, or just want to say hi? Drop a message — I read every one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {/* INFO */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <InfoCard
              icon={Mail}
              label="Email"
              value="santhoshmbitsme@gmail.com"
              href="mailto:santhoshmbitsme@gmail.com"
            />
            <InfoCard
              icon={MapPin}
              label="Location"
              value="Bengaluru, India"
            />
            <div className="glass-card p-6 flex-1">
              <p className="eyebrow mb-4">Find me on</p>
              <div className="flex gap-2">
                <SocialBtn icon={Github} href="https://github.com/santhoshmoolemane" label="GitHub" />
                <SocialBtn icon={Linkedin} href="https://www.linkedin.com/in/santhosh-moolemane/" label="LinkedIn" />
                <SocialBtn icon={Twitter} href="https://x.com/santhosha_cta" label="Twitter" />
              </div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-7 sm:p-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="eyebrow block mb-2">Name</label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Your full name"
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow block mb-2">Email</label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="you@example.com"
                  className="field"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="eyebrow block mb-2">Message</label>
              <textarea
                id="message" name="message" rows={6} required
                value={formData.message} onChange={handleChange}
                placeholder="Tell me about your project, role, or idea…"
                className="field resize-none"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                I usually reply within 24h.
              </p>
              <button type="submit" className="btn-gold">
                <Send size={15} strokeWidth={2} />
                {sent ? "Sent — thank you" : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, value, href }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="glass-card p-6 flex items-center gap-4 group"
      style={{ textDecoration: "none" }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{
          background: "linear-gradient(180deg, #18181d, #0d0d11)",
          border: "1px solid var(--hairline)",
        }}
      >
        <Icon size={18} strokeWidth={1.6} style={{ color: "var(--gold-2)" }} />
      </div>
      <div className="min-w-0">
        <p className="eyebrow mb-1">{label}</p>
        <p className="text-sm truncate" style={{ color: "var(--text)" }}>{value}</p>
      </div>
    </Wrapper>
  );
}

function SocialBtn({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="icon-btn"
    >
      <Icon size={16} strokeWidth={1.6} />
    </a>
  );
}
