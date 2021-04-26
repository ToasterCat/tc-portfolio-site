import React from 'react';
import './TileSection.scss';

interface TileSectionProps {
  heading: string;
  tiles: string[];
  onClick?: () => void;
}

export default function TileSection(props: TileSectionProps) {
  return (
    <section className="tile-section">
      <h2>{props.heading}</h2>
      <div className="tile-group">
        {props.tiles.map((tile) => {
          return (
            <div className="tile">
              <p>{tile}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
