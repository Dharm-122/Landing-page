import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0d1117",
          900: "#111827",
          800: "#1f2937",
        },
        cream: {
          50: "#fffdf8",
          100: "#faf6ef",
        },
        gold: {
          50: "#fff8e7",
          100: "#fef0c7",
          200: "#fde68a",
          300: "#f5cd55",
          400: "#eab308",
          500: "#d4a017",
        },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 24, 39, 0.12)",
        glow: "0 0 0 1px rgba(212, 160, 23, 0.14), 0 20px 80px rgba(212, 160, 23, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at top, rgba(245, 205, 85, 0.24), transparent 35%), radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.7), transparent 30%), linear-gradient(180deg, #fffdf8 0%, #faf6ef 100%)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 700ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
