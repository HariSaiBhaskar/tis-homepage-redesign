import { motion, type HTMLMotionProps } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

interface BaseButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  className?: string;
  children?: ReactNode;
}

type ButtonProps = BaseButtonProps &
  Omit<HTMLMotionProps<'button'>, 'children' | 'className'>;

const VARIANTS: Record<Variant, string> = {
  primary:
    'brand-gradient-bg text-onbrand shadow-lg shadow-brand/25 hover:shadow-xl hover:shadow-brand/30',
  outline:
    'border border-line bg-panel text-ink hover:border-brand hover:text-brand',
  ghost: 'text-brand hover:bg-brand/10',
};

const SIZES: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
};

const baseClasses =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const iconOnly = !children && Boolean(Icon);

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={cn(
        baseClasses,
        VARIANTS[variant],
        SIZES[size],
        iconOnly && 'h-11 w-11 px-0',
        className,
      )}
      {...props}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {variant === 'primary' && !Icon && !iconOnly && (
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      )}
    </motion.button>
  );
}

type AnchorButtonProps = BaseButtonProps &
  Omit<HTMLMotionProps<'a'>, 'children' | 'className' | 'href'> & {
    href: string;
  };

export function AnchorButton({
  variant = 'outline',
  size = 'md',
  icon: Icon,
  className,
  children,
  ...props
}: AnchorButtonProps) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={cn(
        baseClasses,
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {variant === 'primary' && !Icon && (
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      )}
    </motion.a>
  );
}
