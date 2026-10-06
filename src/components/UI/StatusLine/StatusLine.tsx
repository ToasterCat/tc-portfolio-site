import { StudioStatus, STUDIO_STATUSES } from '../../../SITE';
import './StatusLine.scss';

interface StatusLineProps {
  status: StudioStatus;
  /** The studio's actual status, not one listed for reference: "open" pulses. */
  live?: boolean;
  className?: string;
}

/** "● taking-commissions" - a studio status as a dot and a monospace tag. */
export default function StatusLine({ status, live = false, className = '' }: StatusLineProps) {
  return (
    <span
      className={`meta status-line status-line--${status} ${live ? 'status-line--live' : ''} ${className}`}
    >
      <span className="status-line-dot" aria-hidden="true" />
      {STUDIO_STATUSES[status].label}
    </span>
  );
}
