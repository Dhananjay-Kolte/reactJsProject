import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const TopArrow: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.5029 15.4091C18.1734 15.7386 17.6391 15.7386 17.3096 15.4091L12.2812 10.3807L7.25287 15.4091C6.92337 15.7386 6.38913 15.7386 6.05963 15.4091C5.73012 15.0796 5.73012 14.5454 6.05963 14.2159L11.6846 8.59088C12.0141 8.26137 12.5484 8.26137 12.8779 8.59088L18.5029 14.2159C18.8324 14.5454 18.8324 15.0796 18.5029 15.4091Z'
      fill='#939393'
    />
  </svg>
);

const TopArrowSVG = memo(TopArrow);
export default TopArrowSVG;
