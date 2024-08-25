
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': 'montserrat',
        'robotoBold': 'robotoBold',
        'robotoBlack': 'robotoBlack'
      },
      colors:{
        textColor:'#1FA046',
        underlineColor:' #00ff00'
      }
    },
  },
  plugins: [],
}