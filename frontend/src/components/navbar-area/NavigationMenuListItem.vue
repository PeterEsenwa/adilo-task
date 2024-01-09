<template>
  <div>
      <NavigationMenuLink as-child>
        <a
          v-bind="$attrs"
          class="link-style"
        >
          <div class="title-style">
            {{ props.title }}
          </div>
          <p class="description-style">
            <slot />
          </p>
        </a>
      </NavigationMenuLink>
    <hr v-if="!isLastItem" class="line-divider" />
  </div>
</template>

<script setup lang="ts">
import { NavigationMenuLink } from 'radix-vue';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  isLastItem: Boolean,
});
</script>

<style lang="scss" scoped>
.link-style {
  @apply focus:shadow-outline focus:text-blue block select-none rounded-lg p-3 text-sm leading-none no-underline outline-none transition-all;
}

.title-style {
  @apply mb-1 hover:text-blue font-medium leading-tight;
}

.description-style {
  @apply text-gray-500 my-0 leading-relaxed;
}

.line-divider {
  @apply border-none h-0.5 bg-gray-300 m-0;
}
</style>
