<template>
  <div class="flex -space-x-1 overflow-hidden">
    <img 
      class="w-6 h-6 bg-center bg-contain rounded-full" 
      src="https://sierra-local.atlassian.net/wiki/aa-avatar/5da43b35bb87a40c423102a0" 
      alt=""
    />
    <div class="w-6 h-6 ml-4">
      <span class="inline-flex w-6 h-6 rounded-full bg-zinc-100">
        <anonymous class="text-black"/>
      </span>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import Anonymous from './Anonymous.vue'

const props = withDefaults(
  defineProps<{
    iconAfter?: boolean;
  }>(),
  {
    iconAfter: false,
  },
);

console.log(props.iconAfter);
</script>

<style scoped lang="scss">

</style>