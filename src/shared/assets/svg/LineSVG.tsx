import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Line: FC<ISvgProps> = ({ width = '1304', height = '4' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 1304 4'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <line
      x1='2'
      y1='2'
      x2='1302'
      y2='2'
      stroke='#282828'
      strokeWidth='4'
      strokeLinecap='round'
      strokeDasharray='3 12'
    />
  </svg>
);
const LineSVG = memo(Line);
export default LineSVG;
