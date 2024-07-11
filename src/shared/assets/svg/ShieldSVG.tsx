import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Shield: FC<ISvgProps> = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.0625 4.6875V8.96094C4.0625 14.687 8.76197 16.7072 10 17.1387C11.238 16.7072 15.9375 14.687 15.9375 8.96094V4.6875H4.0625ZM2.64515 3.27015C2.93817 2.97712 3.3356 2.8125 3.75 2.8125H16.25C16.6644 2.8125 17.0618 2.97712 17.3549 3.27015C17.6479 3.56317 17.8125 3.9606 17.8125 4.375V8.96094C17.8125 16.1677 11.6923 18.5521 10.5022 18.9484C10.1774 19.0639 9.82264 19.0639 9.49779 18.9484C8.30766 18.5521 2.1875 16.1677 2.1875 8.96094V4.375C2.1875 3.9606 2.35212 3.56317 2.64515 3.27015Z'
      fill='#DFE0E1'
    />
  </svg>
);
const ShieldSVG = memo(Shield);
export default ShieldSVG;
