import React from "react";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactUs from "./contact/page";

export default function Portfolio() {
  return (
    <>
      <section id="hero">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </>
  );
}
