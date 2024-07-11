import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const RightArrow: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
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
      d='M9.53033 2.96967C9.23744 2.67678 8.76256 2.67678 8.46967 2.96967C8.17678 3.26256 8.17678 3.73744 8.46967 4.03033L11.6893 7.25H2.5C2.08579 7.25 1.75 7.58579 1.75 8C1.75 8.41421 2.08579 8.75 2.5 8.75H11.6893L8.46967 11.9697C8.17678 12.2626 8.17678 12.7374 8.46967 13.0303C8.76256 13.3232 9.23744 13.3232 9.53033 13.0303L14.0303 8.53033C14.1768 8.38388 14.25 8.19194 14.25 8C14.25 7.89831 14.2298 7.80134 14.1931 7.71291C14.1565 7.62445 14.1022 7.54158 14.0303 7.46967L9.53033 2.96967Z'
      fill='inherit'
    />
  </svg>
);

const RightArrowSVG = memo(RightArrow);
export default RightArrowSVG;
