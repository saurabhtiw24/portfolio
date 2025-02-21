/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navcol': '#484940',
        'navcoll': '#8C7D6E'
      },
    },
  },
  plugins: [],
}