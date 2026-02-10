/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-gold": "#FFD700",
        "brand-red": "#B22222",
        "brand-bg": "#1E1E1E",
        "brand-text": "#FFFFFF",
        "brand-dim": "#9CA3AF",
      },
      fontFamily: {
        "ma-shan-zheng": ['"Ma Shan Zheng"', "cursive"],
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 215, 0, 0.3)",
        "glow-inner": "inset 0 0 10px rgba(255, 215, 0, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        scan: "scan 4s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "200%" },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
    },
  },
  plugins: [],
};
