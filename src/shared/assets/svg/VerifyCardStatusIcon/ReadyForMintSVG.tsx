import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ReadyForMint: FC<ISvgProps> = ({ width = '48', height = '48' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 48 48'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 33.1127 33.1127 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24ZM24 4.5C13.2304 4.5 4.5 13.2304 4.5 24C4.5 34.7696 13.2304 43.5 24 43.5C34.7696 43.5 43.5 34.7696 43.5 24C43.5 13.2304 34.7696 4.5 24 4.5ZM33.2854 20.5853C33.8848 20.0135 33.9072 19.064 33.3353 18.4646C32.7635 17.8652 31.814 17.8428 31.2146 18.4147L21.2446 27.9261L16.7863 23.6656C16.1874 23.0932 15.2379 23.1147 14.6656 23.7137C14.0932 24.3126 14.1147 25.2621 14.7137 25.8344L20.2074 31.0844C20.7869 31.6382 21.6992 31.6386 22.2792 31.0853L33.2854 20.5853Z'
      fill='#2EF098'
    />
  </svg>
);
const ReadyForMintSVG = memo(ReadyForMint);
export default ReadyForMintSVG;
