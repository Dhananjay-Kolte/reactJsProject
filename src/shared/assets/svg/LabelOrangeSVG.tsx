import { FC, memo } from 'react';
import { ISvgProps } from './types';

const LabelOrange: FC<ISvgProps> = ({ width = '32', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.65562 26.1267L5.45209 26.893V14.5361L2.1943 22.5551C1.64464 23.9509 2.30156 25.5519 3.65562 26.1267Z'
      fill='#FF7C01'
    />
    <path
      d='M13.8438 12.1455C14.396 12.1455 14.8438 11.6978 14.8438 11.1455C14.8438 10.5932 14.396 10.1455 13.8438 10.1455C13.2915 10.1455 12.8438 10.5932 12.8438 11.1455C12.8438 11.6978 13.2915 12.1455 13.8438 12.1455Z'
      fill='#FF7C01'
    />
    <path
      d='M7.84375 26.3332C7.84375 27.7999 9.1481 28.9999 10.7423 28.9999H12.8438L7.84375 17.8799V26.3332Z'
      fill='#FF7C01'
    />
    <rect
      x='8.30179'
      y='8.55258'
      width='14'
      height='21'
      rx='1'
      transform='rotate(-22 8.30179 8.55258)'
      stroke='#FF7C01'
      strokeWidth='2'
    />
  </svg>
);
const LabelOrangeSVG = memo(LabelOrange);
export default LabelOrangeSVG;
