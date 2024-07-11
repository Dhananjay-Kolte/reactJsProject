import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Green: FC<ISvgProps> = ({ width = '52', height = '52' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 52 52'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='26' cy='26' r='26' fill='#121212' />
    <path
      d='M37 26L34.56 23.21L34.9 19.52L31.29 18.7L29.4 15.5L26 16.96L22.6 15.5L20.71 18.69L17.1 19.5L17.44 23.2L15 26L17.44 28.79L17.1 32.49L20.71 33.31L22.6 36.5L26 35.03L29.4 36.49L31.29 33.3L34.9 32.48L34.56 28.79L37 26ZM23.38 30.01L21 27.61C20.61 27.22 20.61 26.59 21 26.2L21.07 26.13C21.46 25.74 22.1 25.74 22.49 26.13L24.1 27.75L29.25 22.59C29.64 22.2 30.28 22.2 30.67 22.59L30.74 22.66C31.13 23.05 31.13 23.68 30.74 24.07L24.82 30.01C24.41 30.4 23.78 30.4 23.38 30.01Z'
      fill='#2EF098'
    />
  </svg>
);
const GreenSVG = memo(Green);
export default GreenSVG;
