import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';

function Initials({ name }: { name: string }) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Parent and student testimonials"
      className="bg-panel2/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Voices of TIS"
          title={
            <>
              Loved by{' '}
              <span className="brand-gradient-text">families</span>, trusted
              by alumni
            </>
          }
          description="Real words from the parents and students who live the TIS experience every day."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.12}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-line bg-panel p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand/10">
                <Quote
                  className="absolute top-6 right-6 h-8 w-8 text-brand/15"
                  aria-hidden="true"
                />
                <div
                  className="flex gap-1"
                  role="img"
                  aria-label="Rated 5 out of 5"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-accent text-accent"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                  <span className="brand-gradient-bg flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-onbrand">
                    {Initials({ name: testimonial.name })}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-body">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
