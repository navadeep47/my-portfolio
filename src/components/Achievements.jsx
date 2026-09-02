import React from 'react';
import { Award, Trophy, CheckCircle, Code, Cpu, Monitor, Sparkles } from 'lucide-react';

export default function Achievements() {
  const items = [
    {
      title: "500+ Solved Problems",
      platform: "CodeChef Platform",
      category: "Competitive Programming",
      description: "Solved over 500 algorithm & data structure problems focusing on efficiency, logic, and problem-solving.",
      icon: Trophy,
      badgeColor: "bg-[#FFBD2E]/10 text-[#FFBD2E] border-[#FFBD2E]/30",
      accent: "#FFBD2E"
    },
    {
      title: "Elite + Silver Certification",
      platform: "NPTEL National Course",
      category: "Internet of Things (IoT)",
      description: "Achieved Silver Elite badge in IoT fundamentals, sensor networks, protocol stacks, and embedded IoT architectures.",
      icon: Cpu,
      badgeColor: "bg-[#58A6FF]/10 text-[#58A6FF] border-[#58A6FF]/30",
      accent: "#58A6FF"
    },
    {
      title: "C & Python Programming Certified",
      platform: "Programming Standards",
      category: "Software Development",
      description: "Certified proficiency in structural C programming and modern Python development principles.",
      icon: Code,
      badgeColor: "bg-[#3FB950]/10 text-[#3FB950] border-[#3FB950]/30",
      accent: "#3FB950"
    },
    {
      title: "MS Office Certification",
      platform: "ATECH Computers",
      category: "Office Productivity & Tools",
      description: "Successfully completed training in Microsoft Office Suite including Word, Excel, PowerPoint, and documentation.",
      icon: Monitor,
      badgeColor: "bg-[#A371F7]/10 text-[#A371F7] border-[#A371F7]/30",
      accent: "#A371F7"
    }
  ];

  return (
    <div className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A371F7]/10 text-[#A371F7] border border-[#A371F7]/20 text-sm sm:text-base font-mono">
          <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Honors &amp; Certifications</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#EDE9F8] tracking-tight">
          Achievements &amp; <span className="text-[#A371F7]">Certifications</span>
        </h2>
        <p className="text-base sm:text-lg text-[#b0a0c8] max-w-xl mx-auto">
          Recognized technical milestones, competitive programming, and professional course completions.
        </p>
      </div>

      {/* Grid Cards (1 col mobile, 2 col tablet, 4 col desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-md group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/50 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.accent }} />
                  </div>
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#EDE9F8] group-hover:text-[#A371F7] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#b0a0c8] mt-1">
                    {item.platform}
                  </p>
                </div>

                <p className="text-sm text-[#b0a0c8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-[#3d1a6e]/40 flex items-center justify-between text-xs text-[#b0a0c8]">
                <span className="flex items-center gap-1.5 text-[#3FB950] font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified
                </span>
                <span className="font-mono text-[11px]">2024 – 2026</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
