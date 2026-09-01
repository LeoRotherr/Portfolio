/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060F18",
          900: "#0A1622",
          850: "#0D1E2C",
          800: "#112637",
          700: "#16334A",
        },
        hairline: "#1B3346",
        ink: "#E8F1F8",
        muted: "#8CA3B7",
        accent: {
          DEFAULT: "#19D3C5",
          strong: "#12B4A8",
          soft: "rgba(25, 211, 197, 0.12)",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(0, 0, 0, 0.7)",
        glow: "0 0 0 1px rgba(25, 211, 197, 0.25), 0 18px 40px -20px rgba(25, 211, 197, 0.35)",
      },
    },
  },
  plugins: [],
};
