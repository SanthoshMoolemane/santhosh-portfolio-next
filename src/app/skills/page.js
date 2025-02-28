import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skills = [
  { icon: FaHtml5, title: "HTML", color: "text-orange-600" },
  { icon: FaCss3Alt, title: "CSS", color: "text-blue-600" },
  { icon: FaJs, title: "JavaScript", color: "text-yellow-500" },
  { icon: FaReact, title: "React", color: "text-blue-400" },
  { icon: SiNextdotjs, title: "Next.js", color: "text-black dark:text-white" },
  { icon: FaNodeJs, title: "Node.js", color: "text-green-600" },
  { icon: SiExpress, title: "Express.js", color: "text-gray-600" },
  { icon: SiMongodb, title: "MongoDB", color: "text-green-500" },
  { icon: SiTailwindcss, title: "Tailwind CSS", color: "text-teal-500" },
];

const SkillCard = ({ icon: Icon, title, color }) => (
  <article className="relative flex flex-col items-center p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 hover:border-white transition-transform duration-300">
    <Icon className={`w-12 h-12 ${color}`} />
    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
  </article>
);

export default function SkillsSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden text-white py-20">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-300">Skills</h1>
        <p className="mt-4 text-lg text-gray-300">
          These are the technologies I excel in:
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}