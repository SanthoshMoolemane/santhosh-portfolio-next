"use client";
import React from "react";
// import Hero from "./hero/page";
// import Skills from "./skills/page";
import Projects from "./projects/page";
import ContactUs from "./contact/page";

export default function Home() {
  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll">
      {/* <section
        id="hero"
        className="snap-start flex items-center justify-center"
      >
        <Hero />
      </section>
      <section
        id="skills"
        className="snap-start flex items-center justify-center"
      >
        <Skills />
      </section> */}
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
