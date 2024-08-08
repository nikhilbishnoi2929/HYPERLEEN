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
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      colors: {
        textBlue: "#084CAF",
        textGray: "#4E4E4E",
      },
      fontFamily:{
        poppins: ["poppins", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"]
      },
      fontSize:{
        "10xl": "16px",
        "11xl": "32px",
        "12xl": "80px"
      },
    },
  },
  plugins: [],
}

