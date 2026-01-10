export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E", // Teal (petrol vibe)
        secondary: "#F7F5F2", // Warm off-white
        text: "#0F172A", // Slate-900 (clean, readable)
        accent: "#c24d2c", // orange
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
