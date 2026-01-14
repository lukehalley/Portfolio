"use client";

import { personalInfo } from "@/data/content";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import { FormattedText } from "./FormattedText";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl w-full relative z-10"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="space-y-12">
            {/* Name */}
            <motion.div variants={fadeUp}>
              <h1 className="font-black tracking-tighter leading-[0.85] text-primary"
                  style={{ fontSize: 'var(--fluid-9xl)' }}>
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Title & Tagline */}
            <motion.div className="space-y-6" variants={fadeUp}>
              <p className="font-mono font-bold text-secondary tracking-tight uppercase whitespace-pre-line"
                 style={{ fontSize: 'var(--fluid-xl)' }}>
                {personalInfo.title}
              </p>
              <p className="font-bold text-primary max-w-3xl leading-tight"
                 style={{ fontSize: 'var(--fluid-3xl)' }}>
                <FormattedText text={personalInfo.tagline} />
                <br />
                <strong>13+ years</strong>.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div variants={fadeUp}>
              <p className="font-mono font-bold text-secondary flex items-center gap-3 uppercase"
                 style={{ fontSize: 'var(--fluid-base)' }}>
                <MapPin className="w-5 h-5 text-tertiary" />
                {personalInfo.location}
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center"
              variants={fadeUp}
            >
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="group relative inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-white bg-primary border-4 border-primary overflow-hidden"
                style={{ fontSize: 'var(--fluid-base)' }}
                whileHover={{ scale: 1.05, boxShadow: "12px 12px 0 0 var(--color-tertiary)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Email</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>

              <motion.a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                style={{ fontSize: 'var(--fluid-base)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-primary hover:text-white transition-colors duration-300"
                style={{ fontSize: 'var(--fluid-base)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="lg:justify-self-end order-first lg:order-last"
            variants={fadeUp}
          >
            <div className="relative group">
              {/* Decorative corner accents */}
              <motion.div
                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-tertiary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-tertiary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              />

              <div className="relative w-full aspect-[3/4] max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:w-[400px] lg:max-h-[540px] xl:w-[450px] xl:max-h-[600px] overflow-hidden border-4 md:border-8 border-primary">
                <Image
                  src="/images/me.webp"
                  alt="Luke Halley"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 400px, 450px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-tertiary-faint mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
