<template>
  <div class="flex flex-col gap-2">
    <Checkbox
      size="small"
      label="This is a label for the checkbox"
      name="one"
      value="one"
      checked="true" />
    <Checkbox
      size="medium"
      label="This is a label for the checkbox"
      name="two"
      value="two" />
    <Checkbox
      size="large"
      label="This is a label for the checkbox"
      name="three"
      value="three" />
    <Checkbox
      size="xlarge"
      label="This is a label for the checkbox"
      name="four"
      value="four" />
  </div>
</template>

<script lang="ts" setup>
import Checkbox from '../Checkbox.vue';
</script>
