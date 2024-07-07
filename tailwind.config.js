/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      "<sm": "440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      keyframes: {
        "zoom-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "25%": { transform: "scale(1.1)", opacity: "1" },
          "50%": { transform: "scale(1)", opacity: "1" },
          "75%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "zoom-in": "zoom-in 0.5s ease-out",
      },
      opacity: {
        35: "0.35",
        45: "0.45",
      },
      rotate: {
        30: "30deg",
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
