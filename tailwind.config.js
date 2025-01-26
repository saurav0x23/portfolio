/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          DEFAULT: "#0A0E1A",
          light: "#1A1F2F",
        },
        nebula: {
          primary: "#6D28D9",    // Cosmic purple
          secondary: "#3B82F6", // Star blue
          accent: "#EC4899"     // Galactic pink
        },
        star: {
          DEFAULT: "#FEF3C7",   // Starlight yellow
          dim: "#A5B4FC"        // Distant star blue
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #6D28D9 100%)',
        'nebula-overlay': 'radial-gradient(circle at 50% 50%, rgba(109,40,217,0.15) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)'
      },
      boxShadow: {
        'stellar': '0 0 25px -5px rgba(59,130,246,0.3)',
        'galactic': '0 0 35px -10px rgba(109,40,217,0.4)',
        'celestial': '0 0 15px 2px rgba(125,211,252,0.3)'
      },
      keyframes: {
        'star-twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        'nebula-pulse': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'cosmic-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'twinkle': 'star-twinkle 2s ease-in-out infinite',
        'pulse-gradient': 'nebula-pulse 15s ease infinite',
        'float': 'cosmic-float 6s ease-in-out infinite'
      },
      backdropBlur: {
        'cosmic': '20px'
      }
    },
  },
  plugins: [],
}