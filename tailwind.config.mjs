/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: '#0D1117',
				primary: '#C9D1D9',
				secondary: '#BBBBBB',
				third: '#426187',
				accent: '#a7bbd2',
				text: '#FFFFFF',
			},
		},
	},
	plugins: [],
}
