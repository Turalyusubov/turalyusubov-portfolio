/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'dark-green': '#193B1A',
        'main-green': '#3D8F40',
        'light-green': '#6CFA70'
      },
    },
  },
  plugins: [],
}

