import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const BottomArrow: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
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
      d='M6.05963 8.59088C6.38913 8.26137 6.92337 8.26137 7.25287 8.59088L12.2812 13.6193L17.3096 8.59088C17.6391 8.26137 18.1734 8.26137 18.5029 8.59088C18.8324 8.92038 18.8324 9.45462 18.5029 9.78412L12.8779 15.4091C12.5484 15.7386 12.0141 15.7386 11.6846 15.4091L6.05963 9.78412C5.73012 9.45462 5.73012 8.92038 6.05963 8.59088Z'
      fill='#939393'
    />
  </svg>
);
const BottomArrowSVG = memo(BottomArrow);
export default BottomArrowSVG;
