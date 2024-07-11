import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const CreditCart: FC<ISvgProps> = ({ width = '36', height = '36' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 36 36'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g opacity='0.6'>
      <path
        d='M31.5 6H4.5C2.84315 6 1.5 7.34315 1.5 9V27C1.5 28.6569 2.84315 30 4.5 30H31.5C33.1569 30 34.5 28.6569 34.5 27V9C34.5 7.34315 33.1569 6 31.5 6Z'
        stroke='#323232'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M1.5 15H34.5'
        stroke='#323232'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);

const CreditCartSvg = memo(CreditCart);
export default CreditCartSvg;
