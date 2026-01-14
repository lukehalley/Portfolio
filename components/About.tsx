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
        <div className="space-y-8 md:space-y-12">
          {journey.map((paragraph, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-tertiary origin-top"
                initial="hidden"
                whileInView="show"
                viewport={scrollViewport}
                variants={borderGrow}
              />
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
