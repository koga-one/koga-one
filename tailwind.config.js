/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { front: "#000", back: "#fff", color: "#08f" },
    fontFamily: { chivo: "Chivo" },
  },
  // plugins: [],
};
