import hammerIcon from '../../assets/hammer.png';
import './ComingSoon.scss';

export default function ComingSoon() {
  return (
    <div className="coming-soon">
      <h1 style={{ textAlign: 'center' }}>Coming soon</h1>
      <img src={hammerIcon} alt="coming-soon-icon" />
    </div>
  );
}
