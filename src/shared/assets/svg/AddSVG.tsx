import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Add: FC<ISvgProps> = ({ width = '15', height = '15' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 15 15'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.75 7.25H1.5M7.75 13.5V7.25V13.5ZM7.75 7.25V1V7.25ZM7.75 7.25H14H7.75Z'
      strokeWidth='1.66667'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const AddSVG = memo(Add);
export default AddSVG;
