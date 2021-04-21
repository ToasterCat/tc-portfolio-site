import React from 'react';

interface TileSectionProps {
  heading: string;
  buttons: string[];
  onClick?: () => void;
}

export default function TileSection(props: TileSectionProps) {
  return (
    <section className="tile-section">
      <h2>{props.heading}</h2>
      <div className="buttons-group">
        {props.buttons.map((button) => {
          return (
            <div className="button">
              <p>{button}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
