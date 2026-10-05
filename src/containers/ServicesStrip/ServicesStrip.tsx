import { Link } from 'react-router-dom';
import { ASSET_MANIFEST } from '../../assets/AssetMap';
import { PROJECT_CATEGORIES, getProjectByAlias } from '../../PROJECTS';
import './ServicesStrip.scss';

/**
 * Homepage "what we do": one tile per service, fronted by its flagship's
 * cover, linking to that service's section on /portfolio. Names only - the
 * pitch copy lives on /portfolio, so the two pages can't drift apart.
 */
export default function ServicesStrip() {
  return (
    <section className="services-strip section-band" aria-labelledby="services-strip-heading">
      <div className="section-head">
        <h2 id="services-strip-heading">What We Do</h2>
      </div>

      <ul className="services-strip-list">
        {PROJECT_CATEGORIES.map((c) => {
          const flagship = getProjectByAlias(c.flagship)?.projectDetails;
          const cover = flagship && (flagship.cardImage ?? flagship.backgroundImage);
          const coverSrc = cover ? ASSET_MANIFEST.get(cover.source) : undefined;

          return (
            <li key={c.key}>
              <Link className="services-strip-tile" to={`/portfolio#${c.anchor}`}>
                <span
                  className={`services-strip-cover ${coverSrc ? '' : 'services-strip-cover--pattern'}`}
                  aria-hidden="true"
                >
                  {coverSrc && <img src={coverSrc} alt="" loading="lazy" decoding="async" />}
                </span>
                <span className="services-strip-label">
                  <span className="meta meta-dim services-strip-prompt" aria-hidden="true">{'\\>'}</span>
                  {c.label}
                  <span className="services-strip-arrow" aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
