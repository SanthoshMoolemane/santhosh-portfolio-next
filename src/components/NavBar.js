"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileView(false);
      } else {
        setMobileView(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-br from-gray-900 to-blue-900 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0">
        <Link
          href="/"
          className="text-white text-xl font-bold"
          style={{ marginLeft: mobileView ? "0px" : "150px" }}
        >
          My Portfolio
        </Link>
        <ul className="flex gap-x-4 lg:gap-x-8">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`text-white text-lg ${
                  pathname === path ? "font-bold border-b-2 border-white" : ""
                }`}
                onMouseEnter={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                style={{ marginRight: mobileView ? "0px" : "30px" }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
