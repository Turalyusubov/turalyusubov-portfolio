/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'dark-green': '#202616',
        'main-green': '#354024',
        'light-green': '#CBF277'
      },
      dropShadow: {
        'light': '0 0px 3px #6D8C3F'
      }
    },
  },
  plugins: [],
}

