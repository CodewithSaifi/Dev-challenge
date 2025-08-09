/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      screens: {
        web: { max: "980px" }, //uper rhega toh dikhega
        ph: { min: "980px" }, //niche rhega toh dikhega
      },
    },
  },
  plugins: [],
};
