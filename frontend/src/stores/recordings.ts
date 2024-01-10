import { defineStore } from 'pinia'
import { ref } from 'vue'

export type Recording = {
  name: string
  description: string
  blob: Blob | null
}

export type RecordingBase64 = {
  name: string
  description: string
  base64: string | ArrayBuffer | null
}

export function blobToBase64(blob: Blob) {
  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function base64ToBlob(base64: string | ArrayBuffer | null) {
  if (!base64 || typeof base64 !== 'string') {
    return null;
  }

  const parts = base64.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

export const useRecordingsStore = defineStore('recording', () => {
  // store to hold recordings and their names
  const recordings = ref<Recording[]>([])

  // if local storage has recordings, load them
  if (localStorage.getItem('recordings')) {
    console.log('loading recordings from local storage')
    const recordingsFromLocalStorage = JSON.parse(localStorage.getItem('recordings')!) as RecordingBase64[]
    recordings.value = recordingsFromLocalStorage.map((recording) => {
      return {
        name: recording.name,
        description: recording.description,
        blob: base64ToBlob(recording.base64)
      }
    })
  }

  return { recordings }
});
