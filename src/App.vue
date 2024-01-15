<template>
  <div class="flex flex-col w-full gap-2">
    <h2>Avatar</h2>
    <Avatar />
  </div>
  <h2>Badge</h2>
  <div class="flex gap-2">
    <Badge>8</Badge>
    <Badge appearance="primary">8</Badge>
    <Badge appearance="important">238</Badge>
    <Badge appearance="added">158</Badge>
    <Badge appearance="primaryInverted">80</Badge>
    <Badge appearance="important">500K</Badge>
    <Badge appearance="primary">-500</Badge>
    <Badge appearance="important">500+</Badge>
    <Badge appearance="important">250+</Badge>
  </div>
  <div>
    <Kbd :keys="['option', 'shift']">K</Kbd>
  </div>
  <div class="flex flex-col w-full gap-2">
    <div class="flex flex-col gap-2">
      <Button>Default button</Button>
      <Button appearance="primary">Primary button</Button>
      <Button appearance="subtle">Subtle button</Button>
      <Button appearance="warning">Warning button</Button>
      <Button appearance="danger">Danger button</Button>
      <Button appearance="link">Link button</Button>
      <Button appearance="subtle-link">Subtle ling button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" is-disabled>Primary disabled button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" size="sm">Small Button</Button>
      <Button appearance="primary" size="md">Small Button</Button>
      <Button appearance="primary" size="lg">Small Button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" size="lg" outline>Primary Outline button</Button>
      <Button size="sm" outline>Default Outline button</Button>
      <Button appearance="warning" size="md" outline>Warning Outline button</Button>
      <Button appearance="danger" size="sm" outline>Danger Outline button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" edge="rounded">Primary button</Button>
      <Button appearance="danger" edge="square">Subtle button</Button>
      <Button appearance="warning" edge="pill">Warning button</Button>
    </div>
    <hr />
  </div>

  <Checkbox v-model="isChecked" label="Example Checkbox" />
</template>

<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Badge from './components/Badge/Badge.vue'
import Kbd from './components/Kbd/Kbd.vue'
import Avatar from './components/Avatar/Avatar.vue';
import Checkbox from './components/Checkbox/Checkbox.vue'
import { ref } from 'vue';

const isChecked = ref(false);
</script>