import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Book Official Colors
        civic: {
          // Deep Civic Blue - Primary brand color
          50: "#E6EBF0",
          100: "#B3C2D4",
          200: "#809AB8",
          300: "#4D729C",
          400: "#264D7A",
          500: "#003366", // Official: Deep Civic Blue
          600: "#002E5C",
          700: "#002652",
          800: "#001F47",
          900: "#00142E",
          950: "#000A17",
        },
        heroic: {
          // Heroic Gold - Accent color for CTAs and highlights
          50: "#FAF6F0",
          100: "#F2E8D8",
          200: "#E8D5B8",
          300: "#DEC298",
          400: "#D4AF78",
          500: "#C5A059", // Official: Heroic Gold
          600: "#B18F4D",
          700: "#9A7B41",
          800: "#836835",
          900: "#5C4926",
          950: "#3D3019",
        },
        // Secondary brand colors
        charcoal: {
          DEFAULT: "#2C2C2C", // Official: Body text, institutional grounding
          light: "#3D3D3D",
          dark: "#1A1A1A",
        },
        // Labs accent (innovation, tech)
        electric: {
          DEFAULT: "#2E5BFF", // Labs Electric Blue
          light: "#5C7FFF",
          dark: "#1A3FCC",
        },
        // Foundation accent (passion, culture)
        crimson: {
          DEFAULT: "#B22222", // Foundation Crimson
          light: "#CC3333",
          dark: "#8B1A1A",
        },
        // Legacy aliases for backwards compatibility
        navy: {
          50: "#E6EBF0",
          100: "#B3C2D4",
          200: "#809AB8",
          300: "#4D729C",
          400: "#264D7A",
          500: "#003366",
          600: "#002E5C",
          700: "#002652",
          800: "#001F47",
          900: "#00142E",
          950: "#000A17",
        },
        teal: {
          50: "#E6F2F2",
          100: "#C1DEDE",
          200: "#98C9C9",
          300: "#6EB3B3",
          400: "#4FA2A2",
          500: "#2D7D7D",
          600: "#287171",
          700: "#216262",
          800: "#1A5454",
          900: "#103939",
        },
        gold: {
          50: "#FAF6F0",
          100: "#F2E8D8",
          200: "#E8D5B8",
          300: "#DEC298",
          400: "#D4AF78",
          500: "#C5A059",
          600: "#B18F4D",
          700: "#9A7B41",
          800: "#836835",
          900: "#5C4926",
        },
        warm: {
          white: "#FAFAFA",
          gray: "#F5F5F5",
        },
      },
      fontFamily: {
        // Brand Book Typography
        serif: ["var(--font-playfair)", "Didot", "Bodoni MT", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-playfair)", "Didot", "Bodoni MT", "Georgia", "serif"],
      },
      fontSize: {
        // Custom fluid typography matching Brand Book specs
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // H1 Display
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }], // H1
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // H2
        "display-sm": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }], // H3
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }], // 16px body
        "body-sm": ["0.875rem", { lineHeight: "1.5" }], // 14px small
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgb(0 0 0 / 0.03), 0 1px 6px -1px rgb(0 0 0 / 0.02)",
        soft: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.03)",
        medium: "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.03)",
        large: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.03)",
        // Heroic emphasis shadow
        heroic: "0 10px 40px -10px rgb(0 51 102 / 0.15)",
        // Premium glow shadows
        "glow-gold": "0 0 30px rgba(197, 160, 89, 0.3)",
        "glow-civic": "0 0 30px rgba(0, 51, 102, 0.2)",
        "glow-soft": "0 0 20px rgba(0, 0, 0, 0.1)",
        // Elevated card shadow
        "elevated": "0 25px 50px -12px rgba(0, 51, 102, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      // Premium transition timing functions
      transitionTimingFunction: {
        "premium": "cubic-bezier(0.22, 1, 0.36, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      // Extended transition durations
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      animation: {
        // Basic animations
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        // Premium animations
        "fade-blur": "fadeBlur 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scale-bounce": "scaleBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        // Continuous animations
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient": "gradientFlow 15s ease infinite",
        // Micro-interactions
        "bounce-subtle": "bounceSubtle 0.4s ease-out",
        "wiggle": "wiggle 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeBlur: {
          "0%": { opacity: "0", filter: "blur(12px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleBounce: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "70%": { transform: "scale(1.02)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(197, 160, 89, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(197, 160, 89, 0.5)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
      },
      // Backdrop blur extensions
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
