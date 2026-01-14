"use client";

import { education } from "@/data/content";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";

export function Education() {
  return (
    <section
      id="education"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary dark-texture"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-white"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Education
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Degree */}
          <AnimatedSection>
            <div className="mb-8">
              <h3 className="font-mono text-tertiary tracking-tight uppercase font-black" style={{ fontSize: 'var(--fluid-xl)' }}>
                Degree
              </h3>
            </div>
            <div className="relative pl-8 py-2 group">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary group-hover:bg-primary origin-top transition-colors"
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport}
                variants={borderGrow}
              />
              <p className="text-white mb-3" style={{ fontSize: 'var(--fluid-3xl)', fontWeight: 900, lineHeight: '1.0' }}>
                {education.degree}
              </p>
              <p className="text-tertiary mb-4" style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 700 }}>
                {education.honours}
              </p>
              <p className="font-mono text-white-muted mb-2" style={{ fontSize: 'var(--fluid-lg)', fontWeight: 300 }}>
                {education.institution}
              </p>
              <p className="font-mono text-white-subtle uppercase" style={{ fontSize: 'var(--fluid-base)', fontWeight: 200, letterSpacing: '0.08em' }}>
                {education.period}
              </p>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection>
            <div className="mb-8">
              <h3 className="font-mono text-tertiary tracking-tight uppercase font-black" style={{ fontSize: 'var(--fluid-xl)' }}>
                Certifications
              </h3>
            </div>
            <div className="space-y-6">
              {education.certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative pl-8 py-2 group"
                >
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary group-hover:bg-primary origin-top transition-colors"
                    initial="hidden"
                    whileInView="show"
                    viewport={scrollViewport}
                    variants={borderGrow}
                  />
                  <p className="text-white mb-3 group-hover:text-tertiary transition-colors" style={{ fontSize: 'var(--fluid-3xl)', fontWeight: 900, lineHeight: '1.0' }}>
                    {cert.name}
                  </p>
                  <p className="text-tertiary group-hover:text-white transition-colors" style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 700 }}>
                    {cert.level}
                  </p>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
