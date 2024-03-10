<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import { computed, provide, ref } from 'vue';
import { BreadcrumbItems, SEPARATOR_TYPE } from './Breadcrumbs.types.ts';
const MAX_BREADCRUMBS = 8;

const props = defineProps<{
  maxItems?: number;
  ellipsisLabel?: string;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  separator?: SEPARATOR_TYPE;
  items: BreadcrumbItems[];
}>();

const hasMoreItems = ref(
  (props.maxItems && props.items.length > props.maxItems) ||
    props.items.length > MAX_BREADCRUMBS,
);

const separatorType = computed(() => {
  switch (props.separator) {
    case 'dash':
      return '-';
    case 'chevron-right':
      return '›';
    case 'slash':
    default:
      return '/';
  }
});

const showMoreItems = () => {
  hasMoreItems.value = !hasMoreItems.value;
};

const firstSet = computed(() => {
  if (props.itemsBeforeCollapse) {
    return props.items.slice(0, props.itemsBeforeCollapse);
  }
  return new Array(props.items[0]);
});

const lastSet = computed(() => {
  if (props.itemsAfterCollapse) {
    return props.items.slice(props.itemsAfterCollapse);
  }
  return new Array(props.items[props.items.length - 1]);
});

provide('separator', separatorType.value);
</script>

<template>
  <nav>
    <menu class="flex gap-2">
      <template v-if="!hasMoreItems">
        <Breadcrumb
          v-for="(item, index) of items"
          :key="item.text + index"
          :item="item" />
      </template>
      <template v-else>
        <Breadcrumb
          v-for="(item, index) of firstSet"
          :key="item.text + index"
          :item="item" />
        <li class="flex h-6 px-1 leading-6 border-box">
          <button
            class="text-light-neutral-700 hover:underline"
            @click="showMoreItems">
            <span>...</span>
          </button>
        </li>
        <span class="text-light-neutral-700">{{ separatorType }}</span>
        <Breadcrumb
          v-for="(item, index) of lastSet"
          :key="item.text + index"
          :item="item" />
      </template>
    </menu>
  </nav>
</template>
