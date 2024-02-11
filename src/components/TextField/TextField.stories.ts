import type { Meta, StoryObj } from '@storybook/vue3';
import TextField from './TextField.vue';

const meta = {
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['standard', 'subtle'],
    },
  },
  args: {
    appearance: 'standard',
  },
} satisfies Meta<typeof TextField>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export default meta;
