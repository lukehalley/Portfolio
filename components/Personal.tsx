"use client";

import { personal } from "@/data/content";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";

const hobbyImages: Record<string, { src: string; position?: string }> = {
  Travel: { src: "/images/travelling-opt.webp", position: "object-[center_25%]" },
  Running: { src: "/images/running-opt.webp", position: "object-top" },
  Cooking: { src: "/images/cooking-opt.webp", position: "object-bottom" },
};

// Helper to render description with varied typography
const renderDescription = (text: string) => {
  // Travel description
  if (text.includes("Thailand")) {
    return (
      <>
        <span className="font-light text-primary-subtle">I've traveled to </span>
        <span className="font-bold" style={{ fontSize: 'var(--fluid-lg)' }}>Thailand, Slovenia, Italy, France</span>
        <span className="font-light text-primary-subtle">, and a few other spots over the years. Each place has its own vibe and way of doing things. </span>
        <span className="font-semibold" style={{ fontSize: 'var(--fluid-md)' }}>Travel is a good way to get perspective</span>
        <span className="font-light text-primary-subtle"> outside of work and daily routines. I'd like to see more of the world when time allows.</span>
      </>
    );
  }

  // Running description
  if (text.includes("running since")) {
    return (
      <>
        <span className="font-bold" style={{ fontSize: 'var(--fluid-lg)' }}>Been running since I was 7.</span>
        <span className="font-light text-primary-subtle"> Started with local races in Ireland and kept it up over the years. It's good for </span>
        <span className="font-semibold" style={{ fontSize: 'var(--fluid-md)' }}>clearing my head and staying fit</span>
        <span className="font-light text-primary-subtle">. These days I just try to stay consistent with it.</span>
      </>
    );
  }

  // Cooking description
  if (text.includes("cooking")) {
    return (
      <>
        <span className="font-light text-primary-subtle">After spending the day on infrastructure and pipelines, </span>
        <span className="font-semibold" style={{ fontSize: 'var(--fluid-md)' }}>cooking is a good way to switch off</span>
        <span className="font-light text-primary-subtle">. I like making </span>
        <span className="font-bold" style={{ fontSize: 'var(--fluid-lg)' }}>Irish, Italian, and French food</span>
        <span className="font-light text-primary-subtle">. It's practical, hands-on work that doesn't involve a screen. Also means I eat well.</span>
      </>
    );
  }

  return <span className="font-normal">{text}</span>;
};

export function Personal() {
  return (
    <section
      id="personal"
      className="py-32 md:py-40 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection className="mb-24 md:mb-32">
          <h2
            className="font-black tracking-tighter text-primary"
            style={{ fontSize: 'var(--fluid-8xl)' }}
          >
            Beyond Work
          </h2>
        </AnimatedSection>

        {/* Hobbies Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          {personal.hobbies.map((hobby, index) => (
            <AnimatedSection key={index} className="h-full">
              <div className="group h-full flex flex-col">
              {/* Image with hero-style filter */}
              {hobbyImages[hobby.name] && (
                <div className="relative mb-6">
                  <div className="relative aspect-[4/3] overflow-hidden border-4 border-primary">
                    <Image
                      src={hobbyImages[hobby.name].src}
                      alt={hobby.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ${hobbyImages[hobby.name].position || ''}`}
                    />
                    <div className="absolute inset-0 bg-tertiary-faint mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                  </div>
                </div>
              )}

              <div className="relative pl-6 py-2 flex-1 flex flex-col">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-faint group-hover:bg-tertiary origin-top transition-colors"
                  initial="hidden"
                  whileInView="show"
                  viewport={scrollViewport}
                  variants={borderGrow}
                />
                <h3 className="font-mono mb-4 uppercase" style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 900 }}>
                  {hobby.name}
                </h3>
                <div className="text-primary mb-4 flex-1" style={{ fontSize: 'var(--fluid-base)', lineHeight: '1.75', letterSpacing: '0.01em' }}>
                  {renderDescription(hobby.description)}
                </div>

                {/* Travel highlights */}
                {'highlights' in hobby && hobby.highlights && (
                  <div className="flex flex-wrap gap-2 font-mono" style={{ fontSize: 'var(--fluid-xs)' }}>
                    {hobby.highlights.map((item) => (
                      <span key={item} className="px-2 py-1 border border-primary-faint transition-colors duration-300 hover:border-tertiary">
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
