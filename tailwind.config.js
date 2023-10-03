/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#C8E6C9", /*ok*/
        "gray-50": "#e2efe2", /*ok*/
        "gray-100": "#81C784", /*ok*/
        "gray-500": "#000000", /*ok*/
        "primary-100": "#E8F5E9", /*ok*/
        "primary-300": "#C8E6C9", /*ok*/
        "primary-500": "#33cc99", /*ok*/
        "secondary-400": "#43A046", /*ok*/
        "secondary-500": "#4CAF4F", /*ok*/

      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
