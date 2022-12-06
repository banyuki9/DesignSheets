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
        futura: ["futura-pt", "sans-serif"],
      },
      colors: {
        primary: "#31BFFD",
        hoverPrimary: "#25A7E0",
        black: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
