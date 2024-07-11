import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ExpandDown: FC<ISvgProps> = ({ width = '24', height = '24', fill }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill={fill || 'inherit'}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.9896 9C9.67361 9 9.0156 9 8.78947 9.42251C8.56335 9.84503 8.92835 10.3925 9.65835 11.4875L10.6687 13.0031C11.2708 13.9062 11.5719 14.3578 12 14.3578C12.4281 14.3578 12.7292 13.9062 13.3313 13.0031L14.3417 11.4875C15.0717 10.3925 15.4366 9.84503 15.2105 9.42251C14.9844 9 14.3264 9 13.0104 9H10.9896Z'
      fill={fill || '#dfe0e1'}
    />
  </svg>
);

const ExpandDownSVG = memo(ExpandDown);
export default ExpandDownSVG;
