<template>
  <Story>
    <SidebarPanel
      panel=""
    />
  </Story>
</template>

<script setup lang="ts">
import SidebarPanel, { type PanelInfo } from '@/components/sidebar-panel/SidebarPanel.vue'

const sideItems: Record<string, PanelInfo> = {
  title: 'My Recordings',
  icons: ''
};
</script>
