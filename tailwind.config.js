/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070E", // base desk
          900: "#070A14",
          800: "#0A0E1C", // raised panel
          700: "#0E1426",
          600: "#141B30",
        },
        ice: {
          DEFAULT: "#E9EEFB", // primary text
          dim: "#C3CBDE",
        },
        mute: "#8893AD",
        line: "rgba(255,255,255,0.08)",
        signal: {
          DEFAULT: "#5B8CFF", // electric blue (from logo)
          400: "#7BA2FF",
          600: "#3D6BF0",
        },
        violet: {
          DEFAULT: "#9A6CFF", // AI accent
          400: "#B18BFF",
        },
        mint: {
          DEFAULT: "#34E1B4", // live / gains
          400: "#5BEFC8",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,140,255,0.25), 0 18px 50px -12px rgba(91,140,255,0.35)",
        "glow-violet": "0 0 0 1px rgba(154,108,255,0.25), 0 18px 50px -12px rgba(154,108,255,0.35)",
        panel: "0 30px 80px -30px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)",
        soft: "0 16px 40px -20px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        brand: "linear-gradient(100deg,#5B8CFF 0%,#9A6CFF 100%)",
        "brand-soft": "linear-gradient(100deg,rgba(91,140,255,0.16),rgba(154,108,255,0.16))",
        grid:
          "linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%,rgba(91,140,255,0.12),transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        "mesh-drift": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(4%,-3%) scale(1.08)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.7)" },
        },
        sheen: {
          "0%": { transform: "translateX(-120%)" },
          "60%,100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 0.8s ease both",
        "slide-down": "slide-down 0.25s ease both",
        float: "float 7s ease-in-out infinite",
        "grid-pan": "grid-pan 18s linear infinite",
        "mesh-drift": "mesh-drift 22s ease-in-out infinite",
        ticker: "ticker 28s linear infinite",
        "pulse-dot": "pulse-dot 1.6s ease-in-out infinite",
        sheen: "sheen 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
