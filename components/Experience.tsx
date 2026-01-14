"use client";

import { experience } from "@/data/content";
import { FormattedText } from "./FormattedText";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Experience
          </h2>
        </AnimatedSection>

        {/* Current Role */}
        <AnimatedSection className="mb-32 md:mb-40">
          <div className="mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-2">
              <span className="px-3 py-1 bg-primary text-white font-mono font-bold uppercase" style={{ fontSize: 'var(--fluid-xs)' }}>
                Current
              </span>
            </div>
            <h3 className="font-black uppercase text-primary tracking-wide" style={{ fontSize: 'var(--fluid-5xl)' }}>
              {experience.current.company}
            </h3>
            <p className="font-bold text-tertiary mt-2" style={{ fontSize: 'var(--fluid-2xl)' }}>
              {experience.current.role}
            </p>
            <p className="font-mono font-bold text-secondary mt-2 tracking-tight uppercase" style={{ fontSize: 'var(--fluid-xl)' }}>
              {experience.current.period} • {experience.current.location}
            </p>
            <p className="text-primary-subtle mt-4 leading-relaxed max-w-3xl" style={{ fontSize: 'var(--fluid-lg)' }}>
              {experience.current.context}
            </p>
          </div>

          <div className="space-y-10 md:space-y-12">
            {experience.current.highlights.map((highlight, index) => (
              <AnimatedSection key={index}>
                <div className="relative pl-8 py-3">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary origin-top"
                  initial="hidden"
                  whileInView="show"
                  viewport={scrollViewport}
                  variants={borderGrow}
                />
                <h4 className="font-bold mb-2 uppercase" style={{ fontSize: 'var(--fluid-3xl)' }}>
                  {highlight.title}
                </h4>
                <p className="font-mono text-tertiary tracking-tight mb-4" style={{ fontSize: 'var(--fluid-base)' }}>
                  {highlight.impact}
                </p>
                <p className="text-primary-muted mb-6 leading-relaxed font-normal" style={{ fontSize: 'var(--fluid-lg)' }}>
                  <FormattedText text={highlight.description} />
                </p>
                <div className="flex flex-wrap gap-2">
                  {highlight.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 font-mono border-2 border-primary-faint transition-colors duration-300 hover:border-tertiary hover:bg-tertiary hover:text-primary"
                      style={{ fontSize: 'var(--fluid-xs)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Previous Roles */}
        {experience.previous.map((job, jobIndex) => (
          <AnimatedSection key={jobIndex} className="mb-32 md:mb-40">
            <div className="mb-10 md:mb-12">
              <h3 className="font-black uppercase text-primary tracking-wide" style={{ fontSize: 'var(--fluid-5xl)' }}>
                {job.company}
              </h3>
              <p className="font-bold text-tertiary mt-2" style={{ fontSize: 'var(--fluid-2xl)' }}>
                {job.role}
              </p>
              <p className="font-mono font-bold text-secondary mt-2 tracking-tight uppercase" style={{ fontSize: 'var(--fluid-xl)' }}>
                {job.period} • {job.location}
              </p>
            </div>

            <div className="space-y-10 md:space-y-12">
              {job.highlights.map((highlight, index) => (
                <AnimatedSection key={index}>
                  <div className="relative pl-8 py-3">
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary origin-top"
                    initial="hidden"
                    whileInView="show"
                    viewport={scrollViewport}
                    variants={borderGrow}
                  />
                  <h4 className="font-bold mb-2 uppercase" style={{ fontSize: 'var(--fluid-3xl)' }}>
                    {highlight.title}
                  </h4>
                  <p className="font-mono text-tertiary tracking-tight mb-4" style={{ fontSize: 'var(--fluid-base)' }}>
                    {highlight.impact}
                  </p>
                  <p className="text-primary-muted mb-6 leading-relaxed font-normal" style={{ fontSize: 'var(--fluid-lg)' }}>
                    <FormattedText text={highlight.description} />
                  </p>
                  {highlight.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {highlight.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 font-mono border-2 border-primary-faint transition-colors duration-300 hover:border-tertiary hover:bg-tertiary hover:text-primary"
                          style={{ fontSize: 'var(--fluid-xs)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        ))}

      </div>
    </section>
  );
}
