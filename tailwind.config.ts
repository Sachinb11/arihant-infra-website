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
        royal: {
          950: "#060A1E",
          900: "#0A0F2C",
          800: "#0D1540",
          700: "#111C56",
          600: "#1A2980",
        },
        gold: {
          200: "#FDF3D0",
          300: "#F5E6A3",
          400: "#E8C96A",
          500: "#C9A84C",
          600: "#A07730",
          700: "#7A5520",
        },
        cream: "#FAF8F3",
        offwhite: "#F2EFE8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 5s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        marquee: "marquee 32s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0%" },
          "100%": { backgroundPosition: "200%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundSize: {
        "200": "200%",
      },
      boxShadow: {
        gold: "0 8px 32px rgba(201,168,76,0.25)",
        "gold-lg": "0 20px 60px rgba(201,168,76,0.35)",
        luxury: "0 32px 80px rgba(6,10,30,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
