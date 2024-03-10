import type { Meta, StoryObj } from '@storybook/vue3';
import Banner from './Banner.vue';

const meta = {
  component: Banner,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['announcement', 'warning', 'error'],
    },
    testId: { control: 'text' },
  },
  args: {
    appearance: 'announcement',
    testId: undefined,
  },
} satisfies Meta<typeof Banner>;

type Story = StoryObj<typeof meta>;

export const Announcement: Story = {
  args: {
    default: 'Hello world',
  },
};

export const Warning: Story = {
  args: {
    default: 'Hello world',
    appearance: 'warning',
  },
};

export const Error: Story = {
  args: {
    default: 'Hello world',
    appearance: 'error',
  },
};

export default meta;
