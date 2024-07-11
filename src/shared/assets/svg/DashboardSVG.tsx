import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Dashboard: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
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
      d='M7.5 5C8.88071 5 10 6.11929 10 7.5C10 8.88071 8.88071 10 7.5 10C6.11929 10 5 8.88071 5 7.5C5 6.11929 6.11929 5 7.5 5ZM16.5 5C17.8807 5 19 6.11929 19 7.5C19 8.88071 17.8807 10 16.5 10C15.1193 10 14 8.88071 14 7.5C14 6.11929 15.1193 5 16.5 5ZM19 16.5C19 15.1193 17.8807 14 16.5 14C15.1193 14 14 15.1193 14 16.5C14 17.8807 15.1193 19 16.5 19C17.8807 19 19 17.8807 19 16.5ZM7.5 14C8.88071 14 10 15.1193 10 16.5C10 17.8807 8.88071 19 7.5 19C6.11929 19 5 17.8807 5 16.5C5 15.1193 6.11929 14 7.5 14Z'
    />
  </svg>
);
const DashboardSVG = memo(Dashboard);
export default DashboardSVG;
