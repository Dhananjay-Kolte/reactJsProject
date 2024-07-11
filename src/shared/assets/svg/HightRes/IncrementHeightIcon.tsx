import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const InrementHeightIcon: FC<ISvgProps> = ({
  width = '22',
  height = '22',
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.3125 1.375C12.3125 0.650126 11.7249 0.0625 11 0.0625C10.2751 0.0625 9.6875 0.650126 9.6875 1.375V9.6875H1.375C0.650126 9.6875 0.0625 10.2751 0.0625 11C0.0625 11.7249 0.650126 12.3125 1.375 12.3125H9.6875V20.625C9.6875 21.3499 10.2751 21.9375 11 21.9375C11.7249 21.9375 12.3125 21.3499 12.3125 20.625V12.3125H20.625C21.3499 12.3125 21.9375 11.7249 21.9375 11C21.9375 10.2751 21.3499 9.6875 20.625 9.6875H12.3125V1.375Z'
    />
  </svg>
);

const IncrementHeightSVG = memo(InrementHeightIcon);

export default IncrementHeightSVG;
