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
  address: 'Dhoolkot, P.O. – Selaqui, Chakrata Road, Dehradun – 248011, Uttarakhand',
  phone: '+91-98379 83791',
  email: 'info@tis.edu.in',
  hours: 'Mon – Sat, 8:00 AM – 4:00 PM',
};

export const SOCIALS = [
  { label: 'Website', href: 'https://tis.edu.in' },
  { label: 'Email', href: 'mailto:info@tis.edu.in' },
  { label: 'Directions', href: 'https://maps.google.com' },
];
