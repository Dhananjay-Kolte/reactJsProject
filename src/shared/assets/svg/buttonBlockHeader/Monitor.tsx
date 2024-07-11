import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Monitor: FC<ISvgProps> = ({ width = '15', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 15 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.5 2.375H2.5C1.80964 2.375 1.25 2.93464 1.25 3.625V9.875C1.25 10.5654 1.80964 11.125 2.5 11.125H12.5C13.1904 11.125 13.75 10.5654 13.75 9.875V3.625C13.75 2.93464 13.1904 2.375 12.5 2.375Z'
      stroke='#5F6567'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 13.625H10'
      stroke='#5F6567'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.5 11.125V13.625'
      stroke='#5F6567'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const MonitorSvg = memo(Monitor);
export default MonitorSvg;
