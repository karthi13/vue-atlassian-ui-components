<template>
  <kbd class="px-1.5 py-0.5 inline-flex space-x-0.5 items-center font-sans font-normal text-center text-small shadow-small bg-btn-neutral text-foreground-600 rounded-lg">
    <abbr v-for="item  in keys" :key="item" :title="item" class="no-underline">{{ kbdKeysMap[item] }}</abbr>
    <span><slot /></span>
  </kbd>

</template>

<script setup lang="ts">

defineProps({
    keys: {
        type: Array,
        default: [],
    }
})

const kbdKeysMap = {
  command: "⌘",
  shift: "⇧",
  ctrl: "⌃",
  option: "⌥",
  enter: "↵",
  delete: "⌫",
  escape: "⎋",
  tab: "⇥",
  capslock: "⇪",
  up: "↑",
  right: "→",
  down: "↓",
  left: "←",
  pageup: "⇞",
  pagedown: "⇟",
  home: "↖",
  end: "↘",
  help: "?",
  space: "␣",
};
</script>
