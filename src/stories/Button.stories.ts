import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/Button/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: [ "default", "primary", "warning", "danger", "link", "subtle", "subtle-link" ] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    edge: { control: 'select', options: [ "rounded", "square", "pill" ] },
  },
  args: { appearance: 'primary', size: 'md', edge: 'pill' }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    appearance: 'primary',
    size: 'md',
    default: 'Primary button',
  },
};

// export const Secondary: Story = {
//   args: {
//     primary: false,
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     label: 'Button',
//     size: 'lg',
//   },
// };

// export const Small: Story = {
//   args: {
//     label: 'Button',
//     size: 'sm',
//   },
// };
