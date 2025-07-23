/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F97316", // Orange
        secondary: "#1F2937", // Dark Gray
      },
    },
  },
  plugins: [],
};
