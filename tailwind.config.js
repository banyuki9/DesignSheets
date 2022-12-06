/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        common: ["Noto Sans JP", "sans-serif"],
      },
      colors: {
        primary: "#31BFFD",
        black: "#1D1D1D",
        lightGray: "#EFEFEF",
        gray: "#919191"
      },
    },
  },
  plugins: [],
};
