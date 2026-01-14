"use client";

import { journey } from "@/data/content";
import { FormattedText } from "./FormattedText";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";

export function About() {
  return (
    <section
      id="about"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-primary dark-texture"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-white"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            About
          </h2>
        </div>

        {/* Journey */}
        <div className="space-y-6 md:space-y-8">
          {journey.map((paragraph, index) => (
            <div key={index} className="relative pl-6 md:pl-8">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-faint origin-top"
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport}
                variants={borderGrow}
              />
              <p className="text-white" style={{ fontSize: 'var(--fluid-xl)', fontWeight: 200, lineHeight: '1.8', letterSpacing: '0.01em' }}>
                <FormattedText text={paragraph} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
