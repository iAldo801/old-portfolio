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

        // ############################
        // ######  Poppins Font  ######
        // ############################

        poppins: ["Poppins Regular"],
        poppinsMedium: ["Poppins Medium"],
        poppinsSemiBold: ["Poppins SemiBold"],
        poppinsBold: ["Poppins Bold"],

        // ##########################
        // ######  Inter Font  ######
        // ##########################

        inter: ["Inter Regular"],
        interMedium: ["Inter Medium"],
        interSemiBold: ["Inter SemiBold"],
        interBold: ["Inter Bold"],
        interExtraBold: ["Inter ExtraBold"],
        interBlack: ["Inter Black"],
      },
    },
  },
  plugins: [],
};