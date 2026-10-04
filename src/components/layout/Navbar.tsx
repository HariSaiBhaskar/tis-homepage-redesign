import { motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../../data/site';
import { cn } from '../../lib/utils';
import { ThemeToggle } from '../animation/ThemeToggle';
import { MobileNav } from './MobileNav';
import { Button } from '../ui/Button';

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Tulas International School — home">
      <span className="brand-gradient-bg flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-brand/30">
        <GraduationCap className="h-5.5 w-5.5 text-onbrand" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="font-display block text-lg font-bold text-ink">Tulas</span>
        <span className="block text-[10px] font-bold tracking-[0.28em] text-brand uppercase">
          International School
        </span>
      </span>
    </a>
  );
}

function DesktopNav({ active }: { active: string }) {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-current={active === item.id ? 'page' : undefined}
          className={cn(
            'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors',
            active === item.id
              ? 'text-brand'
              : 'text-body hover:text-brand',
          )}
        >
          {item.label}
          {active === item.id && (
            <motion.span
              layoutId="nav-underline"
              className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
            />
          )}
        </a>
      ))}
    </nav>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    NAV_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[60] transition-all duration-300',
        scrolled
          ? 'border-b border-line/70 bg-canvas/80 shadow-sm backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />
        <DesktopNav active={active} />
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Button
            size="md"
            className="hidden lg:inline-flex"
            onClick={() => {
              document
                .getElementById('admissions')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Enquire Now
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-panel text-ink md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <MobileNav
        open={open}
        active={active}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}
