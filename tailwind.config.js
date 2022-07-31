/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
