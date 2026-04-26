import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Radix-based tabs component for switching between grouped content panels.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[560px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
        <TabsTrigger value="qa">QA Notes</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        A compact summary panel for component usage and handoff notes.
      </TabsContent>
      <TabsContent value="tokens">
        Primary, foreground, border, muted, and destructive tokens are mapped in Tailwind.
      </TabsContent>
      <TabsContent value="qa">
        Verify spacing, state colors, and focus rings before publishing to Storybook.
      </TabsContent>
    </Tabs>
  ),
};
