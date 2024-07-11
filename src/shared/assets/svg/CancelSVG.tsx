import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Cancel: FC<ISvgProps> = ({ width = '17', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 17 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.5303 4.03033C13.8232 3.73744 13.8232 3.26256 13.5303 2.96967C13.2374 2.67678 12.7626 2.67678 12.4697 2.96967L8.5 6.93934L4.53033 2.96967C4.23744 2.67678 3.76256 2.67678 3.46967 2.96967C3.17678 3.26256 3.17678 3.73744 3.46967 4.03033L7.43934 8L3.46967 11.9697C3.17678 12.2626 3.17678 12.7374 3.46967 13.0303C3.76256 13.3232 4.23744 13.3232 4.53033 13.0303L8.5 9.06066L12.4697 13.0303C12.7626 13.3232 13.2374 13.3232 13.5303 13.0303C13.8232 12.7374 13.8232 12.2626 13.5303 11.9697L9.56066 8L13.5303 4.03033Z'
      fill='#E8EAED'
    />
  </svg>
);
const CancelSVG = memo(Cancel);
export default CancelSVG;
