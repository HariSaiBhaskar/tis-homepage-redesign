import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Reveal } from '../animation/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mb-12 max-w-2xl md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="mb-3 text-sm font-bold tracking-[0.2em] text-brand uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight font-semibold text-ink md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
