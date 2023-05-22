/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        sm: "300px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
