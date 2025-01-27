// tailwind.config.js
module.exports = {
  content: [
    './index.html', // Include your main HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all your source files with JSX/TSX
  ],
  safelist: [
    'bg-[var(--primary-background-color)]', // Add your class to safelist
  ],
  theme: {
    extend: {
      colors: {
        'primary-background-color': 'var(--primary-background-color)', 
      },
    },
  },
  plugins: [
  ],
};
