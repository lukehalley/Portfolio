"use client";

import { impact } from "@/data/content";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport, fadeUp, staggerContainer } from "@/lib/animations";

export function Impact() {
  return (
    <section
      id="impact"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary dark-texture"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8 md:mb-12 relative inline-block z-20"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
        >
          <h2
            className="relative z-10 font-black tracking-tighter text-white"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Impact
          </h2>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-tertiary origin-left z-0"
            variants={borderGrow}
          />
        </motion.div>

        {/* Eyebrow + intro */}
        <p
          className="font-mono font-bold uppercase text-tertiary tracking-tight mb-6"
          style={{ fontSize: 'var(--fluid-sm)', letterSpacing: '0.04em' }}
        >
          {impact.eyebrow}
        </p>
        <p
          className="text-white-muted leading-relaxed max-w-3xl mb-16 md:mb-20"
          style={{ fontSize: 'var(--fluid-lg)' }}
        >
          {impact.intro}
        </p>

        {/* Signature: a Terraform-style plan summary of the whole tenure */}
        <div className="border-y-4 border-white-ghost py-6 md:py-8 mb-16 md:mb-20">
          <p
            className="font-mono text-white leading-relaxed"
            style={{ fontSize: 'var(--fluid-xl)', fontWeight: 700 }}
          >
            <span className="text-white-subtle">Plan: </span>
            <span className="text-tertiary">+18</span> systems to add,{" "}
            <span className="text-tertiary">~100+</span> teams to change,{" "}
            <span className="text-tertiary">-0</span> incidents to destroy.
          </p>
        </div>

        {/* Headline number */}
        <div className="mb-14 md:mb-20">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-1">
            <span
              className="font-black text-white leading-none"
              style={{ fontSize: 'var(--fluid-9xl)' }}
            >
              {impact.headline.value}
            </span>
            <span
              className="font-mono text-tertiary mb-2 md:mb-3"
              style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 700 }}
            >
              {impact.headline.unit}
            </span>
          </div>
          <p
            className="font-mono uppercase text-white tracking-tight mt-2"
            style={{ fontSize: 'var(--fluid-xl)', fontWeight: 700 }}
          >
            {impact.headline.label}
          </p>
          <p className="text-white-subtle mt-3 max-w-2xl" style={{ fontSize: 'var(--fluid-base)' }}>
            {impact.headline.proof}
          </p>
          <p
            className="font-mono text-tertiary mt-5"
            style={{ fontSize: 'var(--fluid-sm)', fontWeight: 700 }}
          >
            + {impact.avoided}
          </p>
        </div>

        {/* Stat grid: hairline-separated tiles */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white-ghost border border-white-ghost"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={staggerContainer}
        >
          {impact.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-primary p-5 md:p-7 group transition-colors duration-300 hover:bg-secondary"
            >
              <span
                className="font-mono text-tertiary block mb-3"
                style={{ fontSize: 'var(--fluid-base)', fontWeight: 700 }}
              >
                +
              </span>
              <div
                className="font-black text-white leading-none mb-3"
                style={{ fontSize: 'var(--fluid-4xl)' }}
              >
                {stat.value}
              </div>
              <div
                className="font-mono uppercase text-white tracking-tight mb-2"
                style={{ fontSize: 'var(--fluid-xs)', fontWeight: 700, letterSpacing: '0.04em' }}
              >
                {stat.label}
              </div>
              <p className="text-white-subtle leading-snug" style={{ fontSize: 'var(--fluid-xs)' }}>
                {stat.proof}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Leader review */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <blockquote className="border-l-4 border-tertiary pl-6 md:pl-8">
            <p
              className="font-black text-white leading-tight"
              style={{ fontSize: 'var(--fluid-4xl)' }}
            >
              “{impact.quote.text}”
            </p>
            <footer
              className="font-mono uppercase text-white-subtle mt-4 tracking-tight"
              style={{ fontSize: 'var(--fluid-sm)' }}
            >
              {impact.quote.attribution}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
