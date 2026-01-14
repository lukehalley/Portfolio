"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "contact@lukehalley.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative">
      {/* Email display container */}
      <motion.div
        className="group relative inline-flex items-center gap-0 border-4 border-primary bg-white overflow-hidden"
        whileHover={{ boxShadow: "8px 8px 0 0 var(--color-tertiary)" }}
        transition={{ duration: 0.2 }}
      >
        {/* Email text */}
        <div className="px-4 py-3 sm:px-5 sm:py-3 font-mono font-bold text-primary border-r-4 border-primary select-all"
             style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1rem)' }}>
          {email}
        </div>

        {/* Copy button */}
        <motion.button
          onClick={handleCopy}
          className="px-4 py-3 sm:px-5 sm:py-3 bg-primary text-white hover:bg-secondary transition-colors duration-300 relative flex items-center justify-center shrink-0"
          whileTap={{ scale: 0.95 }}
          aria-label={copied ? "Copied!" : "Copy email address"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                className="flex items-center justify-center"
              >
                <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
                className="flex items-center justify-center"
              >
                <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Hover accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-tertiary"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>

      {/* Toast notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="px-4 py-2 bg-primary text-white font-mono font-bold text-sm border-4 border-primary shadow-[4px_4px_0_0_var(--color-tertiary)]">
              Copied to clipboard!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
