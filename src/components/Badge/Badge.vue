<template>
  <span :class="badge({ appearance })"><slot></slot></span>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority";

const badge = cva("rounded-full", {
  variants: {
    appearance: {
      added: "",
      default: "bg-blue-500 ps-2 pe-2 text-white",
      primary: "",
      important: "",
      removed: "",
      primaryInverted: "",
    },
  },
  defaultVariants: {
    appearance: "default",
  },
});

type BadgeProps = VariantProps<typeof badge>;

withDefaults(
  defineProps<{ appearance: ButtonProps["appearance"]; }>(),
  {
    intent: "default",
    size: "medium",
  },
);
</script>