import * as React from 'react';
import { cn } from '../../lib/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-10 w-full rounded-inp border border-line bg-surface-card px-pad py-pad-sm text-body-md text-ink-primary transition-colors',
        'placeholder:text-ink-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
        'disabled:cursor-not-allowed disabled:text-ink-disabled disabled:opacity-50',
        error && 'border-line-error text-ink-primary focus-visible:ring-line-error',
        className,
      )}
      aria-invalid={error || props['aria-invalid']}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
