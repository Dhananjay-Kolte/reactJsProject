import { FC, memo } from 'react';
import { ISvgProps } from './types';

const WarningCircle: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 2.75C5.10051 2.75 2.75 5.10051 2.75 8C2.75 10.8995 5.10051 13.25 8 13.25C10.8995 13.25 13.25 10.8995 13.25 8C13.25 5.10051 10.8995 2.75 8 2.75ZM1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8ZM8 4.25C8.41421 4.25 8.75 4.58579 8.75 5V8.25C8.75 8.66421 8.41421 9 8 9C7.58579 9 7.25 8.66421 7.25 8.25V5C7.25 4.58579 7.58579 4.25 8 4.25ZM9 10.75C9 11.3023 8.55228 11.75 8 11.75C7.44772 11.75 7 11.3023 7 10.75C7 10.1977 7.44772 9.75 8 9.75C8.55228 9.75 9 10.1977 9 10.75Z'
      fill='#FF4445'
    />
  </svg>
);
const WarningCircleSVG = memo(WarningCircle);
export default WarningCircleSVG;
