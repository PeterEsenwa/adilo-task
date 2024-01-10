<template>
  <div class="action-row">
    <div class="recordings-info">
      <div>My Recording <span>{{ numberOfRecordings }}</span></div>
    </div>
    <div class="action-buttons">
      <BaseButton text="By Date" style="--button-bg-color: transparent; --button-hover-bg-color:none; --button-text-color:#637C8E; --button-border-color: #E2E5ED">
        <template #image>
          <span class="icon-ph:arrows-down-up" />
        </template>
      </BaseButton>
      <BaseButton text="Add Filter" style="--button-bg-color: transparent; --button-hover-bg-color:none; --button-text-color:#637C8E; --button-border-color: #E2E5ED">
        <template #image>
          <span class="icon-ic:baseline-filter-alt" />
        </template>
      </BaseButton>
    </div>
    <div class="recording-controls">
      <BaseButton text="New Request" class="btn-blue">
        <template #image>
          <div class="icon-ic:outline-videocam prefix-image"/>
        </template>
      </BaseButton>
      <BaseButton text="Start Recording" class="btn-secondary" :prefix-image="RecordIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/misc/BaseButton.vue'
import { ref } from 'vue'
import RecordIcon from '@/assets/icons/record.svg'

const numberOfRecordings = ref(0);

const name = ref('');
const selectedProject = ref();

// const startRecording = () => {
//   emit('start-recording', {
//     ...recordingOptions.value,
//     name: name.value,
//     project: selectedProject.value,
//   })
//   open.value = false
// }
</script>

<style scoped lang="scss">
.action-row {
  @apply flex justify-between items-center p-4;

  .recordings-info {
    @apply flex items-center; // Aligns text and number properly
    div {
      @apply text-lg font-semibold; // Enlarges and boldens the

      span {
        @apply text-xl font-bold; // Makes the number larger and bolder than the text
        @apply text-gray-800; // Sets the text color
      }
    }
  }

  .action-buttons,
  .recording-controls {
    @apply flex gap-4; // Increases space between buttons for better accessibility
  }
}

.prefix-image {
  @apply w-[1.5em] h-[1.5em];
}
</style>
