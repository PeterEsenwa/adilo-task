<template>
  <main>
    <div>
      <AppHeader />
    </div>
    <div class="home-section">
    <SidebarPanel :panel-info="sideItem" />
    <div class="main-section">
      <Breadcrumbs :breadcrumbs="crumbs" />
      <ActionRow />
      <TablePlaceholder />
      <CallToAction />
    </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import SidebarPanel from '@/components/sidebar-panel/SidebarPanel.vue'
import AppHeader from '@/components/header/Header.vue'
import ActionRow from '@/components/action-row/ActionRow.vue'
import Breadcrumbs from '@/components/misc/Breadcrumbs.vue'
import TablePlaceholder from '@/components/table-placeholdedr/TablePlaceholder.vue'
import CallToAction from '@/components/call-to-action/CallToAction.vue'

const crumbs = [
  {
    label: 'Snapbyte',
    href: '#'
  },
  {
    label: 'My Recordings',
    href: '#'
  }
]

const sideItem = [
  {
    title: 'My Recordings',
    icon: 'icon-solar:clapperboard-play-bold'
  },
  {
    title: 'Requested',
    icon: 'icon-ic:outline-share'
  }
]
</script>

<style scoped lang="scss">
.home-section {
  @apply flex min-h-screen;
}

.main-section {
  @apply flex-1 p-2em
}
</style>
