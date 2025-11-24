import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        // Brand colors from Figma (exact matches)
        primary: {
          DEFAULT: "#C9A96E",
        },
        background: {
          DEFAULT: "#FAFAF8",
        },
        foreground: {
          DEFAULT: "#3D3028",
        },
        muted: {
          DEFAULT: "#8B7355",
          foreground: "#8B7355",
        },
        border: {
          DEFAULT: "#E8DDD0",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;

