/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
      },
      colors: {
        gagak: "#5D5E5F",
        primer_green: "#105559",
        primer_black: "#25282B",
      },
    },
  },
  plugins: [],
};
