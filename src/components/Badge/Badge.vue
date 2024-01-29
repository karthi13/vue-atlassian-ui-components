<template>
  <span :class="badge({ appearance: 'added' })"><slot /></span>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority';

const badge = cva('rounded-full', {
  variants: {
    appearance: {
      added: '',
      default: 'bg-blue-500 ps-2 pe-2 text-white',
      primary: '',
      important: '',
      removed: '',
      primaryInverted: '',
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

defineProps<{ appearance: string }>();
</script>
