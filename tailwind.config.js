export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4A5A5", // Dusty rose
        secondary: "#F5F1ED", // Cream
        text: "#6B5B5B", // Warm gray
        accent: "#C9A982", // Gold
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Montserrat", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Fallback or use a nice texture
      }
    },
  },
  plugins: [],
}
