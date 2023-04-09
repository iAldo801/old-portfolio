module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#081B29",
        midnight: "#31435f",
        orangec: "#EA7724",
        "blackc": "#081b29"
      },
      fontFamily: {
        poppins: ["Poppins Regular"],
        poppinsMedium: ["Poppins Medium"],
        poppinsSemiBold: ["Poppins SemiBold"],
        poppinsBold: ["Poppins Bold"],
      },
    },
  },
  plugins: [],
};