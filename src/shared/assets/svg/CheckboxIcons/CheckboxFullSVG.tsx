import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Checkbox: FC<ISvgProps> = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width={width} height={height} rx='4' fill='inherit' />
    <path
      d='M15.3334 6L8.00002 13.3333L4.66669 10'
      stroke='inherit'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const CheckboxSVG = memo(Checkbox);
export default CheckboxSVG;
