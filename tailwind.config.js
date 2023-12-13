

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          light:"hsl(0, 100%, 90%)",
          base:"hsl(0, 100%, 50%)",
          dark:"hsl(0, 100%, 40%)"
        }
      }
    },
  },
  plugins: [],
}