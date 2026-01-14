"use client";

import { personalInfo } from "@/data/content";
import Image from "next/image";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import { FormattedText } from "./FormattedText";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl w-full relative z-10"
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <div className="relative lg:grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px] lg:gap-20 items-center">
          {/* Profile Image - Overlaps on mobile, separate on desktop */}
          <motion.div
            className="absolute -top-4 right-4 w-[140px] sm:w-[180px] md:relative md:top-0 md:w-auto lg:justify-self-end lg:order-last z-20"
            variants={fadeUp}
          >
            <div className="relative group max-w-[140px] sm:max-w-[180px] md:max-w-sm lg:max-w-none">
              {/* Decorative corner accents - stronger on mobile for balance */}
              <motion.div
                className="absolute -top-2 -left-2 sm:-top-2 sm:-left-2 md:-top-4 md:-left-4 w-6 h-6 sm:w-6 sm:h-6 md:w-12 md:h-12 border-t-4 border-l-4 border-tertiary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-2 sm:-right-2 md:-bottom-4 md:-right-4 w-6 h-6 sm:w-6 sm:h-6 md:w-12 md:h-12 border-b-4 border-r-4 border-tertiary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              />

              <div className="relative w-full aspect-[3/4] max-h-[190px] sm:max-h-[240px] md:max-h-[500px] lg:w-[400px] lg:max-h-[540px] xl:w-[450px] xl:max-h-[600px] overflow-hidden border-4 md:border-4 lg:border-8 border-primary shadow-[8px_8px_0_0_rgba(107,99,88,0.3)]">
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
                {/* Brutalist frame accent - mobile only */}
                <div className="absolute inset-0 border-2 border-tertiary/20 pointer-events-none md:hidden" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-8 sm:space-y-8 md:space-y-12 w-full pt-2">
            {/* Name - Enhanced for readability over photo */}
            <motion.div variants={fadeUp} className="relative">
              <h1 className="font-black tracking-tighter leading-[0.85] text-primary relative z-10 max-w-[60%] sm:max-w-[65%] md:max-w-none"
                  style={{
                    fontSize: 'clamp(3rem, 12vw, 7rem)',
                    textShadow: '4px 4px 0 rgba(255, 255, 255, 0.9), 6px 6px 0 rgba(107, 99, 88, 0.3)',
                    WebkitTextStroke: '1px rgba(34, 40, 49, 0.1)'
                  }}>
                Luke<br />Halley
              </h1>
              {/* Subtle background accent for depth */}
              <div className="absolute -left-2 -top-1 w-[calc(100%+1rem)] h-[calc(100%+0.5rem)] bg-white/30 -z-10 md:hidden" />
            </motion.div>

            {/* Title & Tagline */}
            <motion.div className="space-y-4 sm:space-y-6 pr-4 md:pr-0 max-w-[95%] md:max-w-none" variants={fadeUp}>
              <p className="font-mono font-bold text-secondary tracking-tight uppercase whitespace-pre-line bg-white/30 -ml-1 pl-1 pr-2 py-1 md:bg-transparent md:ml-0 md:pl-0 md:pr-0 md:py-0"
                 style={{ fontSize: 'clamp(0.75rem, 3vw, 1rem)' }}>
                {personalInfo.title}
              </p>
              <p className="font-bold text-primary max-w-3xl leading-tight bg-white/30 -ml-1 pl-1 pr-2 py-1 md:bg-transparent md:ml-0 md:pl-0 md:pr-0 md:py-0"
                 style={{ fontSize: 'var(--fluid-xl)' }}>
                <FormattedText text={personalInfo.tagline} />
                <br />
                <strong>{personalInfo.yearsOfExperience}+ years</strong>.
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
              className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 items-center"
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
                <Mail className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                <span className="relative z-10">Email</span>
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
                <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
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
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
