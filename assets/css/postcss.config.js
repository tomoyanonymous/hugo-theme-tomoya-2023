const themeDir = __dirname + "/../../";

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      path: [themeDir],
    },
  },
};
