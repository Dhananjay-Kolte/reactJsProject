import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ArrowSquareUpRight: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
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
      d='M12.75 12.75H3.25V3.25H12.75V12.75ZM1.75 13C1.75 13.6904 2.30964 14.25 3 14.25H13C13.6904 14.25 14.25 13.6904 14.25 13V3C14.25 2.30964 13.6904 1.75 13 1.75H3C2.30964 1.75 1.75 2.30964 1.75 3V13ZM10.2803 5.71967C10.3522 5.79158 10.4065 5.87445 10.4431 5.96291C10.4798 6.05134 10.5 6.14831 10.5 6.25V9.25C10.5 9.66421 10.1642 10 9.75 10C9.33579 10 9 9.66421 9 9.25V8.06066L6.78033 10.2803C6.48744 10.5732 6.01256 10.5732 5.71967 10.2803C5.42678 9.98744 5.42678 9.51256 5.71967 9.21967L7.93934 7H6.75C6.33579 7 6 6.66421 6 6.25C6 5.83579 6.33579 5.5 6.75 5.5H9.75C9.94194 5.5 10.1339 5.57322 10.2803 5.71967Z'
      fill='#5BEAFF'
    />
  </svg>
);
const ArrowSquareUpRightSVG = memo(ArrowSquareUpRight);
export default ArrowSquareUpRightSVG;
