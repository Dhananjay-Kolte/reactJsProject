import { FC, memo } from 'react';
import { ISvgProps } from './types';

const BurnCart: FC<ISvgProps> = ({ width = '16', height = '19' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 19'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.61719 5.10938C2.41406 6.92188 1.42969 9 1.42969 10.9375C1.42969 12.678 2.12109 14.3472 3.3518 15.5779C4.58251 16.8086 6.2517 17.5 7.99219 17.5C9.73267 17.5 11.4019 16.8086 12.6326 15.5779C13.8633 14.3472 14.5547 12.678 14.5547 10.9375C14.5547 6.875 11.7422 3.75 9.46094 1.47656L6.74219 7.1875L3.61719 5.10938Z'
      stroke='inherit'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const BurnCartSVG = memo(BurnCart);
export default BurnCartSVG;
