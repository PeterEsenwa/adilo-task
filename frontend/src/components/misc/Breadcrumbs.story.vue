<template>
  <Story title="Breadcrumbs">
    <Breadcrumbs :breadcrumbs="crumbs" />
  </Story>
</template>

<script setup lang="ts">
import Breadcrumbs from '@/components/misc/Breadcrumbs.vue'
import type { Breadcrumb } from '@/types/breadcrumb'

const crumbs = <Breadcrumb[]>[
  {
    label: 'Home',
    href: 'https://www.google.com/',
  },
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Settings',
    href: '/settings',
  },
]
</script>

<style scoped>

</style>
