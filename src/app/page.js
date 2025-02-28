"use client";
import React from "react";
import About from "./about/page"
import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactUs from "./contact/page";

export default function Home() {
  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll">
      <section
        id="intro"
        className="snap-start flex items-center justify-center"
      >
        <About />
      </section>
      <section
        id="skills"
        className="snap-start flex items-center justify-center"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="snap-start flex items-center justify-center"
      >
        <Projects />
      </section>
      <section
        id="contact"
        className="snap-start flex items-center justify-center"
      >
        <ContactUs />
      </section>
    </div>
  );
}
