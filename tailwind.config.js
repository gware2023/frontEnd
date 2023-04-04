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

{
  /* <div>
  <div className='bg-grey1 w-1/5 h-20'>grey1</div>
  <div className='bg-grey2 w-1/5 h-20'>grey2</div>
  <div className='bg-grey3 w-1/5 h-20'>grey3</div>
  <div className='bg-green1 w-1/5 h-20'>green1</div>
  <div className='bg-green2 w-1/5 h-20'>green2</div>
  <div className='bg-green3 w-1/5 h-20'>green3</div>
</div> */
}
