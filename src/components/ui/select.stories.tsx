import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Radix-based select component styled with the current admin design tokens. Use Trigger, Value, Content, and Item together.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Initial selected value.',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="w-72">
      <Select {...args}>
        <SelectTrigger aria-label="Category">
          <SelectValue placeholder="카테고리 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="color">Color</SelectItem>
          <SelectItem value="spacing">Spacing</SelectItem>
          <SelectItem value="radius">Radius</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    defaultValue: 'color',
  },
  render: (args) => (
    <div className="w-72">
      <Select {...args}>
        <SelectTrigger aria-label="Category">
          <SelectValue placeholder="카테고리 선택" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="color">Color</SelectItem>
          <SelectItem value="spacing">Spacing</SelectItem>
          <SelectItem value="radius">Radius</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
