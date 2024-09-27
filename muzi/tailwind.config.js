/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px", // Medium screen size (tablets)
      lg: "1024px", // Large screen size (laptops/desktops)
      xl: "1280px",
    },
  },
  plugins: [],
};
