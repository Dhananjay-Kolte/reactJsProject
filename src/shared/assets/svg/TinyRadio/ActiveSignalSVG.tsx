import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ActiveSignal: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='4' fill='inherit' />
  </svg>
);
const ActiveSignalSVG = memo(ActiveSignal);
export default ActiveSignalSVG;
