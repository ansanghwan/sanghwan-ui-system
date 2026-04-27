import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Radix-based checkbox styled with the current admin tokens. The component covers checked, disabled, and focus states.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-pad-sm text-body-md text-ink-primary">
      <Checkbox aria-label="이메일 수신 동의" />
      <span className="cursor-pointer">이메일 수신 동의</span>
    </label>
  ),
};

export const Checked: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-pad-sm text-body-md text-ink-primary">
      <Checkbox defaultChecked aria-label="토큰 문서화 완료" />
      <span className="cursor-pointer">토큰 문서화 완료</span>
    </label>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-pad-sm">
      <label className="flex cursor-pointer items-center gap-pad-sm text-body-md text-ink-secondary">
        <Checkbox disabled aria-label="비활성 체크박스" />
        <span className="cursor-pointer">비활성 상태</span>
      </label>
      <label className="flex cursor-pointer items-center gap-pad-sm text-body-md text-ink-secondary">
        <Checkbox defaultChecked disabled aria-label="비활성 선택 상태 체크박스" />
        <span className="cursor-pointer">비활성 선택 상태</span>
      </label>
    </div>
  ),
};
