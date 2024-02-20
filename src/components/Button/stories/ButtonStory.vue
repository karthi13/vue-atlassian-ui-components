<script setup lang="ts">
import Button from '../Button.vue'
import Bell from '../../../icons/Bell.vue'
import Email from '../../../icons/Email.vue'
</script>

<template>
<div class="grid grid-cols-4 gap-2">
  <div class="flex flex-col">
    <h3 class="font-sans text-sm font-bold">Button Appearances</h3>
    <div class="flex flex-col gap gap-y-2">
      <Button>Default Button</Button>
      <Button appearance="primary">Primary Button</Button>
      <Button appearance="warning">Warning Button</Button>
      <Button appearance="danger">Danger Button</Button>
      <Button appearance="success">Success Button</Button>
      <Button appearance="subtle">Subtle Button</Button>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-sans text-sm font-bold">Button Outline</h3>
    <div class="flex flex-col gap gap-y-2">
      <Button outline>Default Button</Button>
      <Button appearance="primary" outline>Primary Button</Button>
      <Button appearance="warning" outline>Warning Button</Button>
      <Button appearance="danger" outline>Danger Button</Button>
      <Button appearance="success" outline>Success Button</Button>
      <Button appearance="subtle" outline>Subtle Button</Button>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-sans text-sm font-bold">Button Sizes</h3>
    <div class="flex flex-col gap gap-y-2">
      <Button appearance="primary" size="sm">Small Button</Button>
      <Button appearance="warning" size="md">Medium Button</Button>
      <Button appearance="danger" size="lg">Large Button</Button>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-sans text-sm font-bold">Button Shapes</h3>
    <div class="flex flex-col gap gap-y-2">
      <Button appearance="primary" shape="rounded" size="sm">Rounded Button</Button>
      <Button appearance="warning" shape="pill" size="md">Circle Button</Button>
      <Button appearance="danger" shape="square" size="lg">Sharp Button</Button>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-sans text-sm font-bold">Button with Icons</h3>
    <div class="flex flex-col gap gap-y-2">
      <Button appearance="primary" shape="rounded" size="md" icon-before><Bell /> Rounded Button</Button>
      <Button appearance="warning" shape="pill" size="md" icon-after>Circle Button <Bell /></Button>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-sans text-sm font-bold">Icon only Buttons</h3>
    <div class="flex flex-col gap gap-y-2">
      <div class="flex gap-2">
        <Button appearance="danger" shape="square" size="lg"><Email /></Button>
        <Button appearance="danger" shape="square" size="sm"><Email /></Button>
        <Button appearance="danger" shape="square" size="md"><Email /></Button>
      </div>
      <div class="flex gap-2">
        <Button appearance="danger" shape="pill" size="lg"><Email /></Button>
        <Button appearance="danger" shape="pill" size="sm"><Email /></Button>
        <Button appearance="danger" shape="pill" size="md"><Email /></Button>
      </div>
      <div class="flex gap-2">
        <Button appearance="danger" size="lg"><Email /></Button>
        <Button appearance="danger" size="sm"><Email /></Button>
        <Button appearance="danger" size="md"><Email /></Button>
      </div>

    </div>
  </div>
</div>
</template>

<style scoped>

</style>