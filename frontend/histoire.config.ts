import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
	plugins: [
		HstVue(),
	],
	setupFile: './histoire.setup.ts',
	vite: {
		server: {
			host: true
		},
		plugins: [
			UnoCSS(),
		]
	}
})
