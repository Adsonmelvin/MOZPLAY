/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        arena: {
          ink: "#050714",
          panel: "#0c1024",
          purple: "#a855f7",
          cyan: "#22d3ee",
          orange: "#fb923c",
          gold: "#facc15",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(168, 85, 247, 0.35)",
        cyan: "0 0 36px rgba(34, 211, 238, 0.28)",
        orange: "0 0 36px rgba(251, 146, 60, 0.28)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        scan: "scan 4s linear infinite",
      },
    },
  },
  plugins: [],
};
