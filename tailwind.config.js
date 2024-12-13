/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],        // Gilroy Regular
        gilroyBold: ['Gilroy_Bold', 'sans-serif'], // Gilroy Bold
        sans: ["Helvetica", "Arial", "sans-serif"], // Default sans font
        serif: ["Georgia", "serif"], // Default serif font
        mono: ["Courier New", "monospace"], // Default monospace font
      },
    },
  },
  plugins: [],
};
