import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const LeftArrow: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
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
      d='M7.53033 4.03033C7.82322 3.73744 7.82322 3.26256 7.53033 2.96967C7.23744 2.67678 6.76256 2.67678 6.46967 2.96967L1.96967 7.46967C1.82322 7.61612 1.75 7.80806 1.75 8C1.75 8.10169 1.77024 8.19866 1.80691 8.28709C1.84351 8.37555 1.89776 8.45842 1.96967 8.53033L6.46967 13.0303C6.76256 13.3232 7.23744 13.3232 7.53033 13.0303C7.82322 12.7374 7.82322 12.2626 7.53033 11.9697L4.31066 8.75H13.5C13.9142 8.75 14.25 8.41421 14.25 8C14.25 7.58579 13.9142 7.25 13.5 7.25H4.31066L7.53033 4.03033Z'
      fill='inherit'
    />
  </svg>
);

const LeftArrowSVG = memo(LeftArrow);
export default LeftArrowSVG;
