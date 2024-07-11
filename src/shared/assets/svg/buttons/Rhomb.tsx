import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Rhomb: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.0606 8.48922C12.4749 7.90344 11.5251 7.90344 10.9393 8.48923L8.48923 10.9393C7.90345 11.5251 7.90344 12.4749 8.48922 13.0607L10.9393 15.5108C11.5251 16.0966 12.4749 16.0966 13.0607 15.5108L15.5108 13.0607C16.0966 12.4749 16.0966 11.5251 15.5108 10.9393L13.0606 8.48922ZM5.06066 10.9393C4.47487 11.5251 4.47487 12.4749 5.06066 13.0607L10.9393 18.9393C11.5251 19.5251 12.4749 19.5251 13.0606 18.9393L18.9393 13.0607C19.5251 12.4749 19.5251 11.5251 18.9393 10.9393L13.0606 5.06066C12.4749 4.47487 11.5251 4.47487 10.9393 5.06066L5.06066 10.9393Z'
      fill='inherit'
    />
  </svg>
);
const RhombSVG = memo(Rhomb);
export default RhombSVG;
