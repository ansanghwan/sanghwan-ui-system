import * as React from 'react';
import { cn } from '../../lib/cn';

export function Table({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-card',
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
        'grid grid-cols-[1.5fr_1fr_1fr] gap-token-4 border-b border-border bg-muted/40 px-token-4 py-token-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

export function TableBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('divide-y divide-border', className)} {...props} />;
}

export function TableRow({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'grid grid-cols-[1.5fr_1fr_1fr] items-center gap-token-4 px-token-4 py-token-3 text-sm text-foreground transition-colors hover:bg-muted/30',
        className,
      )}
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('min-w-0', className)} {...props} />;
}
