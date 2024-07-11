import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ExpandUp: FC<ISvgProps> = ({ width = '24', height = '24', fill }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill={fill || 'inherit'}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M13.0104 15.5C14.3264 15.5 14.9844 15.5 15.2105 15.0775C15.4366 14.655 15.0717 14.1075 14.3417 13.0125L13.3313 11.4969C12.7292 10.5938 12.4281 10.1422 12 10.1422C11.5719 10.1422 11.2708 10.5938 10.6687 11.4969L9.65835 13.0125C8.92835 14.1075 8.56335 14.655 8.78947 15.0775C9.0156 15.5 9.67361 15.5 10.9896 15.5L13.0104 15.5Z'
      fill={fill || '#dfe0e1'}
    />
  </svg>
);

const ExpandUpSVG = memo(ExpandUp);
export default ExpandUpSVG;
