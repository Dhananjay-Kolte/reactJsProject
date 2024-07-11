import { FC, memo } from 'react';
import { ISvgProps } from './types';

const RightArrowSliderSVG: FC<ISvgProps> = ({
  width = '56',
  height = '56',
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 56 56'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle r='28' transform='matrix(-1 0 0 1 28 28)' fill='#121212' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M27.9129 20.5H30.4192L30.4942 20.91C30.8162 22.67 31.7395 24.0335 33.2251 25.0893C34.7665 26.1572 36.5296 26.7494 38.5278 26.8609L39 26.8872V29.074L38.5278 29.1003C36.5362 29.2114 34.7718 29.8391 33.2251 30.9107C31.7395 31.9664 30.8162 33.33 30.4942 35.09L30.4192 35.5H27.9129L28.0019 34.9237C28.3792 32.4782 29.7583 30.4725 31.8686 29.1399H17V26.8213H31.8911C29.8159 25.5017 28.3801 23.5273 28.0019 21.0763L27.9129 20.5Z'
      fill='currentColor'
    />
  </svg>
);
const RightArrowSlider = memo(RightArrowSliderSVG);
export default RightArrowSlider;
