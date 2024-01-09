<template>
  <NavigationMenuRoot v-model="currentTrigger" class="relative z-[1] flex w-full justify-center">
    <NavigationMenuList class="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">

      <NavigationMenuItem>
        <NavigationMenuLink
          class="text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          href="#"
        >
          Projects
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger
          class="text-grass11 hover:bg-green3 focus:shadow-green7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
        >
          Tools & App
          <span
            class="icon-ic:baseline-keyboard-arrow-down text-green10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
          <ul class="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
            <NavigationMenuListItem v-for="tool in tools" :title="tool" href="#" />
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem v-for="tab in tabs">
        <NavigationMenuLink
          class="text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          href="#"
        >
          {{ tab.name }}
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator
        class="data-[state=hidden]:opacity-0 duration-200 data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[all,transform_250ms_ease]"
      >
        <div class="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
      <NavigationMenuViewport
        class="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[10px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
      />
    </div>
  </NavigationMenuRoot>
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

<style scoped lang="scss">
.navbar {
  display: flex;
}

.active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: blue;
}

.dropdown {
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
