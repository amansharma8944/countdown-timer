/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-white': '#f5f5f5', // Example color
      },
      boxShadow: {
        'spread': '0 0 10px rgba(255, 255, 255, 0.5)', // Example shadow
      }
    },
  },
  plugins: [],
}

