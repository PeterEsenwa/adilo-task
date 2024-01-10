<template>
  <div class="image-with-text">
    <img src="#" alt="Image Description" />
    <div class="text-content">
      <span>
        Want more controls & better quality recording?
      </span>
      <BaseButton text="Download the desktop recorder" class="btn-blue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/misc/BaseButton.vue'

const props = defineProps({
  imageUrl: String
});
</script>

<style scoped lang="scss">
.image-with-text {
  @apply flex items-center justify-center w-full p-4;
  @apply gap-2em; // Adds space between the image and text content

  img {
    @apply w-32 h-32; // Adjusts the size of the image, change as needed
    @apply object-cover rounded-lg; // Adjusts image style
  }

  .text-content {
    @apply flex flex-col items-start gap-4; // Sets up a flex row with spacing
    @apply justify-start; // Aligns content to the start of the flex container

    span {
      @apply text-xl font-semibold; // Makes the text larger and slightly bolder
      @apply text-gray-800; // Sets the text color, adjust as needed
      @apply max-w-xs; // Limits the width of the text, adjust as needed
    }
  }
}
</style>

