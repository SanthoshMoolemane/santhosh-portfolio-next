"use client";
import React, { useEffect, useState } from "react";
import { ArrowDownCircle, Code, Briefcase, MapPin } from "lucide-react";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "Front End Developer",
  "Back End Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        // Typing Effect
        if (charIndex < currentRole.length) {
          setText((prev) => prev + currentRole[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        // Deleting Effect
        if (charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length); // Move to next role
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  return (
    <div className="relative min-h-screen dark:from-gray-900 dark:to-blue-900">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] dark:bg-grid-slate-400/[0.05]" />

      {/* Blurry Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="flex items-center mb-8 animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">Santhosh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              {text}
              <span className="animate-blink">|</span>
            </h2>
          </div>
          <Image
            src="/Santhosh-portfolio/images/hero.png"
            alt="Hero"
            width="120"
            height="120"
            className="w-44 h-44 rounded-full ml-6 sm:ml-8 sm:w-52 sm:h-52"
          />
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 animate-fade-in animation-delay-600">
          I specialize in frontend development with React and Next and backend
          development with Node and Express. Passionate about building scalable,
          responsive web applications and creating intuitive user experiences.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in animation-delay-900">
          <Stat
            icon={Code}
            label="Projects Completed"
            value="3+"
            description="Many more to come"
          />
          <Stat
            icon={Briefcase}
            label="Years of Experience"
            value="7+"
            description="Constantly learning & growing"
          />
          <Stat
            icon={MapPin}
            label="Location"
            value="Bengaluru"
            description="Karnataka, India"
          />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animation-delay-1200">
          <Button href="/Resume.pdf" download>
            <ArrowDownCircle className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

// Stats Component
const Stat = ({ icon: Icon, label, value, description }) => (
  <div className="flex flex-col items-center p-6 dark:bg-gray-800 w-48 h-40 sm:w-56 sm:h-56 rounded-lg shadow-md">
    <Icon className="w-8 h-8 text-blue-500 mb-2" />
    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
      {label}
    </dt>
    <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
      {value}
    </dd>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {description}
    </p>
  </div>
);

// Button Component
const Button = ({ children, href, variant = "primary", ...props }) => {
  const baseClasses =
    "inline-flex items-center px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "bg-transparent border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </a>
  );
};

export default Hero;
