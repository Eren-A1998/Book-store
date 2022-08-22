/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Lightpink:'#f3e7dd'
      },
      borderRadius:{
        '4xl':'5%'
      }
    },
  },
  plugins: [],
}
