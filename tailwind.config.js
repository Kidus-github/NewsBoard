/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f52828",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
