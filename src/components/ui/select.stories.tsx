import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Radix UI Select primitive를 감싸는 셀렉트 컴포넌트입니다. Trigger, Value, Content, Item을 조합해서 사용하며, 트리거 폭과 드롭다운 폭을 맞추는 구조로 작성했습니다.',
        story:
          '기본 토큰 그룹 선택 예제입니다. Trigger를 클릭하면 SelectContent가 열리고, SelectItem을 선택하면 현재 값이 SelectValue에 반영됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '초기 선택값입니다.',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: (args) => (
    <div className="w-72">
      <Select {...args}>
        <SelectTrigger aria-label="Token group">
          <SelectValue placeholder="카테고리" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="color">Color</SelectItem>
          <SelectItem value="spacing">Spacing</SelectItem>
          <SelectItem value="radius">Radius</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    defaultValue: 'color',
  },
  render: (args) => (
    <div className="w-72">
      <Select {...args}>
        <SelectTrigger aria-label="Token group">
          <SelectValue placeholder="카테고리" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="color">Color</SelectItem>
          <SelectItem value="spacing">Spacing</SelectItem>
          <SelectItem value="radius">Radius</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
