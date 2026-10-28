/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-primary': '#FAF8F2',
				'background-secondary': '#E8E3D8',
				accent: '#1F57C3',
				'accent-secondary': '#163F8F',
				'tx-primary': '#1A1A1A',
				'tx-secondary': '#5F5B53'
			},
			fontFamily: {
				serif: ['"Source Serif 4 Variable"', 'Georgia', 'serif']
			}
		}
	},
	plugins: []
}
