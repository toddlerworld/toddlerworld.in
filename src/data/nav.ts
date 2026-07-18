/**
 * Single source of truth for header + footer navigation.
 * `/play-equipment` keeps its original URL (labelled "Facilities") to avoid
 * redirect complexity on the static S3/CloudFront host.
 */

export interface NavLink {
  label: string;
  href: string;
  note?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  links?: NavLink[];
}

export const nav: NavGroup[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    links: [
      { label: 'Welcome', href: '/welcome', note: 'A note from us to you' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Our Environment', href: '/our-environment' },
      { label: 'Parent Partnership', href: '/parent-partnership' },
    ],
  },
  {
    label: 'Learning',
    links: [
      { label: 'Programmes', href: '/programmes' },
      { label: 'Pre-Nursery (2–3 yrs)', href: '/pre-nursery' },
      { label: 'Activities', href: '/activities' },
      { label: 'Facilities', href: '/play-equipment' },
      { label: 'School Transitions', href: '/school-transitions' },
    ],
  },
  {
    label: 'Admissions',
    links: [
      { label: 'Admissions', href: '/admissions' },
      { label: 'Policies & Procedures', href: '/policies-procedures' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  { label: 'Contact', href: '/contact-us' },
];

/** Flat groups used to build the footer columns. */
export const footerColumns = [
  {
    heading: 'About',
    links: [
      { label: 'Welcome', href: '/welcome' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Our Environment', href: '/our-environment' },
      { label: 'Parent Partnership', href: '/parent-partnership' },
    ],
  },
  {
    heading: 'Learning',
    links: [
      { label: 'Programmes', href: '/programmes' },
      { label: 'Pre-Nursery (2–3 yrs)', href: '/pre-nursery' },
      { label: 'Activities', href: '/activities' },
      { label: 'Facilities', href: '/play-equipment' },
      { label: 'School Transitions', href: '/school-transitions' },
    ],
  },
  {
    heading: 'Admissions',
    links: [
      { label: 'Admissions', href: '/admissions' },
      { label: 'Policies & Procedures', href: '/policies-procedures' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
];
