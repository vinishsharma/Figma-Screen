/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '3px -3px 0 rgba(50, 50, 50, 1)',
        '4xl': '1px -1px 0 rgba(50, 50, 50, 1)',
      }
    },
  },
  plugins: [],
}
