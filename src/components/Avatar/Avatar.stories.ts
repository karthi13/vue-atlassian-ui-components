import type { Meta, StoryObj } from '@storybook/vue3';
import Avatar from './Avatar.vue';

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: {
        type: 'select',
      },
      options: ['circle', 'square'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    borderColor: {
      control: {
        type: 'select',
      },
      options: [
        'blue',
        'green',
        'red',
        'yellow',
        'gray',
        'black',
        'white',
        'none',
      ],
    },
    presence: {
      control: {
        type: 'select',
      },
      options: ['busy', 'focus', 'online', 'offline'],
    },
    status: {
      control: 'select',
      options: ['approved', 'declined', 'locked'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    appearance: 'circle',
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export default meta;
