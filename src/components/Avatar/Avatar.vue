<template>
  <div
    role="img"
    aria-labelledby="avatar-label"
    :class="twMerge(avatarContainerClass({ appearance, borderColor, size, disabled }))"
    :title="name"
  >
    <span :title="name">
      <img
        v-if="validImage"
        class="object-contain w-full h-full" 
        :src="validImage"
        :alt="name"
      />
      <template v-else-if="initials">{{ initials }}</template>
      <Anonymous v-else class=""/>
    </span>
    <span id="avatar-label" hidden>{{name}}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from "class-variance-authority";
import Anonymous from './Anonymous.vue';

const validImage = ref('');
const avatarContainerClass = cva("inline-flex items-center justify-center text-slate-700 text-xl font-medium h-28 w-28 shrink-0 bg-slate-200 rounded-full overflow-hidden", {
  variants: {
    appearance: {
      circle: [ "rounded-full" ],
      square: [ "rounded" ],
    },
    borderColor: {
      blue: [ "border-blue-500" ],
      green: [ "border-green-500" ],
      red: [ "border-red-500" ],
      yellow: [ "border-yellow-500" ],
      gray: [ "border-gray-500" ],
      white: [ "border-white" ],
      black: [ "border-black" ],
      none: [ "border-transparent" ],
    },
    size: {
      xs: [ "w-4 h-4" ],
      sm: [ "w-8 h-8" ],
      md: [ "w-10 h-10" ],
      lg: [ "w-12 h-12" ],
      xl: [ "w-16 h-16" ],
      '2xl': [ "w-20 h-20" ],
    },
    disabled: {
      true: [ "opacity-50 cursor-not-allowed ring-2 ring-blue-500" ],
      false: [ "ring-2 ring-red-500" ],
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