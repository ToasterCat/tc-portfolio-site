import { Link } from 'react-router-dom';
import Brackets from '../../components/UI/Brackets/Brackets';
import './TileSection.scss';

export interface Tile {
  label: string;
  url: string;
}

interface TileSectionProps {
  heading: string;
  subheading?: string;
  tiles: Tile[];
}

/** A titled band of [ COMMAND ] links (homepage Client Services). */
export default function TileSection(props: TileSectionProps) {
  return (
    <section className="tile-section section-band">
      <div className="section-head">
        <h2>{props.heading}</h2>
        {props.subheading && <p className="section-sub">{props.subheading}</p>}
      </div>
      <div className="tile-group">
        {props.tiles.map((tile) => (
          <Link className="btn btn--tertiary" to={tile.url} key={tile.url}>
            <Brackets>{tile.label}</Brackets>
          </Link>
        ))}
      </div>
    </section>
  );
}
