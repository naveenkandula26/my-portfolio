/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#f97316',
          'orange-dark': '#ea580c',
        },
      },
    },
  },
  plugins: [],
};
