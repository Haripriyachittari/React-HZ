/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monoton: ["Monoton", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        monteserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
