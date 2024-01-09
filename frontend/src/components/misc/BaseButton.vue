<template>
  <button class="base-button">
    <slot name="image">
      <img v-if="prefixImage" :src="prefixImage" class="prefix-image" alt="prefix" />
    </slot>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
  prefixImage?: string
}>()
</script>

<style scoped lang="scss">
.base-button {
  @apply bg-[--button-bg-color] hover:bg-[--button-hover-bg-color] color-[--button-text-color];
  @apply rounded-[--button-border-radius];
  @apply h-[2.5em] p-[--button-padding];
  @apply text-size-[--button-font-size];
  @apply inline-flex items-center justify-center gap-2;
  @apply border-none cursor-pointer;

  &:hover {
    background-color: var(--button-hover-bg-color);
  }

  &:focus {
    @apply outline-none;
  }

  &:disabled {
    @apply opacity-50 cursor-not-allowed;
  }

  .prefix-image {
    @apply w-[1.5em] h-[1.5em];
  }
}
</style>
