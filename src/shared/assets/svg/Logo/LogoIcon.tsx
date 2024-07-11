import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const LogoIconSVG: FC<ISvgProps> = ({ width = '44', height = '64' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 44 64'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 39.3242V49.6108L22.7903 63.9992L22.795 54.1393L0 39.3242Z'
      fill='#0483FF'
    />
    <path
      d='M43.9526 13.125V23.6548L18.3716 38.5387L7.88867 31.5922L43.9526 13.125Z'
      fill='#E35200'
    />
    <path
      d='M44 41.5974L22.7903 54.1414L0 39.3768V14.0273L44 41.5974Z'
      fill='#5BEAFF'
    />
    <path
      d='M43.9531 13.1266L0 39.3845V14.0259L22.992 0L43.9531 13.1266Z'
      fill='#FF7C01'
    />
    <path
      d='M22.7891 54.137V63.9969L43.9987 51.297V41.5977L22.7891 54.137Z'
      fill='#0483FF'
    />
  </svg>
);

const LogoIcon = memo(LogoIconSVG);
export default LogoIcon;
