<template>
  <div class="flex flex-col gap-y-2">
    <Kbd :keys="['command', 'shift']">K</Kbd>
    <Kbd :keys="['shift']">P</Kbd>
    <Kbd :keys="['command', 'shift']">K</Kbd>
    <Kbd :keys="['command', 'enter']"></Kbd>
    <Kbd :keys="['command', 'shift']">K</Kbd>
    <Kbd :keys="['command', 'shift']">K</Kbd>
    <Kbd :keys="['command', 'shift']">K</Kbd>
  </div>
</template>

<script setup lang="ts">
import Kbd from '../components/Kbd/Kbd.vue'
</script>
