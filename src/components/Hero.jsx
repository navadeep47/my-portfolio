import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Hero() {
  const titles = [
    "ECT Student",
    "DSA Learner",
    "Frontend Developer"
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === fullText) {
      typingSpeed = 2000;
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      setDisplayText((current) => {
        if (!isDeleting) {
          return fullText.substring(0, current.length + 1);
        } else {
          return fullText.substring(0, current.length - 1);
        }
      });

      if (!isDeleting && displayText === fullText) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <div className="w-full min-h-[calc(100dvh-5rem)] flex items-center justify-center relative overflow-hidden py-8 px-4 sm:px-6">
      {/* Subtle Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#A371F7]/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/2 lg:right-1/4 translate-x-1/2 lg:translate-x-1/3 translate-y-1/3 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#3FB950]/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Text Content Column (Mobile: Centered, Desktop: Left-aligned) */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5">
            {/* Small Intro */}
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-mono text-[#b0a0c8] font-medium tracking-wide">
                Hello,
              </span>
            </div>

            {/* Big Bold Name */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] text-[#EDE9F8]">
                PINDI
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] text-[#A371F7]">
                NAVADEEP
              </h1>
            </div>

            {/* Typewriter Effect */}
            <div className="h-8 sm:h-11 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 text-base sm:text-2xl lg:text-3xl font-mono font-semibold text-[#A371F7]">
                <span className="text-[#b0a0c8] select-none text-sm sm:text-xl">&gt;</span>
                <span>{displayText}</span>
                <span className="inline-block w-2 sm:w-2.5 h-5 sm:h-7 bg-[#A371F7] animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* GitHub */}
              <a
                href="https://github.com/navadeep47"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#3d1a6e] bg-[#1a0a2e] flex items-center justify-center text-[#b0a0c8] hover:bg-[#A371F7] hover:border-[#A371F7] hover:text-[#0d0618] hover:shadow-[0_0_15px_rgba(163,113,247,0.45)] active:scale-95 transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5 stroke-[2]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/navadeep-p-851797339/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#3d1a6e] bg-[#1a0a2e] flex items-center justify-center text-[#b0a0c8] hover:bg-[#A371F7] hover:border-[#A371F7] hover:text-[#0d0618] hover:shadow-[0_0_15px_rgba(163,113,247,0.45)] active:scale-95 transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 stroke-[2]" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/navadeep_.00?igsi=MXFpajVhb25kbGhzag=="
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#3d1a6e] bg-[#1a0a2e] flex items-center justify-center text-[#b0a0c8] hover:bg-[#A371F7] hover:border-[#A371F7] hover:text-[#0d0618] hover:shadow-[0_0_15px_rgba(163,113,247,0.45)] active:scale-95 transition-all duration-200"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <InstagramIcon className="w-5 h-5 stroke-[2]" />
              </a>
            </div>

          </div>

          {/* Profile Avatar Column */}
          <div className="w-full flex justify-center lg:col-span-5">
            <div className="relative group">
              
              {/* Ambient Circular Backlight Glow */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-tr from-[#A371F7]/30 via-[#3FB950]/20 to-[#A371F7]/30 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Circular Avatar Frame */}
              <div className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full p-2 bg-[#1a0a2e] border-2 border-[#3d1a6e] shadow-2xl group-hover:border-[#A371F7]/60 transition-all duration-300 flex items-center justify-center">
                
                {/* Profile Image */}
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0d0618]">
                  <img
                    src="/profile.jpg"
                    alt="Pindi Navadeep"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/avatar.jpg';
                    }}
                  />
                </div>

                {/* Subtle Floating Status Pill */}
                <div className="absolute bottom-1 right-1 sm:bottom-3 sm:right-3 px-2.5 sm:px-3 py-1 rounded-full bg-[#120724]/95 backdrop-blur-md border border-[#3d1a6e] flex items-center gap-1.5 sm:gap-2 shadow-lg">
                  <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FB950] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-[#3FB950]"></span>
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono font-medium text-[#3FB950]">Active</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
