"use client";

import { personalInfo } from "@/data/content";
import { Github, Linkedin } from "lucide-react";
import { EmailCopy } from "./EmailCopy";

export function Footer() {
  return (
    <footer className="relative bg-white text-primary px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Left: Name & Tagline */}
          <div>
            <h3
              className="font-black mb-4 tracking-tighter"
              style={{ fontSize: 'var(--fluid-6xl)' }}
            >
              {personalInfo.name}
            </h3>
            <p
              className="text-secondary mb-8 font-mono uppercase tracking-wide"
              style={{ fontSize: 'var(--fluid-lg)' }}
            >
              {personalInfo.title}
            </p>
            <p
              className="text-secondary leading-relaxed max-w-md"
              style={{ fontSize: 'var(--fluid-lg)' }}
            >
              Based in Perth, Australia. Open to remote opportunities and collaborations.
            </p>
          </div>

          {/* Right: Contact & Social */}
          <div className="flex flex-col justify-end">
            <div className="flex flex-col gap-4 sm:gap-6 max-w-fit">
              {/* Email with copy functionality - spans full width */}
              <EmailCopy />

              {/* Social links on same row */}
              <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
                  style={{ fontSize: 'var(--fluid-base)' }}
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
                  style={{ fontSize: 'var(--fluid-base)' }}
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-primary opacity-10 mb-8" />

        {/* Bottom Row */}
        <div className="flex justify-center md:justify-start">
          <p
            className="text-secondary font-mono"
            style={{ fontSize: 'var(--fluid-sm)' }}
          >
            © {new Date().getFullYear()} {personalInfo.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
