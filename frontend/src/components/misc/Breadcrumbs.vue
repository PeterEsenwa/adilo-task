<template>
  <nav aria-label="Breadcrumb">
    <ol>
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
        <router-link :to="breadcrumb.href" v-if="index < breadcrumbs.length - 1">{{ breadcrumb.label }}</router-link>
        <span v-else>{{ breadcrumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '@/types/breadcrumb'

const props = defineProps<{
  breadcrumbs: Array<Breadcrumb>;
}>();
</script>

<style lang="scss" scoped>
nav {
  @apply text-sm font-medium;
  @apply text-on-surface;
  @apply w-max h-8;
  @apply overflow-hidden;

  ol {
    @apply flex items-center gap-1;
    @apply h-full;
    @apply transition-transform duration-300 ease-in-out;

    transform: translateX(0);

    li {
      @apply flex items-center gap-2;
      @apply h-full;

      a, span {
        @apply cursor-pointer;

        &:hover {
          // TODO: Add some hover effect
          // @apply bg-on-surface/50;
        }

        &::after {
          content: '>';
          @apply mx-2;
        }
      }

      &:last-child {
        a, span {
          @apply cursor-default;

          &:hover {
            @apply bg-transparent;
          }

          &::after {
            content: '';
            @apply mx-0;
          }
        }
      }
    }
  }
}
</style>
