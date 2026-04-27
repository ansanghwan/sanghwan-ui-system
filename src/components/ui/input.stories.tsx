import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    placeholder: '이메일 입력',
    'aria-label': '이메일 입력',
    type: 'email',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

function InputField({
  label,
  helper,
  helperClassName,
  ...props
}: React.ComponentProps<typeof Input> & {
  label: string;
  helper: string;
  helperClassName?: string;
}) {
  return (
    <div className="w-[280px] space-y-2">
      <label className="block text-list-ttl text-ink-primary">{label}</label>
      <Input {...props} />
      <p className={helperClassName ?? 'text-body-sm text-ink-secondary'}>{helper}</p>
    </div>
  );
}

export const Overview: Story = {
  render: (args) => (
    <InputField
      {...args}
      label="이메일"
      helper="Default"
    />
  ),
};

export const States: Story = {
  render: (args) => (
    <div className="grid gap-sec md:grid-cols-2 xl:grid-cols-4">
      <InputField
        {...args}
        label="이메일"
        helper="Default"
      />
      <InputField
        {...args}
        label="이메일"
        helper="Focus"
        className="ring-2 ring-line-focus"
      />
      <InputField
        {...args}
        label="이메일"
        helper="올바른 이메일을 입력해 주세요."
        error
        helperClassName="text-body-sm text-ink-error"
      />
      <InputField
        {...args}
        label="이메일"
        helper="Disabled"
        placeholder="비활성 상태"
        disabled
      />
    </div>
  ),
};
