import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const CheckboxEmpty: FC<ISvgProps> = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect width='20' height='20' rx='4' fill='inherit' fillOpacity='0.4' />
    <rect
      x='1'
      y='1'
      width='18'
      height='18'
      rx='3.5'
      stroke='inherit'
      strokeOpacity='0.4'
    />
  </svg>
);
const CheckboxEmptySVG = memo(CheckboxEmpty);
export default CheckboxEmptySVG;
