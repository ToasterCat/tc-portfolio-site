import { LOCATIONS } from '../../SITE';
import { PROJECT_CATEGORIES } from '../../PROJECTS';
import './AboutSection.scss';

/**
 * Homepage "About": the story on the left, a studio spec sheet on the right
 * (same device as the project pages). The sheet absorbs what used to be the
 * separate "Where We Work" band.
 */
export default function AboutSection() {
  const facts: [string, string][] = [
    ['Est.', '2020 · building since 2011'],
    ['Based', LOCATIONS.join(' · ')],
    ['Shop', '3D printer fleet · live room'],
    ['Builds', PROJECT_CATEGORIES.map((c) => c.label.toLowerCase()).join(' · ')],
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
            engineer games, software, hardware, and audio for makers, artists, and
            the businesses that back them.
          </p>
          <p>
            What started as side projects in 2011 became ToasterCat Studios LLC in
            2020, and a full-time studio in 2021. Before going independent, our
            founder spent the better part of a decade building game technologies across
            Amazon and AWS; from mobile game SDKs to digital storefronts
            and payments, and from predictive analytics to the servers, logins, and
            real-time networking behind hundreds of games&mdash;Ubisoft titles among
            them. We know firsthand how large products ship and, more importantly, how
            they fail, and how to avoid it.
          </p>
          <p>
            Games, software, hardware, and audio all come out of the same
            building&mdash;which is the whole point. If the vision is mad enough, we want
            to talk shop.
          </p>
        </div>

        <dl className="about-facts">
          {facts.map(([label, value]) => (
            <div className="about-fact" key={label}>
              <dt className="meta meta-dim">{label}</dt>
              <dd className="meta">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
