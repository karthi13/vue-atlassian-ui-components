<template>
  <div :class="banner({ appearance })" :data-testid="testId">
    <slot name="icon" />
    <div class="whitespace-nowrap text-ellipsis overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { defineProps } from 'vue';

const banner = cva('flex gap-1 p-3 text-sm font-medium items-center max-h-12', {
  variants: {
    appearance: {
      announcement: 'bg-light-neutral-800 text-white dark:bg-dark-neutral-800 dark:text-dark-neutral-100',
      error: 'bg-red-700 text-white dark:bg-red-400 dark:text-dark-neutral-100',
      warning: 'bg-yellow-300 dark:text-dark-neutral-100 text-light-neutral-1000',
    },
  },
  defaultVariants: {
    appearance: 'announcement',
  },
});

defineProps<{
  appearance?: 'warning' | 'error' | 'announcement';
  testId?: string;
}>();
</script>
