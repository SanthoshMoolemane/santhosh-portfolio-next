"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";
import "../styles/NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">

      <div className="nav-title">
        <Link href="#">
          <BookOpen size={28} />
        </Link>
      </div>


      <div className="nav-links">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </div>

      <Link href="#contact" className="contact-button">
        Contact Me
      </Link>

      {/* Hamburger Icon (Mobile) */}
      <div className="hamburger" onClick={toggleMenu}>
        <Menu size={32} />
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`overlay ${isOpen ? "active" : ""}`}>
        <X className="close-icon" onClick={toggleMenu} size={32} />
        <Link href="#about" onClick={toggleMenu}>
          About
        </Link>
        <Link href="#skills" onClick={toggleMenu}>
          Skills
        </Link>
        <Link href="#projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link href="#contact" onClick={toggleMenu}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
