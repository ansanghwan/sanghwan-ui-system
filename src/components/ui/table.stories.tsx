import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from './table';

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple admin table layout for token lists and status-driven rows.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <Table className="w-[760px]">
      <TableHeader>
        <TableCell>Token</TableCell>
        <TableCell>Category</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">color.primary</TableCell>
          <TableCell>Color</TableCell>
          <TableCell>
            <Badge>Active</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">space.4</TableCell>
          <TableCell>Spacing</TableCell>
          <TableCell>
            <Badge variant="outline">Draft</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">radius.md</TableCell>
          <TableCell>Radius</TableCell>
          <TableCell>
            <Badge variant="muted">Synced</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
