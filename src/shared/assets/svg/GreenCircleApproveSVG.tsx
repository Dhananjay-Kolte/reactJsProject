import { FC, memo } from 'react';
import { ISvgProps } from './types';

const GreenCircleApprove: FC<ISvgProps> = ({ width = '14', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.75 7C1.75 4.10051 4.10051 1.75 7 1.75C9.8995 1.75 12.25 4.10051 12.25 7C12.25 9.8995 9.8995 12.25 7 12.25C4.10051 12.25 1.75 9.8995 1.75 7ZM7 0.25C3.27208 0.25 0.25 3.27208 0.25 7C0.25 10.7279 3.27208 13.75 7 13.75C10.7279 13.75 13.75 10.7279 13.75 7C13.75 3.27208 10.7279 0.25 7 0.25ZM10.2677 6.04266C10.5674 5.75675 10.5786 5.282 10.2927 4.9823C10.0067 4.68259 9.532 4.67142 9.2323 4.95734L6.08169 7.96303L4.76817 6.70778C4.4687 6.4216 3.99395 6.43238 3.70778 6.73184C3.4216 7.0313 3.43238 7.50605 3.73184 7.79222L5.56309 9.54222C5.85281 9.81909 6.309 9.81928 6.59895 9.54267L10.2677 6.04266Z'
      fill='#2EF098'
    />
  </svg>
);
const GreenCircleApproveSVG = memo(GreenCircleApprove);
export default GreenCircleApproveSVG;
