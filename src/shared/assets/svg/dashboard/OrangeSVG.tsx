import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Orange: FC<ISvgProps> = ({ width = '52', height = '52' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 52 52'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='26' cy='26' r='26' fill='#121212' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.166 26.0001C15.166 20.0201 20.0193 15.1667 25.9993 15.1667C31.9793 15.1667 36.8327 20.0201 36.8327 26.0001C36.8327 31.9801 31.9793 36.8334 25.9993 36.8334C20.0193 36.8334 15.166 31.9801 15.166 26.0001ZM24.916 26.0001C24.916 26.5959 25.4035 27.0834 25.9993 27.0834C26.5952 27.0834 27.0827 26.5959 27.0827 26.0001V21.6667C27.0827 21.0709 26.5952 20.5834 25.9993 20.5834C25.4035 20.5834 24.916 21.0709 24.916 21.6667V26.0001Z'
      fill='#FF7C01'
    />
    <circle cx='25.9993' cy='29.2501' r='1.08333' fill='#121212' />
  </svg>
);
const OrangeSVG = memo(Orange);
export default OrangeSVG;
