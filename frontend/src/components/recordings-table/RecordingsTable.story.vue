<template>
  <Story>
    <RecordingsTable />
  </Story>
</template>

<script setup lang="ts">
import RecordingsTable from '@/components/recordings-table/RecordingsTable.vue'
import { useRecordingsStore } from '@/stores/recordings'

const recordingsStore = useRecordingsStore()

// add some dummy data
recordingsStore.recordings.push({
  blob: new Blob(),
  name: 'Get started with Snapbyte',
  description: Date.now().toString(),
})

console.log(recordingsStore.recordings)
</script>

<style scoped>

</style>
