module.exports = {
	purge: [
		'./src/**/*.tsx'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				indieFlower: ['"Indie Flower"', 'cursive']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
