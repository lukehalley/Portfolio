"use client";

import { motion } from "framer-motion";
import { borderGrow, scrollViewport } from "@/lib/animations";
import { ReactNode } from "react";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  borderClassName?: string;
}

export function AnimatedBorder({
  children,
  className = "border-l-4 border-tertiary pl-8 py-2",
  borderClassName = "border-tertiary"
}: AnimatedBorderProps) {
  return (
    <div className="relative">
      <motion.div
        className={`absolute left-0 top-0 bottom-0 w-1 origin-top ${borderClassName}`}
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={borderGrow}
      />
      <div className={className.replace('border-l-4', 'border-l-0').replace('border-tertiary', '')}>
        {children}
      </div>
    </div>
  );
}
