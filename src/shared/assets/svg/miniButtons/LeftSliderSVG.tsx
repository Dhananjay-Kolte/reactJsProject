import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const LeftSlider: FC<ISvgProps> = ({ width = '9', height = '14' }) => (
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
      d='M7.84662 0.778379C8.17613 1.10788 8.17613 1.64212 7.84662 1.97162L2.81824 7L7.84662 12.0284C8.17613 12.3579 8.17613 12.8921 7.84662 13.2216C7.51712 13.5511 6.98288 13.5511 6.65338 13.2216L1.02838 7.59662C0.698874 7.26712 0.698874 6.73288 1.02838 6.40338L6.65338 0.778379C6.98288 0.448874 7.51712 0.448874 7.84662 0.778379Z'
      fill='inherit'
    />
  </svg>
);

export const LeftSliderSVG = memo(LeftSlider);
