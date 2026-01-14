"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { brutalExpand, scrollViewport } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  impact?: string;
  technologies: string[];
  link?: string;
  featured?: boolean;
  image?: string;
}

export function ProjectCard({
  title,
  subtitle,
  period,
  description,
  technologies,
  link,
  featured = false,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      className="brutal-border bg-white p-6 sm:p-8 md:p-10 group relative flex flex-col h-full min-h-[380px] sm:min-h-[400px] md:min-h-[420px]"
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={brutalExpand}
      whileHover={{
        y: -4,
        boxShadow: "12px 12px 0 0 var(--color-primary)",
        transition: { duration: 0.2 }
      }}
    >
      {/* Background Image - Faded and positioned to the right corner */}
      {image && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-[5%] top-0 w-full h-full opacity-5">
            <Image
              src={image}
              alt=""
              fill
              className="object-contain object-right scale-150 grayscale"
            />
            <div className="absolute inset-0 bg-tertiary-faint mix-blend-multiply" />
          </div>
        </div>
      )}

      {/* Category & Period Label */}
      <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 md:left-8 bg-white px-3 py-1.5 sm:px-4 sm:py-2 border-3 sm:border-4 z-10 border-primary">
        <span className="font-mono font-black tracking-tight uppercase" style={{ fontSize: 'var(--fluid-xs)' }}>
          {period}
        </span>
      </div>

      {/* Link icon top right */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -top-3 sm:-top-4 right-4 sm:right-6 md:right-8 bg-white px-3 py-1.5 sm:px-4 sm:py-2 border-3 sm:border-4 border-primary z-10 text-primary hover:text-red-600 hover:border-red-600 transition-colors duration-300"
          aria-label={`View ${title}`}
        >
          {link.includes('github') ? (
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </a>
      )}

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-3 border-t-3 sm:border-r-4 sm:border-t-4 border-tertiary-faint" />

      {/* Title & Subtitle */}
      <div className="relative z-10 mt-4 mb-5 flex flex-col">
        <h3
          style={{ fontSize: 'var(--fluid-2xl)', fontWeight: 900, lineHeight: '1.05', letterSpacing: '-0.02em' }}
        >
          {title}
        </h3>
        <p
          className="text-tertiary font-mono uppercase tracking-tight mt-2"
          style={{ fontSize: 'var(--fluid-sm)', fontWeight: 500 }}
        >
          {subtitle}
        </p>
      </div>

      {/* Description - truncated to maintain uniform height */}
      <p
        className="relative z-10 mb-6 line-clamp-4 font-normal leading-relaxed tracking-normal"
        style={{ fontSize: 'var(--fluid-base)' }}
      >
        {description}
      </p>

      {/* Technologies - pushed to bottom */}
      <div className="relative z-10 mt-auto">
        <div className="flex flex-wrap gap-2 content-start">
          {technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 font-mono border-2 border-primary-faint hover:border-red-600 hover:bg-red-600 hover:text-white cursor-default transition-colors duration-300"
              style={{ fontSize: 'var(--fluid-xs)' }}
            >
              {tech}
            </span>
          ))}
          {technologies.length > 6 && (
            <span
              className="px-3 py-1.5 font-mono text-primary-faint"
              style={{ fontSize: 'var(--fluid-xs)' }}
            >
              +{technologies.length - 6} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Keep impact in interface for backwards compatibility but don't render it
