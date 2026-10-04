import {
  BedDouble,
  BookOpen,
  Bus,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  Library,
  MonitorSmartphone,
  Music,
  Trophy,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 22, suffix: ' Acres', label: 'Pollution-Free Campus' },
  { value: 16, suffix: '+', label: 'Olympic Sports' },
  { value: 24, suffix: '×7', label: 'Medical Assistance' },
  { value: 6, suffix: ':1', label: 'Student-Teacher Ratio' },
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
    icon: BookOpen,
    title: 'Junior School',
    tagline: 'Foundation for lifelong learning',
    ageGroup: 'Class IV – V',
    points: ['CBSE curriculum', 'Activity-based learning', 'Sports introduction'],
  },
  {
    icon: FlaskConical,
    title: 'Middle School',
    tagline: 'Inquiry, labs and leadership',
    ageGroup: 'Class VI – VIII',
    points: ['Subject-specialist faculty', 'Robotics & coding', 'Inter-house sports'],
  },
  {
    icon: GraduationCap,
    title: 'Senior School',
    tagline: 'Board excellence and beyond',
    ageGroup: 'Class IX – X',
    points: ['CBSE Class X boards', 'Career counselling', 'House leadership'],
  },
  {
    icon: Landmark,
    title: 'Senior Secondary',
    tagline: 'Streams and ambitions',
    ageGroup: 'Class XI – XII',
    points: ['Science & Commerce streams', 'Competitive exam prep', 'University guidance'],
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
    description: 'A well-stocked library with reading nooks, digital resources and research corners.',
  },
  {
    icon: Trophy,
    title: 'Sports Complex',
    description:
      '16+ Olympic sports including archery, horse riding, shooting, swimming, hockey, football and cricket.',
  },
  {
    icon: Bus,
    title: 'Safe Transport',
    description: 'GPS-tracked buses with trained attendants covering all major routes in Dehradun.',
  },
  {
    icon: BedDouble,
    title: 'Boarding House',
    description: 'Comfortable boarding with warden supervision, mentored study hours and wholesome meals.',
  },
  {
    icon: HeartPulse,
    title: '24×7 Medical Assistance',
    description: 'On-campus infirmary with a doctor and nursing staff available round the clock.',
  },
  {
    icon: Music,
    title: 'Music & Arts',
    description: 'Dance, music, theatre and visual-art studios with annual showcases and competitions.',
  },
  {
    icon: Users,
    title: '6:1 Mentor Ratio',
    description: 'Every learner gets personal attention with a 6:1 student-teacher ratio.',
  },
  {
    icon: Landmark,
    title: '22-Acre Campus',
    description:
      'Pollution-free campus on Chakrata Road with open-air amphitheatres, gardens and shaded walkways.',
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
      'We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student.',
    name: 'Tashi Tsering',
    role: 'Parent, TIS Student',
  },
  {
    quote:
      'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped our child in knowing himself better.',
    name: 'Namita Agarwal',
    role: 'Parent, TIS Student',
  },
  {
    quote:
      'Being a parent, it’s a big challenge to find a boarding school that qualifies your parameters of security, health, hygiene, academics and self-discipline — Tulas delivers on all of them.',
    name: 'Ashu Arora',
    role: 'Parent, Boarding Student',
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: 'Which board and classes does TIS offer?',
    answer:
      'Tulas International School follows the CBSE curriculum for Class IV through Class XII, as a co-educational boarding and day school in Dehradun.',
  },
  {
    question: 'Is TIS a boarding school?',
    answer:
      'Yes. TIS is a boarding and day school with comfortable boarding houses, warden supervision, mentored study hours, 24×7 medical assistance and wholesome meals.',
  },
  {
    question: 'What is the admission process for 2026–27?',
    answer:
      'Submit the enquiry form below, attend a campus interaction with our coordinators, and receive an offer within 7 working days. Admissions are open for Class IV to XII subject to seat availability.',
  },
  {
    question: 'What sports are available on campus?',
    answer:
      '16+ Olympic sports including archery, horse riding, shooting range, swimming, hockey, football, cricket, basketball, lawn tennis, badminton, table tennis, squash, billiards, volleyball, taekwondo and cycling.',
  },
  {
    question: 'What is the student-teacher ratio?',
    answer:
      'We maintain a 6:1 student-teacher ratio, ensuring every learner receives personal attention and regular progress feedback.',
  },
];

export interface AdmissionStep {
  title: string;
  description: string;
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  { title: 'Enquire', description: 'Fill the form or call us — our team responds within 24 hours.' },
  { title: 'Visit', description: 'Tour the 22-acre campus, meet coordinators and observe a class.' },
  { title: 'Apply', description: 'Submit documents and a short interaction with the child.' },
  { title: 'Enroll', description: 'Receive your offer letter and join the TIS family.' },
];
