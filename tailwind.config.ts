const withMT = require("@material-tailwind/react/utils/withMT");
/* @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["var(--font-montserrat)", "sans-serif"],
      serif: ["var(--font-montserrat)", "serif"],
      body: ["var(--font-montserrat)", "sans-serif"],
    },
  },
  plugins: [],
});
