"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-br from-gray-900 to-blue-900 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left - Logo */}
        <Link
          href="/"
          className="text-white text-xl font-bold hover:opacity-80"
        >
          My Portfolio
        </Link>

        {/* Right - Navigation Links (Desktop View) */}
        <ul className="hidden flex items-center justify-end space-x-6">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`text-white text-lg ${
                  pathname === path
                    ? "font-bold border-b-2 border-white"
                    : "hover:opacity-80"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Visible Only on Small Screens) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-br from-gray-900 to-blue-900 p-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`text-white text-lg ${
                    pathname === path
                      ? "font-bold border-b-2 border-white"
                      : "hover:opacity-80"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

/* Icon Components */
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
