import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';

const headingVariants = cva('text-foreground', {
  variants: {
    level: {
      page: 'text-3xl font-bold tracking-tight md:text-4xl',
      section: 'text-xl font-semibold tracking-tight md:text-2xl',
      subtitle: 'text-base font-semibold md:text-lg',
      helper: 'text-sm font-medium text-muted-foreground',
    },
  },
  defaultVariants: {
    level: 'section',
  },
});

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

export interface HeadingProps
  extends
    React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag;
}

export function Heading({
  as,
  className,
  level,
  ...props
}: HeadingProps) {
  const Comp =
    as ?? (level === 'page' ? 'h2' : level === 'section' ? 'h3' : level === 'subtitle' ? 'h4' : 'p');

  return <Comp className={cn(headingVariants({ level }), className)} {...props} />;
}

export function PageTitle(props: Omit<HeadingProps, 'level' | 'as'>) {
  return <Heading as="h2" level="page" {...props} />;
}

export function SectionTitle(props: Omit<HeadingProps, 'level' | 'as'>) {
  return <Heading as="h3" level="section" {...props} />;
}

export function SectionSubtitle(props: Omit<HeadingProps, 'level' | 'as'>) {
  return <Heading as="h4" level="subtitle" {...props} />;
}

export function HelperText(props: Omit<HeadingProps, 'level' | 'as'>) {
  return <Heading as="p" level="helper" {...props} />;
}
