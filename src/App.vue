<template>
  <div class="flex gap-2 flex-col">
    <Button>Default button</Button>
    <Button type="primary">Primary button</Button>
    <Button type="subtle">Subtle button</Button>
    <Button type="warning">Warning button</Button>
    <Button type="danger">Danger button</Button>
    <Button type="link">Link button</Button>
    <Button type="subtle-link">Subtle link button</Button>
    <!-- <Button type="primary" is-disabled>Disabled button</Button> -->
  </div>

  <div class="flex gap-2 flex-col pt-4 h-20">
    <Avatar />
  </div>
</template>

<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Avatar from './components/Avatar/Avatar.vue'
</script>