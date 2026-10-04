import { Reveal } from '../animation/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const PHOTOS = [
  {
    src: 'images/photos/classroom-kids.jpg',
    alt: 'Young students learning together in a bright classroom',
    caption: 'Early Years',
  },
  {
    src: 'images/photos/students-hands.jpg',
    alt: 'Students raising their hands to answer a question',
    caption: 'Hands-On Learning',
  },
  {
    src: 'images/photos/library.jpg',
    alt: 'School library with tall bookshelves',
    caption: 'Knowledge Centre',
  },
  {
    src: 'images/photos/sports-students.jpg',
    alt: 'Students playing sports on the field',
    caption: 'Sports Complex',
  },
  {
    src: 'images/photos/graduation-ceremony.jpg',
    alt: 'Students celebrating together at graduation',
    caption: 'Celebrations',
  },
  {
    src: 'images/photos/campus-building.jpg',
    alt: 'School campus building exterior',
    caption: 'Heritage Campus',
  },
];

export function CampusLifeSection() {
  return (
    <section
      id="campus-life"
      aria-label="Campus life"
      className="bg-panel2/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Life"
          title={
            <>
              Moments that make TIS{' '}
              <span className="brand-gradient-text">feel like home</span>
            </>
          }
          description="From morning circle time to evening practices — every corner of the campus buzzes with curiosity, colour and celebration."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PHOTOS.slice(0, 4).map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.09}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-md shadow-brand/10">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1830]/70 via-transparent to-transparent opacity-90" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display text-lg font-semibold text-white">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-5">
          <figure className="group relative overflow-hidden rounded-3xl shadow-md shadow-brand/10">
            <img
              src="images/photos/university-hall.jpg"
              alt="Grand university-style hall corridor of the school"
              width={1600}
              height={700}
              loading="lazy"
              decoding="async"
              className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1830]/80 via-[#0e1830]/40 to-transparent" />
            <figcaption className="absolute inset-0 flex items-center p-8 md:p-12">
              <div className="max-w-xl">
                <p className="font-display text-2xl leading-snug font-semibold text-white md:text-3xl">
                  Walk corridors where futures take shape.
                </p>
                <p className="mt-2 text-sm text-white/80 md:text-base">
                  Every space on campus is designed for learning, movement
                  and imagination.
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
