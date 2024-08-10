/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-primary': '#0B0B0B',
				'background-secondary': '#18181B',
				'primary': '#C9D1D9',
				accent: '#99B3D1',
				'accent-secondary': '#426187',
				'tx-primary': '#FFFFFF',
				'tx-secondary': '#FAF9F6',
			},
			height: {
				'project-card': '29rem',
			},
			screens: {
				'base': '990px'
			}
		},
	},
	plugins: [],
}
