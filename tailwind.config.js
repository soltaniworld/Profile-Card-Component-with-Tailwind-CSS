/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.css", "index.html"],
  theme: {
    extend: {
      colors: {
        "card-bg-cyan": "#19A1Ae"
      },
      spacing:{
        '90':'374px'
      }
    },
  },
  plugins: [],
}

