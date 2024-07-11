import { FC, memo } from 'react';
import { ISvgProps } from '../../types';

const TelegramSVG: FC<ISvgProps> = ({ width = '28', height = '28' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 28 28'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14 2.33334C7.55738 2.33334 2.33331 7.55742 2.33331 14C2.33331 20.4426 7.55738 25.6667 14 25.6667C20.4438 25.6667 25.6666 20.4425 25.6666 14C25.6666 7.55749 20.4438 2.33334 14 2.33334ZM6.29343 12.8635L18.6968 8.29397C19.6237 7.93844 19.9873 8.3473 19.7741 9.27524L17.7205 18.5656C17.564 19.3194 17.1683 19.5848 16.4411 19.1735L13.3101 16.9336L11.482 18.5862C11.2574 18.7719 10.9054 18.7701 10.7131 18.3966L10.9207 15.9777L17.5285 10.2618C17.8986 9.94807 17.4685 9.87203 17.0484 10.1572L9.35478 14.6998L6.17279 13.7337C5.62548 13.5025 5.7943 13.0763 6.29343 12.8635Z'
      fill='#939393'
    />
  </svg>
);
const Telegram = memo(TelegramSVG);
export default Telegram;
