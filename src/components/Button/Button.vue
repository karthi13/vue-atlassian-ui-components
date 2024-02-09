<script setup lang="ts">
import { type ButtonHTMLAttributes } from 'vue';
import { twMerge } from 'tailwind-merge';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(
  [
    'inline-flex place-items-center h-8 px-2.5 w-fit text-center disabled:cursor-not-allowed disabled:text-[#BFDBF847] disabled:bg-[#BCD6F00A]',
  ],
  {
    variants: {
      appearance: {
        default: [
          'bg-[#A1BDD914] hover:bg-[#A6C5E229] active:bg-[#BFDBF847] text-[#B6C2CF]',
        ],
        primary: [
          'bg-[#579DFF] hover:bg-[#85B8FF] active:bg-[#CCE0FF] text-[#1d2125]',
        ],
        subtle: [
          'bg-[#00000000] hover:bg-[#A1BDD914] active:bg-[#A6C5E229] text-[#B6C2CF]',
        ],
        warning: [
          'bg-[#f5cc47] hover:bg-[#E2B203] active:bg-[#CF9F02] text-[#1d2125]',
        ],
        danger: [
          'bg-[#f87268] hover:bg-[#FD9891] active:bg-[#FFD5D2] text-[#1d2125]',
        ],
        success: [
          'bg-[#47c978] hover:bg-[#2EBD6E] active:bg-[#1EBD6E] text-[#1d2125]',
        ],
      },
      size: {
        sm: ['font-medium tracking-normal leading-8 h-6 px-2 text-xs'],
        md: ['py-4 h-8 px-2.5 text-sm'],
        lg: ['text-lg py-6 px-3 leading-4'],
      },
      outline: {
        true: ['border bg-transparent hover:text-white'],
      },
      iconAfter: {
        true: ['flex-row-reverse gap-x-1'],
      },
      iconBefore: {
        true: ['flex-row gap-x-1'],
      },
      shape: {
        rounded: ['rounded'],
        square: ['rounded-none'],
        pill: ['rounded-full'],
      },
    },
    compoundVariants: [
      {
        appearance: 'primary',
        outline: true,
        class: 'border-btn-primary text-btn-primary hover:bg-btn-primary ',
      },
      {
        appearance: 'warning',
        outline: true,
        class: 'border-btn-warning text-btn-warning hover:bg-btn-warning',
      },
      {
        appearance: 'danger',
        outline: true,
        class: 'border-btn-danger text-btn-danger hover:bg-btn-danger',
      },
      {
        appearance: 'success',
        size: ['sm', 'md', 'lg'],
        outline: true,
        class: 'border-green-500 text-green-500 hover:bg-green-500',
      },
    ],
    defaultVariants: {
      appearance: 'default',
      size: 'md',
      shape: 'rounded',
      outline: false,
      iconAfter: false,
      iconBefore: false,
    },
  },
);
type ButtonProps = VariantProps<typeof button>;

const props = withDefaults(
  defineProps<{
    appearance?: ButtonProps['appearance'];
    size?: ButtonProps['size'];
    shape?: ButtonProps['shape'];
    outline?: ButtonProps['outline'];
    nativeType?: ButtonHTMLAttributes['type'];
    iconAfter: ButtonProps['iconAfter'];
    iconBefore: ButtonProps['iconBefore'];
  }>(),
  {
    nativeType: 'button',
    iconAfter: false,
    iconBefore: false,
  },
);

console.log(props);
// import { twMerge } from "tailwind-merge";
// import { cva, type VariantProps } from "class-variance-authority";

// const defaultButtonClasses = `h-8 px-2.5 rounded place-items-center focus:outline-none box-border
// inline-flex font-medium text-sm text-center w-fit disabled:cursor-not-allowed disabled:text-[#BFDBF847]
// disabled:bg-[#BCD6F00A]`;

// const buttonCVA = cva(defaultButtonClasses, {
//   variants: {
//     appearance: {
//       default: "bg-btn-neutral hover:bg-btn-neutral-hover active:bg-btn-neutral-pressed",
//       primary: "bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active",
//       warning: "bg-btn-warning hover:bg-btn-warning-hover active:bg-btn-warning-active",
//       danger: "bg-btn-danger hover:bg-btn-danger-hover active:bg-btn-danger-active",
//       link: "bg-btn-subtle text-link-primary hover:underline underline-offset-2",
//       subtle: "bg-btn-subtle active:bg-btn-subtle-active hover:bg-btn-subtle-hover",
//       "subtle-link": "bg-btn-subtle hover:underline underline-offset-2",
//     },
//     size: {
//       sm: "h-6 px-2 rounded text-xs",
//       md: "h-8 px-2.5 rounded text-sm",
//       lg: "h-12 px-3 rounded text-lg align-center text-center",
//     },
//     edge: {
//       rounded: "rounded",
//       square: "rounded-none",
//       pill: "rounded-full",
//     },
//     outline: {
//       true: "border ",
//     },
//   },
//   compoundVariants: [
//     { appearance: "default", outline: true, class: "border-btn-primary text-btn-primary" },
//     { appearance: "primary", outline: true, class: "border-btn-warning text-btn-warning" },
//     { appearance: "warning", outline: true, class: "border-btn-danger text-btn-danger" },
//     { appearance: "danger", outline: true, class: "border-green-500 text-green-500" },
//   ],
// });

