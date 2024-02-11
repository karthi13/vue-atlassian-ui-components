<template>
  <div>
    <Checkbox v-model="checked">Correct</Checkbox>
    {{ checked }}
  </div>
</template>

<script setup lang="ts">
import Checkbox from './components/Checkbox/Checkbox.vue';
import { ref } from 'vue';

const checked = ref(false);
</script>
