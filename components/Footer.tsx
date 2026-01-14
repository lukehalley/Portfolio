import { personalInfo } from "@/data/content";
import { Github, Linkedin, Mail } from "lucide-react";

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
          <div className="flex flex-col justify-between">
            <div>
              <h4
                className="font-mono font-bold text-tertiary mb-6 uppercase tracking-wide"
                style={{ fontSize: 'var(--fluid-xl)' }}
              >
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-3 text-primary hover:text-tertiary transition-colors duration-300"
                  style={{ fontSize: 'var(--fluid-lg)' }}
                >
                  <Mail className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="font-mono">{personalInfo.email}</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mt-8">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border-3 sm:border-4 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <span className="font-mono font-bold" style={{ fontSize: 'var(--fluid-sm)' }}>GitHub</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border-3 sm:border-4 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <span className="font-mono font-bold" style={{ fontSize: 'var(--fluid-sm)' }}>LinkedIn</span>
              </a>
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
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
