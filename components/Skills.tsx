"use client";

import { skills } from "@/data/content";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";

export function Skills() {
  const skillEntries = Object.entries(skills);

  return (
    <section
      id="skills"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24 relative inline-block z-20"
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
        >
          <h2
            className="relative z-10 font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Skills
          </h2>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2 md:h-3 bg-tertiary origin-left z-0"
            variants={borderGrow}
          />
        </motion.div>

        {/* Skills by Domain */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 md:gap-y-16">
          {skillEntries.map(([domain, skillList]) => (
            <div key={domain}>
              <div className="mb-4 md:mb-6">
                <div className="h-[3rem] md:h-[4.5rem] flex items-end">
                  <h3
                    className="font-mono text-tertiary tracking-tight uppercase font-bold"
                    style={{ fontSize: 'var(--fluid-lg)' }}
                  >
                    {domain}
                  </h3>
                </div>
                <div className="h-1 bg-tertiary-faint mt-2 md:mt-3" />
              </div>
              <ul className="space-y-2 md:space-y-3">
                {(skillList as Array<{ name: string }>).map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 bg-tertiary rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                    <span className="font-medium group-hover:text-tertiary transition-colors" style={{ fontSize: 'var(--fluid-base)' }}>
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
