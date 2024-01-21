<template>
  <div class="flex flex-col w-full gap-2">
    <!-- <Badge /> -->
    <Avatar appearance="circle" size="md" disabled src="https://i.pravatar.cc/300" />
    <Avatar appearance="circle" size="md" src="" initials="LD"/>
    <Avatar appearance="square" size="2xl" name="mane"/>
    <Avatar />
  </div>
</template>

<script setup lang="ts">
// import Badge from './showcase/Badge.vue'
import Avatar from './components/Avatar/Avatar.vue';
</script>