<template>
  <div class="flex ">
    <div>
      <span>icon</span>
    </div>
    <div
      class="flex flex-col gap-2"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  appearance?: "warning" | "error" | "announcement";
  children?: string;
  icon?: string;
  testId?: string;
}>();
</script>

<style
  scoped
  lang="scss
"
></style>
