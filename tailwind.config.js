module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        }
      },
      fontFamily: {
        Text: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
