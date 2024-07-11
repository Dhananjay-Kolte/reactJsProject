import { FC, memo } from 'react';
import { ISvgProps } from '../../types';

const FaceBook: FC<ISvgProps> = ({ width = '32', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 48 48'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='24' cy='24' r='24' fill='#282828' />
    <path
      d='M21.0633 36V24.7385H18V20.6838H21.0633V17.2206C21.0633 14.4992 22.8728 12 27.0423 12C28.7305 12 29.9788 12.1573 29.9788 12.1573L29.8805 15.9437C29.8805 15.9437 28.6074 15.9317 27.2181 15.9317C25.7145 15.9317 25.4737 16.6052 25.4737 17.7232V20.6838H30L29.8031 24.7385H25.4737V36H21.0633Z'
      fill='#DBDBDB'
    />
  </svg>
);
const FaceBookSVG = memo(FaceBook);
export default FaceBookSVG;
