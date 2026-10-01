import sprite from '../../../assets/toastercat-sprite.png';
import './BrandMark.scss';

/* Native size of the sprite's pixel grid; display only at whole multiples. */
const SPRITE_W = 43;
const SPRITE_H = 30;

interface BrandMarkProps {
  scale?: 1 | 2;
  className?: string;
}

/**
 * The flying toastercat. Rendered pixelated at an integer scale so every art
 * pixel stays a hard-edged square. Wrap it in a `.brand-link` to make it fly
 * when that link is hovered or focused.
 */
export default function BrandMark(props: BrandMarkProps) {
  const scale = props.scale ?? 1;

  return (
    <img
      src={sprite}
      alt=""
      aria-hidden="true"
      width={SPRITE_W * scale}
      height={SPRITE_H * scale}
      className={`brand-mark ${props.className ?? ''}`}
    />
  );
}
