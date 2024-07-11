import { FC, memo } from 'react';
import { ISvgProps } from './types';

const CrossSVG: FC<ISvgProps> = ({ width = '18', height = '18' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 18 18'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.09656 14.0946L8.99898 10.1922L12.9024 14.0956L14.0956 12.9023L10.1922 8.99896L14.0956 5.09559L12.9024 3.90234L8.99898 7.80572L5.09656 3.90331L3.90332 5.09655L7.80574 8.99896L3.90332 12.9014L5.09656 14.0946Z'
    />
  </svg>
);
const Cross = memo(CrossSVG);
export default Cross;
