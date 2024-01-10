<template>
  <Breadcrumbs
    :breadcrumbs="crumbs"
  />
</template>

<script setup lang="ts">
import Breadcrumbs from '@/components/misc/Breadcrumbs.vue'
import type { Breadcrumb } from '@/types/breadcrumb'

const crumbs = <Breadcrumb[]>[
  {
    label: 'Snapbyte',
    href: '/',
  },
  {
    label: 'My Recordings',
    href: '/',
  },
]
</script>
