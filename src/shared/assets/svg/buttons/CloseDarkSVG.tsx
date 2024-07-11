import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const CloseDark: FC<ISvgProps> = ({
  width = '19',
  height = '18',
  type = 'original',
}) =>
  type === 'original' ? (
    <svg
      width={width}
      height={height}
      viewBox='0 0 19 18'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.8337 3L3.16699 15M15.8337 15L3.16699 3L15.8337 15Z'
        stroke='#121212'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ) : (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16'
        stroke='#121212'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
const CloseDarkSVG = memo(CloseDark);
export default CloseDarkSVG;
