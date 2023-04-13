/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray1: "#eee",
        gray2: "#BFBFBF",
        gray3: "#4C5958",
        green1: "#8AA6A3",
        green2: "#127369",
        green3: "#10403B",
      },
    },
  },
  plugins: [],
};
