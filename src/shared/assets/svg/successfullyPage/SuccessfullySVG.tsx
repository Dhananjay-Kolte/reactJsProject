import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Successfully: FC<ISvgProps> = ({ width = '96', height = '96' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 96 96'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='4' y='8' width='80' height='80' rx='40' fill='#282828' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M94.8344 8.90293C96.2855 10.1967 96.3969 12.4041 95.0832 13.8332L48.786 64.1961C46.7041 66.4609 43.1446 66.6141 40.87 64.5369L17.1344 42.8608C15.699 41.55 15.6144 39.3415 16.9454 37.9279C18.2764 36.5144 20.5189 36.4311 21.9543 37.7418L44.5627 58.3885L89.8282 9.14791C91.1419 7.7188 93.3833 7.60912 94.8344 8.90293Z'
      fill='#2EF098'
    />
  </svg>
);
const SuccessfullySVG = memo(Successfully);
export default SuccessfullySVG;
