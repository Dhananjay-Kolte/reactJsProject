import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const RedWarningCircle: FC<ISvgProps> = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 14.5563 5.44365 18.25 10 18.25C14.5563 18.25 18.25 14.5563 18.25 10C18.25 5.44365 14.5563 1.75 10 1.75ZM0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM10 4.75C10.4142 4.75 10.75 5.08579 10.75 5.5V10.75C10.75 11.1642 10.4142 11.5 10 11.5C9.58579 11.5 9.25 11.1642 9.25 10.75V5.5C9.25 5.08579 9.58579 4.75 10 4.75ZM11.125 14.125C11.125 14.7463 10.6213 15.25 10 15.25C9.37868 15.25 8.875 14.7463 8.875 14.125C8.875 13.5037 9.37868 13 10 13C10.6213 13 11.125 13.5037 11.125 14.125Z'
      fill='#FF4445'
    />
  </svg>
);
const RedWarningCircleSVG = memo(RedWarningCircle);
export default RedWarningCircleSVG;
