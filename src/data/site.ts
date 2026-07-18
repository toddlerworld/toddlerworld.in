/**
 * Single source of truth for the school's contact details (NAP) and every
 * third-party integration URL. Previously these strings were copy-pasted
 * across many components — keep them here only.
 */

export const site = {
  name: 'Toddler World',
  legalName: 'Toddler World',
  tagline: 'Small World, Big Imaginations',
  description:
    'A warm, Montessori-inspired preschool in Srinagar for little ones aged 2–3. Nurturing, playful early learning that helps children thrive.',
  url: 'https://www.toddlerworld.in',
  foundedYear: 2016,

  address: {
    street: 'Airport Avenue, Near Railway Bridge',
    locality: 'Srinagar',
    region: 'Jammu & Kashmir',
    postalCode: '190021',
    country: 'IN',
    full: 'Airport Avenue, Near Railway Bridge, Srinagar, Jammu & Kashmir 190021',
  },

  geo: { lat: 34.0251367, lng: 74.7713164 },

  phones: [
    { label: '+91 705-1427879', href: 'tel:+917051427879' },
    { label: '+91 788-9744619', href: 'tel:+917889744619' },
  ],

  email: 'info@toddlerworld.in',

  hours: [
    { day: 'Monday', open: '10:00', close: '16:00' },
    { day: 'Tuesday', open: '10:00', close: '16:00' },
    { day: 'Wednesday', open: '10:00', close: '16:00' },
    { day: 'Thursday', open: '10:00', close: '16:00' },
    { day: 'Friday', open: '10:00', close: '16:00' },
    { day: 'Saturday', open: '10:00', close: '15:00' },
    { day: 'Sunday', open: null, close: null },
  ],

  hoursSummary: 'Mon–Fri 10am–4pm · Sat 10am–3pm · Sun closed',

  socials: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/toddlerworldsgr/',
      icon: 'fa6-brands:facebook-f',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/toddlerworldsgr/',
      icon: 'fa6-brands:instagram',
    },
    { name: 'YouTube', href: 'https://www.youtube.com/@ToddlerWorld', icon: 'fa6-brands:youtube' },
    {
      name: 'Twitter',
      href: 'https://www.twitter.com/toddlerworldsgr/',
      icon: 'fa6-brands:x-twitter',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/toddlerworld/',
      icon: 'fa6-brands:linkedin-in',
    },
  ],

  integrations: {
    enquiry: 'https://campuskidz.in/Logon/KidEnquiry?SchoolCode=TODDLER',
    contactForm: 'https://getform.io/f/f5e8cb21-2e57-4c0b-af0c-ef2930b0ca8a',
    careersForm:
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5JQ_npNHs9jCVW4oVfrLS4qybFBK8vU6Op6Y70fm8qp7uGw/viewform?embedded=true',
    whatsapp: 'https://wa.me/917889744619',
    whatsappNumber: '+91 788-9744619',
    youtubeId: 'FxxsA-qaHTM',
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.730162425703!2d74.7713164!3d34.025136700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e191dba7d84fa3%3A0x16d8642869049f5a!2sToddler%20World!5e0!3m2!1sen!2suk!4v1695935838910!5m2!1sen!2suk',
    mapLink: 'https://maps.app.goo.gl/', // "Get directions" — see below
    mapDirections: 'https://www.google.com/maps/dir/?api=1&destination=Toddler+World+Srinagar',
  },
} as const;

export type Site = typeof site;
