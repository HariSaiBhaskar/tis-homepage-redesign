import {
  Award,
  Baby,
  BedDouble,
  BookOpen,
  Bus,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Library,
  MonitorSmartphone,
  Music,
  Trophy,
  type LucideIcon,
} from 'lucide-react';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 1500, suffix: '+', label: 'Happy Students' },
  { value: 60, suffix: '+', label: 'Expert Educators' },
  { value: 98, suffix: '%', label: 'Board Results' },
];

export interface Program {
  icon: LucideIcon;
  title: string;
  tagline: string;
  ageGroup: string;
  points: string[];
}

export const PROGRAMS: Program[] = [
  {
    icon: Baby,
    title: 'Pre-Primary',
    tagline: 'Play-based Montessori foundation',
    ageGroup: 'Ages 3 – 6',
    points: ['Montessori method', 'Sensorial learning', 'Story & rhyme club'],
  },
  {
    icon: BookOpen,
    title: 'Primary School',
    tagline: 'Curiosity-driven core academics',
    ageGroup: 'Grades 1 – 5',
    points: ['CBSE curriculum', 'Reading & STEM labs', 'Life skills program'],
  },
  {
    icon: FlaskConical,
    title: 'Middle School',
    tagline: 'Inquiry, labs and leadership',
    ageGroup: 'Grades 6 – 8',
    points: ['Subject-specialist faculty', 'Robotics & coding', 'Inter-house sports'],
  },
  {
    icon: GraduationCap,
    title: 'Senior School',
    tagline: 'Board excellence and beyond',
    ageGroup: 'Grades 9 – 12',
    points: ['CBSE Class X & XII', 'Career counselling', 'Commerce & Science streams'],
  },
];

export interface Facility {
  icon: LucideIcon;
  title: string;
  description: string;
  wide?: boolean;
}

export const FACILITIES: Facility[] = [
  {
    icon: MonitorSmartphone,
    title: 'Smart Classrooms',
    description:
      'Every classroom is equipped with interactive displays, audio systems and high-speed Wi-Fi for blended learning.',
    wide: true,
  },
  {
    icon: FlaskConical,
    title: 'Science & Atal Labs',
    description: 'Physics, chemistry, biology and Atal Tinkering labs for hands-on experimentation.',
  },
  {
    icon: Library,
    title: 'Knowledge Centre',
    description: 'A 10,000+ volume library with reading nooks, digital resources and research corners.',
  },
  {
    icon: Trophy,
    title: 'Sports Complex',
    description: 'Basketball, tennis, athletics and indoor games with trained coaches and house competitions.',
  },
  {
    icon: Bus,
    title: 'Safe Transport',
    description: 'GPS-tracked buses with trained attendants covering all major city routes.',
  },
  {
    icon: BedDouble,
    title: 'Comfort Hostel',
    description: 'Air-conditioned boarding with mentored study hours and wholesome meals.',
  },
  {
    icon: HeartHandshake,
    title: 'Counselling Cell',
    description: 'Full-time counsellors for emotional well-being, career guidance and parent workshops.',
  },
  {
    icon: Award,
    title: 'Award-Winning Faculty',
    description: '60+ educators with national training certifications and an average 1:15 mentor ratio.',
  },
  {
    icon: Music,
    title: 'Music & Arts',
    description: 'Dance, music, theatre and visual-art studios with annual showcases and competitions.',
  },
  {
    icon: Landmark,
    title: 'Heritage Campus',
    description: 'A 5-acre green campus with open-air amphitheatres, gardens and shaded walkways.',
    wide: true,
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'My daughter went from being shy to confidently leading her school debate team. The teachers at TIS know every child by name.',
    name: 'Meera Reddy',
    role: 'Parent, Grade 4 Student',
  },
  {
    quote:
      'The robotics lab and Atal Tinkering space gave me the confidence to build my first app in Grade 8. TIS made learning feel like play.',
    name: 'Arjun Mehta',
    role: 'Alumnus, Class of 2024',
  },
  {
    quote:
      'We moved cities for the senior school. The career counselling and board results speak for themselves — 98% distinction this year.',
    name: 'Dr. Kavitha Rao',
    role: 'Parent, Grade 11 Student',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'Which board does TIS follow?',
    answer:
      'Tulas International School follows the CBSE curriculum from Pre-Primary through Grade 12, with Science and Commerce streams at the senior level.',
  },
  {
    question: 'What is the admission process for 2026–27?',
    answer:
      'Submit the enquiry form below, attend a campus interaction with our coordinators, and receive an offer within 7 working days. Admissions are open for all grades subject to seat availability.',
  },
  {
    question: 'Is transport available for all routes?',
    answer:
      'Our GPS-tracked fleet covers all major routes across Hyderabad. Routes and timings are shared during admission, and every bus has a trained attendant on board.',
  },
  {
    question: 'Do you offer scholarships?',
    answer:
      'Yes. Merit scholarships are awarded for academic distinction and talent in sports or arts. Ask our admissions team for the current criteria and application window.',
  },
  {
    question: 'What is the average class size?',
    answer:
      'We cap sections at 30 students with a 1:15 mentor ratio, ensuring every learner receives personal attention and regular progress feedback.',
  },
];

export interface AdmissionStep {
  title: string;
  description: string;
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  { title: 'Enquire', description: 'Fill the form or call us — our team responds within 24 hours.' },
  { title: 'Visit', description: 'Tour the campus, meet coordinators and observe a class in session.' },
  { title: 'Apply', description: 'Submit documents and a short interaction with the child.' },
  { title: 'Enroll', description: 'Receive your offer letter and join the TIS family.' },
];
