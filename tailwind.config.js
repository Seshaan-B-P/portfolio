/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4f46e5',
          'indigo-light': '#6366f1',
          'indigo-dark': '#3730a3',
          purple: '#7c5cff',
          cyan: '#0284c7',
          'cyan-light': '#0ea5e9',
          emerald: '#059669',
          'emerald-light': '#10b981',
          amber: '#d97706',
          rose: '#e11d48'
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          card: '#ffffff'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['Outfit', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 35px -8px rgba(79, 70, 229, 0.12), 0 6px 16px -4px rgba(15, 23, 42, 0.04)',
        'glow-indigo': '0 10px 25px -4px rgba(79, 70, 229, 0.3)',
        'glow-emerald': '0 10px 25px -4px rgba(16, 185, 129, 0.3)',
        'glow-cyan': '0 10px 25px -4px rgba(2, 132, 199, 0.25)',
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
