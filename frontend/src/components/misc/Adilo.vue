<template>
  <div class="adilo">
    <!-- LOGO svg and Adilo text -->
    <img :src="logo" alt="Adilo" class="logo" />
    <span>Adilo</span>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<style scoped>
.adilo {
  @apply flex items-center gap-2 font-bold text-xl;
  @apply w-max;

  .logo {
    @apply w-auto h-6;
  }
}
</style>
