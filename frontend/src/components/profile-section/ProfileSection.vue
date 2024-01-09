<template>
  <div class="profile-section">
    <AvatarRoot class="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-[30%] align-middle">
      <AvatarImage
        class="h-full w-full rounded-[inherit] object-cover"
        :src="userImage"
        :alt="userName"
      />
      <AvatarFallback
        class="text-grass11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        :delay-ms="600"
      >
        {{ userInitials }}
      </AvatarFallback>
    </AvatarRoot>
    <div class="profile-info">
      <div class="profile-name">{{ userName }}</div>
      <div class="profile-description">{{ userEmail }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { AvatarFallback, AvatarImage, AvatarRoot } from 'radix-vue';

const props = defineProps({
  userImage: String,
  userName: String,
  userEmail: String
});

const userInitials = props?.userName.split(' ').map(name => name[0]).join('');
</script>

<style scoped>
.profile-section {
  display: flex;
  align-items: center;
}

.profile-info {
  margin-left: 12px;
}

.profile-name {
  font-size: 0.85em;
  font-weight: bold;
}

.profile-description {
  font-size: 0.65em;
  color: gray;
}
</style>
