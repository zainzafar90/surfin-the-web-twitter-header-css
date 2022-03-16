const colors = require("tailwindcss/colors");

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        ...colors,
        amber: {
          400: "#f0c219",
        },
        green: {
          400: "#6fdc8c",
        },
        slate: {
          400: "#6277af",
        },
        red: {
          400: "#dc1d27",
        },
        teal: {
          400: "#38d7d9",
          500: "#09bdb9",
          600: "#009d9a",
        },
        sky: {
          ...colors.sky,
          400: "#7ea8ef",
        },
        blue: {
          100: "#0064ff",
          200: "#0056ea",
          300: "#005afd",
          400: "#0059ff",
          500: "#0055ea",
          600: "#0143ce",
          700: "#002d9d",
          800: "#001c6c",
          900: "#001142",
          1000: "#001045",
        },
      },
    },
  },
  plugins: [],
};
