const path = require('path');
let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || path.join(__dirname, 'tailwind.config.js');
const tailwind = require('tailwindcss')(tailwindConfig);

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [tailwind],
};