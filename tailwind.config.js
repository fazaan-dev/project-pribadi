/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e0637",
        secondary: "#5235e8",
        shadowSec: "#3D25B6FF",
        herocolor: "#F0EEFAFF",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2rem": "6rem",
        },
      },
    },
  },
  plugins: [],
};
