/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
          'roboto': ['Roboto'],
          'roboto-mono': ['Roboto Mono'],
        }
    },
  },
  plugins: [],
}

