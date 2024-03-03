<template>
  <label class="flex gap-x-2 items-center text-dark-neutral-900">
    <input type="checkbox" v-bind="$attrs" :class="checkbox({ size })" />
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { cva } from 'class-variance-authority';

const checkbox = cva(
  [
    'rounded',
    'border-2',
    'border-dark-neutral-300A',
    'bg-dark-neutral-100',
    'text-blue-400',
    'hover:bg-dark-neutral-250',
    'checked:bg-blue-400',
    'checked:hover:border-blue-300',
    'checked:hover:text-blue-300',
    'focus:border-blue-300',
    'outline-none',
    'transition-colors',
  ],
  {
    variants: {
      size: {
        small: 'size-4',
        medium: 'size-6',
        large: 'size-8',
        xlarge: 'size-12',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

defineProps<{
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  label?: string;
}>();

defineOptions({
  inheritAttrs: false,
});
</script>
