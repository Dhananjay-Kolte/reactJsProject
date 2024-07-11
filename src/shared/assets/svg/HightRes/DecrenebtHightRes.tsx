import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const DecrementHeightIcon: FC<ISvgProps> = ({
  width = '23',
  height = '3',
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 23 3'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='0.5' y='0.125' width='21.875' height='2.625' rx='1.3125' />
  </svg>
);

const DecrementHeightSVG = memo(DecrementHeightIcon);

export default DecrementHeightSVG;
