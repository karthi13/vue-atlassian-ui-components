<template>
  <label data-testid="" @click="onChange" class="flex items-center">
    <input
      type="checkbox"
      v-model="model"
      class="relative appearance-none flex items-center rounded-sm bg-white ring ring-slate-500 w-6 h-6" />
    <svg
      viewBox="6 6 12 12"
      role="presentation"
      :class="['absolute w-6 h-6 rounded-sm ']"
      :style="style">
      <g fill-rule="evenodd">
        <rect
          fill="currentColor"
          x="0"
          y="0"
          width="24"
          height="24"
          rx="2"></rect>
        <path
          v-if="model"
          width="24"
          height="24"
          d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z"
          fill="inherit"></path>
      </g>
    </svg>
    <span class="pl-1.5"><slot></slot></span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});
const emit = defineEmits(['update:modelValue']);
const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

function onChange() {
  console.log('onChange clicked', model.value);
}

const style = computed(() => {
  if (model.value) {
    return {
      color: 'bg-blue-500',
    };
  } else {
    return {
      color: 'bg-gray-300',
    };
  }
});
</script>
