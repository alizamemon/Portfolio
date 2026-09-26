/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#c6f135',
        primary2: '#8b5cf6',
        coral: '#ff6b57',
        base: '#0a0a0c',
        ink: '#0a0a0c',
        card: '#131318',
        card2: '#191921',
        line: 'rgba(255,255,255,0.09)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(198,241,53,0.25)',
        glowLg: '0 0 90px rgba(198,241,53,0.18)',
        violet: '0 0 40px rgba(139,92,246,0.3)',
        card: '0 10px 30px rgba(0,0,0,0.45)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.15)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.9)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(4deg)' },
        },
      },
      animation: {
        blob: 'blob 14s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        drift: 'drift 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
