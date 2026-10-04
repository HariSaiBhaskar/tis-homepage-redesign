import { HeartPulse, Leaf, Trophy, Users } from 'lucide-react';
import { STATS } from '../../data/content';
import { CountUp } from '../animation/CountUp';
import { Reveal } from '../animation/Reveal';

const ICONS = [Leaf, Trophy, HeartPulse, Users];

export function StatsSection() {
  return (
    <section aria-label="School statistics" className="brand-gradient-bg relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, index) => {
            const Icon = ICONS[index];
            return (
              <Reveal
                key={stat.label}
                delay={index * 0.1}
                className="flex items-start gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-3xl font-bold text-white md:text-4xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
