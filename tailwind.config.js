/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        icanBlue: '#0052CC',
        icanGold: '#FDB913',
        icanCream: '#F5F1E8',
        icanDark: '#2C3E50',
        icanLight: '#FAFAF8',
      },
    },
  },
  plugins: [],
}