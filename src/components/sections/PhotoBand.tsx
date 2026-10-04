const PHOTOS = [
  {
    src: 'images/photos/classroom-kids.jpg',
    alt: 'Young students learning together in a bright classroom',
  },
  {
    src: 'images/photos/students-hands.jpg',
    alt: 'Students raising their hands to answer a question',
  },
  {
    src: 'images/photos/library.jpg',
    alt: 'School library with tall bookshelves and reading space',
  },
  {
    src: 'images/photos/sports-students.jpg',
    alt: 'Students playing sports on the school field',
  },
  {
    src: 'images/photos/campus-building.jpg',
    alt: 'School campus building exterior',
  },
  {
    src: 'images/photos/graduation-student.jpg',
    alt: 'Graduate student celebrating academic success',
  },
  {
    src: 'images/photos/science-lab.jpg',
    alt: 'Students conducting a science experiment',
  },
  {
    src: 'images/photos/school-kids.jpg',
    alt: 'School children smiling during class',
  },
];

export function PhotoBand() {
  const track = [...PHOTOS, ...PHOTOS];

  return (
    <section
      aria-label="Campus photo gallery"
      className="relative overflow-hidden py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-canvas to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-canvas to-transparent"
      />
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max items-center gap-4 pr-4 hover:[animation-play-state:paused]">
          {track.map((photo, index) => (
            <img
              key={`${photo.src}-${index}`}
              src={photo.src}
              alt={index < PHOTOS.length ? photo.alt : ''}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-36 w-56 shrink-0 rounded-2xl object-cover shadow-md shadow-brand/15 md:h-44 md:w-72"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
