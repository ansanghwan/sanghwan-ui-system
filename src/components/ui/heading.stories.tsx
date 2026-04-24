import type { Meta, StoryObj } from '@storybook/react';
import { HelperText, Heading, PageTitle, SectionSubtitle, SectionTitle } from './heading';

const meta = {
  title: 'UI/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: ['page', 'section', 'subtitle', 'helper'],
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p'],
    },
  },
  args: {
    children: 'Heading sample',
    level: 'section',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};

export const TypographyScale: Story = {
  render: () => (
    <div className="space-y-token-4 rounded-lg border border-border bg-background p-token-6">
      <div className="space-y-token-2">
        <HelperText>System title is handled separately. Page title starts from h2 in this project.</HelperText>
        <PageTitle>Design Tokens</PageTitle>
      </div>
      <div className="space-y-token-2">
        <SectionTitle>Color Tokens</SectionTitle>
        <SectionSubtitle>Primary and destructive actions</SectionSubtitle>
        <HelperText>Use semantic token names before applying raw values to components.</HelperText>
      </div>
    </div>
  ),
};
