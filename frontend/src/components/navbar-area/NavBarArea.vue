<template>
  <div class="navbar">
    <NavigationMenuRoot v-model="currentTrigger" class="relative z-[1] flex w-full justify-center">
      <NavigationMenuList class="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">

        <NavigationMenuItem>
          <NavigationMenuLink
            class="text-grass11 focus:font-bold block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="#"
          >
            Projects
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            class="text-grass11 focus:font-bold group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none"
          >
            Tools & App
          </NavigationMenuTrigger>
          <NavigationMenuContent class="absolute top-0 left-0 w-full sm:w-auto">
            <ul class="m-0 grid list-none gap-x-[10px] sm:w-[106%] sm:grid-flow-col sm:grid-rows-3"
              style="{
                box-shadow: 0 3px 24px rgba(0, 0, 0, 0.1)
              }">
              <NavigationMenuListItem :title="'Snapbyte Recorder'" class="p-1" href="#"></NavigationMenuListItem>
              <NavigationMenuListItem :title="'AudioBounce'" class="p-1" href="#"></NavigationMenuListItem>
              <NavigationMenuListItem :title="'Sugar Voice'" :is-last-item="true" class="p-1" href="#"></NavigationMenuListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem v-for="tab in tabs">
          <NavigationMenuLink
            class="text-grass11 focus:font-bold block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            href="#"
          >
            {{ tab.name }}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator
          class="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden"
        >
          <div class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <div class="perspective-[2000px] absolute top-full right-[280px] left-0 flex justify-center">
        <NavigationMenuViewport
          class="nav relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white sm:w-[var(--radix-navigation-menu-viewport-width)]"
        />
      </div>
    </NavigationMenuRoot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  NavigationMenuLink
} from 'radix-vue'
import NavigationMenuListItem from '@/components/navbar-area/NavigationMenuListItem.vue'

const tabs = ref([
  { name: 'Channels' },
  { name: 'Contacts' },
  { name: 'Analytics' },
  { name: 'Settings' }
]);

const tools = ref(['Snapbyte Recorder', 'AudioBounce', 'Sugar Voice']);

const selectTab = (name) => {
  activeTab.value = name;
};

const selectTool = (tool) => {
  console.log('Tool selected:', tool);
};

const currentTrigger = ref('')
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  color: #707070;
}

.nav {
  box-shadow: 0 3px 24px #0000001A;
}

.navigation-menu-link, .navigation-menu-trigger {
  position: relative; // Needed for absolute positioning of pseudo-elements

  &:focus::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px; // Adjust the thickness of the top border
    background-color: blue; // Your desired color for the top border
  }
}
</style>
