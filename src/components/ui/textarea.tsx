import * as React from 'react';
import { cn } from '../../lib/cn';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-[120px] w-full rounded-inp border border-line bg-surface-card px-pad py-pad-sm text-body-md text-ink-primary transition-colors',
        'placeholder:text-ink-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';
