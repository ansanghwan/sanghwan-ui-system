import * as React from 'react';
import { cn } from '../../lib/cn';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
type HeadingLevel = 'page' | 'section' | 'subtitle' | 'helper';

function getHeadingClasses(level: HeadingLevel | null | undefined) {
  switch (level) {
    case 'page':
      return 'text-page-title tracking-tight text-ink-primary';
    case 'section':
      return 'text-section-title tracking-tight text-ink-primary';
    case 'subtitle':
      return 'text-info-title text-ink-primary';
    case 'helper':
      return 'text-body-sm text-ink-secondary';
    default:
      return 'text-section-title tracking-tight text-ink-primary';
  }
}

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  as?: HeadingTag;
  level?: HeadingLevel;
}

export function Heading({ as, className, level, ...props }: HeadingProps) {
  const Comp =
    as ??
    (level === 'page'
      ? 'h2'
      : level === 'section'
        ? 'h3'
        : level === 'subtitle'
          ? 'h4'
          : 'p');

  return <Comp className={cn(getHeadingClasses(level), className)} {...props} />;
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
