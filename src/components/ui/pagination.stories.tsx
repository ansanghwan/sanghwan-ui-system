import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationItem, PaginationList } from './pagination';

const meta = {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple pagination control for list and table views in the sample admin screens.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Pagination>
      <PaginationList>
        <PaginationItem aria-label="Previous page">{'<'}</PaginationItem>
        <PaginationItem isActive>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem aria-label="Next page">{'>'}</PaginationItem>
      </PaginationList>
    </Pagination>
  ),
};
