import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const BigSnowflake: FC<ISvgProps> = ({ width = '142', height = '141' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M70.5039 0V27.4167' stroke='white' strokeWidth='3.43902' />
    <path d='M70.5039 113.583V141' stroke='white' strokeWidth='3.43902' />
    <path
      d='M35.2539 9.44501L48.9622 33.1885'
      stroke='white'
      strokeWidth='3.43902'
    />
    <path
      d='M92.0459 107.811L105.754 131.555'
      stroke='white'
      strokeWidth='3.43902'
    />
    <path
      d='M9.44946 35.25L33.193 48.9583'
      stroke='white'
      strokeWidth='3.43902'
    />
    <path
      d='M107.815 92.0417L131.559 105.75'
      stroke='white'
      strokeWidth='3.43902'
    />
    <path d='M0.00390625 70.5H27.4206' stroke='white' strokeWidth='3.43902' />
    <path d='M113.587 70.5H141.004' stroke='white' strokeWidth='3.43902' />
    <path
      d='M9.44946 105.75L33.193 92.0417'
      stroke='white'
      strokeWidth='3.43902'
    />
    <path
      d='M107.815 48.9583L131.559 35.25'
      stroke='white'
      strokeWidth='3.43902'
    />
    <path
      d='M35.2539 131.555L48.9622 107.811'
      stroke='white'
      strokeWidth='3.43902'
    />
    <path
      d='M92.0459 33.1888L105.754 9.44525'
      stroke='white'
      strokeWidth='3.43902'
    />
  </svg>
);
const BigSnowflakeSVG = memo(BigSnowflake);
export default BigSnowflakeSVG;
