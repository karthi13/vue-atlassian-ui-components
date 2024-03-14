<script setup lang="ts">
import { ref } from 'vue';
import { cva } from 'class-variance-authority';
import { TAG_APPEARANCE, TAG_COLOR } from '@/components/Tag/Tag.types.ts';
import Avatar from '@/components/Avatar/Avatar.vue';
import { Cross } from '@/icons';

const tagClass = cva(
  'inline-flex h-5 relative m-1 items-center max-w-44 w-fit has-[button:hover]:bg-red-100 has-[button:hover]:text-red-700',
  {
    variants: {
      appearance: {
        default: 'rounded',
        rounded: 'rounded-full',
      },
      color: {
        standard:
          'bg-light-neutral-100 dark:bg-dark-neutral-900 text-light-neutral-1000 dark:text-dark-neutral-900',
        blue: 'bg-blue-400 dark:bg-blue-800 text-blue-900 dark:text-blue-200',
        green:
          'bg-green-400 dark:bg-green-800 text-green-900 dark:text-green-200',
        teal: 'bg-teal-400 dark:bg-teal-800 text-teal-900 dark:text-teal-200',
        red: 'bg-red-400 dark:bg-red-800 text-red-900 dark:text-teal-200',
        yellow:
          'bg-yellow-300 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-200',
        lime: 'bg-lime-400 dark:bg-lime-800 text-lime-900 dark:text-lime-200',
        purple:
          'bg-purple-400 dark:bg-purple-800 text-purple-900 dark:text-purple-200',
        orange:
          'bg-orange-400 dark:bg-orange-800 text-orange-900 dark:text-orange-200',
        magenta:
          'bg-magenta-400 dark:bg-magenta-800 text-magenta-900 dark:text-magenta-200',
        grey: 'bg-light-neutral-500 dark:bg-dark-neutral-500 text-light-neutral-1100 dark:text-dark-neutral-1100',
        blueLight:
          'bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-300',
        greenLight:
          'bg-green-200 dark:bg-green-900 text-green-800 dark:text-green-300',
        tealLight:
          'bg-teal-200 dark:bg-teal-900 text-teal-800 dark:text-teal-300',
        redLight: 'bg-red-200 dark:bg-red-900 text-red-800 dark:text-teal-300',
        yellowLight:
          'bg-yellow-200 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300',
        limeLight:
          'bg-lime-200 dark:bg-lime-900 text-lime-800 dark:text-lime-300',
        purpleLight:
          'bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-300',
        orangeLight:
          'bg-orange-200 dark:bg-orange-900 text-orange-800 dark:text-orange-300',
        magentaLight:
          'bg-magenta-200 dark:bg-magenta-900 text-magenta-800 dark:text-magenta-300',
        greyLight:
          'bg-light-neutral-300 dark:bg-dark-neutral-400 text-light-neutral-800 dark:text-dark-neutral-800',
      },
    },
  },
);

