<template>
  <div class="panel" @click="navigateTo(props.panel.route)">
    <img :src="`${panel.icon}`" alt="" class="icon" />
    {{ panel.title }}
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

export interface PanelInfo {
  title: string;
  icon: string;
  route: string;
}

const props = defineProps<{
  panel: Record<string, PanelInfo>[],
}>();

const router = useRouter();

const navigateTo = (route: string) => {
  router.push(route);
};
</script>

<style scoped>
.panel {
  @apply cursor-pointer p-4 flex items-center gap-2;
  @apply border border-transparent;
  @apply rounded-lg;

  &:hover {
    background: #E2E5ED 0% 0% no-repeat padding-box;
    border: 1px solid #0DABD838;
    border-radius: 10px;
  }
}

.icon {
  @apply w-5 h-5;
}
</style>
