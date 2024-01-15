<template>
    <span :class="badge({ appearance })">
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
import { cva, type VariantProps} from 'class-variance-authority';

const badge = cva('tracking-tight	inline-flex items-center text-inverse rounded-full h-5 box-border ps-2 pe-2 leading-4 text-sm text-center place-items-center', {
  variants: {
    appearance: {
      default: "bg-neutral",
      added: "bg-btn-primary",
      important: "bg-bg-success text-success",
      primaryInverted: "bg-btn-danger",
      removed: "bg-yellow-300",
      primary: "bg-btn-primary text-slate-100",
    },
  },
  compoundVariants: [
    { appearance: "default", class: "text-slate-100"}
  ],
  defaultVariants: {
    appearance: "default"
  }
})

type BadgeProps = VariantProps<typeof badge>;

withDefaults(defineProps<{ appearance?: BadgeProps["appearance"] }>(), {
  appearance: "default"
})
</script>
