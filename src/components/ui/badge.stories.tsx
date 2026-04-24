import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'muted', 'outline', 'destructive'],
    },
  },
  args: {
    children: 'Badge',
    variant: 'primary',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const AllVariants: Story = {
  render: () => {
    return (
      <div className="flex gap-token-2">
      <Badge>Primary</Badge>
      <Badge variant="muted">muted</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">destructive</Badge>
      </div>
    );
  },
};
