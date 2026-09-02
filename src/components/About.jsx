import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <div className="py-10 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A371F7]/10 text-[#A371F7] border border-[#A371F7]/20 text-sm sm:text-base font-mono">
          <User className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Profile</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#EDE9F8] tracking-tight">
          About <span className="text-[#A371F7]">Me</span>
        </h2>
      </div>

      {/* Clean Typography */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg sm:text-2xl md:text-3xl text-[#b0a0c8] leading-relaxed sm:leading-[1.6] font-normal">
          Final-year B.Tech ECT student passionate about <strong className="text-[#EDE9F8] font-semibold">Web &amp; Software Development</strong>. Skilled in <strong className="text-[#A371F7] font-semibold">MERN Stack, Python, and basic DSA</strong>, with a basic understanding of <strong className="text-[#3FB950] font-semibold">AI/ML</strong>. Passionate about building practical projects and continuously learning new technologies.
        </p>
      </div>
    </div>
  );
}
