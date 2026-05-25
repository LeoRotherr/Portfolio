/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F6F1",
        surface: "#FFFFFF",
        ink: "#17150F",
        muted: "#6F6A5F",
        hairline: "#E6E0D4",
        accent: {
          DEFAULT: "#9A5B33",
          soft: "#F0E7DE",
        },
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
