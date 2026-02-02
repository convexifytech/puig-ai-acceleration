/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'puig-olive': {
          DEFAULT: '#9A8B6D',
          light: '#B5A88A',
          dark: '#7A6E57',
        },
        'puig-gold': {
          DEFAULT: '#E6C229',
          light: '#F5D547',
          dark: '#C9A820',
        },
        'puig-gray': {
          DEFAULT: '#6B6B6B',
          light: '#E5E5E5',
          dark: '#1A1A1A',
        },
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'title': ['2.5rem', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
