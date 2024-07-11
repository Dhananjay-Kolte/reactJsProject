import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Wallet: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.55483 3.78966C3.61667 3.76345 3.68315 3.74996 3.75031 3.75L12.0008 3.75C12.415 3.75 12.7508 3.41421 12.7508 3C12.7508 2.58579 12.415 2.25 12.0008 2.25H3.75077C3.48228 2.2499 3.21653 2.30385 2.96934 2.40865C2.72201 2.51351 2.49834 2.66712 2.31168 2.86031C2.12501 3.05351 1.97919 3.28233 1.88289 3.53312C1.78836 3.77934 1.74347 4.04179 1.75077 4.30534V12C1.75077 12.4641 1.93514 12.9092 2.26333 13.2374C2.59152 13.5656 3.03664 13.75 3.50077 13.75H13.5008C13.8323 13.75 14.1502 13.6183 14.3846 13.3839C14.6191 13.1495 14.7508 12.8315 14.7508 12.5V6C14.7508 5.66848 14.6191 5.35054 14.3846 5.11612C14.1502 4.8817 13.8323 4.75 13.5008 4.75H3.78202L3.77372 4.75005C3.63957 4.75153 3.51007 4.70099 3.41239 4.60903C3.31821 4.52036 3.26068 4.39985 3.25077 4.27123V4.25C3.25077 4.2428 3.25066 4.23563 3.25046 4.22848C3.25279 4.17458 3.26382 4.12131 3.28322 4.07078C3.3073 4.00808 3.34375 3.95088 3.39042 3.90258C3.43708 3.85428 3.493 3.81588 3.55483 3.78966ZM3.25077 12V6.1827C3.42384 6.22858 3.60364 6.2516 3.78567 6.25H13.2508V12.25H3.50077C3.43446 12.25 3.37087 12.2237 3.32399 12.1768C3.27711 12.1299 3.25077 12.0663 3.25077 12ZM12.2507 9C12.2507 9.55228 11.803 10 11.2507 10C10.6984 10 10.2507 9.55228 10.2507 9C10.2507 8.44772 10.6984 8 11.2507 8C11.803 8 12.2507 8.44772 12.2507 9Z'
      fill='inherit'
    />
  </svg>
);
const WalletSVG = memo(Wallet);
export default WalletSVG;