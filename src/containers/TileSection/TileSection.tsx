import React from 'react';
import './TileSection.scss';

interface TileSectionProps {
  heading: string;
  subheading?: string;
  tiles: string[] | {}[];
  onClick?: () => void;
  areLinks: boolean;
  background?: string;
}

export default function TileSection(props: TileSectionProps) {
  const generateTiles = () => {
    if (!props.areLinks) {
      return props.tiles.map((tile: any) => {
        return (
          <div className="tile">
            <p>{tile}</p>
          </div>
        );
      });
    }
  };

  const generateLinkTiles = () => {
    if (props.areLinks) {
      return props.tiles.map((tile: any) => {
        return (
          <a href={tile.url}>
            <div className="tile">
              <p>{tile.label}</p>
            </div>
          </a>
        );
      });
    }
  };

  return (
    <section className="tile-section section-band"
      style={{
        backgroundImage: 'url(' + props.background + ')'
      }}>
      <div className="section-head">
        <h2>{props.heading}</h2>
        {props.subheading && (
          <p className="section-sub">{props.subheading}</p>
        )}
      </div>
      <div className="tile-group">
        {props.areLinks ? generateLinkTiles() : generateTiles()}
      </div>
    </section>
  );
}
