/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#f02d3a',
        'custom-blue': '#273043',
      },
    },
  },
  plugins: [],
}
