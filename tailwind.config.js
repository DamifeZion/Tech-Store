/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        lg: "1100px",
        1200: "1200px",
        1300: "1300px",
        1400: "1400px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      fontSize: {
        xsm: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        "1xl": "20px",
      },

      boxShadow: {
        miniCart: "rgba(0, 0, 0, 0.14) 1px 1px 8px;",
        shadow1: "0px 0px 15px 0px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};
