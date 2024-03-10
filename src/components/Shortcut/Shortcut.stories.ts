import type { Meta, StoryObj } from '@storybook/vue3';
import Shortcut from './Shortcut.vue';

const meta = {
  component: Shortcut,
  tags: ['autodocs'],
  argTypes: {
    keys: {
      control: 'multi-select',
      options: [
        'cmd',
        'shift',
        'ctrl',
        'option',
        'enter',
        'delete',
        'escape',
        'tab',
        'capslock',
        'up',
        'right',
        'down',
        'left',
        'pageup',
        'pagedown',
        'home',
        'end',
        'help',
        'space',
        'windows',
        'alt',
      ],
    },
  },
  args: {
    keys: ['cmd', 'option'],
  },
} satisfies Meta<typeof Banner>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    default: 'K',
  },
};
export default meta;
