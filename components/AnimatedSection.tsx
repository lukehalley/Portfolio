"use client";

import { motion } from "framer-motion";
import { fadeUp, scrollViewport } from "@/lib/animations";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
