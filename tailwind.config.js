/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "90": "360px" //widht do botao tela na principal
      },
      height: {
        "9.5": "38px" //height do botao tela na principal
      },
      colors: {
        'green-base': '#1CAC47', //cor base do botao na tela principal
        'green-bold': '#1FA046' //cor hover do botao na tela principal
      },
      margin: {
        '0.75': "3px"
      }
    },
  },
  plugins: [],
}

