import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-btn text-body-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        primary:
          'bg-action-primary text-ink-inverse hover:bg-action-primary-hover',
        secondary:
          'border border-line bg-surface-card text-ink-primary hover:bg-surface-subtle',
        outline:
          'border border-line bg-surface-card text-ink-primary hover:bg-surface-subtle',
        ghost: 'text-ink-primary hover:bg-surface-subtle',
        destructive:
          'border border-line-error bg-surface-error text-ink-error hover:bg-surface-error',
      },
      size: {
        sm: 'h-8 min-w-[88px] px-pad-sm',
        md: 'h-10 min-w-[104px] px-pad',
        lg: 'h-12 min-w-[124px] px-6 text-info-title',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);

Button.displayName = 'Button';
