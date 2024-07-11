import { FC, memo } from 'react';
import { ISvgProps } from '../../types';

const TelegramCircle: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.1882 8.09092L7.32866 11.3549C6.97213 11.5069 6.85155 11.8113 7.24249 11.9765L9.51534 12.6665L15.0108 9.42181C15.3109 9.21811 15.618 9.27242 15.3537 9.49651L10.6339 13.5793L10.4856 15.3071C10.6229 15.5739 10.8744 15.5751 11.0347 15.4425L12.3406 14.2621L14.577 15.862C15.0964 16.1558 15.3791 15.9662 15.4908 15.4278L16.9577 8.79183C17.11 8.12902 16.8503 7.83697 16.1882 8.09092Z'
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
const TelegramCircleSVG = memo(TelegramCircle);
export default TelegramCircleSVG;
