import { FC, memo } from 'react';
import { ISvgProps } from '../../types';

const FacebookCircle: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.6955 8.937V10.314H9.6875V11.997H10.6955V17H12.7675V11.997H14.1575C14.1575 11.997 14.2885 11.19 14.3515 10.307H12.7755V9.157C12.7755 8.984 13.0015 8.753 13.2255 8.753H14.3535V7H12.8185C10.6445 7 10.6955 8.685 10.6955 8.937Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 3.71429C7.42455 3.71429 3.71428 7.42456 3.71428 12C3.71428 16.5754 7.42455 20.2857 12 20.2857C16.5764 20.2857 20.2857 16.5755 20.2857 12C20.2857 7.4245 16.5764 3.71429 12 3.71429ZM2 12C2 6.47778 6.47778 2 12 2C17.5233 2 22 6.47784 22 12C22 17.5222 17.5233 22 12 22C6.47778 22 2 17.5222 2 12Z'
      fill='white'
    />
  </svg>
);
const FacebookCircleSVG = memo(FacebookCircle);
export default FacebookCircleSVG;
