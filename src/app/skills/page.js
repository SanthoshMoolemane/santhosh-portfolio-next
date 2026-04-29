import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiPostgresql } from "react-icons/si";

const skills = [
  { icon: FaReact, title: "React", level: "Expert" },
  { icon: SiNextdotjs, title: "Next.js", level: "Expert" },
  { icon: SiTypescript, title: "TypeScript", level: "Advanced" },
  { icon: FaJs, title: "JavaScript", level: "Expert" },
  { icon: FaNodeJs, title: "Node.js", level: "Advanced" },
  { icon: SiExpress, title: "Express", level: "Advanced" },
  { icon: SiMongodb, title: "MongoDB", level: "Advanced" },
  { icon: SiPostgresql, title: "PostgreSQL", level: "Intermediate" },
  { icon: SiTailwindcss, title: "Tailwind", level: "Expert" },
  { icon: FaHtml5, title: "HTML5", level: "Expert" },
  { icon: FaCss3Alt, title: "CSS3", level: "Expert" },
  { icon: FaGitAlt, title: "Git", level: "Advanced" },
];

const marqueeItems = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "MongoDB", "Express", "PostgreSQL", "Docker", "AWS", "Git", "REST APIs"];

export default function SkillsSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Tech Stack</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl mb-5">
            Tools I <span className="gold-text">work with</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
            A curated stack I use daily to ship fast, accessible, well-tested products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s, i) => (
            <SkillCard key={s.title} {...s} delay={i * 40} />
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="mt-24 relative overflow-hidden py-6"
        style={{
          borderTop: "1px solid var(--hairline)",
          borderBottom: "1px solid var(--hairline)",
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}>
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="display text-3xl sm:text-4xl"
              style={{
                color: i % 3 === 0 ? "var(--gold-3)" : "var(--text-muted)",
                fontWeight: 500,
              }}
            >
              {item} <span style={{ color: "var(--text-muted)", margin: "0 12px" }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon: Icon, title, level, delay = 0 }) {
  return (
    <article
      className="gold-border-hover group p-5 flex flex-col items-center justify-center text-center animate-fade-up"
      style={{
        aspectRatio: "1 / 1",
        borderRadius: "20px",
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="relative z-10 w-12 h-12 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Icon className="skill-icon w-full h-full" />
      </div>
      <div className="relative z-10 text-sm font-medium" style={{ color: "var(--text)" }}>
        {title}
      </div>
      <div className="relative z-10 text-[10px] uppercase tracking-widest mt-1" style={{ color: "var(--text-muted)" }}>
        {level}
      </div>
    </article>
  );
}
