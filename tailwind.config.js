/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#BAACEB',
        secondary: '#4A4270',
        tertiary: '#F2F0FF',
        quarter: '#5F5AA5',
        fifth: '#E5E0F7',
        sixth: '#7B6CA3'
      }
    },
  },
  plugins: [],
}