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
  return <ul className={cn('flex items-center gap-pad-sm', className)} {...props} />;
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
          'inline-flex size-9 items-center justify-center rounded-btn border border-line bg-surface-card text-body-md text-ink-primary transition-colors',
          'hover:bg-surface-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus',
          isActive &&
            'border-action-primary bg-action-primary text-ink-inverse hover:bg-action-primary-hover',
          className,
        )}
        {...props}
      />
    </li>
  );
}
