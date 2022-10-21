/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dark", "cmyk"],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
