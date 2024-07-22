const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      mainBg: "#121212",
      mainRed: "#A42828",
      mainGray: "#1B1B1B",
    },
    extend: {},
  },
  plugins: [],
};
