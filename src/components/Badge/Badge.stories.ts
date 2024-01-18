import type { Meta, StoryObj } from "@storybook/vue3";
import Badge from "./Badge.vue";

const meta = {
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: [
        "added",
        "default",
        "primary",
        "important",
        "removed",
        "primaryInverted",
      ],
    },
  },
  args: {
    appearance: "default",
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    default: "Hello world",
  },
};

export default meta;
