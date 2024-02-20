<script setup lang="ts">
import { type ButtonHTMLAttributes } from 'vue';
import { twMerge } from 'tailwind-merge';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  [
    'inline-flex place-items-center h-8 px-2.5 w-fit text-center disabled:cursor-not-allowed disabled:text-dark-neutral-400A disabled:bg-dark-neutral-100A',
  ],
  {
    variants: {
      appearance: {
        default: [
          'dark:bg-dark-neutral-200A hover:bg-dark-neutral-300A active:bg-dark-neutral-400A text-dark-neutral-900',
        ],
        primary: [
          'bg-blue-400 hover:bg-blue-300 active:bg-blue-200 text-dark-neutral-100',
        ],
        subtle: [
          'bg-light-neutral--100 hover:bg-dark-neutral-200A active:bg-dark-neutral-300A text-dark-neutral-900',
        ],
        warning: [
          'bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500 text-dark-neutral-100',
        ],
        danger: [
          'bg-red-400 hover:bg-red-300 active:bg-red-200 text-dark-neutral-100',
        ],
        success: [
          'bg-green-400 hover:bg-green-300 active:bg-green-200 text-dark-neutral-100',
        ],
      },
      size: {
        sm: ['font-medium tracking-normal leading-8 h-6 px-2 text-xs'],
        md: ['py-4 h-8 px-2.5 text-sm'],
        lg: ['text-lg py-6 px-3 leading-4'],
      },
      outline: {
        true: ['border bg-transparent hover:text-white'],
      },
      iconAfter: {
        true: ['flex-row-reverse gap-x-1'],
      },
      iconBefore: {
        true: ['flex-row gap-x-1'],
      },
      shape: {
        rounded: ['rounded'],
        square: ['rounded-none'],
        pill: ['rounded-full'],
      },
    },
    compoundVariants: [
      {
        appearance: 'primary',
        outline: true,
        class: 'border-blue-400 text-blue-400 hover:bg-blue-400 ',
      },
      {
        appearance: 'warning',
        outline: true,
        class: 'border-yellow-300 text-yellow-300 hover:bg-yellow-300',
      },
      {
        appearance: 'danger',
        outline: true,
        class: 'border-red-400 text-red-400 hover:bg-red-400',
      },
      {
        appearance: 'success',
        outline: true,
        class: 'border-green-400 text-green-400 hover:bg-green-400',
      },
    ],
    defaultVariants: {
      appearance: 'default',
      size: 'md',
      shape: 'rounded',
      outline: false,
      iconAfter: false,
      iconBefore: false,
    },
  },
);
type ButtonProps = VariantProps<typeof button>;

withDefaults(
  defineProps<{
    appearance?: ButtonProps['appearance'];
    size?: ButtonProps['size'];
    shape?: ButtonProps['shape'];
    outline?: boolean;
    nativeType?: ButtonHTMLAttributes['type'];
    iconAfter?: boolean;
    iconBefore?: boolean;
  }>(),
  {
    nativeType: 'button',
    iconAfter: false,
    iconBefore: false,
  },
);
</script>

<template>
  <button
    :class="
      twMerge(
        button({ appearance, size, outline, shape, iconAfter, iconBefore }),
      )
    "
    :type="nativeType"
    tabindex="0">
    <slot />
  </button>
</template>
