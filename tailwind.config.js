/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "24px",
        },
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1188px",
        },
      },
      screens: {
        xsm: "400px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        blue: "#084CAF",
        gray: "#4E4E4E",
        light_grey: "#0101010D",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      fontSize: {
        "11xl": "32px",
        "12xl": "80px",
        "10xl": "16px",
      },
      boxShadow: {
        mediaIcon: "0px 4px 4px 0px #00000040",
        whiteBox:
          "-4.11px 4.11px 18.66px -9.7px #6F69F21F, 4.11px -4.29px 112.6px -10px #084CAF14",
        buttonShdow: "4px 4px 20px 0px #084CAF4D",
        overviewShadow:
          "-9.41px 9.41px 42.77px -22.24px #6F69F280, 9.41px -9.84px 42.77px -22.24px #084CAF33",
      },
      backgroundImage: {
        footerBg: `url("./assets/images/webp/footerBg.webp")`,
        ourTeam: 'url("./assets/images/webp/our-team-img.webp")',
      },
      backgroundSize: {
        "100%": "100% 100%",
        full: "100% 100%",
      },
      backgroundColor: {
        headerIcons: "#EBEBFD",
      },
    },
  },
  plugins: [],
};
