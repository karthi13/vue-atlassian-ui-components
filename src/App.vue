<template>
  <div class="flex flex-col w-full gap-2">
    <!-- <Badge /> -->
    <div class="flex flex-col">
      <h1 class="flex pb-2 text-xl">
        Avatar Sizes in circle 
      </h1>
      <div class="flex gap-5 justify-end items-center">
        <Avatar size="xs" src="https://i.pravatar.cc/300" />
        <Avatar size="sm" src="https://i.pravatar.cc/300" />
        <Avatar size="md" src="https://i.pravatar.cc/300" />
        <Avatar size="lg" src="https://i.pravatar.cc/300" />
        <Avatar size="xl" src="https://i.pravatar.cc/300" />
        <Avatar size="2xl" src="https://i.pravatar.cc/300" />
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="flex pb-2 text-xl">
        Avatar Sizes in square 
      </h1>
      <div class="flex gap-5 justify-end items-center">
        <Avatar appearance="square" size="xs" src="https://i.pravatar.cc/300" />
        <Avatar appearance="square" size="sm" src="https://i.pravatar.cc/300" />
        <Avatar appearance="square" size="md" src="https://i.pravatar.cc/300" />
        <Avatar appearance="square" size="lg" src="https://i.pravatar.cc/300" />
        <Avatar appearance="square" size="xl" src="https://i.pravatar.cc/300" />
        <Avatar appearance="square" size="2xl" src="https://i.pravatar.cc/300" />
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="flex pb-2 text-xl">
        Avatar default 
      </h1>
      <div class="flex gap-5 justify-end items-center">
        <Avatar size="xs" />
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xl"  />
        <Avatar size="2xl" />
      </div>
    </div>
    <div class="flex flex-col">
      <h1 class="flex pb-2 text-xl">
        Avatar Initials 
      </h1>
      <div class="flex gap-5 justify-end items-center">
        <Avatar size="xs" initials="AB"/>
        <Avatar size="sm" initials="CD" />
        <Avatar size="md" initials="EF"/>
        <Avatar size="lg" initials="GH" />
        <Avatar size="xl"  initials="JK"/>
        <Avatar size="2xl" initials="LM"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Badge from './showcase/Badge.vue'
import Avatar from './components/Avatar/Avatar.vue';
</script>