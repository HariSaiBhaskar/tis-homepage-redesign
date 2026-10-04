export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'academics', label: 'Academics', href: '#academics' },
  { id: 'campus', label: 'Campus', href: '#campus' },
  { id: 'campus-life', label: 'Campus Life', href: '#campus-life' },
  { id: 'admissions', label: 'Admissions', href: '#admissions' },
];

export const CONTACT = {
  address: '12-34, Education Hill, Hyderabad, Telangana 500019',
  phone: '+91 40 6789 2026',
  email: 'admissions@tis.edu.in',
  hours: 'Mon – Sat, 8:00 AM – 4:00 PM',
};

export const SOCIALS = [
  { label: 'Website', href: 'https://tis.edu.in' },
  { label: 'Email', href: 'mailto:admissions@tis.edu.in' },
  { label: 'Directions', href: 'https://maps.google.com' },
];
