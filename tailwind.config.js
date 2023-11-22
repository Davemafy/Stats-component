/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.html"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "hsl(233, 47%, 7%)",
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',
        white: 'hsl(0, 0%, 100%)',
        transWhite: 'hsla(0, 0%, 100%, 0.75)',
        transWhite2: 'hsla(0, 0%, 100%, 0.6)',        
      },
      fontFamily: {
        lexend: ['"Lexend Deca"', ...defaultTheme.fontFamily.sans],
        inter: ['"Lexend Deca"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

