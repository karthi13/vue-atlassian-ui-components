<template>
  <div class="flex flex-col w-full gap-2">
    <div class="flex flex-col gap-2">
      <Button>Default button</Button>
      <Button appearance="primary"> Primary button </Button>
      <Button appearance="subtle"> Subtle button </Button>
      <Button appearance="warning"> Warning button </Button>
      <Button appearance="danger"> Danger button </Button>
      <Button appearance="link"> Link button </Button>
      <Button appearance="subtle-link"> Subtle ling button </Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" is-disabled>
        Primary disabled button
      </Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" size="sm"> Small Button </Button>
      <Button appearance="primary" size="md"> Small Button </Button>
      <Button appearance="primary" size="lg"> Small Button </Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" size="lg" outline>
        Primary Outline button
      </Button>
      <Button size="sm" outline> Default Outline button </Button>
      <Button appearance="warning" size="md" outline>
        Warning Outline button
      </Button>
      <Button appearance="danger" size="sm" outline>
        Danger Outline button
      </Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" edge="rounded"> Primary button </Button>
      <Button appearance="danger" edge="square"> Subtle button </Button>
      <Button appearance="warning" edge="pill"> Warning button </Button>
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
import Button from '../components/Button/Button.vue';
</script>

