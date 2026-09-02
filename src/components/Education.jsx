import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      level: "B.Tech (Undergraduate)",
      degree: "Electronics & Communication Technology (ECT)",
      institution: "SASI Institute of Technology & Engineering",
      location: "Tadepalligudem, AP",
      period: "2023 – 2027 (Final Year)",
      score: "CGPA: 7.58",
      status: "Pursuing",
      statusColor: "bg-[#3FB950]/15 text-[#3FB950] border-[#3FB950]/30",
      highlight: "Specialized in Embedded Systems, Circuit Analysis, Full-Stack Web Development & AI API integration."
    },
    {
      level: "Intermediate (12th / Senior Secondary)",
      degree: "MPC (Maths, Physics, Chemistry)",
      institution: "A.K.R.G. Junior College",
      location: "Nallajerla, AP",
      period: "2021 – 2023",
      score: "CGPA: 8.25",
      status: "Completed",
      statusColor: "bg-[#58A6FF]/15 text-[#58A6FF] border-[#58A6FF]/30",
      highlight: "Strong analytical foundation in Advanced Mathematics, Physical Sciences & Problem Solving."
    },
    {
      level: "Secondary School (10th / SSC)",
      degree: "Secondary School Certificate (SSC)",
      institution: "Z.P.P. High School",
      location: "Venkatramannagudem, AP",
      period: "2010 – 2021",
      score: "CGPA: 7.71",
      status: "Completed",
      statusColor: "bg-[#58A6FF]/15 text-[#58A6FF] border-[#58A6FF]/30",
      highlight: "Academic distinction with foundational science, mathematics, and extracurricular leadership."
    }
  ];

  return (
    <div className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A371F7]/10 text-[#A371F7] border border-[#A371F7]/20 text-sm sm:text-base font-mono">
          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#EDE9F8] tracking-tight">
          Education &amp; <span className="text-[#A371F7]">Qualifications</span>
        </h2>
        <p className="text-base sm:text-lg text-[#b0a0c8] max-w-2xl mx-auto">
          Structured academic record in Electronics &amp; Communication Technology and foundational sciences.
        </p>
      </div>

      {/* Dense Data Table View (Desktop & Tablet) */}
      <div className="hidden md:block glass-card rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left border-collapse text-base">
          <thead>
            <tr className="bg-[#0d0618] border-b border-[#3d1a6e]/70 text-[#b0a0c8] uppercase font-mono text-sm sm:text-base tracking-wider">
              <th className="py-4.5 px-5 font-semibold">Degree / Program</th>
              <th className="py-4.5 px-5 font-semibold">Institution &amp; Location</th>
              <th className="py-4.5 px-4 font-semibold">Duration</th>
              <th className="py-4.5 px-4 font-semibold text-center">Score</th>
              <th className="py-4.5 px-4 font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#3d1a6e]/40 font-sans">
            {educationData.map((item, idx) => (
              <tr 
                key={idx} 
                className="hover:bg-[#1a0a2e]/60 transition-colors group"
              >
                {/* Degree */}
                <td className="py-5 px-5">
                  <div className="font-bold text-[#EDE9F8] group-hover:text-[#A371F7] transition-colors text-base sm:text-lg">
                    {item.degree}
                  </div>
                  <div className="text-sm sm:text-base text-[#b0a0c8] font-mono mt-1">
                    {item.level}
                  </div>
                </td>

                {/* Institution */}
                <td className="py-5 px-5">
                  <div className="font-medium text-[#EDE9F8] text-base sm:text-lg">
                    {item.institution}
                  </div>
                  <div className="text-sm sm:text-base text-[#b0a0c8] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-[#A371F7]" />
                    <span>{item.location}</span>
                  </div>
                </td>

                {/* Duration */}
                <td className="py-5 px-4 whitespace-nowrap text-sm sm:text-base font-mono text-[#b0a0c8]">
                  {item.period}
                </td>

                {/* Score */}
                <td className="py-5 px-4 text-center whitespace-nowrap">
                  <span className="inline-block font-mono font-bold text-sm sm:text-base px-3 py-1 rounded-lg bg-[#0d0618] text-[#3FB950] border border-[#3FB950]/30">
                    {item.score}
                  </span>
                </td>

                {/* Status */}
                <td className="py-5 px-4 text-center whitespace-nowrap">
                  <span className={`inline-block text-sm sm:text-base font-mono px-3.5 py-1 rounded-full border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dense Card View for Mobile Screens */}
      <div className="md:hidden space-y-4">
        {educationData.map((item, idx) => (
          <div 
            key={idx} 
            className="glass-card rounded-2xl p-5 space-y-3.5 shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-[#A371F7]/10 text-[#A371F7] border border-[#A371F7]/20">
                  {item.level}
                </span>
                <h3 className="font-bold text-[#EDE9F8] text-lg sm:text-xl mt-2.5">
                  {item.degree}
                </h3>
              </div>
              <span className="text-sm sm:text-base font-mono font-bold px-3 py-1 rounded bg-[#0d0618] text-[#3FB950] border border-[#3FB950]/30 shrink-0">
                {item.score}
              </span>
            </div>

            <div className="text-base text-[#b0a0c8] space-y-1">
              <p className="font-medium text-[#EDE9F8] text-base sm:text-lg">{item.institution}</p>
              <p className="text-sm sm:text-base flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#A371F7]" />
                <span>{item.location} • {item.period}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
