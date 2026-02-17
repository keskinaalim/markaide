/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      colors: {
        primary: "#2563eb",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
      },
      boxShadow: {
        glow: '0 20px 60px -20px var(--brand-shadow)',
        soft: '0 12px 36px -24px rgba(15, 23, 42, 0.45)'
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.04)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