const tagHrefClass = cva('inline-flex h-5 hover:underline  max-w-44', {
  variants: {
    appearance: {
      default: 'rounded',
      rounded: 'rounded-full',
    },
    color: {
      green:
        'bg-green-400 dark:bg-green-800 hover:bg-green-200 dark:hover:bg-green-900 text-green-900 dark:text-green-200',
      greenLight:
        'bg-green-200 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-600 text-green-800 dark:text-green-300',
      standard:
        'bg-light-neutral-100 dark:bg-dark-neutral-900 hover:bg-light-neutral-300 dark:hover:bg-light-neutral-800 text-light-neutral-1000 dark:text-dark-neutral-900',
      blue: 'bg-blue-400 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-600 text-blue-900 dark:text-blue-200',
      blueLight:
        'bg-blue-200 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-600 text-blue-800 dark:text-blue-300',
      teal: 'bg-teal-400 dark:bg-teal-800 hover:bg-teal-200 dark:hover:bg-teal-600 text-teal-900 dark:text-teal-200',
      tealLight:
        'bg-teal-200 dark:bg-teal-900 hover:bg-teal-100 dark:hover:bg-teal-600 text-teal-800 dark:text-teal-300',
      red: 'bg-red-400 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-600 text-red-900 dark:text-teal-200',
      redLight:
        'bg-red-200 dark:bg-red-900 hover:bg-red-100 dark:hover:bg-red-600 text-red-800 dark:text-teal-300',
      yellow:
        'bg-yellow-300 dark:bg-yellow-800 hover:bg-yellow-200 dark:hover:bg-yello-600 text-yellow-900 dark:text-yellow-200',
      yellowLight:
        'bg-yellow-200 dark:bg-yellow-900 hover:bg-yelloe-100 dark:hover:bg-yellow-600 text-yellow-800 dark:text-yellow-300',
      lime: 'bg-lime-400 dark:bg-lime-800 hover:bg-lime-200 dark:hover:bg-lime-600 text-lime-900 dark:text-lime-200',
      limeLight:
        'bg-lime-200 dark:bg-lime-900 hover:bg-lime-100 dark:hover:bg-lime-600 text-lime-800 dark:text-lime-300',
      purple:
        'bg-purple-400 dark:bg-purple-800 hover:bg-purple-200 dark:hover:bg-purple-600 text-purple-900 dark:text-purple-200',
      purpleLight:
        'bg-purple-200 dark:bg-purple-900 hover:bg-purple-100 dark:hover:bg-purple-600 text-purple-800 dark:text-purple-300',
      orange:
        'bg-orange-400 dark:bg-orange-800 hover:bg-orange-200 dark:hover:bg-orange-600 text-orange-900 dark:text-orange-200',
      orangeLight:
        'bg-orange-200 dark:bg-orange-900  hover:bg-orange-100 dark:hover:bg-orange-600 hover:bg-orange-100 dark:hover:bg-orange-600  text-orange-800 dark:text-orange-300',
      magenta:
        'bg-magenta-400 dark:bg-magenta-800  hover:bg-magenta-200 dark:hover:bg-magenta-600 text-magenta-900 dark:text-magenta-200',
      magentaLight:
        'bg-magenta-200 dark:bg-magenta-900 hover:bg-magenta-100 dark:hover:bg-magenta-600 text-magenta-800 dark:text-magenta-300',
      grey: 'bg-light-neutral-500 dark:bg-dark-neutral-500 hover:bg-light-neutral-200 dark:hover:bg-dark-neutral-600 text-light-neutral-1100 dark:text-dark-neutral-1100',
      greyLight:
        'bg-light-neutral-300 dark:bg-dark-neutral-400 hover:bg-light-neutral-200 dark:hover:bg-dark-neutral-600 text-light-neutral-800 dark:text-dark-neutral-800',
    },
  },
});

withDefaults(
  defineProps<{
    appearance?: TAG_APPEARANCE;
    color?: TAG_COLOR;
    href?: string;
    testId?: string;
    text: string;
    isRemovable?: boolean;
    removeButtonLabel?: string;
    showAvatar?: boolean;
    avatarUrl?: string;
  }>(),
  {
    appearance: 'default',
    isRemovable: false,
    color: 'standard',
  },
);

const closeTag = ref(false);
</script>

<template>
  <span v-if="!closeTag" :class="tagClass({ appearance, color })">
    <span v-if="showAvatar" class="pl-0.5">
      <avatar size="xs" :src="avatarUrl" />
    </span>
    <a v-if="href" :href="href" :class="tagHrefClass({ appearance, color })">
      <span class="py-0.5 px-1 h-5 text-sm leading-none truncate">{{
        text
      }}</span>
    </a>
    <span
      v-else
      class="inline-block py-0.5 px-1 h-5 text-sm leading-none truncate"
      >{{ text }}</span
    >
    <button
      v-if="isRemovable"
      class="flex items-center h-4"
      @click="closeTag = true">
      <span class="inline-block w-4 h-4"><cross /></span>
    </button>
  </span>
</template>
