import { useScrollProgress } from '../../hooks/useScrollProgress';
import { motion } from 'framer-motion';

export function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="brand-gradient-bg fixed inset-x-0 top-0 z-[70] h-[3px] origin-left"
    />
  );
}
