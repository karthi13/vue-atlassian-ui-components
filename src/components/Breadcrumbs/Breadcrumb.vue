<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{ 
  href?: string,
  target?: "" | "_blank" | "_parent" | "_self" | "_top",
  text?: string,
}>();
</script>

<template>
  <li class="flex h-6 px-1 leading-6 border-box">
    <a v-if="href" :href="href" class="justify-center font-normal bg-light-neutral--100 text-light-neutral-1000 dark:text-dark-neutral-900 shrink hover:underline hover:text-light-neutral-800">{{ text }}</a>
    <span v-else class="justify-center font-normal bg-light-neutral--100 text-light-neutral-1000 shrink">{{ text }}</span>
  </li>
  <span class="last:hidden text-light-neutral-700">{{ '› > /' }}</span>
</template>

<style scoped>

</style>