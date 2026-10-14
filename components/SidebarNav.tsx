'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { verticalAI } from '@/data/content';
import { VaMark } from './VaMark';

const sections = [
  { id: 'hero', label: 'INTRO' },
  { id: 'verticalai', label: 'NOW' },
  { id: 'about', label: 'ABOUT' },
  { id: 'impact', label: 'IMPACT' },
  { id: 'experience', label: 'WORK' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
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

    // Sections below the fold are dynamically imported, so retry until they mount.
    const observed = new Set<string>();
    const observeAll = () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && !observed.has(id)) {
          observer.observe(element);
          observed.add(id);
        }
      });
      return observed.size === sections.length;
    };
    const interval = window.setInterval(() => {
      if (observeAll()) window.clearInterval(interval);
    }, 500);
    observeAll();

    return () => {
      window.clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  return (
    <>
      <nav
        aria-label="Sections"
        className="fixed left-0 top-0 bottom-0 z-50 hidden lg:flex flex-col items-center w-16 bg-white border-r-4 border-primary"
      >
        {/* Name mark */}
        <button
          onClick={() => scrollToSection('hero')}
          className="shrink-0 w-full h-16 flex items-center justify-center border-b-4 border-primary font-black text-primary hover:bg-primary hover:text-white transition-colors"
          aria-label="Back to top"
        >
          LH
        </button>

        {/* Section links */}
        <div className="relative flex-1 min-h-0 flex flex-col justify-center gap-4 items-center w-full">
          <div className="absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-primary/10">
            <div
              className="w-full bg-tertiary transition-all duration-500"
              style={{ height: `${((activeIndex + 1) / sections.length) * 100}%` }}
            />
          </div>
          {sections.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="group relative flex items-center justify-center"
                aria-label={`Go to ${label} section`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className={`font-mono text-[9px] uppercase select-none transition-colors ${
                    isActive
                      ? 'text-tertiary font-black'
                      : 'text-primary-ghost font-bold group-hover:text-primary'
                  }`}
                  style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* VerticalAI link */}
        <a
          href={verticalAI.url}
          target="_blank"
          rel="noopener"
          className="shrink-0 group w-full flex flex-col items-center gap-2 py-4 bg-tertiary text-white hover:bg-primary transition-colors"
          title={`Lead Engineer at ${verticalAI.name}: ${verticalAI.domain}`}
        >
          <VaMark className="w-8 h-8" />
          <span className="sr-only">VerticalAI, where I am Lead Engineer</span>
          <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </nav>

      {/* Mobile: the rail is hidden, so keep the VerticalAI link in reach */}
      <a
        href={verticalAI.url}
        target="_blank"
        rel="noopener"
        className="lg:hidden fixed bottom-6 left-4 z-50 inline-flex items-center gap-2 bg-tertiary text-white pl-3 pr-4 py-2.5 border-2 border-primary font-mono text-xs font-black uppercase shadow-[4px_4px_0_0_rgba(57,62,65,0.9)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
      >
        <VaMark className="w-5 h-5" />
        VerticalAI
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </>
  );
}
