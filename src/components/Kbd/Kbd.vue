<template>
  <kbd
    class="justify-center w-fit px-1 py-0.25 inline-flex space-x-0.5 items-center font-sans font-normal text-center text-small shadow-small bg-[#f4f4f5] border border-b-[3px] border-[#e5e7eb] text-[#52525b] rounded-lg dark:bg-[#27272a] dark:text-white">
    <abbr v-for="item in keys" :key="item" :title="item" class="no-underline">
      {{ kbdKeysMap[item as KbdKey] }}
    </abbr>
    <span>
      <slot />
    </span>
  </kbd>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { kbdKeysMap, KbdKey } from './Kbd.types';

defineProps({
  keys: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>
