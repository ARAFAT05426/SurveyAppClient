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
      },
      fontFamily: {
        thinHeading: `"Dosis", sans-serif`,
      },
    },
  },
  plugins: [],
};
