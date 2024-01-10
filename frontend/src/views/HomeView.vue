<template>
  <main>
    <div>
      <AppHeader />
    </div>
    <SidebarPanel :panel-info="sideItem" />
    <div class="main-section">
      <Breadcrumbs :breadcrumbs="sideItem" />
      <ActionRow />
      <TablePlaceholder />
      <CallToAction />
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

<style scoped></style>
