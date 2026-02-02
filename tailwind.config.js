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
        // Puig Brand Colors (from Gina's guidelines)
        'puig-olive': {
          DEFAULT: '#5C5E34',  // Primary olive for titles
          light: '#9A8B6D',    // Lighter olive accent
        },
        'puig-gold': {
          DEFAULT: '#C9A84E',  // Primary gold
          light: '#E5C76B',    // Lighter gold
          dark: '#B8963F',     // Darker gold for hover
        },
        'puig-cream': '#FAF8F5',  // Cream background
        'puig-beige': '#CEC8BD',  // Beige accent
        // Supporting colors
        'puig-gray': '#6B6B6B',
        'puig-light': '#F5F5F5',
      },
      fontFamily: {
        'lettera': ['Lettera Text Std', 'Lettera', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}