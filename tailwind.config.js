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
    },
  },
  plugins: [],
}