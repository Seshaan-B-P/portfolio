/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#111111',
          surface: '#161616',
          card: '#1a1a1a',
          cardHover: '#202020',
          border: '#262626',
          borderLight: '#333333',
        },
        lime: {
          DEFAULT: '#b6ff00',
          accent: '#b6ff00',
          hover: '#c6ff24',
          dark: '#93cc00',
          muted: '#80b300',
        },
        brand: {
          indigo: '#b6ff00',
          'indigo-light': '#c8ff33',
          'indigo-dark': '#9cd400',
          lime: '#b6ff00',
          dark: '#111111',
          card: '#1a1a1a',
          purple: '#b6ff00',
          cyan: '#b6ff00',
          'cyan-light': '#c8ff33',
          emerald: '#b6ff00',
          'emerald-light': '#b6ff00',
          amber: '#b6ff00',
          rose: '#ff4d4d'
        },
        surface: {
          50: '#111111',
          100: '#161616',
          200: '#202020',
          300: '#2b2b2b',
          card: '#1a1a1a'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Outfit', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -1px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 40px -10px rgba(182, 255, 0, 0.18), 0 0 0 1px rgba(182, 255, 0, 0.35)',
        'glow-indigo': '0 0 25px -4px rgba(182, 255, 0, 0.45)',
        'glow-lime': '0 0 25px -4px rgba(182, 255, 0, 0.45)',
        'glow-emerald': '0 0 25px -4px rgba(182, 255, 0, 0.35)',
        'glow-cyan': '0 0 25px -4px rgba(182, 255, 0, 0.35)',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
