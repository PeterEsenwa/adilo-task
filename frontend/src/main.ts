import './assets/main.css'
import './assets/buttons.scss'
import 'uno.css'
import '@fontsource/poppins'
import '@unocss/reset/tailwind-compat.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useRecordingsStore, blobToBase64, type RecordingBase64 } from '@/stores/recordings'

const app = createApp(App)

app.use(createPinia())

const store = useRecordingsStore();
// persist recordings
store.$subscribe(async (_, state) => {
  let recordings = [] as RecordingBase64[]

  for (const recording of state.recordings) {
    if (recording.blob) {
      const base64 = await blobToBase64(recording.blob)

      recordings.push({
        name: recording.name,
        description: recording.description,
        base64,
      })
    }
  }

  localStorage.setItem('recordings', JSON.stringify(recordings))
})

app.use(router)

app.mount('#app')
