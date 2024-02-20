import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import ButtonStory from './stories/ButtonStory.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'select',
      options: [
        'default',
        'primary',
        'warning',
        'danger',
        'link',
        'success',
        'subtle',
      ],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    outline: { control: 'boolean' },
    iconAfter: { control: 'boolean' },
    iconBefore: { control: 'boolean' },
    shape: { control: 'select', options: ['rounded', 'square', 'pill'] },
    nativeType: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
  args: {
    appearance: 'primary',
    size: 'md',
    outline: false,
    iconAfter: false,
    iconBefore: false,
    shape: 'rounded',
    nativeType: 'button',
  },
} satisfies Meta<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => ({
    components: { ButtonStory },
    template: '<ButtonStory />',
  }),
  decorators: [() => ({ template: '<story />' })],
};

export default meta;
