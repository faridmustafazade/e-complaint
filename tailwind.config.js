/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      opacity: {
        35: "0.35",
        45: "0.45",
      },
      colors: {
        primaryColor: "#3C6CB4",
        secondaryColor: "#F5F5F5",
        whiteColor: "#F7F7F7",
        blackColor: "#100f17",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
