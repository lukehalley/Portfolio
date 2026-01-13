'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'INTRO' },
  { id: 'about', label: 'ABOUT' },
  { id: 'experience', label: 'WORK' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDU' },
  { id: 'personal', label: 'LIFE' },
];

export function SidebarNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-0 bottom-0 z-50 hidden lg:flex flex-col justify-center w-16 bg-white border-r-4 border-primary">
      {/* Top accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tertiary" />

      {/* Vertical progress indicator */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-primary/10">
        <div
          className="w-full bg-tertiary transition-all duration-500"
          style={{
            height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`,
          }}
        />
      </div>

      {/* Section links */}
      <div className="flex flex-col gap-10 items-center relative px-2">
        {sections.map(({ id, label }, index) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="group relative flex items-center justify-center touch-manipulation"
              aria-label={`Go to ${label} section`}
            >
              {/* Vertical text */}
              <div className="relative">
                <span
                  className={`font-mono text-[9px] tracking-[0.35em] uppercase select-none ${
                    isActive
                      ? 'text-primary font-black'
                      : 'text-primary/30 font-bold group-hover:text-primary/60'
                  }`}
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    letterSpacing: '0.35em',
                  }}
                >
                  {label}
                </span>

                {/* Active indicator - bold square */}
                {isActive && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-[3px] h-[3px] bg-tertiary rotate-45" />
                )}
              </div>

              {/* Section number overlay on hover */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 -left-6 font-mono text-[10px] font-black ${
                  isActive
                    ? 'text-tertiary opacity-100'
                    : 'text-primary/0 group-hover:text-primary/40 group-hover:opacity-100 opacity-0'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-tertiary" />
    </nav>
  );
}
