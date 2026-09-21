/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#c9c5dc",
        tertiary: "#12102a",
        "black-100": "#0e0c22",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: "#7c6cff",
      },
      boxShadow: {
        card: "0px 24px 80px -20px rgba(33, 30, 53, 0.7)",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
