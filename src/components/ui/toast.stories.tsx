import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastDescription, ToastTitle } from './toast';

const meta = {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A lightweight toast preview for non-blocking feedback in admin flows.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Toast className="w-[360px]">
      <ToastTitle>Saved successfully</ToastTitle>
      <ToastDescription>
        Token aliases were updated and synced to the preview.
      </ToastDescription>
    </Toast>
  ),
};

export const Error: Story = {
  render: () => (
    <Toast variant="error" className="w-[360px]">
      <ToastTitle>Publish failed</ToastTitle>
      <ToastDescription className="text-ink-error">
        One required semantic color alias is missing.
      </ToastDescription>
    </Toast>
  ),
};
