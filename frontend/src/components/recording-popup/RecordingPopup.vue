<template>
  <DialogRoot>
    <DialogTrigger as="div">
      <BaseButton text="Start Recording" class="btn-secondary" :prefix-image="RecordIcon" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay class="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
      <DialogContent class="content-area">
        <slot />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import BaseButton from '@/components/misc/BaseButton.vue'
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'radix-vue'
import RecordIcon from '@/assets/icons/record.svg'
</script>

<style scoped>
.content-area {
  @apply fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-50;
  @apply bg-white focus:outline-none;
  @apply rounded-[10px];
  @apply w-20em h-max min-h-25em;
}
</style>
