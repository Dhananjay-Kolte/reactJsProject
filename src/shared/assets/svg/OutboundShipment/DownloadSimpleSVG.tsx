import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const DownloadSimple: FC<ISvgProps> = ({ width = '16', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 16 16'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.38867 1.75C8.80289 1.75 9.13867 2.08579 9.13867 2.5V7.68934L10.4833 6.34467C10.7762 6.05178 11.2511 6.05178 11.544 6.34467C11.8369 6.63756 11.8369 7.11244 11.544 7.40533L8.919 10.0303C8.84709 10.1022 8.76422 10.1565 8.67576 10.1931C8.58733 10.2298 8.49036 10.25 8.38867 10.25C8.28698 10.25 8.19001 10.2298 8.10158 10.1931C8.01312 10.1565 7.93025 10.1022 7.85834 10.0303L5.23334 7.40533C4.94045 7.11244 4.94045 6.63756 5.23334 6.34467C5.52624 6.05178 6.00111 6.05178 6.294 6.34467L7.63867 7.68934V2.5C7.63867 2.08579 7.97446 1.75 8.38867 1.75ZM3.63867 9.5C3.63867 9.08579 3.30289 8.75 2.88867 8.75C2.47446 8.75 2.13867 9.08579 2.13867 9.5V13C2.13867 13.3315 2.27037 13.6495 2.50479 13.8839C2.73921 14.1183 3.05715 14.25 3.38867 14.25H13.3887C13.7202 14.25 14.0381 14.1183 14.2726 13.8839C14.507 13.6495 14.6387 13.3315 14.6387 13V9.5C14.6387 9.08579 14.3029 8.75 13.8887 8.75C13.4745 8.75 13.1387 9.08579 13.1387 9.5V12.75H3.63867V9.5Z'
      fill='inherit'
    />
  </svg>
);
const DownloadSimpleSVG = memo(DownloadSimple);
export default DownloadSimpleSVG;