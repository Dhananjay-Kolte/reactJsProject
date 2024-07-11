import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ArrowDown: FC<ISvgProps> = ({ width = '16', height = '8' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 10 6'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.03975 0.727252C1.25942 0.507583 1.61558 0.507583 1.83525 0.727252L5.1875 4.0795L8.53975 0.727252C8.75942 0.507583 9.11558 0.507583 9.33525 0.727252C9.55492 0.946922 9.55492 1.30308 9.33525 1.52275L5.58525 5.27275C5.36558 5.49242 5.00942 5.49242 4.78975 5.27275L1.03975 1.52275C0.820083 1.30308 0.820083 0.946922 1.03975 0.727252Z'
      fill='#595656'
    />
  </svg>
);
const ArrowDownSVG = memo(ArrowDown);
export default ArrowDownSVG;
