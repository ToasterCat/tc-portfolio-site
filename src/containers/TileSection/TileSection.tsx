import React from 'react';
import './TileSection.scss';

interface TileSectionProps {
  heading: string;
  tiles: string[] | {}[];
  onClick?: () => void;
  areLinks: boolean;
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
    <section className="tile-section">
      <h2>{props.heading}</h2>
      <div className="tile-group">
        {props.areLinks ? generateLinkTiles() : generateTiles()}
      </div>
    </section>
  );
}
