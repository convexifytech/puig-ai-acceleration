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
        // Puig Brand Colors
        'puig-olive': {
          DEFAULT: '#5C5E34',
          light: '#9A8B6D',
        },
        'puig-gold': {
          DEFAULT: '#C9A84E',
          light: '#E5C76B',
          dark: '#B8963F',
        },
        'puig-cream': '#FAF8F5',
        'puig-beige': '#CEC8BD',
      },
      fontFamily: {
        'sans': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'title': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
