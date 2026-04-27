import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const alertVariants = cva(
  'relative w-full rounded-crd border px-pad py-pad text-body-md',
  {
    variants: {
      variant: {
        default: 'border-line bg-surface-card text-ink-primary',
        muted: 'border-line bg-surface-subtle text-ink-primary',
        destructive: 'border-line-error bg-surface-error text-ink-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

export function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={cn('mb-1 text-info-title leading-none tracking-tight', className)}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('text-body-sm leading-6 text-ink-secondary', className)}
      {...props}
    />
  );
}
