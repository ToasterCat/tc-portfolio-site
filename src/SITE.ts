/**
 * Site-wide chrome content, shared by the header, mobile menu, and footer so
 * the three can't drift apart (e.g. "Projects" vs "Portfolio").
 */

export interface SiteLink {
  label: string;
  to: string;
}

export const NAV_LINKS: SiteLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

export const CTA_LINK: SiteLink = { label: 'Hire Us', to: '/contact' };

export const SOCIAL_LINKS: SiteLink[] = [
  { label: 'LinkedIn', to: 'https://www.linkedin.com/company/110969321' },
  { label: 'GitHub', to: 'https://github.com/ToasterCat' },
  { label: 'Discord', to: 'https://discord.gg/VENmWr635t' },
  { label: 'Patreon', to: 'https://www.patreon.com/cw/ToasterCatStudios' },
  { label: 'Facebook', to: 'https://www.facebook.com/ToasterCat.Studios' },
];

export const CONTACT_EMAIL = 'contact@toastercat.tech';

export const LOCATIONS = ['Seattle', 'Portland', 'Vancouver'];

/* Shown in the footer as "● taking-commissions". Flip when the shop is full. */
export const AVAILABILITY = {
  open: true,
  label: 'taking-commissions',
  closedLabel: 'booked-up',
};
