/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "12px",
        },
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
      },
      screens: {
        xsm: '400px',
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      colors: {
        textBlue: "#084CAF",
        textGray: "#4E4E4E",
        ligh_grey: '#0101010D'
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"]
      },
      fontSize: {
        "10xl": "16px",
        "11xl": "32px",
        "12xl": "80px"
      },
      backgroundImage: {
        ourTeam: 'url("./assets/images/webp/our-team-img.webp")',
      },
      boxShadow: {
        mediaIcon: '0px 4px 4px 0px #00000040',
        whiteBox: '-4.11px 4.11px 18.66px -9.7px #6F69F21F, 4.11px -4.29px 112.6px -10px #084CAF14',
        buttonShdow: '4px 4px 20px 0px #084CAF4D'
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  plugins: [],
}

