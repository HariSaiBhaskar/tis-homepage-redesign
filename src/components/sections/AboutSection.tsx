import { CheckCircle2, Compass, HeartHandshake, Lightbulb, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';

const PILLARS = [
  {
    icon: Lightbulb,
    title: 'Inquiry-Led Learning',
    text: 'Lessons start with questions, not answers. Children hypothesise, experiment and present — building thinkers, not memorisers.',
  },
  {
    icon: HeartHandshake,
    title: 'Every Child Known',
    text: 'With a 6:1 student-teacher ratio, teachers track each learner’s pace, strengths and wellbeing across every term.',
  },
  {
    icon: Compass,
    title: 'Character First',
    text: 'Service projects, house leadership and daily circle time shape empathy, resilience and responsibility.',
  },
  {
    icon: Sparkles,
    title: 'Global Exposure',
    text: 'Model UN, robotics championships and exchange programs widen horizons without leaving the campus.',
  },
];

const GALLERY = [
  {
    src: 'images/photos/classroom-desks.jpg',
    alt: 'Modern classroom with interactive display and student desks',
    caption: 'Smart Classrooms',
  },
  {
    src: 'images/photos/science-lab.jpg',
    alt: 'Students performing an experiment in the science laboratory',
    caption: 'Science & Atal Labs',
  },
  {
    src: 'images/photos/sports-students.jpg',
    alt: 'Students playing a match on the school sports field',
    caption: 'Sports Complex',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Tulas International School"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="brand-gradient-bg relative aspect-[4/3.4] overflow-hidden rounded-[2.5rem] shadow-2xl shadow-brand/20">
            <img
              src="images/photos/campus-university.jpg"
              alt="The Tulas International School campus building and green grounds"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e1830]/55 to-transparent p-6 pt-16">
              <p className="font-display text-2xl font-semibold text-white">
                Since 2012, shaping curious, confident minds.
              </p>
              <p className="mt-1 text-sm font-medium text-white/80">
                Est. 2012 · Dehradun, Uttarakhand
              </p>
            </div>
          </div>
          <Reveal
            delay={0.25}
            className="absolute -right-3 -bottom-6 rounded-2xl border border-line bg-panel px-5 py-4 shadow-xl shadow-brand/10 sm:-right-6"
          >
            <p className="font-display text-2xl font-bold text-brand">#1</p>
            <p className="text-xs font-semibold tracking-wide text-body uppercase">
              Co-ed Boarding School, Dehradun
            </p>
          </Reveal>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="About TIS"
            title={
              <>
                A legacy of{' '}
                <span className="brand-gradient-text">excellence</span>, a
                family of learners
              </>
            }
            description="Established in 2012 under the aegis of Rishabh Educational Trust, Tulas International School has grown into one of India's most trusted CBSE boarding and day schools — without ever losing its personal touch."
          />
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.08 * index}>
                <div className="group flex gap-4">
                  <span className="brand-gradient-bg flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-md shadow-brand/25 transition-transform duration-300 group-hover:-translate-y-1">
                    <pillar.icon className="h-5 w-5 text-onbrand" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35} className="mt-9">
            <ul className="space-y-3">
              {[
                'Nationally trained faculty with CBSE certification',
                'Continuous assessment, not exam-driven pressure',
                'Open-door parent communication every term',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="font-medium text-ink/90">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.25} className="mt-16 md:mt-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {GALLERY.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-3xl border border-line bg-panel p-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-brand/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full rounded-2xl object-cover"
              />
              <figcaption className="px-2 pt-3 pb-1 text-sm font-bold text-ink">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
