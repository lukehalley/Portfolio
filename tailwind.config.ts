import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#393e41",
          dark: "#2a2d30",
          light: "#4d5357",
          muted: "#393e41cc", // 80% opacity
          subtle: "#393e41b3", // 70% opacity
          faint: "#393e4199", // 60% opacity
          ghost: "#393e4166", // 40% opacity
          whisper: "#393e414d", // 30% opacity
        },
        secondary: {
          DEFAULT: "#6c757d",
          light: "#9fa5aa",
        },
        tertiary: {
          DEFAULT: "#e94f37",
          light: "#ff6b54",
          dark: "#d43f29",
          faint: "#e94f3766", // 40% opacity
          subtle: "#e94f3799", // 60% opacity
        },
        accent: {
          DEFAULT: "#f6f7eb",
          light: "#fafbf5",
        },
        white: {
          DEFAULT: "#ffffff",
          muted: "#ffffffcc", // 80% opacity - for readable text on dark backgrounds
          subtle: "#ffffff99", // 60% opacity - for secondary text on dark backgrounds
          faint: "#ffffff66", // 40% opacity - for borders/dividers on dark backgrounds
          ghost: "#ffffff33", // 20% opacity - for subtle backgrounds/borders
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
