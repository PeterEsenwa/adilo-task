<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64" aria-label="Sidebar">
      <!-- Sidebar content goes here -->
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <slot></slot> <!-- This is where your pages will be injected -->
    </main>
  </div>
</template>

<script setup>
// Import Vue functionality as needed
</script>

<style>
/* Add styling for your sidebar and main content here */
</style>
