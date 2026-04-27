import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

export const badgeVariants = cva(
  'inline-flex items-center rounded-bdg px-pad-sm py-[2px] text-body-sm font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-action-primary text-ink-inverse',
        muted: 'bg-surface-subtle text-ink-secondary',
        outline: 'border border-line bg-surface-card text-ink-primary',
        destructive: 'bg-surface-error text-ink-error border border-line-error',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
