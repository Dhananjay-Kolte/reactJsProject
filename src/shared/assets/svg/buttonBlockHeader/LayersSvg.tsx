import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Layers: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_797_21540)'>
      <path
        d='M8 1.75L1.75 4.875L8 8L14.25 4.875L8 1.75Z'
        stroke='#5F6567'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.75 11.125L8 14.25L14.25 11.125'
        stroke='#5F6567'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.75 8L8 11.125L14.25 8'
        stroke='#5F6567'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_797_21540'>
        <rect
          width='15'
          height='15'
          fill='#dfe0e1'
          transform='translate(0.5 0.5)'
        />
      </clipPath>
    </defs>
  </svg>
);
const LayersSvg = memo(Layers);
export default LayersSvg;
