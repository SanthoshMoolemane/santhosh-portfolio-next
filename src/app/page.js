"use client";

import React, { useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactUs from "./contact/page";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section id="hero" data-aos="fade-up">
        <About />
      </section>

      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>

      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>
      <section id="contact" data-aos="fade-up">
        <ContactUs />
      </section>
    </div>
  );
}

export default Portfolio;
