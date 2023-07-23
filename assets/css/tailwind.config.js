module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      spacing: {
        '160': '40rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '8/3': '8 / 3'
      },
    }
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'),
  ],
  daisyui: {
    // this option must be false to prevent from a contamination of cli message of daisyui in the output css(partially because of PostCSS processor in Hugo)
    logs: false,

    themes: [
      {
        tomoya: {
          "primary": "#207e8f",
          "secondary": "#02B2D4",
          "accent": "#FA8F2D",
          "neutral": "#06262B",
          "base-100": "#d7eff7",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "light", "dark"
    ],

    // themes: ["light", "dark"],
  },
}
