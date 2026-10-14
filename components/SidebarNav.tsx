'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { verticalAI } from '@/data/content';
import { VaMark } from './VaMark';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'verticalai', label: 'VerticalAI' },
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'personal', label: 'Beyond work' },
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

  return (
    <>
      <nav
        aria-label="Sections"
        className="fixed left-0 top-0 bottom-0 z-50 hidden lg:flex flex-col items-center w-20 bg-white border-r-4 border-primary"
      >
        {/* Name mark */}
        <button
          onClick={() => scrollToSection('hero')}
          className="shrink-0 w-full h-20 flex items-center justify-center border-b-4 border-primary font-black text-xl tracking-tight text-primary hover:bg-primary hover:text-white transition-colors"
          aria-label="Luke Halley, go to the top"
        >
          LH
        </button>

        {/* Section links: numbers, with the name on hover */}
        <div className="flex-1 min-h-0 flex flex-col justify-center gap-1 w-full">
          {sections.map(({ id, label }, index) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`group relative w-full h-12 flex items-center justify-center font-mono text-base font-bold transition-colors ${
                  isActive ? 'text-tertiary' : 'text-primary-subtle hover:text-primary'
                }`}
                aria-label={`Go to ${label} section`}
                aria-current={isActive ? 'true' : undefined}
              >
                {isActive && <span className="absolute left-0 top-2 bottom-2 w-1 bg-tertiary" />}
                {String(index + 1).padStart(2, '0')}
                <span className="pointer-events-none absolute left-full ml-1 px-3 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wider whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
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
          className="shrink-0 group w-full flex flex-col items-center gap-1.5 py-4 bg-tertiary text-white hover:bg-primary transition-colors"
          title={`Lead Engineer at ${verticalAI.name}: ${verticalAI.domain}`}
        >
          <VaMark className="w-10 h-10" />
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
