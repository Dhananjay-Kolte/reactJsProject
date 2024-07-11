import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Archive: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.89453 9.53906V19.3988C3.89453 19.7369 4.20667 19.9998 4.56043 19.9998H19.4182C19.7928 19.9998 20.0841 19.7181 20.0841 19.3988V9.53906H3.89453ZM15.3604 13.3139C15.3604 13.652 15.0483 13.9149 14.6945 13.9149H9.28412C8.90956 13.9149 8.61823 13.6332 8.61823 13.3139V12.0932C8.61823 11.7552 8.93037 11.4922 9.28412 11.4922H14.6945C15.0691 11.4922 15.3604 11.7739 15.3604 12.0932V13.3139Z'
      fill='inherit'
    />
    <path
      d='M20.3133 4H3.6659C3.29133 4 3 4.28171 3 4.60098V8.15049H21V4.61976C20.9792 4.28171 20.6879 4 20.3133 4Z'
      fill='inherit'
    />
  </svg>
);
const ArchiveSVG = memo(Archive);
export default ArchiveSVG;
