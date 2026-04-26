import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A multiline text input for descriptions, notes, and token usage guidance.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Write a short description',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => <Textarea className="w-[420px]" {...args} />,
};

export const WithValue: Story = {
  render: (args) => (
    <Textarea
      className="w-[420px]"
      defaultValue="Semantic tokens make it easier to swap the visual theme later."
      {...args}
    />
  ),
};
