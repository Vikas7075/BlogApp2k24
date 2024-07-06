/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    end: {},
    variants: {},
    plugins: [],
    experimental: {
      applyComplexClasses: true,
    },
  },
  plugins: [],
}