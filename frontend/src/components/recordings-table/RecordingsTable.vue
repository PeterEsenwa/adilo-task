<template>
  <table>
    <thead>
    <tr>
      <th>Recordings</th>
      <th>Title</th>
      <th>Views</th>
      <th>Size</th>
      <th>Last Modified</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(recording,index) in store.recordings" :key="recording.name">
      <td>
        <div class="thumbnail-wrapper">
          <img v-if="thumbnails[index]" :src="thumbnails[index]" class="thumbnail" alt="Video Preview" />
          <div v-else class="icon-ic:round-video-library" />
        </div>
      </td>
      <td>{{ recording.name }}</td>
      <td>{{ getRandomViews() }}</td>
      <td>{{ getFileSize(recording.blob?.size) }}</td>
      <td>{{ recording.description }}</td>
      <td>
        <div class="icon-ic:more-horiz" />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useRecordingsStore } from '@/stores/recordings'
import { ref, onUnmounted, watch } from 'vue'

const store = useRecordingsStore();

// Function to create blob URL
const objectURLs = ref<string[]>([]);

function createObjectURL(blob: Blob) {
  const url = URL.createObjectURL(blob);
  objectURLs.value.push(url);
  return url;
}

// Function to generate random views (for demo purpose)
function getRandomViews() {
  return Math.floor(Math.random() * 1000);
}

// Function to format file size
function getFileSize(size?: number) {
  if (!size) return '0 MB';
  return (size / 1024 / 1024).toFixed(2) + ' MB';
}

const getThumbnail = (blob?: Blob | null) => {
  if (!blob) return Promise.resolve('');

  const video = document.createElement('video');
  video.src = createObjectURL(blob);
  video.currentTime = 0;
  video.width = 160;
  video.height = 90;
  video.muted = true;
  video.playsInline = true;
  video.play();
  return new Promise<string>(resolve => {
    video.onloadeddata = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      resolve(canvas.toDataURL());
    };
  });
};

// Create a thumbnails ref to store the resolved thumbnail URLs
const thumbnails = ref<{ [key: string]: string }>({});

// Watch for changes in recordings and update thumbnails
watch(store.recordings, async recordings => {
  for (const recording of recordings) {
    if (!thumbnails.value[recording.name]) {
      thumbnails.value[recording.name] = await getThumbnail(recording.blob);
    }
  }
});

// Cleanup blob URLs on unmount
onUnmounted(() => {
  objectURLs.value.forEach(url => URL.revokeObjectURL(url));
});
</script>

<style lang="scss">
table {
  @apply w-full border-collapse color-[#21455E] bg-white;

  thead {
    @apply font-medium;

    th {
      @apply text-left px-4 py-2;
    }
  }

  tbody {
    td {
      @apply px-4 py-2;

      .thumbnail-wrapper {
        @apply flex items-center justify-center w-32 h-16;
        @apply bg-gray-300 rounded-md;
      }
    }
  }
}
</style>
