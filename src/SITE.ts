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
  { label: 'AI Policy', to: '/ai-policy' },
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
 * The studio's availability: shown in the footer, and explained in the status
 * guide on /contact. To change it, set STUDIO_STATUS to one of the keys below.
 * Each key has its own dot treatment (StatusLine.scss); labels and summaries
 * can be reworded freely.
 */
export type StudioStatus = 'open' | 'limited' | 'booked' | 'away';

export interface StudioStatusInfo {
  /** The monospace tag, e.g. "taking-commissions". */
  label: string;
  /** What this status means for someone about to get in touch. */
  summary: string;
}

/* In display order for the status guide. */
export const STUDIO_STATUSES: Record<StudioStatus, StudioStatusInfo> = {
  // olive, pulsing dot - actively looking for work
  open: {
    label: 'taking-commissions',
    summary:
      'We have room for new work. Expect a reply within a week to set up a video meeting, an estimate within two weeks of it, and a start as soon as the estimate is agreed.',
  },
  // olive, steady dot - busy, but ask
  limited: {
    label: 'limited-availability',
    summary:
      "We're mid-project, but still taking on new work. Expect a reply within a week to set up a video meeting, and an estimate within two weeks of it. Small jobs and long-term proposals are considered case by case.",
  },
  // dim, steady dot - full for now
  booked: {
    label: 'booked-up',
    summary:
      "Our schedule is full for now. We'll still reply within a week, and new projects start as current work wraps up.",
  },
  // dim, hollow dot - not working at the moment
  away: {
    label: 'on-hiatus',
    summary: "We're not taking new work at the moment. Messages are answered when we're back.",
  },
};

export const STUDIO_STATUS: StudioStatus = 'limited';
