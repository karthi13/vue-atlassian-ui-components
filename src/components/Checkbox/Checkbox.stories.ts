import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from './Checkbox.vue';
import CheckboxStory from './stories/CheckboxStory.vue';

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => ({
    components: { CheckboxStory },
    template: '<CheckboxStory />',
  }),
  decorators: [() => ({ template: '<story />' })],
};

export default meta;
