<template>
  <div role="img" :class="contentClass({ size })">
    <span
      :title="name"
      :class="avatarContainerClass({ appearance, borderColor, size, disabled })"
      aria-labelledby="avatar-label"
    >
      <img
        v-if="validImage"
        class="object-contain"
        :src="validImage"
        :alt="name"
      />
      <template v-else-if="initials">{{ initials }}</template>
      <Anonymous v-else :class="contentClass({ size })" />
    </span>
    <span v-if="name" id="avatar-label" hidden>{{ name }}</span>
    <span v-if="presence" :class="presenceClass({ appearance, size })">
      <Busy v-if="presence === 'busy'" />
      <Online v-else-if="presence === 'online'" />
      <Offline v-else-if="presence === 'offline'" />
      <Focus v-else />
    </span>
    <span v-if="status" :class="statusClass({ appearance, size })">
      <Approve v-if="status === 'approved'" />
      <Decline v-else-if="status === 'declined'" />
      <Locked v-else />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Anonymous,
  Busy,
  Focus,
  Offline,
  Online,
  Approve,
  Decline,
  Locked,
} from '@/icons/index';

const validImage = ref('');

const contentClass = cva('relative', {
  variants: {
    size: {
      xs: ['text-[6px] w-4 h-4'],
      sm: ['text-[0.75rem] w-6 h-6'],
      md: ['w-8 h-8'],
      lg: ['w-10 h-10'],
      xl: ['w-12 h-12'],
      '2xl': ['w-16 h-16'],
    },
  },
});

const statusClass = cva(
  'absolute top-0 bg-[#282E33] rounded-full border-2 border-[#282E33]',
  {
    variants: {
      appearance: {
        circle: '',
        square: '',
      },
      size: {
        xs: ['w-1.5 h-1.5 -right-px'],
        sm: ['w-2 h-2 -right-px'],
        md: ['w-3 h-3 -right-px'],
        lg: ['w-3 h-3 -right-px'],
        xl: ['w-3 h-3 right-px'],
        '2xl': ['w-3 h-3 right-1 top-1'],
      },
    },
    compoundVariants: [
      {
        appearance: 'square',
        size: ['xs', 'sm'],
        class: '-right-0.5 -top-0.5',
      },
      {
        appearance: 'square',
        size: ['md', 'lg', 'xl', '2xl'],
        class: '-right-1 -top-1',
      },
    ],
  },
);

const presenceClass = cva(
  'absolute bottom-0 bg-[#282E33] rounded-full border border-[#282E33]',
  {
    variants: {
      appearance: {
        circle: '',
        square: '',
      },
      size: {
        xs: ['w-1.5 h-1.5 -right-px'],
        sm: ['w-2 h-2 -right-px'],
        md: ['w-3 h-3 -right-px'],
        lg: ['w-3 h-3 -right-px'],
        xl: ['w-3 h-3 right-px'],
        '2xl': ['w-3 h-3 right-1 bottom-1'],
      },
    },
    compoundVariants: [
      {
        appearance: 'square',
        size: ['xs', 'sm'],
        class: '-right-0.5 -bottom-0.5',
      },
      {
        appearance: 'square',
        size: ['md', 'lg', 'xl', '2xl'],
        class: '-right-1 -bottom-1',
      },
    ],
  },
);

const avatarContainerClass = cva(
  'inline-flex static items-center justify-center select-none shrink-0 bg-slate-200 overflow-hidden text-slate-950',
  {
    variants: {
      appearance: {
        circle: ['rounded-full'],
        square: ['rounded'],
      },
      borderColor: {
        blue: ['ring-1 ring-blue-800	'],
        green: ['ring-1 ring-green-500'],
        red: ['ring-1 ring-red-500'],
        yellow: ['ring-1 ring-yellow-500'],
        gray: ['ring-1 ring-gray-500'],
        white: ['ring-1 ring-white'],
        black: ['ring-1 ring-black'],
        none: ['ring-1 ring-transparent'],
      },
      size: {
        xs: ['text-[0.5rem] w-4 h-4'],
        sm: ['text-[0.75rem] w-6 h-6'],
        md: ['text-base w-8 h-8'],
        lg: ['text-lg w-10 h-10'],
        xl: ['text-xl w-12 h-12'],
        '2xl': ['text-2xl w-16 h-16'],
      },
      disabled: {
        true: ['opacity-50'],
        false: [''],
      },
    },
  },
);

type AvatarContainerProps = VariantProps<typeof avatarContainerClass>;
type Presence = 'busy' | 'focus' | 'online' | 'offline';
type Status = 'approved' | 'declined' | 'locked';

const props = withDefaults(
  defineProps<{
    appearance?: AvatarContainerProps['appearance'];
    size?: AvatarContainerProps['size'];
    borderColor?: AvatarContainerProps['borderColor'];
    disabled?: boolean;
    src?: string;
    name?: string;
    status?: Status;
    tabIndex?: number;
    stackIndex?: number;
    presence?: Presence;
    initials?: string;
  }>(),
  {
    appearance: 'circle',
    size: 'md',
    disabled: false,
    tabIndex: 0,
  },
);

watchEffect(() => {
  const image = new Image();
  image.src = props.src ?? '';
  image
    .decode()
    .then(() => {
      validImage.value = (props.src as string) ?? '';
    })
    .catch((error) => {
      validImage.value = '';
      console.error('Error decoding the image -> ', error);
    });
});

const initials = computed(
  () => props.initials || props.name?.charAt(0).toUpperCase(),
);
</script>