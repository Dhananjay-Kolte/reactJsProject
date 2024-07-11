import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Minus: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${height} ${width}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.93457 12.2949C2.93457 11.6736 3.43825 11.1699 4.05957 11.1699H20.5596C21.1809 11.1699 21.6846 11.6736 21.6846 12.2949C21.6846 12.9162 21.1809 13.4199 20.5596 13.4199H4.05957C3.43825 13.4199 2.93457 12.9162 2.93457 12.2949Z'
      fill='black'
    />
  </svg>
);
const MinusSVG = memo(Minus);
export default MinusSVG;
