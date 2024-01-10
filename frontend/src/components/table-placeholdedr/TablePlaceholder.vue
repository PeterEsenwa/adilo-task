<template>
  <div class="placeholder-area">
    <div class="instructions">
      <img :src="EmptyTable" alt="icon" />
      <p>Say hello to the world!</p>
      <small>Record your first video/audio and share it with your team, friends, followers, and customers.</small>
    </div>
    <div class="recording-controls">
      <BaseButton text="New Request" class="btn-blue">
        <template #image>
          <div class="icon-ic:outline-videocam prefix-image"/>
        </template>
      </BaseButton>
      <BaseButton text="Start Recording" class="btn-secondary" :prefix-image="RecordIcon" @click="goToRecording()"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import RecordIcon from '@/assets/icons/record.svg'
import BaseButton from '@/components/misc/BaseButton.vue'
import EmptyTable from '@/assets/icons/empty-table.svg'
import { goToRecording } from '@/router'
</script>

<style scoped lang="scss">
   .placeholder-area {
     @apply flex flex-col items-center p-3em rounded-38px;
     @apply mx-auto; // Restricts width and centers the component
     @apply my-6; // Adds vertical margin
     border: 2px dashed #A3BAC6;

     .instructions {
       @apply text-center; // Centers the text
       @apply mb-4; // Adds margin at the bottom

       img {
         @apply mb-3; // Margin below the icon
         @apply h-10em w-full; // Adjusts the size of the icon
         @apply flex items-center justify-center
       }

       p {
         @apply text-lg font-semibold; // Larger and bolder text
         @apply text-black-800; // Text color
       }

       small {
         @apply text-sm text-gray-600; // Smaller text with a lighter color
       }
     }

     .recording-controls {
       @apply flex gap-4 mt-4; // Adds space between buttons and moves them down a bit
     }
   }
</style>

