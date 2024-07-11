import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Ellipse: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
    style={{ margin: '0.4rem 0' }}
  >
    <circle cx='8' cy='8' r='4' fill='inherit' />
  </svg>
);
const EllipseSVG = memo(Ellipse);
export default EllipseSVG;
