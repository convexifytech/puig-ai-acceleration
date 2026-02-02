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
        'puig-black': '#000000',
        'puig-olive': '#9A8B6D',
        'puig-beige': '#CEC8BD',
        'puig-gray': '#6B6B6B',
        'puig-light': '#E5E5E5',
        'puig-gold': '#E6C229',
        'puig-gold-light': '#F5D547',
      },
      fontFamily: {
        'lettera': ['Lettera', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
