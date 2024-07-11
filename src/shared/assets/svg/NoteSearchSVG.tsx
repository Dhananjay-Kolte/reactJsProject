import { FC, memo } from 'react';
import { ISvgProps } from './types';

const NoteSearch: FC<ISvgProps> = ({ width = '34', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 34 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M33.065 11.435C33.1999 11.5732 33.3069 11.7362 33.38 11.915C33.4556 12.101 33.4963 12.2993 33.5 12.5V36.5C33.5 37.2957 33.1839 38.0587 32.6213 38.6213C32.0587 39.1839 31.2957 39.5 30.5 39.5H3.5C2.70563 39.4966 1.94503 39.1784 1.385 38.615C0.821618 38.055 0.503349 37.2944 0.5 36.5V3.5C0.503349 2.70563 0.821618 1.94503 1.385 1.385C1.94503 0.821618 2.70563 0.503349 3.5 0.5H21.5C21.7007 0.503747 21.899 0.544426 22.085 0.62C22.2638 0.693115 22.4268 0.800073 22.565 0.935L33.065 11.435ZM28.385 11L23 5.615V11H28.385ZM3.5 3.5V36.5H30.5V14H21.5C21.1022 14 20.7206 13.842 20.4393 13.5607C20.158 13.2794 20 12.8978 20 12.5V3.5H3.5ZM22.9066 22.58C23.1835 24.2287 22.8429 25.9217 21.9499 27.3351L24.0199 29.4051C24.177 29.5396 24.3045 29.7051 24.3945 29.8912C24.4846 30.0773 24.5352 30.28 24.5431 30.4865C24.5511 30.6931 24.5163 30.8991 24.4409 31.0916C24.3655 31.2841 24.2511 31.4589 24.1049 31.6051C23.9587 31.7513 23.7839 31.8657 23.5914 31.9411C23.3989 32.0165 23.1929 32.0513 22.9864 32.0433C22.7798 32.0353 22.5771 31.9847 22.391 31.8947C22.2049 31.8047 22.0394 31.6771 21.9049 31.5201L19.8349 29.4501C18.4215 30.3431 16.7285 30.6837 15.0798 30.4068C13.431 30.1298 11.9422 29.2547 10.8982 27.9489C9.85418 26.6431 9.32822 24.9982 9.42092 23.3289C9.51363 21.6596 10.2185 20.0831 11.4007 18.9009C12.5829 17.7187 14.1594 17.0138 15.8287 16.9211C17.498 16.8284 19.1429 17.3544 20.4487 18.3984C21.7545 19.4424 22.6296 20.9312 22.9066 22.58ZM13.1319 21.6667C12.7199 22.2834 12.4999 23.0084 12.4999 23.7501C12.4999 24.7447 12.895 25.6985 13.5983 26.4018C14.3016 27.105 15.2554 27.5001 16.2499 27.5001C16.9916 27.5001 17.7166 27.2802 18.3333 26.8681C18.95 26.4561 19.4307 25.8704 19.7145 25.1852C19.9983 24.5 20.0726 23.746 19.9279 23.0185C19.7832 22.2911 19.426 21.6229 18.9016 21.0985C18.3771 20.574 17.709 20.2169 16.9815 20.0722C16.2541 19.9275 15.5001 20.0017 14.8149 20.2856C14.1297 20.5694 13.544 21.0501 13.1319 21.6667Z'
      fill='#595656'
    />
  </svg>
);
const NoteSearchSVG = memo(NoteSearch);
export default NoteSearchSVG;
