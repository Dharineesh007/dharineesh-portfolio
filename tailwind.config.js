/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#080b12",
        panel: "#101622",
        line: "#202b3b",
        accent: "#69a8ff",
      },
      boxShadow: {
        glow: "0 0 60px rgba(67, 132, 255, 0.15)",
      },
    },
  },
  plugins: [],
};
