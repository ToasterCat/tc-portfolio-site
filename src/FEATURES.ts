import blackoutPunkLogo from './assets/gallery/BlackoutPunk/BlackoutPunk-Logo_960.webp';
import blackoutPunkArt from './assets/gallery/BlackoutPunk/BP-LitHallway_1920.webp';
import blackoutPunkArtSmall from './assets/gallery/BlackoutPunk/BP-LitHallway_960.webp';

/** A call to action: site paths ("/portfolio/...") route in-app, full URLs open in a new tab. */
export interface FeatureAction {
  label: string;
  href: string;
}

/**
 * One highlighted work for the homepage feature banner. Any kind of project
 * fits: a game in development, a product launch, a show.
 */
export interface Feature {
  /** Stable key, for when several features rotate in one banner. */
  id: string;
  /** Short state label, shown as a tag ("In Development"). */
  status: string;
  /** The work's name: the heading text, or the logo's alt text. */
  title: string;
  /** Wordmark shown in place of the title text, if the work has one. */
  logo?: { src: string; width: number; height: number };
  /** A punchy line under the title. */
  tagline?: string;
  /** One or two sentences: what it is. */
  hook: string;
  /** Meta line: milestone, dates, availability. */
  meta?: string;
  /** Key art behind the copy (desktop), and a smaller cut for phones. */
  art: string;
  artSmall?: string;
  primary: FeatureAction;
  secondary?: FeatureAction;
}

/** Highlighted works, most important first. The homepage shows the first. */
export const FEATURES: Feature[] = [
  {
    id: 'blackout-punk',
    status: 'In Development',
    title: 'BLACK0UT.PUNK',
    logo: { src: blackoutPunkLogo, width: 960, height: 169 },
    tagline: 'Command. Control. Kill.',
    hook: 'Tron meets John Wick on club night: a tactical third-person shooter where you command a whole squad, jump into any unit, and fight the battle yourself.',
    meta: 'Playtests December–March · sign-ups open now',
    art: blackoutPunkArt,
    artSmall: blackoutPunkArtSmall,
    primary: { label: 'Join the playtest list', href: 'https://blackout-punk.com' },
    secondary: { label: 'See the project', href: '/portfolio/blackout-punk' },
  },
];
