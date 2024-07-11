import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Pin: FC<ISvgProps> = ({ width = '12', height = '12' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.4984 0.717773C4.62272 0.717773 4.7458 0.7425 4.86048 0.790516C4.97434 0.838193 5.07767 0.907886 5.16452 0.995586L7.83408 3.66515C8.00485 3.61929 8.22581 3.57689 8.48405 3.56536C9.10284 3.53773 9.91464 3.68946 10.7301 4.34839L10.7304 4.34863C10.8328 4.43151 10.9166 4.53504 10.9763 4.65248C11.036 4.76991 11.0703 4.89862 11.0769 5.0302C11.0836 5.16178 11.0624 5.29328 11.0148 5.41612C10.9674 5.53851 10.8948 5.64957 10.8017 5.74212L10.8007 5.74316L8.66888 7.87497L10.1462 9.35225C10.3658 9.57192 10.3658 9.92808 10.1462 10.1477C9.92649 10.3674 9.57034 10.3674 9.35067 10.1477L7.87338 8.67047L5.75063 10.7932C5.65646 10.8884 5.54299 10.9624 5.41785 11.01C5.29179 11.0581 5.15684 11.0783 5.02222 11.0694C4.88761 11.0605 4.7565 11.0227 4.63785 10.9585C4.51971 10.8945 4.41671 10.806 4.33579 10.6988C3.96816 10.213 3.25865 9.06966 3.65064 7.82269L0.994025 5.16608C0.906324 5.07923 0.836632 4.97591 0.788955 4.86204C0.74094 4.74736 0.716211 4.62428 0.716211 4.49996C0.716211 4.37563 0.74094 4.25255 0.788955 4.13788C0.836628 4.02402 0.906315 3.9207 0.994007 3.83385L3.83224 0.995623C3.9191 0.907906 4.02243 0.8382 4.13632 0.790516C4.25099 0.742501 4.37407 0.717773 4.4984 0.717773ZM7.93446 4.8171L7.93327 4.81764C7.71757 4.92329 7.45827 4.88033 7.28815 4.71021L4.4984 1.92045L1.91889 4.49996L4.70864 7.28971C4.8801 7.46117 4.92239 7.7232 4.81357 7.93989C4.47584 8.61243 4.76979 9.33752 5.10821 9.84465L9.85535 5.09751C9.3435 4.74171 8.87575 4.67399 8.53423 4.68924C8.34004 4.69791 8.18105 4.73399 8.07375 4.76653C8.02038 4.78271 7.98078 4.79772 7.95718 4.80736C7.94542 4.81217 7.93775 4.8156 7.93446 4.8171Z'
      fill='#FF7C01'
    />
  </svg>
);
const PinSVG = memo(Pin);
export default PinSVG;
