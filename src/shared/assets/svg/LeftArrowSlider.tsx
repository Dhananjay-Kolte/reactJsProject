import { FC, memo } from 'react';
import { ISvgProps } from './types';

const LeftArrowSliderSVG: FC<ISvgProps> = ({ width = '56', height = '56' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 56 56'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='28' cy='28' r='28' fill='#121212' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M28.0871 20.5H25.5808L25.5058 20.91C25.1838 22.67 24.2605 24.0335 22.7749 25.0893C21.2335 26.1572 19.4704 26.7494 17.4722 26.8609L17 26.8872V29.074L17.4722 29.1003C19.4638 29.2114 21.2282 29.8391 22.7749 30.9107C24.2605 31.9664 25.1838 33.33 25.5058 35.09L25.5808 35.5H28.0871L27.9981 34.9237C27.6208 32.4782 26.2417 30.4725 24.1314 29.1399H39V26.8213H24.1089C26.1841 25.5017 27.6199 23.5273 27.9981 21.0763L28.0871 20.5Z'
      fill='currentColor'
    />
  </svg>
);
const LeftArrowSlider = memo(LeftArrowSliderSVG);
export default LeftArrowSlider;
