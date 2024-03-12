import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumbs from './Breadcrumbs.vue';

const meta = {
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    items: [
      {
        text: 'Item 1',
        href: '/',
      },
      {
        text: 'Item 2',
        href: '/',
      },
      {
        text: 'Item 3',
        href: '/',
      },
      {
        text: 'Item 4',
        href: '/',
      },
      {
        text: 'Item 5',
        href: '/',
      },
      {
        text: 'Item 6',
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
        text: 'Item 1',
        href: '/',
      },
      {
        text: 'Item 2',
        href: '/',
      },
      {
        text: 'Item 3',
        href: '/',
      },
      {
        text: 'Item 4',
        href: '/',
      },
    ],
  },
};

export const MoreThan8Items: Story = {
  args: {
    items: [
      {
        text: 'Item 1',
        href: '/',
      },
      {
        text: 'Item 2',
        href: '/',
      },
      {
        text: 'Item 3',
        href: '/',
      },
      {
        text: 'Item 4',
        href: '/',
      },
      {
        text: 'Item 5',
        href: '/',
      },
      {
        text: 'Item 6',
        href: '/',
      },
      {
        text: 'Item 7',
        href: '/',
      },
      {
        text: 'Item 8',
        href: '/',
      },
      {
        text: 'Item 9',
        href: '/',
      },
    ],
  },
};

export const Max4Items: Story = {
  args: {
    maxItems: 4,
    items: [
      {
        text: 'Item 1',
        href: '/',
      },
      {
        text: 'Item 2',
        href: '/',
      },
      {
        text: 'Item 3',
        href: '/',
      },
      {
        text: 'Item 4',
        href: '/',
      },
      {
        text: 'Item 5',
        href: '/',
      },
    ],
  },
};

export const ItemsBeforeAndAfterCollapse: Story = {
  args: {
    maxItems: 4,
    itemsBeforeCollapse: 3,
    itemsAfterCollapse: 2,
    items: [
      {
        text: 'Item 1',
        href: '/',
      },
      {
        text: 'Item 2',
        href: '/',
      },
      {
        text: 'Item 3',
        href: '/',
      },
      {
        text: 'Item 4',
        href: '/',
      },
      {
        text: 'Item 5',
        href: '/',
      },
      {
        text: 'Item 6',
        href: '/',
      },
      {
        text: 'Item 7',
        href: '/',
      },
      {
        text: 'Item 8',
        href: '/',
      },
      {
        text: 'Item 9',
        href: '/',
      },
    ],
  },
};
export default meta;
