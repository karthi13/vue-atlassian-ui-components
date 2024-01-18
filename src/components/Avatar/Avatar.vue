<template>
  <div
    role="img"
    aria-labelledby="avatar-label"
    class="inline-block"
  >
    <span class="">
      <img 
        class="w-10 h-10 bg-center bg-contain rounded" 
        :src="src"
        alt=""
      />    
    </span>
    <span id="avatar-label" hidden>{{name}}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  appearance: {
    type: String,
    default: 'circle',
  },
  borderColor: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  presence: {
    type: String,
    default: 'none',
  },
  src: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'medium',
  },
  name: {
    type: String,
    default: 'Avatar Image',
  },
  target: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    default: '',
  },
  tabIndex: {
    type: Number,
    default: 0,
  },
  stackIndex: {
    type: Number,
    default: 0,
  },
});
</script>