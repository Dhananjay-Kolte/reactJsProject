import { FC, memo } from 'react';
import { ISvgProps } from './types';

const ArroyUp: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.1716 8.63909C9.75736 8.63909 9.42157 8.3033 9.42157 7.88909C9.42157 7.47487 9.75736 7.13909 10.1716 7.13909L15.8284 7.13909C16.2426 7.13909 16.5784 7.47487 16.5784 7.88909L16.5784 13.5459C16.5784 13.9602 16.2426 14.2959 15.8284 14.2959C15.4142 14.2959 15.0784 13.9602 15.0784 13.5459L15.0784 9.69975L8.22703 16.5511C7.93414 16.844 7.45926 16.844 7.16637 16.5511C6.87348 16.2583 6.87348 15.7834 7.16637 15.4905L14.0178 8.63909L10.1716 8.63909Z'
      fill='#121212'
    />
  </svg>
);
const ArroyUpSVG = memo(ArroyUp);
export default ArroyUpSVG;
