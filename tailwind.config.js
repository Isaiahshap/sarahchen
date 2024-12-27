/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
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
