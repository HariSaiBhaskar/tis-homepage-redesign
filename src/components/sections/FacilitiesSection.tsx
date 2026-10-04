import { FACILITIES } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { cn } from '../../lib/utils';

export function FacilitiesSection() {
  return (
    <section
      id="campus"
      aria-label="Campus facilities"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <SectionHeading
        eyebrow="Campus Life"
        title={
          <>
            Facilities that turn{' '}
            <span className="brand-gradient-text">every day</span> into an
            adventure
          </>
        }
        description="Five acres of smart classrooms, labs, playing fields and green spaces — designed so learning never stops at the classroom door."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((facility, index) => (
          <Reveal
            key={facility.title}
            delay={(index % 3) * 0.09}
            className={cn(facility.wide && 'lg:col-span-2')}
          >
            <article className="group flex h-full gap-5 rounded-3xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10 md:p-7">
              <span className="brand-gradient-bg flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-md shadow-brand/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <facility.icon className="h-5.5 w-5.5 text-onbrand" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {facility.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
