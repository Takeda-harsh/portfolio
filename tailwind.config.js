/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Space Grotesk', 'sans-serif'],
			},

			width: {
				'mobile-w': '343px',
			},

			height: {
				'tab-h': '528px',
			},
		},
	},
	plugins: [],
};
