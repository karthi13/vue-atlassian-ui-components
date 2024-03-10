<template>
  <span :class="badge({ appearance })"><slot /></span>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority';

const badge = cva('inline-block rounded-full ps-3 pe-3 w-fit', {
  variants: {
    appearance: {
      default:
        'bg-light-neutral-200A dark:bg-dark-neutral-200A text-light-neutral-1000 dark:text-dark-neutral-900',
      primary:
        'bg-blue-700 dark:bg-blue-400 text-light-neutral-0 dark:text-dark-neutral-100',
      added:
        'bg-green-100 dark:bg-green-1000 text-green-800 dark:text-green-300',
      important:
        'bg-red-700 dark:bg-red-400 text-light-neutral-0 dark:text-dark-neutral-100',
      removed: 'bg-red-100 dark:bg-red-1000 text-red-800 dark:text-red-300',
      primaryInverted:
        'bg-light-neutral-0 dark:bg-dark-neutral-100 text-blue-700 dark:text-blue-400',
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

defineProps<{ appearance: string }>();
</script>
