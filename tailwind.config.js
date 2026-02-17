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
        soft: '0 12px 36px -24px rgba(15, 23, 42, 0.45)',
        'neon': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2)',
        'neon-hover': '0 0 30px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3)',
        'card': '0 8px 32px -8px rgba(15, 23, 42, 0.12)',
        'card-hover': '0 20px 60px -12px rgba(15, 23, 42, 0.25)',
        'inner-glow': 'inset 0 2px 12px rgba(255, 255, 255, 0.1)'
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' }
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '1' },
          '100%': { transform: 'scale(1.3)', opacity: '0' }
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(59, 130, 246, 0.8)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin-slow 25s linear infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite'
      },
      backgroundSize: {
        '200%': '200% 200%',
        '300%': '300% 300%'
      }
    }
  },
  plugins: []
};
