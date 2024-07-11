import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Ready: FC<ISvgProps> = ({ width = '68', height = '68' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 68 68'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 22C12 18.2723 14.5495 15.1401 18 14.252V20C18 22.7614 20.2386 25 23 25C25.7614 25 28 22.7614 28 20V14H40V20C40 22.7614 42.2386 25 45 25C47.7614 25 50 22.7614 50 20V14.252C53.4505 15.1401 56 18.2723 56 22V34.5041C54.7215 34.175 53.3812 34 52 34C43.1634 34 36 41.1634 36 50C36 52.9143 36.7792 55.6466 38.1405 58H20C15.5817 58 12 54.4183 12 50V22Z'
      fill='#3D3D3D'
    />
    <rect x='43' y='10' width='4' height='12' rx='2' fill='#3D3D3D' />
    <rect x='21' y='10' width='4' height='12' rx='2' fill='#3D3D3D' />
    <circle cx='52' cy='50' r='12' fill='#3D3D3D' />
    <path
      d='M45.5 51L49.2748 54.3554C49.6788 54.7145 50.2951 54.6876 50.6662 54.2946L58.5 46'
      stroke='#1D1D1D'
      strokeWidth='2.5'
      strokeLinecap='round'
    />
  </svg>
);
const ReadySVG = memo(Ready);
export default ReadySVG;
