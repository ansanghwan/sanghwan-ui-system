import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './alert';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A lightweight feedback block for guidance, warnings, and status messages.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Alert className="w-[460px]">
      <AlertTitle>Token sync complete</AlertTitle>
      <AlertDescription>
        Semantic colors are now mapped to CSS variables and Tailwind theme keys.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[460px]">
      <AlertTitle>Publish blocked</AlertTitle>
      <AlertDescription className="text-destructive">
        A required token alias is missing, so the export cannot be completed yet.
      </AlertDescription>
    </Alert>
  ),
};
