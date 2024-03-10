import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumbs from './Breadcrumbs.vue';

const meta = {
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    items: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'About',
        href: '/',
      },
      {
        text: 'Travel',
        href: '/',
      },
      {
        text: 'Nature',
        href: '/',
      },
    ],
  },
} satisfies Meta<typeof Breadcrumbs>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'About',
        href: '/',
      },
      {
        text: 'Travel',
        href: '/',
      },
      {
        text: 'Skane',
        href: '/',
      },
    ],
  },
};

export default meta;
