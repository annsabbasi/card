/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'text-shadow-italic': ['"Shadows Into Light"', 'cursive'],
        'text-comfortaa': ['"Comfortaa"', 'sans-serif']
      },
      maxWidth: {
        'the-max-width': '1340px'
      },
      colors: {
        'pink-opacity': 'rgb(252, 92, 102, 0.3)',
        'pink-utility': '#FC5C66',
        'main-utility': '#364957',
        'yellow-utility': '#CF921D',
        'yellow-rgb': 'rgba(207, 146, 29, 0.8)',

      }
    },
  },
  plugins: [],
}