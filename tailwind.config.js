/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url('/src/assets/images/bg.jpg')",
      },
      colors: {
        'primary': '#3A4F39',
      },
    },
  },
  plugins: [],
};
