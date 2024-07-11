import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const SuccessFace: FC<ISvgProps> = ({ width = '40', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20 39.5C30.7696 39.5 39.5 30.7696 39.5 20C39.5 9.23045 30.7696 0.5 20 0.5C9.23045 0.5 0.5 9.23045 0.5 20C0.5 30.7696 9.23045 39.5 20 39.5ZM11 12.5C11 10.0147 13.0147 8 15.5 8H24.5C26.9853 8 29 10.0147 29 12.5V27.5C29 29.9853 26.9853 32 24.5 32H15.5C13.0147 32 11 29.9853 11 27.5V12.5ZM15.5 11C14.6716 11 14 11.6716 14 12.5V27.5C14 28.3284 14.6716 29 15.5 29H24.5C25.3284 29 26 28.3284 26 27.5V12.5C26 11.6716 25.3284 11 24.5 11H23.0587L21.4589 12.5289L19.3617 14.5992L23.0302 18.1301L23.8723 18.9407L23.0302 19.7512L19.2802 23.3606L17.7198 21.7395L20.6277 18.9407L16.9698 15.42L16.1383 14.6196L16.9597 13.8088L19.8049 11H15.5Z'
      fill='#FF7C01'
    />
  </svg>
);
const SuccessFaceSVG = memo(SuccessFace);
export default SuccessFaceSVG;
