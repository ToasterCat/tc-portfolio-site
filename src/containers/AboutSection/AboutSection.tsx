import { ReactNode } from 'react';
import { FOUNDER, LOCATIONS, PATREON } from '../../SITE';
import { PROJECT_CATEGORIES } from '../../PROJECTS';
import ShopReel, { ReelPhoto } from '../../components/UI/ShopReel/ShopReel';
import reelGameDev from '../../assets/gallery/TC-Studio/reel-game-dev_960.webp';
import reelGuitarNeck from '../../assets/gallery/TC-Studio/reel-guitar-neck_960.webp';
import reelPrinting from '../../assets/gallery/TC-Studio/reel-printing_960.webp';
import reelConsulting from '../../assets/gallery/TC-Studio/reel-consulting_960.webp';
import reelAmpMic from '../../assets/gallery/TC-Studio/reel-amp-mic_960.webp';
import reelSoldering from '../../assets/gallery/TC-Studio/reel-soldering_960.webp';
import reelWebDev from '../../assets/gallery/TC-Studio/reel-web-dev_960.webp';
import reelDrumMics from '../../assets/gallery/TC-Studio/reel-drum-mics_960.webp';
import reelLiveEvents from '../../assets/gallery/TC-Studio/reel-live-events_960.webp';
import reelPrintDetail from '../../assets/gallery/TC-Studio/reel-print-detail_960.webp';
import './AboutSection.scss';

/**
 * The studio's services, one shot each: shop and studio photos plus a few
 * frames from project work, each captioned with the service it advertises.
 */
const SHOP_REEL: ReelPhoto[] = [
  { src: reelGameDev, label: 'Game Development', alt: 'A squad member aiming down sights in the BLACK0UT.PUNK playtest arena' },
  { src: reelGuitarNeck, label: 'Live Recording', alt: 'Guitar headstocks racked in the live room' },
  { src: reelPrinting, label: '3D Printing', alt: 'A freshly printed starfighter model on the print bed' },
  { src: reelConsulting, label: 'Consulting', alt: 'A back-end architecture diagram from a client engagement' },
  { src: reelAmpMic, label: 'Audio Engineering', alt: 'A microphone set against a Mesa speaker cabinet' },
  { src: reelSoldering, label: 'Prototyping', alt: 'Setting heat-set inserts into a custom blaster with a soldering iron' },
  { src: reelWebDev, label: 'Web Development', alt: 'The Octopus Attacks Shark!! band website' },
  { src: reelDrumMics, label: 'Live Tracking', alt: 'Mic’d snare and toms on the studio drum kit' },
  { src: reelPrintDetail, label: 'Product Design', alt: 'Close-up of a freshly printed part' },
  { src: reelLiveEvents, label: 'Live Events', alt: 'A guitar pedalboard on stage at The Funhouse' },
];

/**
 * Homepage "About": the story on the left, a studio spec sheet on the right
 * (same device as the project pages). The sheet absorbs what used to be the
 * separate "Where We Work" band. Under the sheet, a slow reel of the shop.
 */
export default function AboutSection() {
  /* Read top to bottom as a story: when and where, who, what, with what, and
   * how it's funded. One-word labels; values are short `·` lists. */
  const facts: [string, ReactNode][] = [
    ['Est.', '2020 · building since 2011'],
    ['Based', LOCATIONS.join(' · ')],
    ['Founder', <a className="prose-link" href={FOUNDER.to} target="_blank" rel="noopener noreferrer">{FOUNDER.label}</a>],
    ['Team', 'specialist network'],
    ['Builds', PROJECT_CATEGORIES.map((c) => c.label.toLowerCase()).join(' · ')],
    ['Shop', '3D printer fleet · live room'],
    ['Cloud', 'hosting · build pipeline'],
    [
      'Funding',
      <>client work · <a className="prose-link" href={PATREON.to} target="_blank" rel="noopener noreferrer">Patreon</a></>,
    ],
  ];

  return (
    <section className="about-section section-band" aria-labelledby="about-heading">
      <div className="about-inner">
        <div className="about-story">
          <h2 id="about-heading" className="about-title">
            <span className="meta meta-dim about-prompt" aria-hidden="true">{'\\>'}</span>
            About ToasterCat
          </h2>
          <p>
            ToasterCat Studios is a free-range, ethically sourced research center,
            makerspace, recording studio, and mad science laboratory in Seattle. We
            engineer games, software, hardware, and media for makers, artists, and
            the businesses that back them.
          </p>
          <p>
            What started as side projects in 2011 became ToasterCat Studios LLC in
            2020, and a full-time studio in 2021. Before that, founder {FOUNDER.label} spent
            the better part of a decade building game technology at Amazon and AWS,
            from mobile SDKs and storefronts to the servers behind hundreds of live
            games. We know firsthand how large products ship and, more importantly,
            how they fail.
          </p>
          <p>
            With every discipline under one roof, we take projects end to end, from
            first sketch to launch. Client work and our Patreon backers fund our
            original projects, like BLACK0UT.PUNK. If the vision is mad enough, we
            want to talk shop.
          </p>
        </div>

        <div className="about-side">
          <dl className="about-facts">
            {facts.map(([label, value]) => (
              <div className="about-fact" key={label}>
                <dt className="meta meta-dim">{label}</dt>
                <dd className="meta">{value}</dd>
              </div>
            ))}
          </dl>

          <ShopReel photos={SHOP_REEL} />
        </div>
      </div>
    </section>
  );
}
