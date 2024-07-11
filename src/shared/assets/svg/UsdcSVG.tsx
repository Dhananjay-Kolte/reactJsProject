import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Usdc: FC<ISvgProps> = ({
  width = '20',
  height = '20',
  fill,
  secondFill,
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <mask
      id='mask0_3326_15315'
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='20'
      height='20'
    >
      <path d='M0 0H20V20H0V0Z' fill='white' />
    </mask>
    <g mask='url(#mask0_3326_15315)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 0C15.523 0 20 4.47705 20 10C20 15.5225 15.523 20 10 20C4.47705 20 0 15.5225 0 10C0 4.47705 4.47705 0 10 0Z'
        fill={fill || 'inherit'}
      />
    </g>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.12543 16.9522C8.12543 17.1875 7.94123 17.3211 7.71373 17.2501C4.69021 16.2855 2.49805 13.4504 2.49805 10.1052C2.49805 6.76008 4.69021 3.92485 7.71373 2.9603C7.94123 2.88973 8.12543 3.02292 8.12543 3.25814V3.83883C8.12543 3.99542 8.00407 4.17973 7.85486 4.23076C5.46271 5.10917 3.74907 7.40723 3.74907 10.1012C3.74907 12.7952 5.46271 15.0937 7.85486 15.9717C8.00407 16.0267 8.12543 16.2069 8.12543 16.3641V16.9522Z'
      fill={secondFill || 'inherit'}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.6233 14.7919C10.6233 14.9646 10.4821 15.1057 10.3096 15.1057H9.686C9.5135 15.1057 9.37237 14.9646 9.37237 14.7919V13.8038C8.00759 13.6196 7.34112 12.8547 7.16066 11.8156C7.12918 11.6389 7.27032 11.4782 7.45078 11.4782H8.16453C8.3135 11.4782 8.43907 11.5842 8.47043 11.733C8.60384 12.3527 8.96066 12.8272 10.0546 12.8272C10.8625 12.8272 11.4352 12.3762 11.4352 11.702C11.4352 11.0272 11.0978 10.7724 9.9135 10.5762C8.16453 10.341 7.33714 9.81141 7.33714 8.43891C7.33714 7.38016 8.13725 6.55675 9.37634 6.38016V5.41152C9.37634 5.23891 9.51759 5.09766 9.68998 5.09766H10.3136C10.4861 5.09766 10.6273 5.23891 10.6273 5.41152V6.40766C11.6351 6.58834 12.2743 7.1605 12.4823 8.10947C12.5213 8.29016 12.3802 8.45845 12.196 8.45845H11.537C11.3959 8.45845 11.2783 8.36425 11.2352 8.22709C11.0587 7.62345 10.6273 7.3647 9.87816 7.3647C9.05078 7.3647 8.62328 7.76459 8.62328 8.32527C8.62328 8.91743 8.86657 9.21527 10.1373 9.39993C11.8546 9.63516 12.7411 10.1253 12.7411 11.5883C12.7411 12.698 11.9175 13.5961 10.6273 13.8038V14.7919H10.6233Z'
      fill={secondFill || 'inherit'}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.2867 17.2507C12.0594 17.3217 11.875 17.188 11.875 16.9528V16.3726C11.875 16.2 11.9809 16.0393 12.1456 15.9802C14.5377 15.1018 16.2514 12.8037 16.2514 10.1097C16.2514 7.41577 14.5377 5.11771 12.1456 4.2393C11.9966 4.1843 11.875 4.00407 11.875 3.84691V3.26668C11.875 3.03146 12.0594 2.8943 12.2867 2.96839C15.3102 3.9335 17.5024 6.76862 17.5024 10.1137C17.4986 13.4509 15.3102 16.2821 12.2867 17.2507Z'
      fill={secondFill || 'inherit'}
    />
  </svg>
);
const UsdcSVG = memo(Usdc);
export default UsdcSVG;