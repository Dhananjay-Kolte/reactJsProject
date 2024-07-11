import { FC, memo } from 'react';
import { ISvgProps } from './types';

const ErrorsInput: FC<ISvgProps> = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_300_768)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10 1.71429C5.42455 1.71429 1.71429 5.42456 1.71429 10C1.71429 14.5754 5.42455 18.2857 10 18.2857C14.5764 18.2857 18.2857 14.5755 18.2857 10C18.2857 5.4245 14.5764 1.71429 10 1.71429ZM0 10C0 4.47778 4.47778 0 10 0C15.5233 0 20 4.47784 20 10C20 15.5222 15.5233 20 10 20C4.47778 20 0 15.5222 0 10Z'
        fill='inherit'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.58709 5.58709C5.9532 5.22097 6.5468 5.22097 6.91291 5.58709L14.4129 13.0871C14.779 13.4532 14.779 14.0468 14.4129 14.4129C14.0468 14.779 13.4532 14.779 13.0871 14.4129L5.58709 6.91291C5.22097 6.5468 5.22097 5.9532 5.58709 5.58709Z'
        fill='inherit'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.4129 5.58709C14.779 5.9532 14.779 6.5468 14.4129 6.91291L6.91291 14.4129C6.5468 14.779 5.9532 14.779 5.58709 14.4129C5.22097 14.0468 5.22097 13.4532 5.58709 13.0871L13.0871 5.58709C13.4532 5.22097 14.0468 5.22097 14.4129 5.58709Z'
        fill='inherit'
      />
    </g>
    <defs>
      <clipPath id='clip0_300_768'>
        <rect width='20' height='20' fill='inherit' />
      </clipPath>
    </defs>
  </svg>
);
const ErrorsInputSVG = memo(ErrorsInput);
export default ErrorsInputSVG;
