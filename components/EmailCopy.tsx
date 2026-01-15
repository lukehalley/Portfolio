"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

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
    <div className="relative w-full">
      {/* Email display container */}
      <div className="flex items-center border-4 border-primary bg-white w-full">
        {/* Email text */}
        <div className="flex-1 px-4 py-3 sm:px-5 sm:py-3 font-mono font-bold text-primary border-r-4 border-primary select-all"
             style={{ fontSize: 'clamp(0.75rem, 2.5vw, 1rem)' }}>
          {email}
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="px-4 py-3 sm:px-5 sm:py-3 bg-primary text-white transition-colors duration-200 flex items-center justify-center shrink-0"
          aria-label={copied ? "Copied!" : "Copy email address"}
        >
          {copied ? (
            <Check className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={3} />
          ) : (
            <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
