/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    fontFamily: {
      'Poppins': "Poppins",
    },
    extend: {
      backgroundImage: {
        'bg': "url('Images/bg.jpeg')",
        'home-bg': "url('Images/home.png')",
        'burger': "url('Images/burger.png')"
      }
    },
  },
  plugins: [require("flowbite/plugin"),],
})

