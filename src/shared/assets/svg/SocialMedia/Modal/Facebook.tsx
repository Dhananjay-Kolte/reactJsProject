import { FC, memo } from 'react';
import { ISvgProps } from '../../types';

const Facebook: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6 4C4.89551 4 4 4.89543 4 6V18C4 19.1046 4.89551 20 6 20H10.0312V14.5208H8V12.2083H10.0312V10.4458C10.0312 8.44116 11.2249 7.33333 13.0531 7.33333C13.9281 7.33333 14.8438 7.48958 14.8438 7.48958V9.45833H13.8343C12.8407 9.45833 12.5312 10.0755 12.5312 10.7083V12.2083H14.75L14.3953 14.5208H12.5312V20H18C19.1045 20 20 19.1046 20 18V6C20 4.89543 19.1045 4 18 4H6Z'
      fill='#DFE0E1'
    />
  </svg>
);
const FacebookSVG = memo(Facebook);
export default FacebookSVG;
