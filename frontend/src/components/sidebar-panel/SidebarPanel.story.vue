<template>
  <Story>
    <SidebarPanel
      :panel-info="sideItem"
    />
  </Story>
</template>

<script setup lang="ts">
import SidebarPanel from '@/components/sidebar-panel/SidebarPanel.vue'
import videoIcon from '@/assets/icons/video-player.svg';

const sideItem = [
  {
  title: 'My Recordings',
  icons: videoIcon,
  }
]
</script>
