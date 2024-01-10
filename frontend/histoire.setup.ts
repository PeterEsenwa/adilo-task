import 'virtual:uno.css'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import './src/assets/buttons.scss'
import './src/assets/main.css'
import './src/assets/stories.css'
import '@fontsource/poppins'
import { createPinia } from 'pinia'
import { defineSetupVue3 } from '@histoire/plugin-vue';

export let piniaStoryStore = createPinia()

// use wrapper and setup pinia
export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.use(piniaStoryStore)
});
