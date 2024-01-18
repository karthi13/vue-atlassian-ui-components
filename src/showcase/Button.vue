<template>
  <Button appearance="primary" :outline="true">Primary button</Button>
  <!-- <div class="flex flex-col w-full gap-2">
    <div class="flex flex-col gap-2">
      <Button>Default button</Button>
      <Button appearance="subtle">Subtle button</Button>
      <Button appearance="warning">Warning button</Button>
      <Button appearance="danger">Danger button</Button>
      <Button appearance="link">Link button</Button>   
      <Button appearance="subtle-link">Subtle Link button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" disabled>Primary disabled button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" size="sm">Small Button</Button>
      <Button appearance="primary" size="md">Medium Button</Button>
      <Button appearance="primary" size="lg">Large Button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" size="lg" outline>Primary Outline button</Button>
      <Button appearance="success" size="sm" :outline="true">Default Outline button</Button>
      <Button appearance="warning" size="md" :outline="true">Warning Outline button</Button>
      <Button appearance="danger" size="sm" :outline="true">Danger Outline button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" shape="rounded">Primary button</Button>
      <Button appearance="danger" shape="square">Subtle button</Button>
      <Button appearance="warning" shape="pill">Warning button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" shape="rounded" :iconBefore="true">
        <Bell />
        Primary button
      </Button>
      <Button appearance="danger" shape="square" :outline="true" :iconAfter="true">
        Subtle button
        <Plus />
      </Button>
      <Button appearance="warning" shape="pill">Warning button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" shape="rounded" :iconBefore="true">
        <Bell />
      </Button>
      <Button appearance="danger" shape="square" :outline="true" :iconAfter="true">
        <Plus />
      </Button>
      <Button appearance="success" shape="pill">
        <Email />
      </Button>
    </div>
    <hr />
  </div> -->
</template>

<script setup lang="ts">
import Button from '../components/Button/Button.vue'
// icons
import Bell from '../icons/Bell.vue'
import Plus from '../icons/Plus.vue'
import Email from '../icons/Email.vue'
</script>