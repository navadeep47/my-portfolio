import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { useScrollReveal } from './hooks/useScrollReveal';

const SECTIONS = ['home', 'about', 'projects', 'education', 'skills', 'achievements', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Activate scroll-reveal observer after mount
  useScrollReveal();

  // Scroll-spy: detect which section is in view
  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Smooth scroll to a section by id
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="min-h-screen text-[#EDE9F8] antialiased selection:bg-[#A371F7]/30 selection:text-[#c4a0ff] flex flex-col"
      style={{ background: 'linear-gradient(135deg, #0d0618 0%, #1a0a2e 45%, #0d0f1f 100%)' }}
    >
      {/* Sticky Navbar — scroll-spy driven */}
      <Navbar
        activeTab={activeSection}
        onSelectTab={scrollToSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────── */}
        <section id="home">
          <Hero onNavigate={scrollToSection} onOpenResume={() => setIsResumeOpen(true)} />
        </section>

        <hr className="section-divider" />

        {/* ── About ────────────────────────────── */}
        <section id="about">
          <div data-reveal data-delay="100">
            <About
              onNavigateToEducation={() => scrollToSection('education')}
              onNavigateToContact={() => scrollToSection('contact')}
            />
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── Projects ─────────────────────────── */}
        <section id="projects">
          <div data-reveal data-delay="100">
            <Projects />
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── Education ────────────────────────── */}
        <section id="education">
          <div data-reveal data-delay="100">
            <Education />
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── Skills ───────────────────────────── */}
        <section id="skills">
          <div data-reveal data-delay="100">
            <Skills />
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── Achievements ─────────────────────── */}
        <section id="achievements">
          <div data-reveal data-delay="100">
            <Achievements />
          </div>
        </section>

        <hr className="section-divider" />

        {/* ── Contact ──────────────────────────── */}
        <section id="contact">
          <div data-reveal data-delay="100">
            <Contact onOpenResume={() => setIsResumeOpen(true)} />
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onSelectTab={scrollToSection} />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
