import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-comp-gap">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  ),
};

export const SizeAndState: Story = {
  render: () => (
    <div className="grid gap-sec">
      <div className="flex flex-wrap items-center gap-comp-gap">
        <Button size="sm">Primary</Button>
        <Button size="md">Primary</Button>
        <Button size="lg">Primary</Button>
      </div>
      <div className="flex flex-wrap items-center gap-comp-gap">
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-comp-gap">
        <Button variant="ghost" size="sm">
          Ghost
        </Button>
        <Button variant="ghost" size="md">
          Ghost
        </Button>
        <Button variant="ghost" size="lg">
          Ghost
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-comp-gap">
        <Button disabled size="md">
          Disabled
        </Button>
        <Button disabled variant="secondary" size="md">
          Disabled
        </Button>
        <Button disabled variant="ghost" size="md">
          Disabled
        </Button>
      </div>
    </div>
  ),
};
