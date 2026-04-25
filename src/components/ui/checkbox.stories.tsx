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
          'Radix UI Checkbox primitive를 감싸는 기본 체크박스 컴포넌트입니다. checked, disabled, focus-visible 상태를 기본형 한 가지로 일관되게 사용하도록 구성했습니다.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <label className="flex items-center gap-token-2 text-sm text-foreground cursor-pointer">
      <Checkbox aria-label="이메일 수신 동의" />
      <span>이메일 수신 동의</span>
    </label>
  ),
};

export const Checked: Story = {
  render: () => (
    <label className="flex items-center gap-token-2 text-sm text-foreground cursor-pointer">
      <Checkbox defaultChecked aria-label="토큰 문서화 완료" />
      <span>토큰 문서화 완료</span>
    </label>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-token-2">
      <label className="flex items-center gap-token-2 text-sm text-muted-foreground cursor-pointer">
        <Checkbox disabled aria-label="비활성 체크박스" />
        <span>비활성 상태</span>
      </label>
      <label className="flex items-center gap-token-2 text-sm text-muted-foreground cursor-pointer">
        <Checkbox defaultChecked disabled aria-label="비활성 선택 상태 체크박스" />
        <span>비활성 선택 상태</span>
      </label>
    </div>
  ),
};
