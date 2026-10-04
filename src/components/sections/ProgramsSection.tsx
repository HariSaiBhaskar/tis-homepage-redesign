import { ArrowUpRight, Check } from 'lucide-react';
import { PROGRAMS } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';

export function ProgramsSection() {
  return (
    <section
      id="academics"
      aria-label="Academic programs"
      className="bg-panel2/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academics"
          title={
            <>
              Programs for every{' '}
              <span className="brand-gradient-text">stage of growth</span>
            </>
          }
          description="A seamless CBSE pathway from Montessori playgroup to Grade 12 board examinations — each stage designed around how children actually learn."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.1}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
                <span className="brand-gradient-bg flex h-13 w-13 items-center justify-center rounded-2xl shadow-lg shadow-brand/25 transition-transform duration-300 group-hover:scale-110">
                  <program.icon className="h-6 w-6 text-onbrand" aria-hidden="true" />
                </span>
                <div className="mt-5 flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {program.title}
                  </h3>
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold whitespace-nowrap text-brand">
                    {program.ageGroup}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-body">
                  {program.tagline}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-body"
                    >
                      <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#admissions"
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-brand transition-colors group-hover:text-brandstrong"
                >
                  Enquire about {program.title}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
