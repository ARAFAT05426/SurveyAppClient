/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        navMinus: "calc(100vh - 64px)",
      },
      height: {
        navMinus: "calc(100vh - 64px)",
        half: "50vh",
        card: "500px"
      },
      width: {
        max: "90%"
      },
      fontFamily: {
        thinHeading: `"Dosis", sans-serif`,
      },
      colors:{
        primary: "#04ee04",
        secondary: "#FECD08"
      }
    },
  },
  plugins: [],
};
