<script setup lang="ts">
import { type ButtonHTMLAttributes,  } from "vue";
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("inline-flex place-items-center h-8 px-2.5 w-fit text-center disabled:cursor-not-allowed disabled:text-[#BFDBF847] disabled:bg-[#BCD6F00A]", {
  variants: {
    appearance: {
      default: "bg-btn-neutral hover:bg-btn-neutral-hover active:bg-btn-neutral-pressed",
      primary: "bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active",
      warning: "bg-btn-warning hover:bg-btn-warning-hover active:bg-btn-warning-active",
      danger: "bg-btn-danger hover:bg-btn-danger-hover active:bg-btn-danger-active",
      link: "bg-btn-subtle text-link-primary hover:underline underline-offset-2",
      subtle: "bg-btn-subtle active:bg-btn-subtle-active hover:bg-btn-subtle-hover",
      "subtle-link": "bg-btn-subtle hover:underline underline-offset-2",
      success: "bg-[#47c978] hover:bg-[#2EBD6E] active:bg-[#1EBD6E] text-[#1d2125]",
      outline: "border"
    },
    size: {
      sm: "font-medium tracking-normal leading-8 h-6 px-2 text-xs",
      md: "py-4 h-8 px-2.5 text-sm",
      lg: "text-lg py-6 px-3 leading-4",
    },
    outline: {
      true: "border bg-transparent hover:text-white",
    },
    iconAfter: {
      true: "flex-row gap-x-1" ,
    },
    iconBefore: {
      true: "flex-row gap-x-1",
    },
    shape: {
      rounded: "rounded",
      square: "rounded-none",
      pill: "rounded-full",
    },
  },
  compoundVariants: [
    { appearance: "primary", outline: true, class: "border-btn-primary text-btn-primary hover:bg-btn-primary " },
    { appearance: "warning", outline: true, class: "border-btn-warning text-btn-warning hover:bg-btn-warning" },
    { appearance: "danger", outline: true, class: "border-btn-danger text-btn-danger hover:bg-btn-danger" },
    { appearance: "success", size: [ "sm","md","lg"], outline: true, class: "border-green-500 text-green-500 hover:bg-green-500" },
  ],
  defaultVariants: {
    appearance: "default",
    size: "md",
    shape: "rounded",
    outline: false,
    iconAfter: false,
    iconBefore: false,
  }
});

type ButtonProps = VariantProps<typeof button>;

const props = withDefaults(
  defineProps<{
    appearance?: ButtonProps["appearance"];
    size?: ButtonProps["size"];
    shape?: ButtonProps["shape"];
    outline?: ButtonProps["outline"];
    nativeType?: ButtonHTMLAttributes["type"];
    iconAfter: ButtonProps["iconAfter"];
    iconBefore: ButtonProps["iconBefore"];
  }>(),
  {
    nativeType: "button",
    iconAfter: false,
    iconBefore: false,
  },
);

</script>

<template>
  <button
    :class="twMerge(button({ appearance, size, outline, shape, iconAfter, iconBefore }))"
    :type="nativeType"
    tabindex="0"
  >
    <slot></slot>
  </button>
</template>