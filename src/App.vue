<template>
  <div class="flex flex-col w-full gap-2">
    <div class="flex flex-col gap-2">
      <Button appearance="primary" shape="pill">        
        <Plus class="text-base"/>
      </Button>
      <!-- <Button appearance="primary" iconAfter shape="pill">
        Primary button
      </Button>
      <Button appearance="subtle">Subtle button</Button>
      <Button appearance="warning">Warning button</Button>
      <Button appearance="danger">Danger button</Button>
      <Button appearance="success">Success button</Button> -->
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <!-- <Button appearance="primary" disabled @click="() => console.log('clcik disabled')">Primary disabled button</Button> -->
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <!-- <Button appearance="primary" size="sm">Small Button</Button>
      <Button appearance="primary" size="md">Medium Button</Button>
      <Button appearance="primary" size="lg">Large Button</Button> -->
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <Button appearance="primary" size="lg" :outline="true">Primary Outline button</Button>
      <Button size="sm" :outline="true">Default Outline button</Button>
      <Button appearance="warning" size="md" :outline="true">Warning Outline button</Button>
      <Button appearance="danger" size="sm" :outline="true">Danger Outline button</Button>
    </div>
    <hr />
    <div class="flex flex-col gap-2">
      <!-- <Button appearance="primary" shape="rounded">Primary button</Button>
      <Button appearance="danger" shape="square">Subtle button</Button>
      <Button appearance="warning" shape="pill">Warning button</Button> -->
    </div>
    <hr />
  </div>
</template>

<script setup lang="ts">
import Button from './components/Button/Button.vue'
import Avatar from './components/Avatar/Avatar.vue'


//import icons
import Bell from './icons/Bell.vue'
import Email from './icons/Email.vue'
import Plus from './icons/Plus.vue'
</script>