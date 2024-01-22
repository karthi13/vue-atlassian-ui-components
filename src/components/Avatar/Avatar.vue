<template>
  <div role="img">
    <span
      :title="name" 
      :class="twMerge(avatarContainerClass({ appearance, borderColor, size, disabled }))"
      aria-labelledby="avatar-label"
    >
      <img
        v-if="validImage"
        class="object-contain w-full h-full" 
        :src="validImage"
        :alt="name"
      />
      <template v-else-if="initials">{{ initials }}</template>
      <Anonymous v-else :class="contentClass({ size })" />
      <span class="absolute bg-green-600 right-4 top-4"></span>
    </span>
    <span v-if="name" id="avatar-label" hidden>{{name}}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from "class-variance-authority";
import Anonymous from './Anonymous.vue';

const validImage = ref('');

const contentClass = cva("", {
  variants: {
    size: {
      xs: [ "text-[6px] w-4 h-4" ],
      sm: [ "w-6 h-6" ],
      md: [ "w-8 h-8" ],
      lg: [ "w-10 h-10" ],
      xl: [ "w-12 h-12" ],
      '2xl': [ "w-16 h-16" ],
    }
  }
});

const avatarContainerClass = cva("inline-flex relative items-center justify-center select-none shrink-0 bg-slate-200 overflow-hidden text-slate-950", {
  variants: {
    appearance: {
      circle: [ "rounded-full" ],
      square: [ "rounded" ],
    },
    borderColor: {
      blue: [ "ring-2 border-blue-500" ],
      green: [ "ring-2 border-green-500" ],
      red: [ "ring-2 border-red-500" ],
      yellow: [ "ring-2 border-yellow-500" ],
      gray: [ "ring-2 border-gray-500" ],
      white: [ "ring-2 border-white" ],
      black: [ "ring-2 border-black" ],
      none: [ "ring-2 border-transparent" ],
    },
    size: {
      xs: [ "text-xs w-6 h-6" ],
      sm: [ "text-sm w-8 h-8" ],
      md: [ "text-base w-10 h-10" ],
      lg: [ "text-lg w-12 h-12" ],
      xl: [ "text-xl w-16 h-16" ],
      '2xl': [ "text-2xl w-20 h-20" ],
    },
    disabled: {
      true: [ "opacity-50 cursor-not-allowed" ],
      false: [ "" ],
    },
  }
});

type AvatarContainerProps = VariantProps<typeof avatarContainerClass>;

const props = withDefaults(
  defineProps<{ 
    appearance: AvatarContainerProps["appearance"]; 
    size: AvatarContainerProps["size"],
    borderColor?: AvatarContainerProps["borderColor"],
    href?: string;
    disabled?: boolean;
    src?: string;
    name?: string;
    target?: string;
    status?: string;
    tabIndex?: number;
    stackIndex?: number;
    presence?: string;
    initials?: string;
  }>(),
  {
    appearance: "circle",
    size: "md",
    disabled: false,
    tabIndex: 0,
  },
);

watchEffect(() => {
  const image = new Image();
  image.src = props.src ?? '';
  image.decode().then(() => {
    validImage.value = props.src as string ?? '';
  }).catch((error) => {
    validImage.value = '';
    throw new Error(error);
  });
});

const initials = computed(() => {
  return props.initials || props.name?.charAt(0).toUpperCase();
});
</script>