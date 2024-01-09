import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
	plugins: [
		HstVue(),
	],
	setupFile: './histoire.setup.ts',
	vite: {
		server: {
			host: true
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
				'~': resolve(__dirname, './src'),
				'vue': 'vue/dist/vue.esm-bundler.js'
			}
		},
		plugins: [
			UnoCSS(),
		]
	}
})
