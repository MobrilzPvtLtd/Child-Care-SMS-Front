// // tailwind.config.js
// module.exports = {
//   content: [
//     './index.html', // Include your main HTML file
//     './src/**/*.{js,ts,jsx,tsx}', // Include all your source files with JSX/TSX
//   ],
//   safelist: [
//     'bg-[var(--primary-background-color)]', // Add your class to safelist
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'primary-background-color': 'var(--primary-background-color)', 
//       },
//     },
//   },
//   plugins: [
//   ],
// };

const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
                'primary-background-color': 'var(--primary-background-color)', 
              },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
