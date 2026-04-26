import * as React from 'react';
import { cn } from '../../lib/cn';

export function Pagination({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-center', className)}
      {...props}
    />
  );
}

export function PaginationList({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={cn('flex items-center gap-token-2', className)} {...props} />
  );
}

export interface PaginationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export function PaginationItem({
  className,
  isActive,
  ...props
}: PaginationItemProps) {
  return (
    <li>
      <button
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-md border border-border bg-background text-sm text-foreground transition-colors',
          'hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          isActive && 'border-primary bg-primary text-primary-foreground hover:bg-primary/90',
          className,
        )}
        {...props}
      />
    </li>
  );
}
