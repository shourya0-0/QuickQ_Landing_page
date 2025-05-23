/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'afacad': ['Afacad', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'poltawski': ['"Poltawski Nowy"', 'serif'],
      },
    },
  },
  plugins: [],
}