import { FC, memo } from 'react';
import { ISvgProps } from './types';

const OutsideLink: FC<ISvgProps> = ({
  width = '12',
  height = '12',
  fill = '#5BEAFF',
  style,
}) => (
  <svg
    style={style}
    width={width}
    height={height}
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.56 10.56H1.44V1.44H10.56V10.56ZM0 10.8C0 11.4627 0.537258 12 1.2 12H10.8C11.4627 12 12 11.4627 12 10.8V1.2C12 0.537258 11.4627 0 10.8 0H1.2C0.537258 0 0 0.537258 0 1.2V10.8ZM8.18912 3.81088C8.25815 3.87991 8.31023 3.95948 8.34537 4.0444C8.38057 4.12929 8.4 4.22238 8.4 4.32V7.2C8.4 7.59764 8.07764 7.92 7.68 7.92C7.28235 7.92 6.96 7.59764 6.96 7.2V6.05823L4.82912 8.18912C4.54794 8.47029 4.09206 8.47029 3.81088 8.18912C3.52971 7.90794 3.52971 7.45206 3.81088 7.17088L5.94177 5.04H4.8C4.40235 5.04 4.08 4.71765 4.08 4.32C4.08 3.92235 4.40235 3.6 4.8 3.6H7.68C7.86426 3.6 8.04853 3.67029 8.18912 3.81088Z'
      fill={fill}
    />
  </svg>
);
const OutsideLinkSVG = memo(OutsideLink);
export default OutsideLinkSVG;
