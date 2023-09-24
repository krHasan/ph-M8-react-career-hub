/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#FF8938",
        "gradient-end": "#F00",
      },
    },
  },
  plugins: [require("daisyui")],
};
