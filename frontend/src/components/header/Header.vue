<template>
  <header class="site-header">
    <div class="header-content">
      <!-- Branding or Logo -->
      <div class="logo">
        <RouterLink to="/">
          <Adilo />
        </RouterLink>
      </div>

      <!-- Navigation Menu -->
      <nav class="navigation">
        <NavBarArea />
      </nav>

      <!-- Additional Header Elements like Search, CTA Button -->
      <div class="header-extras">
        <UserArea
          :user-email="`tobeesenwa@gmail.com`"
          :user-image="`https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80`"
          :user-name="`Tobe Esenwa`"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Adilo from '@/components/misc/Adilo.vue';
import NavBarArea from '@/components/navbar-area/NavBarArea.vue';
import UserArea from '@/components/user-area/UserArea.vue';
</script>

<style lang="scss" scoped>
.site-header {
  @apply bg-white border-b border-gray-200;
  @apply max-w-full mx-auto px-4 py-2;
}

.header-content {
  @apply flex justify-between items-center;
}

.logo img {
  @apply h-10; /* Adjust size as needed */
}

.header-extras {
  @apply flex items-center gap-4;
}
</style>
