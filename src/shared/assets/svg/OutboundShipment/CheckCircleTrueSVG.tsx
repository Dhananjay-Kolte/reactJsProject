import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const CheckCircleTrue: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.75 8C2.75 5.10051 5.10051 2.75 8 2.75C10.8995 2.75 13.25 5.10051 13.25 8C13.25 10.8995 10.8995 13.25 8 13.25C5.10051 13.25 2.75 10.8995 2.75 8ZM8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25ZM11.2677 7.04266C11.5674 6.75675 11.5786 6.282 11.2927 5.9823C11.0067 5.68259 10.532 5.67142 10.2323 5.95734L7.08169 8.96303L5.76817 7.70778C5.4687 7.4216 4.99395 7.43238 4.70778 7.73184C4.4216 8.0313 4.43238 8.50605 4.73184 8.79222L6.56309 10.5422C6.85281 10.8191 7.309 10.8193 7.59895 10.5427L11.2677 7.04266Z'
      fill='#2EF098'
    />
  </svg>
);
const CheckCircleTrueSVG = memo(CheckCircleTrue);
export default CheckCircleTrueSVG;
