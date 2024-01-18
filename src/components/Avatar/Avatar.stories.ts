import type { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "./Avatar.vue";

const meta = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    iconAfter: {
      control: "boolean",
    },
  },
  args: {
    iconAfter: false,
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export default meta;
