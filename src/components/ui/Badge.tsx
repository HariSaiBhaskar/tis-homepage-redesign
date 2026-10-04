import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'accent';
}

export function Badge({ children, className, tone = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase',
        tone === 'default' &&
          'border-brand/30 bg-brand/10 text-brand dark:text-brandstrong',
        tone === 'accent' &&
          'border-accent/40 bg-accent/10 text-accent',
        className,
      )}
    >
      {children}
    </span>
  );
}
