/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07011A",
        "primary-10": "rgba(7, 1, 26, 0.1)",
        secondary: "#0E0133",
        "text-color": "#FFFFFF",
        inactive: "#D1D1D1",
        active: "#838FFF",
        alert: "#FF1F1F",
        "alert-50": "rgba(255, 31, 31, 0.5)",
        "alert-10": "rgba(255, 31, 31, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        mobile: "22.5rem",
        tablet: "46.5rem",
        desktop: "80rem",
      },
    },
  },
  plugins: [],
};
