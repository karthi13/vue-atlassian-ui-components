<script setup lang="ts">
import { inject } from 'vue';
import { BreadcrumbItems } from './Breadcrumbs.types.ts';

const separator = inject('separator');

defineProps<{
  item: BreadcrumbItems;
}>();
</script>

<template>
  <li class="flex h-6 px-1 leading-6 border-box">
    <a
      v-if="item.href"
      :href="item.href"
      class="flex place-items-center font-normal max-w-24 bg-light-neutral--100 text-light-neutral-800 dark:text-dark-neutral-800 shrink hover:underline hover:text-light-neutral-800">
      <component :is="item.icon" v-if="item.iconBefore" class="pr-px" />
      <span class="truncate">{{ item.text }}</span>
      <component :is="item.icon" v-if="item.iconAfter" class="pr-px" />
    </a>
    <span
      v-else
      class="flex place-items-center font-normal max-w-24 bg-light-neutral--100 text-light-neutral-800 shrink">
      <component :is="item.icon" v-if="item.iconBefore" class="pr-px" />
      <span class="truncate">{{ item.text }}</span>
      <component :is="item.icon" v-if="item.iconAfter" class="pr-px" />
    </span>
  </li>
  <span class="last:hidden text-light-neutral-700">{{ separator }}</span>
</template>
