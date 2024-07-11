import { FC, memo } from 'react';
import { ISvgProps } from './types';

const InvalidStatusIconSVG: FC<ISvgProps> = ({
  width = '24',
  height = '24',
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_3694_50363)'>
      <circle cx='12' cy='12' r='12' fill='#0D0D0D' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.8242 7L12.6912 7.11639L11.5474 8.24547L13.5155 10.1398L13.8898 10.5L13.5155 10.8602L11.5675 12.7352L10.874 12.0148L12.4478 10.5L10.4844 8.61025L10.1148 8.25453L10.4799 7.89417L11.3857 7H9.71436C9.16207 7 8.71436 7.44771 8.71436 8V16C8.71436 16.5523 9.16207 17 9.71435 17H14.2858C14.8381 17 15.2858 16.5523 15.2858 16V8C15.2858 7.44771 14.8381 7 14.2858 7H12.8242ZM12.4485 6H9.71436C8.60979 6 7.71436 6.89543 7.71436 8V16C7.71436 17.1046 8.60979 18 9.71435 18H14.2858C15.3904 18 16.2858 17.1046 16.2858 16V8C16.2858 6.89543 15.3904 6 14.2858 6H12.451L12.4499 5.99872L12.4485 6Z'
        fill='inherit'
      />
    </g>
    <defs>
      <clipPath id='clip0_3694_50363'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const InvalidStatusIcon = memo(InvalidStatusIconSVG);
export default InvalidStatusIcon;
