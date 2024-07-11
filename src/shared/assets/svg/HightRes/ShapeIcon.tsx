import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const ShapeIcon: FC<ISvgProps> = ({
  width = '17',
  height = '17',
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.125 17.125H2.875V2.875H17.125V17.125ZM0.625 17.5C0.625 18.5355 1.46447 19.375 2.5 19.375H17.5C18.5355 19.375 19.375 18.5355 19.375 17.5V2.5C19.375 1.46447 18.5355 0.625 17.5 0.625H2.5C1.46447 0.625 0.625 1.46447 0.625 2.5V17.5ZM13.4205 6.5795C13.5284 6.68737 13.6097 6.81168 13.6646 6.94437C13.7196 7.07701 13.75 7.22246 13.75 7.375V11.875C13.75 12.4963 13.2463 13 12.625 13C12.0037 13 11.5 12.4963 11.5 11.875V10.091L8.17049 13.4205C7.73116 13.8598 7.01884 13.8598 6.5795 13.4205C6.14016 12.9812 6.14016 12.2688 6.5795 11.8295L9.90901 8.5H8.125C7.50368 8.5 7 7.99632 7 7.375C7 6.75368 7.50368 6.25 8.125 6.25H12.625C12.9129 6.25 13.2008 6.35984 13.4205 6.5795Z'
      fill='#939393'
    />
  </svg>
);

const ShapeIconSVG = memo(ShapeIcon);

export default ShapeIconSVG;
