import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Сheckmark: FC<ISvgProps> = ({ width = '13', height = '13' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 13 10'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.0303 0.96967C12.3232 1.26256 12.3232 1.73744 12.0303 2.03033L5.03033 9.03033C4.73744 9.32322 4.26256 9.32322 3.96967 9.03033L0.46967 5.53033C0.176777 5.23744 0.176777 4.76256 0.46967 4.46967C0.762563 4.17678 1.23744 4.17678 1.53033 4.46967L4.5 7.43934L10.9697 0.96967C11.2626 0.676777 11.7374 0.676777 12.0303 0.96967Z'
      fill='#939393'
    />
  </svg>
);
const СheckmarkSVG = memo(Сheckmark);
export default СheckmarkSVG;
