import React from 'react';
import { X, Printer, Mail, Phone, CheckCircle2, Award, BookOpen, Code, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#120724] border border-[#3d1a6e] rounded-2xl max-w-4xl w-full my-2 sm:my-8 overflow-hidden shadow-2xl relative flex flex-col max-h-[94vh] sm:max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0d0618] border-b border-[#3d1a6e]/60 shrink-0">
          <div className="flex items-center gap-2 text-xs sm:text-base font-semibold text-[#EDE9F8] truncate mr-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3FB950] shrink-0"></span>
            <span className="truncate">Pindi_Navadeep_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-lg bg-[#1a0a2e] text-[#EDE9F8] border border-[#3d1a6e] text-xs sm:text-sm hover:border-[#A371F7] hover:text-[#A371F7] transition-all"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#b0a0c8] hover:text-[#EDE9F8] hover:bg-[#3d1a6e]/50 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-4 sm:p-8 md:p-10 overflow-y-auto space-y-6 sm:space-y-8 bg-[#120724] text-[#EDE9F8] text-sm sm:text-base leading-relaxed" id="printable-resume">
          
          {/* Header Info */}
          <div className="border-b border-[#3d1a6e]/60 pb-5 sm:pb-6 space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#A371F7] tracking-tight">PINDI NAVADEEP</h1>
            <p className="text-sm sm:text-lg font-semibold text-[#EDE9F8]">
              Final-Year ECT Student &amp; Aspiring Full-Stack / AI Developer
            </p>

            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-[#b0a0c8] font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-[#A371F7]" /> pnavadeep10@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#3FB950]" /> +91 7675812327
              </span>
              <a href="https://github.com/navadeep47" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#A371F7]">
                <GithubIcon className="w-4 h-4 text-[#EDE9F8]" /> github.com/navadeep47
              </a>
              <a href="https://www.linkedin.com/in/navadeep-p-851797339/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#A371F7]">
                <LinkedinIcon className="w-4 h-4 text-[#A371F7]" /> linkedin.com/in/navadeep-p-851797339
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2.5">
            <h2 className="text-xs sm:text-sm font-mono font-bold text-[#A371F7] uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Professional Summary
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#b0a0c8] bg-[#0d0618] p-3.5 sm:p-5 rounded-xl border border-[#3d1a6e]/50 leading-relaxed">
              Final-year Electronics and Communication Technology student with strong communication, problem-solving, and teamwork skills. Eager to learn new technologies and contribute effectively in a professional software development environment.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono font-bold text-[#A371F7] uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical Skills &amp; Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-[#0d0618] p-3.5 sm:p-4 rounded-xl border border-[#3d1a6e]/50">
                <span className="text-[#A371F7] font-semibold block mb-1">Languages:</span>
                <span className="text-[#EDE9F8]">HTML, CSS, JavaScript, Python, C Programming</span>
              </div>
              <div className="bg-[#0d0618] p-3.5 sm:p-4 rounded-xl border border-[#3d1a6e]/50">
                <span className="text-[#3FB950] font-semibold block mb-1">Web &amp; DB:</span>
                <span className="text-[#EDE9F8]">React.js, Node.js, Express.js, MongoDB, REST APIs</span>
              </div>
              <div className="bg-[#0d0618] p-3.5 sm:p-4 rounded-xl border border-[#3d1a6e]/50">
                <span className="text-[#58A6FF] font-semibold block mb-1">Tools &amp; Platforms:</span>
                <span className="text-[#EDE9F8]">VS Code, GitHub, Git, Postman</span>
              </div>
              <div className="bg-[#0d0618] p-3.5 sm:p-4 rounded-xl border border-[#3d1a6e]/50">
                <span className="text-[#FFBD2E] font-semibold block mb-1">Soft Skills:</span>
                <span className="text-[#EDE9F8]">Communication, Teamwork, Analytical Thinking, Time Management</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xs sm:text-sm font-mono font-bold text-[#A371F7] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Key Projects
            </h2>

            {/* EMS */}
            <div className="bg-[#0d0618] p-3.5 sm:p-5 rounded-xl border border-[#3d1a6e]/50 space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="font-bold text-sm sm:text-base text-[#EDE9F8]">Employee Management System</h3>
                <span className="text-xs font-mono text-[#A371F7]">Full-Stack App</span>
              </div>
              <p className="text-xs sm:text-sm text-[#b0a0c8] leading-relaxed">
                Full-stack web application to manage employee records with secure authentication, full CRUD operations (add, update, delete, view), and REST APIs integrated with MongoDB.
              </p>
              <div className="text-xs font-mono text-[#8B949E] pt-1">
                Tech Stack: React.js, Node.js, Express, MongoDB
              </div>
            </div>

            {/* MeetMinds */}
            <div className="bg-[#0d0618] p-3.5 sm:p-5 rounded-xl border border-[#3d1a6e]/50 space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                <h3 className="font-bold text-sm sm:text-base text-[#EDE9F8]">MeetMinds — AI-Powered Meeting Intelligence</h3>
                <span className="text-xs font-mono text-[#3FB950]">[In Progress]</span>
              </div>
              <p className="text-xs sm:text-sm text-[#b0a0c8] leading-relaxed">
                AI-powered app that generates meeting summaries from transcript data, integrating Google Gemini API to automate Minutes of Meeting (MoM) generation and action item extraction.
              </p>
              <div className="text-xs font-mono text-[#8B949E] pt-1">
                Tech Stack: React.js, Node.js, Express.js, MongoDB, Gemini API
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono font-bold text-[#A371F7] uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Education
            </h2>

            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="bg-[#0d0618] p-3.5 sm:p-4 rounded-xl border border-[#3d1a6e]/50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
                <div>
                  <div className="font-bold text-[#EDE9F8]">B.Tech, Electronics and Communication Technology</div>
                  <div className="text-[#b0a0c8]">SASI Institute of Technology and Engineering, AP (2023 – 2027)</div>
                </div>
                <div className="font-mono text-[#A371F7] font-bold">CGPA: 7.58</div>
              </div>

              <div className="bg-[#0d0618] p-3.5 sm:p-4 rounded-xl border border-[#3d1a6e]/50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
                <div>
                  <div className="font-bold text-[#EDE9F8]">Intermediate (MPC)</div>
                  <div className="text-[#b0a0c8]">A.K.R.G. Junior College, Nallajerla (2021 – 2023)</div>
                </div>
                <div className="font-mono text-[#3FB950] font-bold">CGPA: 8.25</div>
              </div>

              <div className="bg-[#0d0618] p-3.5 sm:p-4 rounded-xl border border-[#3d1a6e]/50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5">
                <div>
                  <div className="font-bold text-[#EDE9F8]">SSC (10th Standard)</div>
                  <div className="text-[#b0a0c8]">Z.P.P. High School, Venkatramannagudem</div>
                </div>
                <div className="font-mono text-[#58A6FF] font-bold">CGPA: 7.71</div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2.5">
            <h2 className="text-xs sm:text-sm font-mono font-bold text-[#A371F7] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" /> Key Achievements &amp; Certifications
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#b0a0c8]">
              <li className="flex items-center gap-2.5 bg-[#0d0618] p-3 rounded-lg border border-[#3d1a6e]/50">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>Solved 500+ coding problems on CodeChef</span>
              </li>
              <li className="flex items-center gap-2.5 bg-[#0d0618] p-3 rounded-lg border border-[#3d1a6e]/50">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>Elite + Silver certification, NPTEL IoT Course</span>
              </li>
              <li className="flex items-center gap-2.5 bg-[#0d0618] p-3 rounded-lg border border-[#3d1a6e]/50">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>Certified in C and Python Programming</span>
              </li>
              <li className="flex items-center gap-2.5 bg-[#0d0618] p-3 rounded-lg border border-[#3d1a6e]/50">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>MS Office Completed — ATECH Computers</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-3 sm:p-4 bg-[#0d0618] border-t border-[#3d1a6e]/60 flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1a0a2e] text-[#b0a0c8] border border-[#3d1a6e] text-xs sm:text-sm font-medium hover:text-[#EDE9F8] hover:border-[#A371F7] transition-colors text-center"
          >
            Close Window
          </button>
          <button
            onClick={handlePrint}
            className="btn-primary w-full sm:w-auto !py-2.5 !px-5 !text-xs sm:!text-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
