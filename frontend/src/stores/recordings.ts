import { defineStore } from 'pinia'
import { ref } from 'vue'

type Recording = {
  name: string
  description: string
  blob: Blob
}

export const useRecordingsStore = defineStore('recording', () => {
  // store to hold recordings and their names
  const recordings = ref<Recording[]>([])

  return { recordings }
});
