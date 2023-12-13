/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightCyan: "hsl(193, 38%, 86%)",
      neonGreen: "hsl(150, 100%, 66%)",
      lightGrayBlue: "hsl(217, 19%, 38%)",
      darkGrayBlue: "hsl(217, 19%, 24%)",
      darkBlue: "hsl(218, 23%, 16%)",
    },
    fontFamily: {
      manrope: ["Manrope", "ui-sans-serif"],
    },
    extend: {
      boxShadow: {
        lg: "0px 0px 25px 2px rgba(82,255,168,1);",
      },
    },
  },
  plugins: [],
};
