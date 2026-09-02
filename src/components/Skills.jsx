import React from 'react';
import { Cpu } from 'lucide-react';

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "C Programming",
    "MongoDB",
    "VS Code",
    "GitHub"
  ];

  return (
    <div className="py-10 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A371F7]/10 text-[#A371F7] border border-[#A371F7]/20 text-sm sm:text-base font-mono">
          <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Technologies</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#EDE9F8] tracking-tight">
          Skills &amp; <span className="text-[#A371F7]">Tools</span>
        </h2>
      </div>

      {/* Flat Single Wrapped Skill Chip List */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium bg-[#1a0a2e] text-[#EDE9F8] border border-[#3d1a6e] hover:border-[#A371F7] hover:bg-[#A371F7] hover:text-[#0d0618] hover:shadow-[0_0_20px_rgba(163,113,247,0.35)] hover:-translate-y-1 transition-all duration-200 cursor-default select-none shadow-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
