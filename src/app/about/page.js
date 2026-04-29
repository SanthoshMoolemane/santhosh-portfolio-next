"use client";
import React, { useEffect, useState } from "react";
import { ArrowDownToLine, Briefcase, Code2, MapPin, Sparkles } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Front End Developer",
  "Back End Developer",
];

const clamp = (v, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));

// Maps a 0→1 scroll progress into transform/opacity values for the gif and caption.
function gifTransform(p) {
  return `translate(${p * 58}%, ${p * -4}%) scale(${1 + p * 0.06}) rotate(${p * 6}deg)`;
}
function captionStyles(p) {
  // Caption ramps to full opacity by p=0.4, then stays fully visible for the
  // rest of the scroll within hero. That guarantees a long, visible window
  // of the text on screen while the hero is still in view.
  const t = clamp((p - 0.1) / 0.3);
  const yOffset = (1 - t) * 10;
  return {
    opacity: t,
    transform: `translate(-50%, calc(-50% + ${yOffset}px)) scale(${0.94 + t * 0.06})`,
  };
}

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const speed = isDeleting ? 45 : 95;

  // escapeP drives the in-hero gif transform + caption — animation completes
  // entirely within the hero's scroll range so the user sees the full effect
  // while the box is still on screen, and it reverses cleanly on scroll up.
  const [escapeP, setEscapeP] = useState(0);

  useEffect(() => {
    let rafId = null;
    const compute = () => {
      rafId = null;
      const y = window.scrollY;
      // Animation completes within ~30% of a viewport of scrolling. That's
      // fast enough that the caption hits full opacity while the box is still
      // comfortably in view, and stays visible for the rest of the hero scroll.
      const escapeEnd = Math.max(window.innerHeight * 0.3, 220);
      setEscapeP(clamp(y / escapeEnd));
    };
    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      const current = roles[roleIndex];
      if (!isDeleting) {
        if (charIndex < current.length) {
          setText((p) => p + current[charIndex]);
          setCharIndex((p) => p + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        if (charIndex > 0) {
          setText((p) => p.slice(0, -1));
          setCharIndex((p) => p - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="section relative" style={{ overflow: "visible" }}>
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.18] animate-pulse-glow"
          style={{
            background:
              "radial-gradient(closest-side, rgba(212, 175, 55, 0.45), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: copy */}
          <div className="lg:col-span-7 text-center lg:text-left animate-fade-up">
            <p className="eyebrow mb-5">Portfolio · 2026</p>
            <h1 className="display text-5xl sm:text-6xl lg:text-7xl mb-6">
              Hi, I&apos;m{" "}
              <span className="gold-text">Santhosh</span>
              <span style={{ color: "var(--gold-3)" }}>.</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-dim font-light mb-8 min-h-[1.7em]">
              I build as a{" "}
              <span style={{ color: "var(--text)" }}>{text}</span>
              <span className="animate-blink" style={{ color: "var(--gold-2)" }}>|</span>
            </h2>
            <p className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10"
              style={{ color: "var(--text-dim)", lineHeight: 1.7 }}>
              I craft scalable, responsive web applications with React, Next.js,
              Node.js and Express — focused on clean code and seamless,
              user-friendly experiences.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a href="/Resume_Santhosh_Moolemane_2026.pdf" download className="btn-gold">
                <ArrowDownToLine size={16} strokeWidth={2} />
                Download Resume
              </a>
              <a href="#contact" className="btn-ghost">
                <Sparkles size={16} strokeWidth={1.8} />
                Let&apos;s talk
              </a>
            </div>
          </div>

          {/* RIGHT: floater box housing the original gif, framed by the animated gold border */}
          <div
            className="lg:col-span-5 flex justify-center animate-fade-up"
            style={{ animationDelay: ".15s" }}
          >
            <div className="relative w-full max-w-[420px]" style={{ overflow: "visible" }}>
              <div
                className="gold-border gold-border-thick animate-float p-1.5"
                style={{ borderRadius: "32px", overflow: "visible" }}
              >
                <div
                  className="relative aspect-square flex items-center justify-center"
                  style={{
                    borderRadius: "28px",
                    overflow: "visible",
                    background:
                      "radial-gradient(120% 120% at 50% 0%, #1a1a20 0%, #0a0a0d 60%, #050507 100%)",
                  }}
                >
                  {/* "Thinking out of the box" — fades in as the gif escapes (scroll-driven) */}
                  <div
                    className="thought-caption pointer-events-none whitespace-nowrap text-center"
                    style={{ zIndex: 6, ...captionStyles(escapeP) }}
                  >
                    <div className="display gold-text text-lg sm:text-xl mb-1">
                      Thinking out of the box
                    </div>
                    <div className="eyebrow" style={{ color: "var(--text-dim)" }}>
                      ✦ literally
                    </div>
                  </div>

                  {/* gif — escapes outward in sync with scroll, returns when scrolling back up */}
                  <div
                    className="gif-escape relative z-20 w-full h-full flex items-center justify-center"
                    style={{ transform: gifTransform(escapeP) }}
                  >
                    <img
                      src="/gifs/video2.gif"
                      alt="Animated developer illustration"
                      className="max-w-full max-h-full object-contain pointer-events-none"
                    />
                  </div>

                  {/* corner badges (anchored to box, do not animate) */}
                  <div
                    className="absolute top-4 left-4 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--gold-1)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: "var(--gold-2)" }} />
                    Engineer
                  </div>
                  <div
                    className="absolute bottom-4 right-4 z-30 px-2.5 py-1 rounded-full text-[10px] font-mono"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text-dim)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    v2026.4
                  </div>
                  {/* subtle gold sheen overlay */}
                  <div
                    className="absolute inset-0 z-[2] pointer-events-none"
                    style={{
                      borderRadius: "28px",
                      background:
                        "linear-gradient(180deg, transparent 0%, rgba(212,175,55,0.04) 50%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Stat icon={Code2} label="Projects shipped" value="12+" sub="and counting" />
          <Stat icon={Briefcase} label="Years of experience" value="7+" sub="continuous learning" />
          <Stat icon={MapPin} label="Currently based in" value="Bengaluru" sub="Karnataka, India" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value, sub }) {
  return (
    <div className="glass-card p-7 group">
      <div className="flex items-start justify-between mb-6">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background: "linear-gradient(180deg, #18181d, #0d0d11)",
            border: "1px solid var(--hairline)",
          }}
        >
          <Icon size={18} strokeWidth={1.6} style={{ color: "var(--gold-2)" }} />
        </div>
        <span className="eyebrow">{label}</span>
      </div>
      <div className="display text-4xl mb-1.5">{value}</div>
      <div className="text-sm text-muted">{sub}</div>
    </div>
  );
}
