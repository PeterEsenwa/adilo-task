<template>
  <Story>
    <ProfileSection
      :user-email="`tobeesenwa@gmail.com`"
      :user-image="`https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80`"
      :user-name="`Tobe Esenwa`"
    />
  </Story>
</template>

<script setup lang="ts">
import ProfileSection from '@/components/profile-section/ProfileSection.vue'
</script>
