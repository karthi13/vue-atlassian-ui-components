<template>
  <input :class="TextField({ appearance })" />
</template>

<script lang="ts" setup>
import { cva } from 'class-variance-authority';

const TextField = cva(
  'focus:bg-[#22272B] hover:bg-[#282E33] hover:border-[#A6C5E220] border-2 rounded outline-[#85B8FF] py-2 px-1.5 text-sm text-[#B6C2CF]',
  {
    variants: {
      appearance: {
        standard: 'bg-[#22272B] border-[#A6C5E229]',
        subtle: 'bg-transparent border-transparent',
      },
    },
    defaultVariants: {
      appearance: 'standard',
    },
  },
);

interface Props {
  appearance?: 'standard' | 'subtle';
}

defineProps<Props>();
</script>
