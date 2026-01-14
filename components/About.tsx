"use client";

import { journey } from "@/data/content";
import { FormattedText } from "./FormattedText";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary dark-texture"

    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-24 md:mb-32 relative inline-block z-20"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
        >
          <h2
            className="relative z-10 font-black tracking-tighter text-white"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            About
          </h2>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-tertiary origin-left z-0"
            variants={borderGrow}
          />
        </motion.div>

        {/* Journey */}
        <div className="space-y-8 md:space-y-12">
          {journey.map((paragraph, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-tertiary" />
              <p className="text-white font-medium leading-relaxed tracking-tight" style={{ fontSize: 'var(--fluid-lg)' }}>
                <FormattedText text={paragraph} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
