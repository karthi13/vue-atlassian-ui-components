<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(["h-8", "px-2.5", "w-fit", "rounded"], {
  variants: {
    type: {
      default: [ "bg-[#A1BDD914]", "hover:bg-[#A6C5E229]", "active:bg-[#BFDBF847]", "text-[#B6C2CF]"],
      primary: [ "bg-[#579DFF]", "hover:bg-[#85B8FF]", "active:bg-[#CCE0FF]", "text-[#1d2125]"],
      subtle: [ "bg-[#00000000]", "hover:bg-[#A1BDD914]", "active:bg-[#A6C5E229]", "text-[#B6C2CF]" ],
      warning: [ "bg-[#f5cc47]", "hover:bg-[#E2B203]", "active:bg-[#CF9F02]", "text-[#1d2125]" ],
      danger: [ "bg-[#f87268]", "hover:bg-[#FD9891]", "active:bg-[#FFD5D2]", "text-[#1d2125]" ],
      link: [ "text-[#579DFF]", "hover:underline", "text-[#579DFF]" ],
      "subtle-link": [ "text-[#9FADBC]", "hover:underline", "" ],
    },
    size: {
      sm: [ "text-sm", "font-medium", "tracking-normal", "leading-8" ],
      md: [ "text-base", "py-4", "px-6", "leading-3" ],
      lg: [ "text-lg", "py-6", "px-8", "leading-4" ],
    },
  },
  compoundVariants: [
    { type: "primary", size: "md", class: "uppercase" },
  ],
});

type ButtonProps = VariantProps<typeof button>;

withDefaults(
  defineProps<{ type: ButtonProps["type"]; size: ButtonProps["size"] }>(),
  {
    type: "default",
    size: "sm",
  },
);
</script>

<template>
  <button :class="twMerge(button({ type, size }))">
    <span class="border-box"><slot /></span>
  </button>
</template>