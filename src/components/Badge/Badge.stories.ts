import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from './Badge.vue';

const meta = {
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: [
        'added',
        'default',
        'primary',
        'important',
        'removed',
        'primaryInverted',
      ],
    },
  },
  args: {
    appearance: 'default',
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: '8',
    appearance: 'default'
  },
};

export const Primary: Story = {
  args: {
    default: 'Hello world',
    appearance: 'primary'
  },
};

export const Added: Story = {
  args: {
    default: '100',
    appearance: 'added'
  },
};

export const Important: Story = {
  args: {
    default: 'important',
    appearance: 'important'
  },
};

export const PrimaryInverted: Story = {
  args: {
    default: 'primary inverted',
    appearance: 'primaryInverted'
  },
};

export default meta;