// type ButtonProps = VariantProps<typeof buttonCVA>;

//   withDefaults(
//     defineProps<{
//       appearance: ButtonProps["appearance"];
//       size: ButtonProps["size"];
//       edge: ButtonProps["edge"];
//       outline: ButtonProps["outline"];
//       nativeType: {
//         type: string,
//         default: "button",
//       }
//       iconAfter: {
//         type: boolean,
//         default: false,
//       },
//       iconBefore: {
//         type: boolean,
//         default: false,
//       },
//     }>(),
//     {
//       appearance: "primary",
//       size: "md",
//       edge: "rounded",
//       outline: false,
//     },
//     );

// type ButtonAppearance = "default" | "primary" | "warning" | "danger" | "link" | "subtle" | "subtle-link";
// type ButtonSize = "sm" | "md" | "lg";
// type ButtonNativeType = "button" | "submit" | "reset" | undefined;

// const props = defineProps({
//   appearance: {
//     type: String as () => ButtonAppearance,
//     default: "default",
//     validator: (value: string) => {
//       return ["default", "primary", "warning", "danger", "link", "subtle", "subtle-link"].includes(value);
//     },
//   },
//   edge: {
//     type: String,
//     default: "rounded",
//     validator: (value: string) => {
//       return ["rounded", "square", "pill"].includes(value);
//     },
//   },
//   size: {
//     type: String as () => ButtonSize,
//     default: "md",
//     validator: (value: string) => {
//       return ["sm", "md", "lg"].includes(value);
//     },
//   },
//   isLoading: {
//     type: Boolean,
//     default: false,
//   },
//   iconAfter: {
//     type: Boolean,
//     default: false,
//   },
//   iconBefore: {
//     type: Boolean,
//     default: false,
//   },
//   href: {
//     type: String,
//     default: "",
//   },
//   outline: {
//     type: Boolean,
//     default: false,
//   },
//   isDisabled: {
//     type: Boolean,
//     default: false,
//   },
//   isSelected: {
//     type: Boolean,
//     default: false,
//   },
//   target: {
//     type: String,
//     default: "_top",
//     validator: (value: string) => {
//       return ["_top", "_blank", "_self", "_parent"].includes(value);
//     },
//   },
//   nativeType: {
//     type: String as () => ButtonNativeType,
//     default: "button",
//     validator: (value: string) => {
//       return ["button", "submit", "reset"].includes(value);
//     },
//   },
// });

// const buttonAppearance = computed(() => {
//   if (props.outline) {
//     switch(props.appearance) {
//       case "primary":
//         return "border border-btn-primary text-btn-primary";
//       case "warning":
//         return "border border-btn-warning text-btn-warning";
//       case "danger":
//         return "border border-btn-danger text-btn-danger";
//       default:
//         return "border border-green-500 text-green-500";
//     }
//   }
//   switch(props.appearance) {
//     case "primary":
//       return "bg-btn-primary hover:bg-btn-primary-hover active:bg-btn-primary-active";
//     case "warning":
//       return "bg-btn-warning hover:bg-btn-warning-hover active:bg-btn-warning-active";
//     case "danger":
//       return "bg-btn-danger hover:bg-btn-danger-hover active:bg-btn-danger-active";
//     case "link":
//       return "bg-btn-subtle text-link-primary hover:underline underline-offset-2";
//     case "subtle":
//       return "bg-btn-subtle active:bg-btn-subtle-active hover:bg-btn-subtle-hover";
//     case "subtle-link":
//       return "bg-btn-subtle hover:underline underline-offset-2";
//     default:
//       return "bg-btn-neutral hover:bg-btn-neutral-hover active:bg-btn-neutral-pressed";
//   }
// });

// const buttonSize = computed(() => {
//   switch(props.size) {
//     case "sm":
//       return "h-6 px-2 rounded text-xs";
//     case "lg":
//       return "h-12 px-3 rounded text-lg align-center text-center";
//     case "md":
//     default:
//       return "h-8 px-2.5 rounded text-sm";
//   }
// });

// const buttonText = computed(() => {
//   if (props.outline) {
//     switch(props.appearance) {
//       case "primary":
//         return "text-btn-primary leading-8";
//       case "warning":
//         return "text-btn-warning leading-8";
//       case "danger":
//         return "text-btn-danger leading-8";
//       default:
//         return "text-green-500 leading-8";
//     }
//   }
//   switch(props.appearance) {
//     case "primary":
//     case "warning":
//     case "danger":
//       return "text-inverse leading-8";
//     case "link":
//       return "text-link-primary active:text-link-primary-active active:underline leading-8";
//     case "subtle-link":
//         return "text-subtle hover:text-subtle active:text-default leading-8";
//     case "subtle":
//     default:
//       return "text-default leading-8";
//   }
// });
</script>

<template>
  <button
    :class="
      twMerge(
        button({ appearance, size, outline, shape, iconAfter, iconBefore }),
      )
    "
    :type="nativeType"
    tabindex="0">
    <slot />
  </button>
</template>
