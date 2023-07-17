module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),
  ],
  daisyui: {
    // this option must be false to prevent from a contamination of cli message of daisyui in the output css(partially because of PostCSS processor in Hugo)
    logs: false,
    // themes: ["light", "dark"],
  },
}
