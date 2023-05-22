/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'dark-green': '#1e4520',
        'main-green': '#1e591d',
        'light-green': '#22a820'
      },
    },
  },
  plugins: [],
}

