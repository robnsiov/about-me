/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      "460px": { max: "460px" },
      "1362px": { max: "1362px" },
    },
    extend: {
      colors: {},
      container: {
        center: true,
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        full: "100% 100%",
      },
    },
  },
  plugins: [],
};
