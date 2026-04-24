import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader className="border-b border-border/80">
        <CardTitle>Design Tokens</CardTitle>
        <CardDescription>Semantic token mapping for color, spacing, and radius.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-foreground">
          Components should use semantic class names such as <code>bg-primary</code> and{' '}
          <code>text-foreground</code> before raw values.
        </p>
      </CardContent>
    </Card>
  ),
};

export const StackedCards: Story = {
  render: () => {
    return (
      <div className="grid w-[820px] gap-6 rounded-2xl bg-muted p-8 md:grid-cols-2">
        <Card>
          <CardHeader className="border-b border-border/80">
            <CardTitle>Color Tokens</CardTitle>
            <CardDescription>Primary, foreground, border, muted</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground">
              Semantic color tokens are mapped through CSS variables and Tailwind theme keys.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-border/80">
            <CardTitle>Spacing Tokens</CardTitle>
            <CardDescription>token-1, token-2, token-3, token-4</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground">
              Reusable spacing rules help Button, Input, Card, and sample pages stay consistent.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  },
};
