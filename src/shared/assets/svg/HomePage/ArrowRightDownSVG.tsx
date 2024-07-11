import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ArrowRightDown: FC<ISvgProps> = ({ width = '41', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_423_33592)'>
      <circle cx='20.6667' cy='20' r='20' fill='#121212' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M26.7286 23.5L23.1664 15.6699L21.1664 19.134L15.1042 15.634L14.1042 17.3661L20.1664 20.8661L18.1664 24.3302L26.7286 23.5Z'
        fill='#34CDE3'
      />
    </g>
    <defs>
      <clipPath id='clip0_423_33592'>
        <rect
          width='40'
          height='40'
          fill='white'
          transform='translate(0.666748)'
        />
      </clipPath>
    </defs>
  </svg>
);
const ArrowRightDownSVG = memo(ArrowRightDown);
export default ArrowRightDownSVG;
