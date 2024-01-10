<template>
  <aside class="sidebar">
    <div class="panel" v-for="panel in panelInfo" @click="navigateTo(panel.route)">
      <span :class="panel.icon" />
      {{ panel.title }}
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

export interface PanelInfo {
  title?: string
  icon?: string
  route?: string
}

const props = defineProps<{
  panelInfo: PanelInfo[]
}>()

const router = useRouter()

const navigateTo = (route?: string) => {
  if (!route) return

  router.push(route)
}
</script>

<style scoped lang="scss">
.sidebar {
  @apply flex flex-col w-64 h-screen bg-[#EBF2F6]/30 color-[#21455E] font-size-1em;
  @apply border-r-2 border-[#21455E];

  /* Additional styling */
  @apply overflow-y-auto;
  @apply px-4 py-2;
  @apply relative;

  scroll-behavior: smooth;

  /* Styling for scrollbar (optional) */
  &::-webkit-scrollbar {
    @apply w-2;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-gray-600;
    @apply rounded-full;
  }
}

.panel {
  @apply cursor-pointer p-4 flex items-center gap-1em;
  @apply border border-transparent;
  @apply rounded-lg;

  &:hover {
    @apply bg-[#E2E5ED] rounded-10px;
    @apply border border-[#0dabd838];
  }
}

.icon {
  @apply w-5 h-5;
}
</style>
