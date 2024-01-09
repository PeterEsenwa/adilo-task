<template>
  <Story>
    <NavigationMenuListItem v-for="tool in tools" :title="tool" href="#" />
  </Story>
</template>

<script setup lang="ts">
import NavigationMenuListItem from '@/components/navbar-area/NavigationMenuListItem.vue';
import { ref } from 'vue'

const tools = ref(['Snapbyte Recorder', 'AudioBounce', 'Sugar Voice']);

</script>
