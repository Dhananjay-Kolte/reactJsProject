import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ArrowRightUp: FC<ISvgProps> = ({ width = '41', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_423_33594)'>
      <circle cx='20.3333' cy='20' r='20' fill='#121212' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.3951 16.5L17.8329 15.6699L19.8329 19.134L13.7708 22.634L14.7708 24.3661L20.8329 20.8661L22.8329 24.3302L26.3951 16.5Z'
        fill='#34CDE3'
      />
    </g>
    <defs>
      <clipPath id='clip0_423_33594'>
        <rect
          width='40'
          height='40'
          fill='white'
          transform='translate(0.333252)'
        />
      </clipPath>
    </defs>
  </svg>
);
const ArrowRightUpSVG = memo(ArrowRightUp);
export default ArrowRightUpSVG;
