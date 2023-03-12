module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        midnight: "#31435f",

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bold_font: ["bold font"],
      },

    },
  },
  plugins: [],
};