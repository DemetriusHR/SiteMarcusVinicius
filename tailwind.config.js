const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      background: "#272727",
      ...colors
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
};
