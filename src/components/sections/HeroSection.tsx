import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from 'framer-motion';
import {
  Award,
  ChevronDown,
  MonitorSmartphone,
  Sparkles,
  Users,
} from 'lucide-react';
import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import { AnchorButton } from '../ui/AnchorButton';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const FLOAT_CHIPS = [
  {
    icon: Award,
    title: '98% Board Results',
    sub: 'Class X & XII, 2025',
    position: 'left-[-1.5rem] top-10',
    delay: 0,
  },
  {
    icon: Users,
    title: '1500+ Students',
    sub: 'Ages 3 – 17',
    position: 'right-[-1rem] top-1/3',
    delay: 1.6,
  },
  {
    icon: MonitorSmartphone,
    title: 'Smart Classrooms',
    sub: 'Every grade, every room',
    position: 'bottom-12 left-[8%]',
    delay: 3.2,
  },
];

function FloatingChip({
  icon: Icon,
  title,
  sub,
  position,
  delay,
}: (typeof FLOAT_CHIPS)[number]) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9 + delay * 0.15, duration: 0.5 }}
      className={`absolute ${position} hidden sm:block`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex items-center gap-3 rounded-2xl border border-line bg-panel/90 px-4 py-3 shadow-xl shadow-brand/10 backdrop-blur-md"
      >
        <span className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-xl">
          <Icon className="h-4.5 w-4.5 text-onbrand" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-bold text-ink">{title}</span>
          <span className="block text-xs text-body">{sub}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const panelRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useTransform(my, [0, 1], [5, -5]);
  const rotateY = useTransform(mx, [0, 1], [-7, 7]);

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(color-mix(in oklab, var(--brand) 18%, transparent) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/25 blur-[110px] dark:bg-brand/15"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -35, 0], x: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent/20 blur-[100px] dark:bg-accent/10"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Badge tone="accent">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Admissions Open 2026–27
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display mt-6 text-[2.75rem] leading-[1.08] font-bold text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Let's Do It,
            <br />
            <span className="brand-gradient-text">With Tulas</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed"
          >
            Tulas International School is one of India's top CBSE boarding
            and day schools in Dehradun — a 22-acre pollution-free campus,
            16+ Olympic sports and a 6:1 student-teacher ratio, from
            Class IV to XII.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById('admissions')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Apply Now
            </Button>
            <AnchorButton size="lg" variant="outline" href="#about">
              Explore Our Campus
            </AnchorButton>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-body"
          >
            {['CBSE Affiliated', 'Boarding & Day School', 'Class IV – XII'].map(
              (text) => (
                <li key={text} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {text}
                </li>
              ),
            )}
          </motion.ul>
        </motion.div>

        <motion.div
          ref={panelRef}
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ perspective: 1200 }}
          className="relative mx-auto hidden w-full max-w-md sm:block lg:max-w-none"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative aspect-[4/4.4] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand/30 transition-shadow duration-300"
          >
            <img
              src="images/photos/campus-university.jpg"
              alt="The Tulas International School campus"
              width={1200}
              height={1500}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1830]/90 via-[#0e1830]/40 to-[#0e1830]/25" />
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full border-[36px] border-white/10"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{ transform: 'translateZ(30px)' }}
              className="font-display relative px-8 pt-16 text-3xl leading-snug font-semibold text-white"
            >
              “School isn't just about lessons — it's about endless
              opportunities waiting to be explored.”
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="relative mt-3 px-8 text-sm font-medium text-white/70"
            >
              — The TIS Philosophy
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.55 }}
              style={{ transform: 'translateZ(20px)' }}
              className="absolute inset-x-8 bottom-8 rounded-2xl bg-white/12 p-5 backdrop-blur-md"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                Now enrolling
              </p>
              <p className="font-display mt-1 text-xl font-semibold text-white">
                Class IV → XII
              </p>
            </motion.div>
          </motion.div>
          {FLOAT_CHIPS.map((chip) => (
            <FloatingChip key={chip.title} {...chip} />
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-body transition-colors hover:text-brand md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
