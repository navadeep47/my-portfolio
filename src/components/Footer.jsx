import React from 'react';
import { Mail, Phone, ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer({ onSelectTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="border-t border-[#3d1a6e]/60 py-6 text-[#9d8cbf] text-xs" style={{ background: 'rgba(13,6,24,0.85)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-[#30363D]/60">

          {/* Logo & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <button
              onClick={() => onSelectTab && onSelectTab('home')}
              className="text-lg font-black tracking-tight text-[#EDE9F8] hover:opacity-90"
            >
              <span>Navadeep</span><span className="text-[#A371F7]">.</span>
            </button>
            <p className="text-[11px] text-[#b0a0c8]">
              ECT Student • DSA Learner • Frontend Developer
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onSelectTab && onSelectTab(link.id)}
                className="text-[#b0a0c8] hover:text-[#A371F7] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/navadeep47"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#1a0a2e] border border-[#3d1a6e] text-[#b0a0c8] hover:bg-[#A371F7] hover:text-[#0d0618] hover:border-[#A371F7] transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/navadeep-p-851797339/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#1a0a2e] border border-[#3d1a6e] text-[#b0a0c8] hover:bg-[#A371F7] hover:text-[#0d0618] hover:border-[#A371F7] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/navadeep_.00?igsi=MXFpajVhb25kbGhzag=="
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-[#1a0a2e] border border-[#3d1a6e] text-[#b0a0c8] hover:bg-[#A371F7] hover:text-[#0d0618] hover:border-[#A371F7] transition-colors"
              title="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
          <p>© 2026 Pindi Navadeep. All rights reserved.</p>
          <p className="text-[#8B949E]/80">
            Crafted with React, Tailwind CSS & Vanilla CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
