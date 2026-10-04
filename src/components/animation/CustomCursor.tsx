import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor="hover"]';

export function CustomCursor() {
  const isTouch = useMediaQuery('(pointer: coarse)');
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (isTouch) return;

    const handleMove = (event: globalThis.MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const handleOver = (event: globalThis.MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [isTouch, x, y]);

  if (isTouch) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand transition-[width,height,opacity] duration-200 ${
          hovering ? 'h-14 w-14 opacity-90' : 'h-9 w-9 opacity-50'
        }`}
      />
      <motion.div
        style={{ x, y }}
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand"
        animate={{ scale: visible ? (hovering ? 1.6 : 1) : 0 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
