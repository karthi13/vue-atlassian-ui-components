import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from './Tag.vue';

const meta = {
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: ['default', 'rounded'],
    },
    color: {
      control: 'select',
      options: [
        'standard',
        'blue',
        'green',
        'teal',
        'purple',
        'red',
        'yellow',
        'orange',
        'magenta',
        'lime',
        'grey',
        'greenLight',
        'tealLight',
        'blueLight',
        'purpleLight',
        'redLight',
        'yellowLight',
        'orangeLight',
        'magentaLight',
        'limeLight',
        'greyLight',
      ],
    },
    href: {
      control: 'text',
    },
    testId: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    isRemovable: {
      control: 'boolean',
    },
    removeButtonLabel: {
      control: 'text',
    },
    showAvatar: {
      control: 'boolean',
    },
    avatarUrl: {
      control: 'text',
    },
  },
  args: {
    appearance: 'default',
  },
} satisfies Meta<typeof Tag>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    appearance: 'default',
    text: 'Hello world',
  },
};

export default meta;
