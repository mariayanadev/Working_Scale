
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textColor:'#1FA046',
        underlineColor:' #00ff00'
      }
    },
  },
  plugins: [],
}