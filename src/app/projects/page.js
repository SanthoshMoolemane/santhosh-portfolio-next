import React from "react";
import Image from "next/image";
import { ArrowUpRight, Dumbbell, TrendingUp, Wallet, UtensilsCrossed, Newspaper } from "lucide-react";

const projects = [
  {
    id: "workout-tracker",
    title: "Workout Tracker",
    description:
      "A full-stack workout tracker that logs sets, reps and progressive overload — so lifters can ditch the notebook, stay consistent and watch their numbers climb week over week.",
    projectLink: "https://workout-tracker-mocha-nu.vercel.app/",
    tags: ["Next.js", "Node.js", "MongoDB", "Auth"],
    year: "2025",
    accent: { from: "#fb923c", to: "#dc2626", glow: "rgba(251, 146, 60, 0.45)" },
    icon: Dumbbell,
  },
  {
    id: "sip-calculator",
    title: "SIP Calculator",
    description:
      "An intuitive SIP calculator that turns monthly investments, expected returns and tenure into a clear picture of long-term wealth — built for smarter, calmer money decisions.",
    projectLink: "https://sip-calculator-chi.vercel.app/",
    tags: ["React", "Charts", "Finance"],
    year: "2025",
    accent: { from: "#10b981", to: "#0ea5e9", glow: "rgba(16, 185, 129, 0.4)" },
    icon: TrendingUp,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A finance app to log, categorise and visualise daily expenses, helping you take control of personal cashflow.",
    projectLink: "https://santhoshmoolemane.github.io/expenseTrackerApp/",
    tags: ["React", "Tailwind", "LocalStorage"],
    year: "2024",
    accent: { from: "#a78bfa", to: "#6366f1", glow: "rgba(167, 139, 250, 0.4)" },
    icon: Wallet,
  },
  {
    id: "foodie-delight",
    title: "Foodie Delight",
    description:
      "An interactive cloud-kitchen interface featuring a polished menu, dynamic cart and rich food cards built with React.",
    projectLink: "https://santhoshmoolemane.github.io/foodieDelight/",
    tags: ["React", "CSS", "REST"],
    year: "2024",
    accent: { from: "#fb7185", to: "#e11d48", glow: "rgba(251, 113, 133, 0.4)" },
    icon: UtensilsCrossed,
  },
  {
    id: "blog",
    title: "Blog Platform",
    description:
      "A reading-first blog where you can collect, search and revisit your favourite news articles and personal notes.",
    projectLink: "https://santhoshmoolemane.github.io/blog-app/",
    tags: ["React", "Routing", "API"],
    year: "2024",
    accent: { from: "#38bdf8", to: "#6366f1", glow: "rgba(56, 189, 248, 0.4)" },
    icon: Newspaper,
  },
];

export default function ProjectSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Selected Work</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl mb-5">
            Things I&apos;ve <span className="gold-text">built</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
            A handful of projects from the last few years — click through to see them live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay = 0 }) {
  const Icon = project.icon;
  return (
    <article
      className="glass-card overflow-hidden flex flex-col group animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* preview */}
      <div
        className="relative overflow-hidden m-1.5 mb-0"
        style={{ borderRadius: "22px" }}
      >
        {project.imageUrl ? (
          <>
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)",
              }}
            />
            <Image
              src={`/images/${project.imageUrl}`}
              alt={`${project.title} preview`}
              className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              width={720}
              height={450}
              quality={92}
            />
          </>
        ) : (
          <Placeholder accent={project.accent} icon={Icon} title={project.title} />
        )}

        <div
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "var(--text-dim)",
            backdropFilter: "blur(8px)",
          }}
        >
          {project.year}
        </div>
      </div>

      {/* body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="display text-xl">{project.title}</h3>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${project.title}`}
            className="icon-btn shrink-0 group-hover:rotate-[-15deg]"
            style={{ width: 36, height: 36, color: "var(--gold-2)" }}
          >
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>

        <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-dim)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--hairline)",
                color: "var(--text-dim)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Placeholder({ accent, icon: Icon, title }) {
  return (
    <div
      className="relative w-full aspect-[16/10] overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.04]"
      style={{
        background: `radial-gradient(120% 120% at 30% 0%, ${accent.from}33 0%, #0a0a0d 60%, #050507 100%)`,
      }}
    >
      {/* glow */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(closest-side at 75% 75%, ${accent.glow}, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      {/* icon mark */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: `linear-gradient(180deg, ${accent.from}, ${accent.to})`,
            boxShadow: `0 1px 0 rgba(255,255,255,0.25) inset, 0 -1px 0 rgba(0,0,0,0.25) inset, 0 20px 40px -12px ${accent.glow}`,
          }}
        >
          <Icon size={36} strokeWidth={1.8} color="#fff" />
        </div>
        <span
          className="text-[11px] uppercase tracking-[0.22em] font-medium"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          {title}
        </span>
      </div>
      {/* bottom darken for badge legibility */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
