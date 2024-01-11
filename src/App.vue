<template>
  <div class="flex flex-col gap-2">
    <Button>Default button</Button>
    <Button appearance="primary">Primary button</Button>
    <Button appearance="subtle">Subtle button</Button>
    <Button appearance="warning">Warning button</Button>
    <Button appearance="danger">Danger button</Button>
    <Button appearance="link">Link button</Button>
    <Button appearance="subtle-link">Subtle ling button</Button>
    <Button appearance="primary" is-disabled>Primary disabled button</Button>
  </div>
</template>

<script setup lang="ts">
import Button from './components/Button/Button.vue'
</script>