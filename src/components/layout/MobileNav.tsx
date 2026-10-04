import { AnimatePresence, motion } from 'framer-motion';
import { NAV_ITEMS } from '../../data/site';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

interface MobileNavProps {
  open: boolean;
  active: string;
  onClose: () => void;
}

export function MobileNav({ open, active, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          aria-label="Mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden border-b border-line bg-canvas/95 backdrop-blur-xl md:hidden"
        >
          <ul className="space-y-1 px-4 pt-2 pb-5 sm:px-6">
            {NAV_ITEMS.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  aria-current={active === item.id ? 'page' : undefined}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                    active === item.id
                      ? 'bg-brand/10 text-brand'
                      : 'text-body hover:bg-brand/5 hover:text-brand',
                  )}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.3 }}
              className="pt-3"
            >
              <a href="#admissions" onClick={onClose}>
                <Button className="w-full" size="lg">
                  Enquire Now
                </Button>
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
