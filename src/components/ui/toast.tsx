import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const toastVariants = cva(
  'w-full rounded-crd border bg-surface-card px-pad py-pad shadow-sm',
  {
    variants: {
      variant: {
        default: 'border-line text-ink-primary',
        success: 'border-line bg-surface-success text-ink-success',
        error: 'border-line-error bg-surface-error text-ink-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {}

export function Toast({ className, variant, ...props }: ToastProps) {
  return <div className={cn(toastVariants({ variant }), className)} {...props} />;
}

export function ToastTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn('text-info-title text-ink-primary', className)} {...props} />;
}

export function ToastDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('mt-1 text-body-sm text-ink-secondary', className)} {...props} />;
}
