import * as React from 'react';
import { cn } from '../../lib/cn';

export function Table({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-crd border border-line bg-surface-card text-ink-primary shadow-card',
        className,
      )}
      {...props}
    />
  );
}

export function TableHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'grid grid-cols-[1.5fr_1fr_1fr] gap-comp-gap border-b border-line bg-surface-subtle px-pad py-pad-sm text-body-sm uppercase tracking-wide text-ink-secondary',
        className,
      )}
      {...props}
    />
  );
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('divide-y divide-line', className)} {...props} />;
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'grid grid-cols-[1.5fr_1fr_1fr] items-center gap-comp-gap px-pad py-pad-sm text-body-md text-ink-primary transition-colors hover:bg-surface-subtle',
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('min-w-0', className)} {...props} />;
}
