import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ activeTab, onSelectTab, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleTabClick = (id) => {
    onSelectTab(id);      // scrolls to the section
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[#0f0520]/95 backdrop-blur-md border-b border-[#3d1a6e]/60 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_20px_rgba(163,113,247,0.08)]`}
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 ${mobileMenuOpen ? 'py-3.5' : 'py-3 sm:py-4'
          }`}
      >
        <div className="flex items-center justify-between gap-5 sm:gap-7 lg:gap-9">
          {/* Logo */}
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-0.5 group text-xl sm:text-2xl font-black tracking-tight text-[#E6EDF3] transition-transform duration-200 hover:scale-[1.02] text-left focus:outline-none shrink-0"
          >
            <span>Navadeep</span>
            <span className="text-[#58A6FF]">.</span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleTabClick(link.id)}
                  className={`relative py-1 text-sm sm:text-base font-medium transition-colors duration-200 focus:outline-none ${isActive
                      ? 'text-[#A371F7] font-bold'
                      : 'text-[#b0a0c8] hover:text-[#EDE9F8]'
                    }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#A371F7] rounded-full shadow-[0_0_8px_#A371F7]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Resume CTA / Action */}
          <div className="hidden md:flex items-center shrink-0">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="btn-outline !py-2 !px-4 !text-sm font-semibold"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button & Quick Resume */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="p-2 text-xs font-semibold rounded-full bg-[#1a0a2e] text-[#A371F7] border border-[#3d1a6e] hover:border-[#A371F7] transition-colors"
                aria-label="View Resume"
                title="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#1a0a2e] text-[#EDE9F8] border border-[#3d1a6e] focus:outline-none transition-colors hover:border-[#A371F7]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#A371F7]" /> : <Menu className="w-5 h-5 text-[#A371F7]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 mt-2 border-t border-[#30363D]/80 animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleTabClick(link.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm sm:text-base font-medium transition-colors text-left w-full ${isActive
                        ? 'bg-[#A371F7]/15 text-[#A371F7] font-bold border-l-4 border-[#A371F7]'
                        : 'text-[#EDE9F8] hover:bg-[#3d1a6e]/30 hover:text-[#A371F7]'
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#A371F7] shadow-[0_0_6px_#A371F7]"></span>}
                  </button>
                );
              })}

              {onOpenResume && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="btn-primary w-full !py-2.5 !text-sm font-bold"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
