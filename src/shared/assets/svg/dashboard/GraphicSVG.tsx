import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Graphic: FC<ISvgProps> = ({ width = '72', height = '37' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 72 37'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M70 13.5L67.5 15.1494L61.1017 6.53112L58.5001 12.4481L56.6476 10.0041L53.5523 15.4066V10.8879L52.0424 0.999998L50.91 8.71784H48.1923L42.6812 17.9793L39.6615 12.4481L35.8868 29.556L31.5001 15.4066L29.8096 26.3879L26.2236 24.0249L23.1284 32L21.392 22.8672L19.2782 15.4066L16.032 18.2365L13.4652 15.1494L10.1435 23.1245L7.42572 15.4066L3.50005 23.639'
      stroke='#121212'
      strokeWidth='1.5'
    />
  </svg>
);
const GraphicSVG = memo(Graphic);
export default GraphicSVG;
