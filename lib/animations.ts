import { Variants } from "framer-motion";

// Easing functions - sharp and mechanical for brutalist aesthetic
export const easing = {
  sharp: [0.4, 0, 0.2, 1], // Material sharp
  emphasized: [0.2, 0, 0, 1], // Emphasized deceleration
  standard: [0.4, 0, 0.6, 1], // Standard curve
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade up animation for sections
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.emphasized,
    },
  },
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.sharp,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.sharp,
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing.emphasized,
    },
  },
};

// Brutal border expansion (for cards)
export const brutalExpand: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easing.sharp,
    },
  },
};

// Header reveal with line expansion
export const headerReveal: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: easing.emphasized,
    },
  },
};

// Border grow animation (for left borders on content blocks)
export const borderGrow: Variants = {
  hidden: {
    scaleY: 0,
    opacity: 0,
  },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.emphasized,
    },
  },
};

// Viewport animation options (for scroll triggers)
export const scrollViewport = {
  once: true, // Only animate once
  margin: "0px 0px -100px 0px", // Trigger slightly before element enters viewport
  amount: 0.3, // Trigger when 30% of element is visible
};
