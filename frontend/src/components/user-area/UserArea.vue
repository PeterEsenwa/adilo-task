<template>
  <div class="help-section">
    <button class="help-button">Help</button>
    <div class="vertical-line"></div>
    <ProfileSection
      :user-email="userEmail"
      :user-image="userImage"
      :user-name="userName"
    />
  </div>
</template>

<script setup lang="ts">
import ProfileSection from '@/components/profile-section/ProfileSection.vue';
import { defineProps } from 'vue';

defineProps<{
  userEmail: string;
  userImage: string;
  userName: string;
}>();
</script>

<style lang="scss" scoped>
.help-section {
  display: flex;
  align-items: center;

  .help-button {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    font: inherit;
    font-weight: 600; /* Make the button text bolder */
    cursor: pointer;
    font-size: 1em;


    &:hover {
      text-decoration: underline; /* Optional: underline on hover */
    }

    &:focus {
      outline: none; /* Remove focus outline */
    }
  }

  .vertical-line {
    width: 1px;
    height: 2em; /* Height of the line */
    background-color: grey; /* Color of the vertical line */
    margin: 0 1em;
  }
}
</style>
