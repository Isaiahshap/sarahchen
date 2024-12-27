/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#333333',
        gold: '#9E8A78',
        cream: '#F9F9F9',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        '1400': '1400px',
      }
    }
  },
  plugins: [],
}
