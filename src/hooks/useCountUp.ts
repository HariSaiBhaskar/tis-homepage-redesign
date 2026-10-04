import { useEffect, useState } from 'react';
import { animate } from 'framer-motion';

export function useCountUp(target: number, active: boolean, duration = 1.8): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [active, target, duration]);

  return value;
}
