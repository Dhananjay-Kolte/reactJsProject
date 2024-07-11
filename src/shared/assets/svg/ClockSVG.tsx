import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Clock: FC<ISvgProps> = ({ width = '14', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.75 7C1.75 4.10051 4.10051 1.75 7 1.75C9.8995 1.75 12.25 4.10051 12.25 7C12.25 9.8995 9.8995 12.25 7 12.25C4.10051 12.25 1.75 9.8995 1.75 7ZM7 0.25C3.27208 0.25 0.25 3.27208 0.25 7C0.25 10.7279 3.27208 13.75 7 13.75C10.7279 13.75 13.75 10.7279 13.75 7C13.75 3.27208 10.7279 0.25 7 0.25ZM7.75 3.5C7.75 3.08579 7.41421 2.75 7 2.75C6.58579 2.75 6.25 3.08579 6.25 3.5V7C6.25 7.41421 6.58579 7.75 7 7.75H10.5C10.9142 7.75 11.25 7.41421 11.25 7C11.25 6.58579 10.9142 6.25 10.5 6.25H7.75V3.5Z'
      fill='#FFA927'
    />
  </svg>
);
const ClockSVG = memo(Clock);
export default ClockSVG;
