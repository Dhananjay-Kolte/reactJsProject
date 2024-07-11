import { FC, memo } from 'react';
import { ISvgProps } from './types';

const GreenDot: FC<ISvgProps> = ({ width = '14', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='7' cy='7' r='7' fill='#2EF098' fillOpacity='0.15' />
    <circle cx='7' cy='7' r='3' fill='#2EF098' />
  </svg>
);
const GreenDotSVG = memo(GreenDot);
export default GreenDotSVG;
