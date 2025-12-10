
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        icanBlue: '#0b6fb0',
        icanAccent: '#f7b500',
        icanDark: '#07203a',
      },
    },
  },
  plugins: [],
}
