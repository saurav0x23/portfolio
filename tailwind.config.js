/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "var(--text)", // Using the text color variable from CSS
        },
        background: {
          DEFAULT: "var(--background)", // Using the background color variable from CSS
        },
        primary: {
          DEFAULT: "var(--primary)", // Using the primary color variable from CSS
        },
        secondary: {
          DEFAULT: "var(--secondary)", // Using the secondary color variable from CSS
        },
        accent: {
          DEFAULT: "var(--accent)", // Using the accent color variable from CSS
          hover: "var(--accent-hover)", // Darker accent for hover effects
        },
      },
      keyframes: {
        blurUp: {
          "0%": { filter: "blur(10px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        waveUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        infiniteScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Move by 50% of the width
        },
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        blurUp: "blurUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        waveUp: "waveUp 1s forwards",
        infiniteScroll: 'infiniteScroll 10s linear infinite',
      },
    },
  },
  plugins: [],
};
