import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const projects = [
    {
      id: 'ems',
      title: 'Employee Management System',
      subtitle: 'Full-Stack Enterprise Web App',
      status: 'Completed',
      statusColor: 'bg-[#58A6FF]',
      description: 'A full-stack web application engineered to manage organizational employee records with secure authentication, role-based access, and real-time CRUD operations.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/navadeep47',
      liveUrl: 'https://employeattendence.netlify.app'
    },
    {
      id: 'portfolio',
      title: 'Personal Developer Portfolio',
      subtitle: 'Interactive React Single-Page App',
      status: 'Completed',
      statusColor: 'bg-[#58A6FF]',
      description: 'A modern, responsive portfolio web application showcasing full-stack projects, academic background, and technical skills with custom dark aesthetics.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/navadeep47',
      liveUrl: '#'
    },
    {
      id: 'meetminds',
      title: 'MeetMinds — AI Meeting Intelligence',
      subtitle: 'Automated MoM & Action Items',
      status: 'In Progress',
      statusColor: 'bg-[#3FB950]',
      description: 'AI-powered productivity app using Google Gemini API to process meeting transcripts, generate structured Minutes of Meeting (MoM), and extract action items.',
      tech: ['React.js', 'Gemini API', 'Node.js', 'MongoDB'],
      github: 'https://github.com/navadeep47',
      liveUrl: null
    }
  ];

  return (
    <div className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A371F7]/10 text-[#A371F7] border border-[#A371F7]/20 text-sm sm:text-base font-mono">
          <FolderGit2 className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Work</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#EDE9F8] tracking-tight">
          Featured <span className="text-[#A371F7]">Projects</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-xl group"
          >
            <div className="space-y-4">
              {/* Header: Title & Status */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#EDE9F8] group-hover:text-[#A371F7] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <span className="text-sm sm:text-base text-[#b0a0c8] font-mono block mt-1.5">
                    {project.subtitle}
                  </span>
                </div>
                <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono px-3 py-1 rounded-full bg-[#0d0618] border border-[#3d1a6e] text-[#EDE9F8] shrink-0">
                  <span className={`w-2 h-2 rounded-full ${project.statusColor === 'bg-[#58A6FF]' ? 'bg-[#A371F7]' : project.statusColor}`}></span>
                  <span>{project.status}</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#b0a0c8] leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((tag, tIdx) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs sm:text-sm font-mono rounded-lg bg-[#0d0618] text-[#A371F7] border border-[#3d1a6e]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="pt-5 mt-5 border-t border-[#3d1a6e]/60 flex items-center justify-between gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline !py-2.5 !px-3 sm:!px-4 !text-xs sm:!text-sm md:!text-base font-semibold flex-1 text-center"
              >
                <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>GitHub</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary !py-2.5 !px-3 sm:!px-4 !text-xs sm:!text-sm md:!text-base font-bold flex-1 text-center"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
