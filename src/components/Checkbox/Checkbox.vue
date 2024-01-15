<template>
    <label class="flex items-center mb-2">
      <span class="mr-2">{{ label }}</span>
      <input type="checkbox" v-model="isChecked" @change="handleChange"
        class="form-checkbox h-5 w-5 text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
      />
    </label>
  </template>
  
<script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['label', 'value']);
  const emits = defineEmits();
  
  const isChecked = ref(props.value || false);
  
  const handleChange = () => {
    isChecked.value = !isChecked.value;
    emits('update:modelValue', isChecked.value);
  };
</script>

<style scoped>

</style>