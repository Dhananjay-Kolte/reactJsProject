import { FC, memo } from 'react';
import { ISvgProps } from './types';

const RedCircleRejected: FC<ISvgProps> = ({ width = '14', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 9.8995 4.10051 12.25 7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.10051 9.8995 1.75 7 1.75ZM0.25 7C0.25 3.27208 3.27208 0.25 7 0.25C10.7279 0.25 13.75 3.27208 13.75 7C13.75 10.7279 10.7279 13.75 7 13.75C3.27208 13.75 0.25 10.7279 0.25 7ZM9.53033 4.46967C9.82322 4.76256 9.82322 5.23744 9.53033 5.53033L8.06066 7L9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L7 8.06066L5.53033 9.53033C5.23744 9.82322 4.76256 9.82322 4.46967 9.53033C4.17678 9.23744 4.17678 8.76256 4.46967 8.46967L5.93934 7L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L7 5.93934L8.46967 4.46967C8.76256 4.17678 9.23744 4.17678 9.53033 4.46967Z'
      fill='#FF4445'
    />
  </svg>
);
const RedCircleRejectedSVG = memo(RedCircleRejected);
export default RedCircleRejectedSVG;
