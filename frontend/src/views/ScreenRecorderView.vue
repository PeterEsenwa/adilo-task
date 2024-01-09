<template>
  <div ref="headerRef">
    <AppHeader />
  </div>
  <div class="content">
    <div class="content-area">
      <div class="indicator">
        <div
          class="icon-fluent:record-12-regular h-1.25em w-1.25em"
          :class="{ 'color-[--button-secondary-hover]': isRecording }"
        />
        <span class="text-0.85em text-[#637C8E]">Live Preview</span>
      </div>
      <div class="preview-area">
        <video ref="previewRef" class="preview" id="preview" v-show="isRecording" autoplay muted />
      </div>

      <div class="flex items-center justify-center">
        <RecordingPopup @start-recording="handleStartRecording" v-if="!isRecording" />
        <BaseButton
          text="Stop Recording"
          class="btn-secondary"
          v-else
          @click="handleStopRecording"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/header/Header.vue'
import { ref, computed } from 'vue'
import { isDef } from '@vueuse/core'
import RecordingPopup from '@/components/recording-popup/RecordingPopup.vue'
import type { RecordingOptions } from '@/types/recordingOptions'
import BaseButton from '@/components/misc/BaseButton.vue'
import { useRecordingsStore } from '@/stores/recordings'

const headerRef = ref<HTMLElement>()

const recordingsStore = useRecordingsStore()

const headerHeight = computed(() => {
  if (!isDef(headerRef.value)) {
    return 0 + 'px'
  }

  return headerRef.value.clientHeight + 'px'
})

const previewRef = ref<HTMLVideoElement>()

const isRecording = ref(false)

let recorder: MediaRecorder

const handleStartRecording = async (options: RecordingOptions & { name: string }) => {
  let stream: MediaStream
  let blob: Blob

  stream = await navigator.mediaDevices.getDisplayMedia({
    audio: options.mic,
    video: options.screen
  })

  recorder = new MediaRecorder(stream, {
    mimeType: 'video/webm; codecs=vp9'
  })

  if (isDef(previewRef.value)) {
    previewRef.value.srcObject = stream
  }

  recorder.start()
  recorder.ondataavailable = (e) => {
    // keep the data in an array until stopped
    const chunks = []
    chunks.push(e.data)

    // combine the data in the array into a blob
    blob = new Blob(chunks, { type: 'video/webm' })
  }

  // handle stop recording from browser
  recorder.onstop = () => {
    stream.getTracks().forEach((track) => track.stop())
    isRecording.value = false

    // Save blob to pinia
    recordingsStore.recordings.push({
      name: options.name,
      description: Date.now().toString(),
      blob: blob
    })
  }

  isRecording.value = true
}

const handleStopRecording = () => {
  recorder.stop()
}
</script>

<style lang="scss" scoped>
.content {
  @apply flex flex-col items-center justify-center w-100%;

  --header-height: v-bind(headerHeight);

  height: calc(100vh - var(--header-height));
  background: transparent linear-gradient(117deg, #0dabd8 0%, #eafaff 0%, #d3f5fe 100%) 0% 0%
    no-repeat padding-box;

  .content-area {
    @apply grid w-60% h-100% gap-2;

    grid-template-rows: minmax(5em, 0.1fr) 1fr minmax(7em, 0.25fr);

    .indicator {
      @apply flex items-center justify-center gap-1 w-max;
      @apply grid-self-end;
    }

    .preview-area {
      @apply w-full h-full;
      @apply rounded-2 bg-[#21455E] overflow-hidden;

      .preview {
        @apply w-full h-full;
      }
    }
  }
}
</style>
