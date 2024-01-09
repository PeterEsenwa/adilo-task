<template>
  <Story>
    <NavigationMenuListItem :title="'Snapbyte Recorder'" href="#" />
    <NavigationMenuListItem :title="'AudioBounce'" href="#" />
    <NavigationMenuListItem :title="'Sugar Voice'" :is-last-item="true" href="#" />
  </Story>
</template>

<script setup lang="ts">
import NavigationMenuListItem from '@/components/navbar-area/NavigationMenuListItem.vue';
import { ref } from 'vue'

const tools = ref(['Snapbyte Recorder', 'AudioBounce', 'Sugar Voice']);

</script>
