"use client";

import { experience } from "@/data/content";
import { Award, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";

export function Awards() {
  return (
    <section
      id="awards"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary dark-texture"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with trophy accent */}
        <div className="mb-20 md:mb-28 flex items-end gap-8">
          <motion.div
            className="relative inline-block z-20"
            initial="hidden"
            whileInView="show"
            viewport={scrollViewport}
          >
            <h2
              className="relative z-10 font-black tracking-tighter text-white"
              style={{ fontSize: 'var(--fluid-8xl)' }}
            >
              Recognition
            </h2>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-tertiary origin-left z-0"
              variants={borderGrow}
            />
          </motion.div>
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
                  className="absolute -top-6 -right-2 font-black text-white-ghost select-none z-0"
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
                  className="relative z-10 text-primary uppercase tracking-tight"
                  style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 900, lineHeight: '1.05' }}
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
            style={{ fontSize: 'var(--fluid-lg)', fontWeight: 200, letterSpacing: '0.15em' }}
          >
            Professional achievements & industry recognition
          </p>
        </div>
      </div>
    </section>
  );
}
