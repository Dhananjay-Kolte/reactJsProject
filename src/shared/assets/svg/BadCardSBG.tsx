import { FC, memo } from 'react';
import { ISvgProps } from './types';

const BadCard: FC<ISvgProps> = ({ width = '20', height = '20', style }) => (
  <svg
    width={width}
    height={height}
    style={style}
    viewBox='0 0 20 20'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_2538_26510)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 1.71429C5.42455 1.71429 1.71429 5.42456 1.71429 10C1.71429 14.5754 5.42455 18.2857 10 18.2857C14.5764 18.2857 18.2857 14.5755 18.2857 10C18.2857 5.4245 14.5764 1.71429 10 1.71429ZM0 10C0 4.47778 4.47778 0 10 0C15.5233 0 20 4.47784 20 10C20 15.5222 15.5233 20 10 20C4.47778 20 0 15.5222 0 10Z'
        fill='#FF7C01'
      />
      <path
        d='M10 6V10'
        stroke='#FF7C01'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='10' cy='13' r='1' fill='#FF7C01' />
    </g>
    <defs>
      <clipPath id='clip0_2538_26510'>
        <rect width='20' height='20' fill='#dfe0e1' />
      </clipPath>
    </defs>
  </svg>
);
const BadCardSVG = memo(BadCard);
export default BadCardSVG;
