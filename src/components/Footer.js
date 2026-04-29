"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", href: "https://github.com/santhoshmoolemane", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/santhosh-moolemane/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/santhosha_cta", icon: Twitter },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-20 overflow-hidden"
      style={{ borderTop: "1px solid var(--hairline)" }}
    >
      {/* ambient gold glow at the top edge */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[300px] opacity-[0.18]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212, 175, 55, 0.6), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* === CTA banner === */}
      <div className="container-x relative z-10 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-5">Let&apos;s connect</p>
          <h3 className="display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-7">
            Have an idea? <br className="hidden sm:block" />
            <span className="gold-text">Let&apos;s build it together.</span>
          </h3>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
            I&apos;m always open to interesting conversations — full-time roles,
            freelance projects, or just to swap ideas over coffee.
          </p>
        </div>
      </div>

      {/* gold accent divider */}
      <div className="container-x relative z-10">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* === Brand + socials row === */}
      <div className="container-x relative z-10 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            {/* Profile pic with gold ring */}
            <div
              className="relative rounded-full p-[2px]"
              style={{
                background:
                  "linear-gradient(180deg, #f4e3b1 0%, #d4af37 50%, #8a6510 100%)",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.4), 0 6px 18px -6px rgba(212,175,55,0.45)",
              }}
            >
              <div
                className="relative w-11 h-11 rounded-full overflow-hidden"
                style={{ background: "#0a0a0d" }}
              >
                <img
                  src="/images/profile_pic.jpeg"
                  alt="Santhosh Moolemane"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Name + role */}
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <div
                className="display text-lg leading-tight"
                style={{ color: "var(--text)" }}
              >
                Santhosh Moolemane
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs">
                <span style={{ color: "var(--text-dim)" }}>Full Stack Developer</span>
                <span
                  className="inline-block w-1 h-1 rounded-full"
                  style={{ background: "var(--gold-3)" }}
                />
                <span style={{ color: "var(--text-dim)" }}>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* socials */}
          <div className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="icon-btn"
                >
                  <Icon size={15} strokeWidth={1.6} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* === Giant decorative wordmark === */}
      <div className="relative z-10 select-none pointer-events-none mt-2">
        <div
          aria-hidden
          className="display text-center leading-none"
          style={{
            fontSize: "clamp(72px, 18vw, 240px)",
            letterSpacing: "-0.05em",
            fontWeight: 700,
            background:
              "linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.06) 40%, rgba(10,10,13,0) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            paddingBottom: "8px",
          }}
        >
          SANTHOSH
        </div>
      </div>

      {/* === Bottom bar === */}
      <div
        className="relative z-10"
        style={{ borderTop: "1px solid var(--hairline)" }}
      >
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p style={{ color: "var(--text-muted)" }}>
            © {year} Santhosh Moolemane. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Designed &amp; built with{" "}
            <span style={{ color: "var(--gold-2)" }}>Next.js</span> &amp;{" "}
            <span style={{ color: "var(--gold-2)" }}>Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
