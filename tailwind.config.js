/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        green: '#00FF88',
        orange: '#FF6A00',
        'gray-light': '#F7F7F7',
        'gray-dark': '#4B4B4B',
        'hover-green': '#00CC70',
        'hover-orange': '#E65A00',
      },
      gradientColorStops: {
        highlight: ['#00FF88', '#FF6A00'],
      },
    },
  },
  plugins: [],
}