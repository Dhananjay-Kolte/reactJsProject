import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Enter: FC<ISvgProps> = ({ width = '68', height = '68' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 68 68'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M42.9977 50.0002H47.3308C51.0067 50.0002 53.9973 47.0096 53.9973 43.3338V39.1219C55.3519 38.2457 57.8438 36.4627 60.3556 33.786C65.2359 28.5849 67.8783 22.4478 67.9965 16.0385C68.163 7.01824 60.6649 0.00195312 51.9973 0.00195312C43.3274 0.00195312 35.8316 7.02104 35.9983 16.0383C36.1166 22.4477 38.7588 28.5849 43.6392 33.7858C46.1509 36.4625 48.6429 38.2455 49.9976 39.1218V43.3336C49.9976 44.804 48.8013 46.0002 47.331 46.0002H42.9978C39.1382 46.0002 35.998 49.1404 35.998 53C35.998 56.8595 39.1382 59.9997 42.9978 59.9997H55.9972C57.1001 59.9997 57.9971 60.8967 57.9971 61.9996C57.9971 63.1024 57.1001 63.9996 55.9972 63.9996H13.9987C13.9987 63.9996 11.899 63.9985 11.8984 65.9995C11.8978 68.0005 13.9987 67.9994 13.9987 67.9994H55.9972C59.3056 67.9994 61.997 65.3079 61.997 61.9996C61.997 58.6912 59.3056 55.9998 55.9972 55.9998H42.9977C41.3436 55.9998 39.9978 54.654 39.9978 53C39.9978 51.346 41.3436 50.0002 42.9977 50.0002ZM45.9976 16.0014C45.9976 12.6878 48.6837 10.0016 51.9973 10.0016C55.311 10.0016 57.9971 12.6878 57.9971 16.0014C57.9971 19.315 55.311 22.0012 51.9973 22.0012C48.6837 22.0012 45.9976 19.3149 45.9976 16.0014Z'
      fill='#3D3D3D'
    />
    <path
      d='M25.786 33.6585L14.0004 27.7656L2.21484 33.6585L14.0004 39.75L25.786 33.6585Z'
      fill='#3D3D3D'
    />
    <path
      d='M16 57.2357L27.9996 51.2359V37.0156L16 43.2178V57.2357Z'
      fill='#3D3D3D'
    />
    <path
      d='M0 51.2359L11.9996 57.2357V43.2178L0 37.0156V51.2359Z'
      fill='#3D3D3D'
    />
  </svg>
);
const EnterSVG = memo(Enter);
export default EnterSVG;