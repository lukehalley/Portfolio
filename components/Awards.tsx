import { experience } from "@/data/content";
import { Award, Trophy } from "lucide-react";

export function Awards() {
  return (
    <section
      id="awards"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with trophy accent */}
        <div className="mb-20 md:mb-28 flex items-end gap-8">
          <h2
            className="font-black tracking-tighter text-white"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Recognition
          </h2>
          <Trophy
            className="text-tertiary mb-2 hidden md:block"
            style={{ width: 'clamp(3rem, 6vw, 5rem)', height: 'clamp(3rem, 6vw, 5rem)' }}
            strokeWidth={1.5}
          />
        </div>

        {/* Awards Grid - Staggered Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {experience.awards.map((award, index) => (
            <div
              key={index}
              className={`group relative ${index % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-tertiary transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:-top-4 group-hover:-left-4" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-tertiary transition-all duration-300 group-hover:w-12 group-hover:h-12 group-hover:-bottom-4 group-hover:-right-4" />

              {/* Card */}
              <div className="relative bg-white border-4 border-white p-8 md:p-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                {/* Large index number */}
                <span
                  className="absolute -top-6 -right-2 font-black text-white-ghost select-none"
                  style={{ fontSize: 'clamp(6rem, 12vw, 10rem)', lineHeight: 0.8 }}
                >
                  0{index + 1}
                </span>

                {/* Award icon */}
                <div className="relative z-10 mb-6">
                  <Award
                    className="text-tertiary"
                    style={{ width: 'clamp(2rem, 4vw, 3rem)', height: 'clamp(2rem, 4vw, 3rem)' }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Award name */}
                <h3
                  className="relative z-10 font-black text-primary uppercase tracking-tight leading-tight"
                  style={{ fontSize: 'var(--fluid-2xl)' }}
                >
                  {award}
                </h3>

                {/* Decorative line */}
                <div className="relative z-10 mt-6 h-1 bg-tertiary w-16 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent text */}
        <div className="mt-20 md:mt-28 border-t border-white-ghost pt-8">
          <p
            className="font-mono text-white-subtle uppercase tracking-widest"
            style={{ fontSize: 'var(--fluid-sm)' }}
          >
            Professional achievements & industry recognition
          </p>
        </div>
      </div>
    </section>
  );
}
