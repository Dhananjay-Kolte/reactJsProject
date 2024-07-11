import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const RightSlider: FC<ISvgProps> = ({ width = '9', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 9 14'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.15338 0.778379C1.48288 0.448874 2.01712 0.448874 2.34662 0.778379L7.97162 6.40338C8.30113 6.73288 8.30113 7.26712 7.97162 7.59662L2.34662 13.2216C2.01712 13.5511 1.48288 13.5511 1.15338 13.2216C0.823874 12.8921 0.823874 12.3579 1.15338 12.0284L6.18176 7L1.15338 1.97162C0.823874 1.64212 0.823874 1.10788 1.15338 0.778379Z'
      fill='inherit'
    />
  </svg>
);

export const RightSliderSVG = memo(RightSlider);
