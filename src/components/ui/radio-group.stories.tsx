import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A basic radio group built on the Radix UI primitive. Use it for single-choice form inputs with a consistent default style.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <RadioGroup defaultValue="basic" className="gap-token-3">
      <label className="flex cursor-pointer items-center gap-token-2 text-sm text-foreground">
        <RadioGroupItem value="basic" aria-label="Basic plan" />
        <span className="cursor-pointer">Basic plan</span>
      </label>
      <label className="flex cursor-pointer items-center gap-token-2 text-sm text-foreground">
        <RadioGroupItem value="pro" aria-label="Pro plan" />
        <span className="cursor-pointer">Pro plan</span>
      </label>
      <label className="flex cursor-pointer items-center gap-token-2 text-sm text-foreground">
        <RadioGroupItem value="enterprise" aria-label="Enterprise plan" />
        <span className="cursor-pointer">Enterprise plan</span>
      </label>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="selected" className="gap-token-3">
      <label className="flex items-center gap-token-2 text-sm text-muted-foreground">
        <RadioGroupItem value="selected" disabled aria-label="Selected disabled option" />
        <span>Selected disabled option</span>
      </label>
      <label className="flex items-center gap-token-2 text-sm text-muted-foreground">
        <RadioGroupItem value="unselected" disabled aria-label="Unselected disabled option" />
        <span>Unselected disabled option</span>
      </label>
    </RadioGroup>
  ),
};
