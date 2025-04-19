/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'resala-red': '#FF0000',
        'resala-blue': '#0000FF',
        'resala-white': '#FFFFFF',
      },
      screens: {
        'preheader': '760px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}