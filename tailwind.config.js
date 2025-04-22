/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0f5132',
          dark: '#0a3622',
          light: '#d1e7dd',
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
