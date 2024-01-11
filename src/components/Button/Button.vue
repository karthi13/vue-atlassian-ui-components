<script setup lang="ts">
import { computed } from "vue";
type ButtonAppearance = "default" | "primary" | "warning" | "danger" | "link" | "subtle" | "subtle-link";
type ButtonSize = "sm" | "md" | "lg";
type ButtonNativeType = "button" | "submit" | "reset" | undefined;

const props = defineProps({
  appearance: {
    type: String as () => ButtonAppearance,
    default: "default",
    validator: (value: string) => {
      return ["default", "primary", "warning", "danger", "link", "subtle", "subtle-link"].includes(value);
    },
  },
  size: {
    type: String as () => ButtonSize,
    default: "md",
    validator: (value: string) => {
      return ["sm", "md", "lg"].includes(value);
    },
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  iconAfter: {
    type: Boolean,
    default: false,
  },
  iconBefore: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: "",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: "_top",
    validator: (value: string) => {
      return ["_top", "_blank", "_self", "_parent"].includes(value);
    },
  },
  nativeType: {
    type: String as () => ButtonNativeType,
    default: "button",
    validator: (value: string) => {
      return ["button", "submit", "reset"].includes(value);
    },
  },
});

let defaultClasses = 'h-8 px-2.5 rounded focus:outline-none box-border inline-flex font-medium text-sm text-center w-fit disabled:cursor-not-allowed disabled:text-[#BFDBF847] disabled:bg-[#BCD6F00A] ';

const buttonAppearance = computed(() => {
  switch(props.appearance) {
    case "primary":
      return "bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active ";
    case "warning":
      return "bg-btn-warning hover:bg-btn-warning-hover active:bg-btn-warning-active ";
    case "danger":
      return "bg-btn-danger hover:bg-btn-danger-hover active:bg-btn-danger-active";
    case "link":
      return "bg-btn-subtle text-link-primary hover:underline underline-offset-2	";
    case "subtle":
      return "bg-btn-subtle active:bg-btn-subtle-active hover:bg-btn-subtle-hover ";
    case "subtle-link": 
      return "bg-btn-subtle hover:underline underline-offset-2";
    default:
      return "bg-btn-neutral hover:bg-btn-neutral-hover active:bg-btn-neutral-pressed ";
  }
});

const buttonText = computed(() => {
  switch(props.appearance) {
    case "primary":
    case "warning":
    case "danger":
      return "text-inverse leading-8";
    case "link":
      return "text-link-primary active:text-link-primary-active active:underline leading-8";
    case "subtle-link":
        return "text-subtle hover:text-subtle active:text-default leading-8";
    case "subtle":
    default:
      return "text-default leading-8";
  }
});

</script>

<template>
  <button
    :type="nativeType"
    :class="defaultClasses + buttonAppearance"
    :disabled="props.isDisabled"
    tabindex="0"
  >
    <span :class="buttonText">
      <slot></slot>
    </span>
  </button>
</template>