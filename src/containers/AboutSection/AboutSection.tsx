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
    ['Based', LOCATIONS.join(' · ')],
    ['Shop', '3d printer fleet · live room'],
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
            ToasterCat Studios is a free-range, ethically-sourced research center,
            makerspace, recording studio, and mad science laboratory based out of
            the American Pacific Northwest. Our team provides engineering and
            logistical resources to makers and artists alike.
          </p>
          <p>
            Software, hardware, and audio all come out of the same building
            &mdash; which is the whole point. If the vision is mad enough, we want
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
