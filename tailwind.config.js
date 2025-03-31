// module.exports = {
//   plugins: [require("tw-animate-css")],
// };

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], // Adjust paths as needed
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")], // Add this line
};
