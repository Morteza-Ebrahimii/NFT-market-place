/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', ...defaultTheme.fontFamily.sans],
      },
    },
    extend: {
      colors: {
        'primary-background': '#2b2b2b',
        "background-gray": "#3B3B3B",
        "label-text": "#858584",
        "caption": "#858584",
        "purple": "#A259FF",
        "backgroundButton": "#3B3B3B",
      },
    },
  },
  plugins: [],
};
