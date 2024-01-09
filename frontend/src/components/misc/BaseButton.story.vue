<template>
  <Story title="Base Button">
    <Variant title="Default">
      <BaseButton text="Default Button" />
    </Variant>

    <Variant title="With Prefix Image">
      <BaseButton text="Button with Image">
        <template #image>
          <span class="icon-ic:round-delete" />
        </template>
      </BaseButton>
    </Variant>

    <Variant title="Custom Style">
      <BaseButton text="Custom Style Button" style="--button-bg-color: green; --button-text-color: white;" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>

<style scoped>

</style>
