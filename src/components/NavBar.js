"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutGrid, BarChart3, Layers, Mail } from "lucide-react";

const items = [
  { id: "hero", label: "Home", icon: LayoutGrid, href: "#hero" },
  { id: "skills", label: "Skills", icon: BarChart3, href: "#skills" },
  { id: "projects", label: "Projects", icon: Layers, href: "#projects" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="dock" aria-label="Primary">
      {items.map((item, idx) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <div key={item.id} className="dock-cell">
            <Link
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`dock-item ${isActive ? "active" : ""}`}
            >
              {isActive && (
                <span
                  className="gold-border absolute inset-0 pointer-events-none"
                  style={{ borderRadius: "18px", background: "transparent" }}
                  aria-hidden
                />
              )}
              <span className="dock-icon relative z-10">
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <span className="dock-label relative z-10">{item.label}</span>
            </Link>
            {idx < items.length - 1 && <div className="dock-sep" aria-hidden />}
          </div>
        );
      })}
    </nav>
  );
}
