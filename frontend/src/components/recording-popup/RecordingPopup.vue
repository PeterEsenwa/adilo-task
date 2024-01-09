<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger as="div">
      <BaseButton text="Start Recording" class="btn-secondary" :prefix-image="RecordIcon" />
    </DialogTrigger>

    <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut"
      />
      <DialogContent class="content-area">
        <DialogTitle class="popup-title">
          <h2>New Recording</h2>
          <DialogClose
            aria-label="Close"
            class="flex justify-center items-center bg-transparent hover:color-[#E53935]"
          >
            <div class="icon-ic:round-close w-[1.25em] h-[1.25em]" />
          </DialogClose>
        </DialogTitle>

        <DialogDescription class="flex flex-col flex-grow py-4 px-6 gap-6 overflow-y-auto">
          <label class="flex flex-col gap-2 relative">
            Save the recording in
            <Listbox v-model="selectedProject" v-slot="{ open }">
              <ListboxButton class="listbox-button">
                {{ displayText }}

                <div
                  class="icon-ic:baseline-keyboard-arrow-down absolute right-4 top-1/2 transform -translate-y-1/2"
                  :class="{ 'rotate-180': open }"
                />
              </ListboxButton>
              <ListboxOptions
                class="absolute top-105% z-50 w-full max-h-[10em] overflow-y-auto bg-white shadow-lg rounded-[4px] border border-[#E0E0E0]"
              >
                <ListboxOption
                  v-for="project in projects"
                  :key="project"
                  :value="project"
                  class="py-2 px-4 hover:bg-[#E0E0E0] cursor-pointer"
                >
                  {{ project }}
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </label>

          <label for="name">
            Name
            <input
              v-model="name"
              type="text"
              id="name"
              class="border border-[#E0E0E0] rounded-[4px] px-6 py-2 focus:outline-none focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
            />
          </label>

          <!-- recording options (record screen, camera, mic) with radix switch -->
          <div class="recording-options">
            <div
              class="recording-option"
              v-for="value in Object.keys(recordingOptions) as Array<'screen' | 'camera' | 'mic'>"
              :key="value"
            >
              <label
                :for="getID(value)"
                class="font-medium leading-none select-none cursor-pointer"
              >
                Record {{ value }}
              </label>
              <SwitchRoot
                class="option-switch"
                :id="getID(value)"
                v-model:checked="recordingOptions[value]"
              >
                <SwitchThumb
                  class="w-[1em] h-[1em] rounded-[1em] bg-white shadow-lg data-[state=checked]:translate-x-[1em] data-[state=unchecked]:translate-x-0 will-change-transform transition-transform"
                />
              </SwitchRoot>
            </div>
          </div>

          <BaseButton
            :disabled="!selectedProject"
            text="Start"
            class="w-85% self-center"
            @click="startRecording"
          />
        </DialogDescription>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import BaseButton from '@/components/misc/BaseButton.vue'
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  DialogTitle,
  DialogClose,
  SwitchRoot,
  SwitchThumb,
  DialogDescription
} from 'radix-vue'
import RecordIcon from '@/assets/icons/record.svg'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { ref } from 'vue'
import { refDefault } from '@vueuse/core'
import type { RecordingOptions } from '@/types/recordingOptions'

const props = withDefaults(
  defineProps<{
    projects?: Array<string>
  }>(),
  {
    projects: () => ['Project 1', 'Project 2', 'Project 3']
  }
)

const emit = defineEmits<{
  (event: 'start-recording', options: RecordingOptions): void
}>()

const open = ref(false)

const getID = (value: string) => `${value}-option`

const selectedProject = ref()
const displayText = refDefault(selectedProject, 'Select a project')

const recordingOptions = ref<RecordingOptions>({
  screen: true,
  camera: false,
  mic: false,
})

const name = ref('')

const startRecording = () => {
  emit('start-recording', {
    ...recordingOptions.value,
    name: name.value,
    project: selectedProject.value,
  })
  open.value = false
}
</script>

<style lang="scss" scoped>
.content-area {
  @apply fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-50;
  @apply bg-white focus:outline-none;
  @apply rounded-[10px];
  @apply w-20em h-max min-h-21em;
  @apply overflow-hidden flex flex-col;

  .popup-title {
    @apply flex justify-between items-center;
    @apply px-4 py-3 border-b border-[#E0E0E0];

    h2 {
      @apply text-[20px] font-semibold;
    }
  }

  .listbox-button {
    @apply relative border border-[#E0E0E0] rounded-[4px] px-6 py-2;
    @apply text-[#4F4F4F] font-medium text-start;
    @apply focus:outline-none focus:ring-[#E0E0E0] focus:border-[#E0E0E0];
  }

  .recording-options {
    @apply flex flex-col w-full gap-4;

    .recording-option {
      @apply flex items-center gap-2 w-full justify-between;
    }
  }
}
</style>

<style lang="scss">
.option-switch {
  --checked-green: #0ad688;
  --unchecked-gray: #a3bac6;

  @apply w-[2em] h-[1em] flex rounded-full relative p-2px box-content cursor-pointer;

  &[data-state='checked'] {
    @apply bg-[--checked-green];
  }

  &:not([data-state='checked']) {
    @apply bg-[--unchecked-gray];
  }
}
</style>
