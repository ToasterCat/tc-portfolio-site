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
];

/* The header's only route to /contact: the primary button, not a nav link. */
export const CTA_LINK: SiteLink = { label: 'Hire Us', to: '/contact' };

/**
 * Footer "Site" column: the nav plus Contact, which the header carries as
 * Hire Us, and the policy pages, which live only down here.
 */
export const FOOTER_LINKS: SiteLink[] = [
  ...NAV_LINKS,
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy', to: '/privacy' },
];

export const SOCIAL_LINKS: SiteLink[] = [
  { label: 'LinkedIn', to: 'https://www.linkedin.com/company/110969321' },
  { label: 'GitHub', to: 'https://github.com/ToasterCat' },
  { label: 'Discord', to: 'https://discord.gg/VENmWr635t' },
  { label: 'Patreon', to: 'https://www.patreon.com/cw/ToasterCatStudios' },
  { label: 'Facebook', to: 'https://www.facebook.com/ToasterCat.Studios' },
];

export const CONTACT_EMAIL = 'contact@toastercat.tech';

export const LOCATIONS = ['Seattle, WA.'];

/**
 * The footer's "Status" line. To change it, set STUDIO_STATUS to one of the
 * keys below; each key has its own label and dot treatment in Footer.scss.
 */
export type StudioStatus = 'open' | 'limited' | 'booked' | 'away';

export const STUDIO_STATUS_LABELS: Record<StudioStatus, string> = {
  open: 'taking-commissions', // olive, pulsing dot - actively looking for work
  limited: 'build-in-progress', // olive, steady dot - busy, but ask
  booked: 'booked-up', // dim, steady dot - full for now
  away: 'on-hiatus', // dim, hollow dot - not working at the moment
};

export const STUDIO_STATUS: StudioStatus = 'limited';
