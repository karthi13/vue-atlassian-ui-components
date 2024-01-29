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

const banner = cva('flex gap-2 p-3 text-sm text-gray-900 font-medium', {
  variants: {
    appearance: {
      announcement: 'bg-slate-400',
      error: 'bg-red-400',
      warning: 'bg-yellow-400',
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
