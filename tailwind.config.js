/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-app":
          "url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)",
      },
      spacing: {
        0.1: "0.063rem",
      },

      colors: {
        "brand-color": "#4C3398",
        "primary-brand-color": "#5D3EBC",
        "secondary-brand-color": "#7849F7",
        "brand-yellow": "#FFD300",
      },
    },
  },
  plugins: [],
};
