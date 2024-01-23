import type { Meta, StoryObj } from "@storybook/vue3";
import Banner from "./Banner.vue";

const meta = {
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    appearance: {
      control: "select",
      options: ["warning", "error", "announcement"],
    },
    icon: { control: "text" },
    testId: { control: "text" },
  },
  args: {
    appearance: "warning",
    icon: undefined,
    testId: undefined,
  },
} satisfies Meta<typeof Banner>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    default: "Hello world",
  },
};

export default meta;
