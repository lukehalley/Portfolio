"use client";

import { now, verticalAI } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { borderGrow, scrollViewport, fadeUp, staggerContainer } from "@/lib/animations";
import { VaMark } from "./VaMark";

export function Now() {
  return (
    <section
      id="verticalai"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8 md:mb-12 relative inline-flex items-end gap-4 md:gap-6 z-20"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
        >
          <VaMark className="text-primary shrink-0 w-[clamp(3.5rem,9vw,7rem)] h-[clamp(3.5rem,9vw,7rem)] -mb-[0.12em]" />
          <div className="relative">
            <h2
              className="relative z-10 font-black tracking-tighter text-primary"
              style={{ fontSize: 'var(--fluid-8xl)' }}
            >
              VerticalAI
            </h2>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-tertiary origin-left z-0"
              variants={borderGrow}
            />
          </div>
        </motion.div>

        <p
          className="font-mono font-bold uppercase text-tertiary tracking-tight mb-6"
          style={{ fontSize: 'var(--fluid-sm)', letterSpacing: '0.04em' }}
        >
          {now.eyebrow}
        </p>
        <p
          className="text-primary-muted leading-relaxed max-w-3xl mb-16 md:mb-20"
          style={{ fontSize: 'var(--fluid-lg)' }}
        >
          {now.intro}
        </p>

        {/* Stat strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-1 bg-primary border-4 border-primary mb-20 md:mb-28 shadow-[8px_8px_0_0_rgba(199,60,40,0.25)]"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          {now.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="bg-white p-5 md:p-7 transition-colors duration-300 hover:bg-accent">
              <div className="font-black text-primary leading-none mb-3" style={{ fontSize: 'var(--fluid-4xl)' }}>
                {stat.value}
              </div>
              <div
                className="font-mono uppercase text-tertiary tracking-tight mb-2"
                style={{ fontSize: 'var(--fluid-xs)', fontWeight: 700, letterSpacing: '0.04em' }}
              >
                {stat.label}
              </div>
              <p className="text-primary-subtle leading-snug" style={{ fontSize: 'var(--fluid-xs)' }}>
                {stat.proof}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* What I build + recently shipped */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 mb-20 md:mb-28">
          <div>
            <h3
              className="font-mono text-primary uppercase tracking-tight mb-8"
              style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 900 }}
            >
              What I build
            </h3>
            <ol className="space-y-8">
              {now.build.map((item, index) => (
                <li key={item.title} className="relative pl-14 md:pl-16">
                  <span
                    className="absolute left-0 top-0 font-mono font-black text-tertiary"
                    style={{ fontSize: 'var(--fluid-xl)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-bold uppercase text-primary mb-1" style={{ fontSize: 'var(--fluid-xl)' }}>
                    {item.title}
                  </h4>
                  <p className="text-primary-muted leading-relaxed" style={{ fontSize: 'var(--fluid-base)' }}>
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative bg-primary text-white p-8 md:p-10 border-4 border-primary self-start">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-tertiary" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-tertiary" />
            <p
              className="font-mono uppercase text-tertiary-light tracking-tight mb-3"
              style={{ fontSize: 'var(--fluid-xs)', fontWeight: 700, letterSpacing: '0.04em' }}
            >
              Shipped · Oct 2026
            </p>
            <h3 className="font-black leading-tight mb-8" style={{ fontSize: 'var(--fluid-2xl)' }}>
              {now.shipped.title}
            </h3>
            <ol className="space-y-5">
              {now.shipped.steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="font-mono font-black text-tertiary-light shrink-0" style={{ fontSize: 'var(--fluid-base)' }}>
                    {index + 1}
                  </span>
                  <span className="text-white-muted leading-relaxed" style={{ fontSize: 'var(--fluid-base)' }}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Case study */}
        <a
          href={now.caseStudy.url}
          target="_blank"
          rel="noopener"
          className="group grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 bg-white border-4 border-primary p-8 md:p-12 mb-20 md:mb-28 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1 shadow-[8px_8px_0_0_rgba(57,62,65,0.2)]"
        >
          <div>
          <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
            <div>
              <p
                className="font-mono uppercase text-tertiary tracking-tight mb-2"
                style={{ fontSize: 'var(--fluid-xs)', fontWeight: 700, letterSpacing: '0.04em' }}
              >
                Team case study
              </p>
              <h3 className="font-black uppercase text-primary tracking-wide" style={{ fontSize: 'var(--fluid-4xl)' }}>
                {now.caseStudy.title}
              </h3>
            </div>
          </div>
          <p className="text-primary-muted leading-relaxed max-w-3xl mb-8" style={{ fontSize: 'var(--fluid-lg)' }}>
            {now.caseStudy.description}
          </p>
          <span
            className="inline-flex items-center gap-2 font-mono font-bold uppercase text-primary group-hover:text-tertiary transition-colors"
            style={{ fontSize: 'var(--fluid-sm)' }}
          >
            Read the case study
            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
          </div>
          <div className="flex flex-col justify-center gap-8 lg:border-l-4 lg:border-primary/10 lg:pl-12">
            {now.caseStudy.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-black text-tertiary leading-none mb-2" style={{ fontSize: 'var(--fluid-5xl)' }}>
                  {stat.value}
                </div>
                <div className="font-mono uppercase text-primary tracking-tight" style={{ fontSize: 'var(--fluid-xs)', fontWeight: 700 }}>
                  {stat.label}
                </div>
              </div>
            ))}
            <p className="font-mono text-primary-subtle" style={{ fontSize: 'var(--fluid-xs)' }}>
              {now.caseStudy.source}
            </p>
          </div>
        </a>

        {/* Stack + talk */}
        <div className="mb-20 md:mb-28">
          <h3
            className="font-mono text-primary uppercase tracking-tight mb-6"
            style={{ fontSize: 'var(--fluid-xl)', fontWeight: 900 }}
          >
            Stack
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {now.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 font-mono border-2 border-primary-faint transition-colors duration-300 hover:border-tertiary hover:bg-tertiary hover:text-white"
                style={{ fontSize: 'var(--fluid-xs)' }}
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-primary-muted" style={{ fontSize: 'var(--fluid-base)' }}>
            {now.talk}
          </p>
        </div>

        {/* CTA */}
        <a
          href={verticalAI.url}
          target="_blank"
          rel="noopener"
          className="group relative flex flex-col md:flex-row md:items-center justify-between gap-8 bg-primary text-white p-8 md:p-12 border-4 border-primary transition-colors duration-300 hover:bg-tertiary hover:border-tertiary shadow-[8px_8px_0_0_rgba(199,60,40,0.3)]"
        >
          <div className="flex items-center gap-5 md:gap-8">
            <VaMark className="w-16 h-16 md:w-24 md:h-24 shrink-0" />
            <div>
              <p className="font-black leading-tight" style={{ fontSize: 'var(--fluid-3xl)' }}>
                Missing calls?
              </p>
              <p className="text-white-muted mt-1" style={{ fontSize: 'var(--fluid-lg)' }}>
                See what a VerticalAI agent would do with them.
              </p>
            </div>
          </div>
          <span
            className="inline-flex items-center gap-3 font-mono font-bold uppercase border-4 border-white px-5 py-3 w-fit group-hover:bg-white group-hover:text-tertiary transition-colors"
            style={{ fontSize: 'var(--fluid-base)' }}
          >
            {verticalAI.domain}
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </span>
        </a>
      </div>
    </section>
  );
}
