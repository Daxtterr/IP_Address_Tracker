/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/pattern-bg.png')",
      },
    },
  },
  plugins: [],
};
