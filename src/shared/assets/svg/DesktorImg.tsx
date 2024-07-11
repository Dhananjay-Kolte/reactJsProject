import { FC, memo } from 'react';
import { ISvgProps } from './types';

const DesktorImgSVG: FC<ISvgProps> = ({ width = '770', height = '744' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 770 744'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 16C0 7.16343 7.16344 0 16 0H754C762.837 0 770 7.16344 770 16V728C770 736.837 762.837 744 754 744H16C7.16342 744 0 736.837 0 728V16Z'
      fill='#5BEAFF'
    />
  </svg>
);
const DesktorImg = memo(DesktorImgSVG);
export default DesktorImg;
